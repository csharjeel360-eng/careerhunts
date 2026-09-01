'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select } from '@/components/ui/select'
import { getJobBySlug, updateJob } from '@/lib/api'
import { useToast } from '@/components/ui/use-toast'
import { countries } from '@/lib/constants/countries'
import { jobCategories } from '@/lib/constants/categories'
import { Loader2 } from 'lucide-react'

const googleEmploymentTypes = ['FULL_TIME', 'PART_TIME', 'CONTRACTOR', 'TEMPORARY', 'INTERN', 'VOLUNTEER', 'PER_DIEM', 'OTHER'] as const
const googleSalaryPeriods = ['HOUR', 'DAY', 'WEEK', 'MONTH', 'YEAR'] as const
const googleExperienceLevels = ['Entry Level', 'Junior', 'Mid Level', 'Senior', 'Manager', 'Director', 'Not specified'] as const
const googleEducationLevelOptions = ['High School', 'Diploma', 'Associate Degree', "Bachelor's Degree", "Master's Degree", 'Doctorate', 'Professional Certification', 'Not specified'] as const
const googleApplicationMethods = ['company-website', 'email', 'careerhunt-application'] as const

const emptyString = z.string().optional().or(z.literal(''))

const jobSchema = z.object({
  title: z.string().min(2, 'Job title is required.'),
  companyName: z.string().min(2, 'Company name is required.'),
  companyWebsite: emptyString,
  companyLogo: emptyString,
  category: z.string().min(1, 'Category is required.'),
  country: z.string().min(1, 'Country is required.'),
  state: emptyString,
  city: z.string().min(1, 'City is required unless the job is remote worldwide.'),
  address: emptyString,
  postalCode: emptyString,
  employmentType: z.enum(googleEmploymentTypes),
  workMode: z.enum(['onsite', 'hybrid', 'remote']),
  salaryAvailable: z.enum(['yes', 'no', 'not-disclosed']),
  salaryMin: z.coerce.number().min(0).optional().or(z.literal('')),
  salaryMax: z.coerce.number().min(0).optional().or(z.literal('')),
  salaryCurrency: z.string().optional().or(z.literal('')),
  salaryPeriod: z.enum(googleSalaryPeriods).optional(),
  description: z.string().min(20, 'Job description is required.'),
  marketContext: emptyString,
  responsibilities: z.string().min(10, 'List at least one responsibility.'),
  requirements: z.string().min(10, 'List at least one requirement.'),
  qualifications: emptyString,
  preferredQualifications: emptyString,
  requiredSkills: z.string().min(2, 'Add at least one skill.'),
  benefits: emptyString,
  experienceRequired: emptyString,
  experienceLevel: z.enum(['entry-level', 'junior', 'mid-level', 'senior', 'manager', 'director', 'not-specified']),
  educationRequired: z.enum(['high-school', 'diploma', 'associate-degree', "bachelors", 'masters', 'doctorate', 'professional-certification', 'not-specified']),
  vacancies: z.coerce.number().int().min(1).optional().or(z.literal('')),
  applicationMethod: z.enum(googleApplicationMethods),
  applicationUrl: emptyString,
  applicationEmail: emptyString,
  whatsappNumber: emptyString,
  applicationDeadline: emptyString,
  jobReferenceNumber: emptyString,
  eligibleApplicantLocation: z.enum(['Worldwide', 'Specific Country', 'Specific Countries']).optional(),
  eligibleApplicantCountry: emptyString,
  eligibleApplicantCountries: emptyString,
  sourceWebsite: emptyString,
  sourceUrl: emptyString,
  sourceDate: emptyString,
  lastVerifiedAt: emptyString,
  companyDescription: emptyString,
  keywords: emptyString,
  tags: emptyString,
  isFeatured: z.boolean().optional(),
  isUrgent: z.boolean().optional(),
  postedDate: z.string().optional(),
  validThrough: emptyString,
})

type JobFormValues = z.infer<typeof jobSchema>

