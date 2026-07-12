"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLiveJobs = void 0;
const fs_1 = require("fs");
const path_1 = __importDefault(require("path"));
const UAE_COMPANY_TOKENS = ['careem', 'talabat', 'propertyfinder'];
const parseEnvFile = () => {
    if (typeof window !== 'undefined') {
        return {};
    }
    const envFiles = ['.env.local', '.env'];
    const envValues = {};
    for (const fileName of envFiles) {
        try {
            const envPath = path_1.default.resolve(process.cwd(), fileName);
            const content = (0, fs_1.readFileSync)(envPath, 'utf8');
            for (const line of content.split(/\r?\n/)) {
                if (!line || line.startsWith('#'))
                    continue;
                const separatorIndex = line.indexOf('=');
                if (separatorIndex === -1)
                    continue;
                const key = line.slice(0, separatorIndex).trim();
                let value = line.slice(separatorIndex + 1).trim();
                if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
                    value = value.slice(1, -1);
                }
                envValues[key] = value;
            }
        }
        catch {
            // Ignore missing env files; process.env will be used when available.
        }
    }
    return envValues;
};
const runtimeEnv = parseEnvFile();
const getEnvValue = (key) => {
    const fromProcess = process.env[key];
    if (fromProcess && fromProcess.trim()) {
        return fromProcess.trim();
    }
    const fromFile = runtimeEnv[key];
    if (fromFile && fromFile.trim()) {
        return fromFile.trim();
    }
    return '';
};
const normalizeText = (value) => {
    if (typeof value !== 'string')
        return '';
    return value.trim();
};
const normalizeLocation = (value) => {
    if (typeof value === 'string')
        return value.trim();
    if (typeof value === 'object' && value && 'name' in value && typeof value.name === 'string') {
        return value.name.trim();
    }
    return '';
};
const dedupeJobs = (jobs) => {
    const seen = new Set();
    const uniqueJobs = [];
    for (const job of jobs) {
        const key = `${job.title.toLowerCase()}::${job.company.toLowerCase()}::${job.location.toLowerCase()}`;
        if (!seen.has(key)) {
            seen.add(key);
            uniqueJobs.push(job);
        }
    }
    return uniqueJobs.sort((a, b) => {
        const aTime = new Date(a.postedDate).getTime();
        const bTime = new Date(b.postedDate).getTime();
        return (Number.isNaN(bTime) ? 0 : bTime) - (Number.isNaN(aTime) ? 0 : aTime);
    });
};
const fetchJson = async (url, init) => {
    try {
        const response = await fetch(url, init);
        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
        }
        return (await response.json());
    }
    catch (error) {
        console.error(`Live jobs fetch failed for ${url}:`, error);
        return null;
    }
};
const fetchUsaJobs = async () => {
    const apiKey = getEnvValue('USAJOBS_API_KEY');
    const userAgent = getEnvValue('USAJOBS_USER_AGENT') || getEnvValue('NEXT_PUBLIC_CONTACT_EMAIL') || 'careers@careerhunt.com';
    if (!apiKey) {
        return [];
    }
    const payload = await fetchJson('https://data.usajobs.gov/api/search?ResultsPerPage=10', {
        headers: {
            'Authorization-Key': apiKey,
            'User-Agent': userAgent,
        },
        cache: 'no-store',
        next: { revalidate: 0 },
    });
    if (!payload?.SearchResult?.SearchResultItems) {
        return [];
    }
    return payload.SearchResult.SearchResultItems
        .map((entry) => entry?.MatchedObjectDescriptor)
        .filter(Boolean)
        .map((job) => {
        const location = normalizeText(job.PositionLocationDisplay) ||
            (Array.isArray(job.PositionLocation)
                ? job.PositionLocation.map((item) => normalizeText(item?.LocationName)).filter(Boolean).join(', ')
                : '') ||
            'United States';
        return {
            id: `usajobs-${job.PositionID || job.PositionURI || job.PositionTitle}`,
            title: normalizeText(job.PositionTitle) || 'Untitled role',
            company: normalizeText(job.OrganizationName) || 'USAJOBS',
            location,
            postedDate: normalizeText(job.PublicationStartDate) || normalizeText(job.PositionStartDate) || new Date().toISOString(),
            applyUrl: normalizeText(job.PositionURI) || '',
            salary: job.PositionRemuneration?.[0]
                ? `${job.PositionRemuneration[0].MinimumRange || ''}${job.PositionRemuneration[0].MaximumRange ? ` - ${job.PositionRemuneration[0].MaximumRange}` : ''}`.trim()
                : undefined,
            source: 'USAJOBS',
        };
    });
};
const fetchGreenhouseJobs = async (companyToken) => {
    const payload = await fetchJson(`https://boards-api.greenhouse.io/v1/boards/${companyToken}/jobs`, {
        cache: 'no-store',
        next: { revalidate: 0 },
    });
    if (!payload?.jobs) {
        return [];
    }
    return payload.jobs.map((job) => ({
        id: `greenhouse-${companyToken}-${job.id || job.title}`,
        title: normalizeText(job.title) || 'Untitled role',
        company: normalizeText(job.company_name) || companyToken,
        location: normalizeLocation(job.location?.name) || normalizeText(job.location) || normalizeLocation(job.offices?.[0]?.location) || 'UAE',
        postedDate: normalizeText(job.updated_at) || normalizeText(job.published_at) || new Date().toISOString(),
        applyUrl: normalizeText(job.absolute_url) || '',
        source: 'Greenhouse',
    }));
};
const fetchLeverJobs = async (companyToken) => {
    const payload = await fetchJson(`https://api.lever.co/v0/postings/${companyToken}?mode=json`, {
        cache: 'no-store',
        next: { revalidate: 0 },
    });
    if (!Array.isArray(payload)) {
        return [];
    }
    return payload.map((job) => ({
        id: `lever-${companyToken}-${job.id || job.text}`,
        title: normalizeText(job.text) || 'Untitled role',
        company: normalizeText(job.company) || companyToken,
        location: normalizeLocation(job.categories?.location) || normalizeText(job.location) || 'UAE',
        postedDate: normalizeText(job.createdAt) || new Date().toISOString(),
        applyUrl: normalizeText(job.urls?.apply) || normalizeText(job.applyUrl) || '',
        source: 'Lever',
    }));
};
const getLiveJobs = async () => {
    const [usaJobsResult, uaeJobsResults] = await Promise.allSettled([
        fetchUsaJobs(),
        Promise.all(UAE_COMPANY_TOKENS.flatMap(async (token) => {
            const [greenhouseJobs, leverJobs] = await Promise.allSettled([
                fetchGreenhouseJobs(token),
                fetchLeverJobs(token),
            ]);
            return [
                greenhouseJobs.status === 'fulfilled' ? greenhouseJobs.value : [],
                leverJobs.status === 'fulfilled' ? leverJobs.value : [],
            ].flat();
        })),
    ]);
    const jobs = [];
    if (usaJobsResult.status === 'fulfilled') {
        jobs.push(...usaJobsResult.value);
    }
    if (uaeJobsResults.status === 'fulfilled') {
        jobs.push(...uaeJobsResults.value.flat());
    }
    return dedupeJobs(jobs).slice(0, 12);
};
exports.getLiveJobs = getLiveJobs;