const toArray = (value: string) => value.split(/\n|,/).map((item) => item.trim()).filter(Boolean)

const normalizeEmploymentType = (value?: string) => {
  const raw = String(value || '').trim().toUpperCase().replace(/-/g, '_')
  if (googleEmploymentTypes.includes(raw as typeof googleEmploymentTypes[number])) return raw as typeof googleEmploymentTypes[number]

  const map: Record<string, typeof googleEmploymentTypes[number]> = {
    'FULL-TIME': 'FULL_TIME',
    'PART-TIME': 'PART_TIME',
    CONTRACT: 'CONTRACTOR',
    CONTRACTOR: 'CONTRACTOR',
    TEMPORARY: 'TEMPORARY',
    'INTERNSHIP': 'INTERN',
    INTERN: 'INTERN',
    VOLUNTEER: 'VOLUNTEER',
    'PER-DIEM': 'PER_DIEM',
    'PER_DIEM': 'PER_DIEM',
    OTHER: 'OTHER',
  }

  return map[raw] || 'FULL_TIME'
}

const normalizeExperienceLevel = (value?: string) => {
  const raw = String(value || '').trim().toLowerCase()
  const map: Record<string, JobFormValues['experienceLevel']> = {
    entry: 'entry-level',
    'entry-level': 'entry-level',
    junior: 'junior',
    mid: 'mid-level',
    'mid-level': 'mid-level',
    senior: 'senior',
    manager: 'manager',
    director: 'director',
    'not-specified': 'not-specified',
    'not specified': 'not-specified',
  }

  return map[raw] || 'mid-level'
}

const normalizeEducationLevel = (value?: string) => {
  const raw = String(value || '').trim().toLowerCase().replace(/_/g, '-')
  const map: Record<string, JobFormValues['educationRequired']> = {
    'high-school': 'high-school',
    'high school': 'high-school',
    diploma: 'diploma',
    'associate-degree': 'associate-degree',
    'associate degree': 'associate-degree',
    bachelors: 'bachelors',
    "bachelor's degree": 'bachelors',
    "bachelor degree": 'bachelors',
    masters: 'masters',
    "master's degree": 'masters',
    doctorate: 'doctorate',
    'professional-certification': 'professional-certification',
    'professional certification': 'professional-certification',
    'not-specified': 'not-specified',
    'not specified': 'not-specified',
  }

  return map[raw] || 'bachelors'
}

const normalizeSalaryPeriod = (value?: string) => {
  const raw = String(value || '').trim().toUpperCase()
  if (googleSalaryPeriods.includes(raw as typeof googleSalaryPeriods[number])) return raw as typeof googleSalaryPeriods[number]

  const map: Record<string, typeof googleSalaryPeriods[number]> = {
    HOUR: 'HOUR',
    DAY: 'DAY',
    WEEK: 'WEEK',
    MONTH: 'MONTH',
    YEAR: 'YEAR',
  }

  return map[raw] || 'YEAR'
}

export default function EmployerEditJobPage() {
  const params = useParams()
  const slug = Array.isArray(params?.slug) ? params.slug[0] : params?.slug ?? ''
  const router = useRouter()
  const { toast } = useToast()
  const [jobId, setJobId] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<JobFormValues>({
    resolver: zodResolver(jobSchema),
    defaultValues: {
      title: '',
      companyName: '',
      companyWebsite: '',
      companyLogo: '',
      category: '',
      country: 'United Arab Emirates',
      state: '',
      city: '',
      address: '',
      postalCode: '',
      employmentType: 'FULL_TIME',
      workMode: 'onsite',
      salaryAvailable: 'not-disclosed',
      salaryMin: '',
      salaryMax: '',
      salaryCurrency: 'AED',
      salaryPeriod: 'YEAR',
      description: '',
      marketContext: '',
      responsibilities: '',
      requirements: '',
      qualifications: '',
      preferredQualifications: '',
      requiredSkills: '',
      benefits: '',
      experienceRequired: '',
      experienceLevel: 'mid-level',
      educationRequired: 'bachelors',
      vacancies: 1,
      applicationMethod: 'company-website',
      applicationUrl: '',
      applicationEmail: '',
      whatsappNumber: '',
      applicationDeadline: '',
      jobReferenceNumber: '',
      eligibleApplicantLocation: 'Specific Country',
      eligibleApplicantCountry: '',
      eligibleApplicantCountries: '',
      sourceWebsite: '',
      sourceUrl: '',
      sourceDate: '',
      lastVerifiedAt: '',
      companyDescription: '',
      keywords: '',
      tags: '',
      isFeatured: false,
      isUrgent: false,
      postedDate: '',
      validThrough: '',
    },
  })

  const selectedWorkMode = watch('workMode')
  const selectedApplicationMethod = watch('applicationMethod')
  const selectedSalaryAvailable = watch('salaryAvailable')

  useEffect(() => {
    async function loadData() {
      try {
        if (!slug) {
          setIsLoading(false)
          return
        }

        const job = await getJobBySlug(slug)
        if (!job) {
          toast({ variant: 'destructive', title: 'Job not found', description: 'The job you are trying to edit was not found.' })
          router.push('/employer/jobs')
          return
        }

        setJobId(job._id)

        reset({
          title: job.title || '',
          companyName: job.companyName || job.companyId?.name || '',
          companyWebsite: job.companyWebsite || job.companyId?.website || '',
          companyLogo: job.companyLogo || '',
          category: job.category || '',
          country: job.country || 'United Arab Emirates',
          state: job.state || '',
          city: job.city || '',
          address: job.address || '',
          postalCode: job.postalCode || '',
          employmentType: normalizeEmploymentType(job.employmentType),
          workMode: job.workMode || 'onsite',
          salaryAvailable: job.salaryAvailable || 'not-disclosed',
          salaryMin: job.salaryMin ?? '',
          salaryMax: job.salaryMax ?? '',
          salaryCurrency: job.salaryCurrency || 'AED',
          salaryPeriod: normalizeSalaryPeriod(job.salaryPeriod),
          description: job.description || job.summary || '',
          marketContext: job.marketContext || '',
          responsibilities: Array.isArray(job.responsibilities) ? job.responsibilities.join('\n') : '',
          requirements: Array.isArray(job.requirements) ? job.requirements.join('\n') : '',
          qualifications: Array.isArray(job.qualifications)
            ? job.qualifications.join('\n')
            : Array.isArray(job.requiredQualifications)
              ? job.requiredQualifications.join('\n')
              : Array.isArray(job.requirements)
                ? job.requirements.join('\n')
                : '',
          preferredQualifications: Array.isArray(job.preferredQualifications) ? job.preferredQualifications.join('\n') : '',
          requiredSkills: Array.isArray(job.requiredSkills) ? job.requiredSkills.join(', ') : Array.isArray(job.skills) ? job.skills.join(', ') : '',
          benefits: Array.isArray(job.benefits) ? job.benefits.join('\n') : '',
          experienceRequired: job.experienceRequired || '',
          experienceLevel: normalizeExperienceLevel(job.experienceLevel),
          educationRequired: normalizeEducationLevel(job.educationLevel || job.educationRequired),
          vacancies: job.vacancies ?? 1,
          applicationMethod: job.applicationMethod || 'company-website',
          applicationUrl: job.applicationUrl || '',
          applicationEmail: job.applicationEmail || '',
          whatsappNumber: job.whatsappNumber || '',
          applicationDeadline: job.applicationDeadline ? new Date(job.applicationDeadline).toISOString().slice(0, 10) : '',
          jobReferenceNumber: job.jobReferenceNumber || '',
          eligibleApplicantLocation: job.eligibleApplicantLocation === 'Worldwide' || job.eligibleApplicantLocation === 'Specific Country' || job.eligibleApplicantLocation === 'Specific Countries' ? job.eligibleApplicantLocation : 'Specific Country',
          eligibleApplicantCountry: job.eligibleApplicantCountry || '',
          eligibleApplicantCountries: job.eligibleApplicantCountries || '',
          sourceWebsite: job.sourceWebsite || '',
          sourceUrl: job.sourceUrl || '',
          sourceDate: job.sourceDate ? new Date(job.sourceDate).toISOString().slice(0, 10) : '',
          lastVerifiedAt: job.lastVerifiedAt ? new Date(job.lastVerifiedAt).toISOString().slice(0, 10) : '',
          companyDescription: job.companyDescription || '',
          keywords: Array.isArray(job.keywords) ? job.keywords.join(', ') : '',
          tags: Array.isArray(job.tags) ? job.tags.join(', ') : '',
          isFeatured: Boolean(job.isFeatured),
          isUrgent: Boolean(job.isUrgent),
          postedDate: job.postedDate ? new Date(job.postedDate).toISOString().slice(0, 10) : '',
          validThrough: job.validThrough ? new Date(job.validThrough).toISOString().slice(0, 10) : '',
        })
      } catch (error: any) {
        console.error(error)
        toast({ variant: 'destructive', title: 'Unable to load job', description: error.message || 'Please try again later.' })
      } finally {
        setIsLoading(false)
      }
    }

    void loadData()
  }, [slug, reset, router, toast])

  const onSubmit = async (data: JobFormValues) => {
    if (!jobId) return

    setIsSubmitting(true)

    try {
      const salaryAvailable = data.salaryAvailable
      const salaryMin = salaryAvailable === 'yes' ? Number(data.salaryMin || 0) : 0
      const salaryMax = salaryAvailable === 'yes' ? Number(data.salaryMax || 0) : 0
      const salaryCurrency = salaryAvailable === 'yes' ? (data.salaryCurrency || 'AED') : 'AED'
      const workModeValue = data.workMode
      const normalizedCity = workModeValue === 'remote' ? '' : data.city
      const eligibleApplicantLocationValue = workModeValue === 'remote'
        ? (data.eligibleApplicantLocation === 'Worldwide' ? 'Worldwide' : data.eligibleApplicantCountry || data.eligibleApplicantCountries || data.country)
        : data.country

      await updateJob(jobId, {
        title: data.title,
        companyName: data.companyName,
        companyWebsite: data.companyWebsite,
        companyLogo: data.companyLogo,
        category: data.category,
        employmentType: data.employmentType,
        workMode: workModeValue,
        country: data.country,
        state: data.state,
        city: normalizedCity,
        address: data.address,
        postalCode: data.postalCode,
        location: data.address || data.city || data.country,
        salaryAvailable,
        salaryMin,
        salaryMax,
        salaryCurrency,
        salaryPeriod: data.salaryPeriod || 'YEAR',
        description: data.description,
        marketContext: data.marketContext,
        summary: data.description,
        responsibilities: toArray(data.responsibilities),
        requirements: toArray(data.requirements),
        qualifications: toArray(data.qualifications || data.requirements || ''),
        requiredQualifications: toArray(data.qualifications || data.requirements || ''),
        preferredQualifications: toArray(data.preferredQualifications || ''),
        requiredSkills: toArray(data.requiredSkills),
        skills: toArray(data.requiredSkills),
        benefits: toArray(data.benefits || ''),
        experienceRequired: data.experienceRequired,
        experienceLevel: data.experienceLevel,
        educationRequired: data.educationRequired,
        educationLevel: data.educationRequired,
        vacancies: Number(data.vacancies || 1),
        applicationMethod: data.applicationMethod,
        applicationUrl: data.applicationUrl,
        applicationEmail: data.applicationEmail,
        whatsappNumber: data.whatsappNumber,
        applicationDeadline: data.applicationDeadline ? new Date(data.applicationDeadline) : undefined,
        validThrough: data.validThrough ? new Date(data.validThrough) : undefined,
        companyDescription: data.companyDescription,
        eligibleApplicantLocation: eligibleApplicantLocationValue,
        jobReferenceNumber: data.jobReferenceNumber,
        sourceWebsite: data.sourceWebsite,
        sourceUrl: data.sourceUrl,
        sourceDate: data.sourceDate ? new Date(data.sourceDate) : undefined,
        lastVerifiedAt: data.lastVerifiedAt ? new Date(data.lastVerifiedAt) : undefined,
        keywords: toArray(data.keywords || ''),
        tags: toArray(data.tags || ''),
        isFeatured: Boolean(data.isFeatured),
        isUrgent: Boolean(data.isUrgent),
        postedDate: data.postedDate ? new Date(data.postedDate) : undefined,
      })

      toast({ title: 'Job updated', description: 'The job was updated successfully.' })
      router.push('/employer/jobs')
    } catch (error: any) {
      toast({ variant: 'destructive', title: 'Failed to update job', description: error.message || 'Please try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isLoading) {
    return (
      <div className="container mx-auto max-w-6xl p-4">
        <div className="flex items-center gap-3 text-sm text-slate-600">
          <Loader2 className="h-4 w-4 animate-spin" />
          Loading job data…
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto max-w-6xl p-4 space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-slate-900">Edit Job Posting</h1>
        <p className="text-sm text-slate-600">Update the verified job information and save the changes.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>1. Job Information</CardTitle>
        </CardHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <CardContent className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="title">Job Title *</Label>
                <Input id="title" placeholder="Senior Accountant" {...register('title')} />
                {errors.title && <p className="text-sm text-red-600">{errors.title.message}</p>}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Job Description *</Label>
              <Textarea id="description" rows={8} placeholder="Add the full original job description here." {...register('description')} />
              {errors.description && <p className="text-sm text-red-600">{errors.description.message}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="marketContext">Market Context</Label>
              <Textarea
                id="marketContext"
                rows={4}
                placeholder="E.g. Hiring for Dubai-based fintech growth team."
                {...register('marketContext')}
              />
              <p className="text-xs text-slate-500">Optional context about the role, market, or hiring strategy.</p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="space-y-2">
                <Label htmlFor="employmentType">Employment Type *</Label>
                <Select id="employmentType" {...register('employmentType')}>
                  {googleEmploymentTypes.map((type) => (
                    <option key={type} value={type}>{type.replace(/_/g, ' ')}</option>
                  ))}
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="workMode">Work Arrangement *</Label>
                <Select id="workMode" {...register('workMode')}>
                  <option value="onsite">On-site</option>
                  <option value="hybrid">Hybrid</option>
                  <option value="remote">Remote</option>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="category">Category *</Label>
                <Select id="category" {...register('category')}>
                  <option value="">Select category</option>
                  {jobCategories.map((cat) => <option key={cat} value={cat}>{cat}</option>)}
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-slate-900">2. Company Information</h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="companyName">Company Name *</Label>
                <Input id="companyName" placeholder="Acme Studio" {...register('companyName')} />
                {errors.companyName && <p className="text-sm text-red-600">{errors.companyName.message}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="companyWebsite">Company Website</Label>
                <Input id="companyWebsite" placeholder="https://example.com" {...register('companyWebsite')} />
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="companyLogo">Company Logo URL</Label>
                <Input id="companyLogo" placeholder="https://example.com/logo.png" {...register('companyLogo')} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="companyDescription">Company Description</Label>
                <Textarea id="companyDescription" rows={3} placeholder="Optional company summary." {...register('companyDescription')} />
              </div>
            </div>

            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-slate-900">3. Job Location</h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <div className="space-y-2">
                <Label htmlFor="country">Country *</Label>
                <Select id="country" {...register('country')}>
                  <option value="">Select country</option>
                  {countries.map((country) => <option key={country} value={country}>{country}</option>)}
                </Select>
                {errors.country && <p className="text-sm text-red-600">{errors.country.message}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="state">State / Province</Label>
                <Input id="state" placeholder="Dubai" {...register('state')} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="city">City *</Label>
                <Input id="city" placeholder="Dubai" {...register('city')} />
                {selectedWorkMode === 'remote' && <p className="text-xs text-slate-500">Leave blank if the role is remote worldwide.</p>}
                {errors.city && <p className="text-sm text-red-600">{errors.city.message}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="postalCode">Postal Code</Label>
                <Input id="postalCode" placeholder="00000" {...register('postalCode')} />
              </div>
            </div>

            {selectedWorkMode !== 'remote' && (
              <div className="space-y-2">
                <Label htmlFor="address">Street Address</Label>
                <Input id="address" placeholder="123 Business Bay, Dubai" {...register('address')} />
              </div>
            )}

            {selectedWorkMode === 'remote' && (
              <div className="space-y-4 rounded-xl border border-slate-200 bg-slate-50 p-4">
                <div className="space-y-2">
                  <Label htmlFor="eligibleApplicantLocation">Eligible Applicant Location *</Label>
                  <Select id="eligibleApplicantLocation" {...register('eligibleApplicantLocation')}>
                    <option value="Worldwide">Worldwide</option>
                    <option value="Specific Country">Specific Country</option>
                    <option value="Specific Countries">Specific Countries</option>
                  </Select>
                </div>
                {watch('eligibleApplicantLocation') !== 'Worldwide' && (
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="eligibleApplicantCountry">Country</Label>
                      <Select id="eligibleApplicantCountry" {...register('eligibleApplicantCountry')}>
                        <option value="">Select country</option>
                        {countries.map((country) => <option key={country} value={country}>{country}</option>)}
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="eligibleApplicantCountries">Countries (optional)</Label>
                      <Input id="eligibleApplicantCountries" placeholder="USA, UAE, UK" {...register('eligibleApplicantCountries')} />
                    </div>
                  </div>
                )}
              </div>
            )}

            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-slate-900">4. Salary</h2>
            </div>

            <div className="grid gap-4 md:grid-cols-4">
              <div className="space-y-2">
                <Label htmlFor="salaryAvailable">Salary Available? *</Label>
                <Select id="salaryAvailable" {...register('salaryAvailable')}>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                  <option value="not-disclosed">Not disclosed</option>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="salaryMin">Minimum Salary</Label>
                <Input id="salaryMin" type="number" min={0} {...register('salaryMin')} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="salaryMax">Maximum Salary</Label>
                <Input id="salaryMax" type="number" min={0} {...register('salaryMax')} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="salaryCurrency">Currency</Label>
                <Input id="salaryCurrency" placeholder="AED" {...register('salaryCurrency')} />
              </div>
            </div>

            {selectedSalaryAvailable === 'yes' && (
              <div className="space-y-2">
                <Label htmlFor="salaryPeriod">Salary Period</Label>
                <Select id="salaryPeriod" {...register('salaryPeriod')}>
                  {googleSalaryPeriods.map((period) => <option key={period} value={period}>{period}</option>)}
                </Select>
              </div>
            )}

            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-slate-900">5. Experience</h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="experienceRequired">Experience Required</Label>
                <Input id="experienceRequired" placeholder="2–4 years" {...register('experienceRequired')} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="experienceLevel">Experience Level</Label>
                <Select id="experienceLevel" {...register('experienceLevel')}>
                  {googleExperienceLevels.map((level) => (
                    <option key={level} value={level.toLowerCase().replace(/\s+/g, '-').replace(/-+$/, '') === 'not-specified' ? 'not-specified' : level.toLowerCase().replace(/\s+/g, '-')}>{level}</option>
                  ))}
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-slate-900">6. Education</h2>
            </div>

            <div className="space-y-2">
              <Label htmlFor="educationRequired">Education Required</Label>
              <Select id="educationRequired" {...register('educationRequired')}>
                {googleEducationLevelOptions.map((option) => (
                  <option key={option} value={option.toLowerCase().replace(/[^a-z]+/g, '-').replace(/-+$/, '') === 'not-specified' ? 'not-specified' : option.toLowerCase().replace(/[^a-z]+/g, '-').replace(/-+$/, '')}>{option}</option>
                ))}
              </Select>
            </div>

            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-slate-900">7. Skills</h2>
            </div>

            <div className="space-y-2">
              <Label htmlFor="requiredSkills">Required Skills</Label>
              <Textarea id="requiredSkills" rows={4} placeholder="Excel
Accounting
Financial Reporting
Communication" {...register('requiredSkills')} />
            </div>

            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-slate-900">8. Responsibilities</h2>
            </div>

            <div className="space-y-2">
              <Label htmlFor="responsibilities">Key Responsibilities</Label>
              <Textarea id="responsibilities" rows={6} placeholder="Prepare financial reports
Maintain accounting records
Reconcile accounts" {...register('responsibilities')} />
            </div>

            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-slate-900">9. Qualifications</h2>
            </div>

            <div className="space-y-2">
              <Label htmlFor="qualifications">Required Qualifications</Label>
              <Textarea id="qualifications" rows={6} placeholder="Bachelor's degree in accounting
At least 2 years experience
Strong analytical skills" {...register('qualifications')} />
            </div>

            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-slate-900">10. Benefits</h2>
            </div>

            <div className="space-y-2">
              <Label htmlFor="benefits">Benefits</Label>
              <Textarea id="benefits" rows={4} placeholder="Health insurance
Annual leave
Transport allowance" {...register('benefits')} />
            </div>

            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-slate-900">11. Application</h2>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="applicationMethod">Primary Application Method</Label>
                <Select id="applicationMethod" {...register('applicationMethod')}>
                  <option value="company-website">Company Website</option>
                  <option value="email">Email</option>
                  <option value="careerhunt-application">CareerHunt Application</option>
                </Select>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                <div className="space-y-2">
                  <Label htmlFor="applicationUrl">Application URL</Label>
                  <Input id="applicationUrl" placeholder="https://company.com/careers" {...register('applicationUrl')} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="applicationEmail">Application Email</Label>
                  <Input id="applicationEmail" type="email" placeholder="recruitment@company.com" {...register('applicationEmail')} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="whatsappNumber">WhatsApp URL / Number</Label>
                  <Input id="whatsappNumber" placeholder="https://wa.me/971500000000 or +971500000000" {...register('whatsappNumber')} />
                </div>
              </div>

              <p className="text-xs text-slate-500">Add any of the contact methods that apply. Applicants can use the website, email, and WhatsApp link together.</p>
            </div>

            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-slate-900">12. Dates and Vacancy</h2>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="space-y-2">
                <Label htmlFor="postedDate">Date Posted</Label>
                <Input id="postedDate" type="date" {...register('postedDate')} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="applicationDeadline">Application Deadline / Expiry Date</Label>
                <Input id="applicationDeadline" type="date" {...register('applicationDeadline')} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="vacancies">Number of Open Positions</Label>
                <Input id="vacancies" type="number" min={1} {...register('vacancies')} />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="jobReferenceNumber">Job Reference Number</Label>
              <Input id="jobReferenceNumber" placeholder="REF-2045" {...register('jobReferenceNumber')} />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex items-center gap-3">
                <input id="isFeatured" type="checkbox" {...register('isFeatured')} className="h-4 w-4" />
                <Label htmlFor="isFeatured">Featured Job</Label>
              </div>
              <div className="flex items-center gap-3">
                <input id="isUrgent" type="checkbox" {...register('isUrgent')} className="h-4 w-4" />
                <Label htmlFor="isUrgent">Urgent Hiring</Label>
              </div>
            </div>

            {isSubmitting && (
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <div className="flex items-center gap-3 text-sm text-slate-700">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>Updating the job listing and saving the changes.</span>
                </div>
              </div>
            )}

            <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
              <Button type="button" variant="outline" onClick={() => router.push('/employer/jobs')}>
                Cancel
              </Button>
              <Button type="submit" className="sm:w-auto" disabled={isSubmitting}>
                {isSubmitting ? 'Saving...' : 'Save Changes'}
              </Button>
            </div>
          </CardContent>
        </form>
      </Card>
    </div>
  )
}
