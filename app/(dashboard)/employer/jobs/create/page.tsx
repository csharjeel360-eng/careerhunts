'use client'

import type { Metadata } from 'next'
import { getNoIndexMetadata } from '@/lib/seo'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select } from '@/components/ui/select'
import { createJob } from '@/lib/api'
import { useToast } from '@/components/ui/use-toast'
import { countries } from '@/lib/constants/countries'
import { jobCategories } from '@/lib/constants/categories'
import { Loader2 } from 'lucide-react'

const jobSchema = z.object({
  title: z.string().min(5),
  companyWebsite: z.string().url().or(z.literal('')).optional(),
  category: z.string().min(1),
  employmentType: z.enum(['full-time', 'part-time', 'contract', 'internship', 'freelance']),
  workMode: z.enum(['remote', 'onsite', 'hybrid']),
  country: z.string().min(1),
  city: z.string().optional(),
  location: z.string().min(2),
  salaryMin: z.number().int().min(0),
  salaryMax: z.number().int().min(0),
  salaryCurrency: z.string().min(1),
  summary: z.string().min(10),
  responsibilities: z.string().min(10),
  requirements: z.string().min(10),
  preferredQualifications: z.string().optional(),
  requiredSkills: z.string().min(2),
  benefits: z.string().optional(),
  experienceLevel: z.enum(['entry', 'junior', 'mid', 'senior', 'lead', 'executive']),
  educationLevel: z.enum(['high-school', 'bachelors', 'masters', 'phd']),
  vacancies: z.number().int().min(1),
  applicationEmail: z.string().email().or(z.literal('')).optional(),
  applicationUrl: z.string().url().or(z.literal('')).optional(),
  applicationDeadline: z.string().optional(),
  companyDescription: z.string().optional(),
  keywords: z.string().optional(),
  tags: z.string().optional(),
  isFeatured: z.boolean().optional(),
  isUrgent: z.boolean().optional(),
  postedDate: z.string().optional(),
  expiryDate: z.string().optional(),
})

type JobFormValues = z.infer<typeof jobSchema>

export default function EmployerCreateJobPage() {
  const router = useRouter()
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<JobFormValues>({
    resolver: zodResolver(jobSchema),
    defaultValues: {
      title: '',
      companyWebsite: '',
      category: '',
      employmentType: 'full-time',
      workMode: 'remote',
      country: '',
      city: '',
      location: '',
      salaryMin: 0,
      salaryMax: 0,
      salaryCurrency: 'USD',
      summary: '',
      responsibilities: '',
      requirements: '',
      preferredQualifications: '',
      requiredSkills: '',
      benefits: '',
      experienceLevel: 'mid',
      educationLevel: 'bachelors',
      vacancies: 1,
      applicationEmail: '',
      applicationUrl: '',
      applicationDeadline: '',
      companyDescription: '',
      keywords: '',
      tags: '',
      isFeatured: false,
      isUrgent: false,
      postedDate: new Date().toISOString(),
      expiryDate: '',
    },
  })

  const onSubmit = async (data: JobFormValues) => {
    setIsSubmitting(true)
    try {
      await createJob({
        title: data.title,
        companyWebsite: data.companyWebsite,
        category: data.category,
        employmentType: data.employmentType,
        workMode: data.workMode,
        country: data.country,
        city: data.city,
        location: data.location,
        salaryMin: data.salaryMin,
        salaryMax: data.salaryMax,
        salaryCurrency: data.salaryCurrency,
        summary: data.summary,
        description: data.summary,
        responsibilities: data.responsibilities.split('\n').map((item) => item.trim()).filter(Boolean),
        requirements: data.requirements.split('\n').map((item) => item.trim()).filter(Boolean),
        preferredQualifications: data.preferredQualifications.split('\n').map((item) => item.trim()).filter(Boolean),
        requiredSkills: data.requiredSkills.split(',').map((item) => item.trim()).filter(Boolean),
        benefits: data.benefits.split('\n').map((item) => item.trim()).filter(Boolean),
        experienceLevel: data.experienceLevel,
        educationLevel: data.educationLevel,
        vacancies: data.vacancies,
        applicationEmail: data.applicationEmail,
        applicationUrl: data.applicationUrl,
        applicationDeadline: data.applicationDeadline ? new Date(data.applicationDeadline) : undefined,
        companyDescription: data.companyDescription,
        keywords: data.keywords.split(',').map((item) => item.trim()).filter(Boolean),
        tags: data.tags.split(',').map((item) => item.trim()).filter(Boolean),
        isFeatured: data.isFeatured,
        isUrgent: data.isUrgent,
        postedDate: data.postedDate ? new Date(data.postedDate) : new Date(),
        expiryDate: data.expiryDate ? new Date(data.expiryDate) : undefined,
      })
      toast({ title: 'Job posted', description: 'The job was added successfully.' })
      router.push('/employer')
    } catch (error: any) {
      toast({ variant: 'destructive', title: 'Failed to create job', description: error.message || 'Please try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container mx-auto p-4 space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold">Create Job Posting</h1>
          <p className="text-sm text-slate-500">Fill in the fields below to publish a new job listing.</p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Job Details</CardTitle>
        </CardHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <CardContent className="grid gap-6">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="title">Job Title</Label>
                <Input id="title" placeholder="Senior Software Engineer" {...register('title')} />
                {errors.title && <p className="text-sm text-destructive">{errors.title.message}</p>}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="companyWebsite">Company Website</Label>
              <Input id="companyWebsite" placeholder="https://acme.com" {...register('companyWebsite')} />
              {errors.companyWebsite && <p className="text-sm text-destructive">{errors.companyWebsite.message}</p>}
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="space-y-2">
                <Label htmlFor="category">Job Category</Label>
                <Select id="category" {...register('category')}>
                  <option value="">Select category</option>
                  {jobCategories.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </Select>
                {errors.category && <p className="text-sm text-destructive">{errors.category.message}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="employmentType">Employment Type</Label>
                <Select id="employmentType" {...register('employmentType')}>
                  <option value="full-time">Full-time</option>
                  <option value="part-time">Part-time</option>
                  <option value="contract">Contract</option>
                  <option value="internship">Internship</option>
                  <option value="freelance">Freelance</option>
                </Select>
                {errors.employmentType && <p className="text-sm text-destructive">{errors.employmentType.message}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="workMode">Work Mode</Label>
                <Select id="workMode" {...register('workMode')}>
                  <option value="remote">Remote</option>
                  <option value="onsite">Onsite</option>
                  <option value="hybrid">Hybrid</option>
                </Select>
                {errors.workMode && <p className="text-sm text-destructive">{errors.workMode.message}</p>}
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="space-y-2">
                <Label htmlFor="country">Country</Label>
                <Select id="country" {...register('country')}>
                  <option value="">Select country</option>
                  {countries.map((country) => (
                    <option key={country} value={country}>{country}</option>
                  ))}
                </Select>
                {errors.country && <p className="text-sm text-destructive">{errors.country.message}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="city">City</Label>
                <Input id="city" placeholder="Enter city name" {...register('city')} />
                {errors.city && <p className="text-sm text-destructive">{errors.city.message}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Complete Location</Label>
                <Input id="location" placeholder="123 Main St, Suite 400" {...register('location')} />
                {errors.location && <p className="text-sm text-destructive">{errors.location.message}</p>}
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="space-y-2">
                <Label htmlFor="salaryMin">Salary Min</Label>
                <Input id="salaryMin" type="number" {...register('salaryMin', { valueAsNumber: true })} />
                {errors.salaryMin && <p className="text-sm text-destructive">{errors.salaryMin.message}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="salaryMax">Salary Max</Label>
                <Input id="salaryMax" type="number" {...register('salaryMax', { valueAsNumber: true })} />
                {errors.salaryMax && <p className="text-sm text-destructive">{errors.salaryMax.message}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="salaryCurrency">Salary Currency</Label>
                <Input id="salaryCurrency" {...register('salaryCurrency')} />
                {errors.salaryCurrency && <p className="text-sm text-destructive">{errors.salaryCurrency.message}</p>}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="summary">Job Summary</Label>
              <Textarea id="summary" rows={4} {...register('summary')} />
              {errors.summary && <p className="text-sm text-destructive">{errors.summary.message}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="responsibilities">Responsibilities</Label>
              <Textarea id="responsibilities" rows={4} placeholder="One item per line" {...register('responsibilities')} />
              {errors.responsibilities && <p className="text-sm text-destructive">{errors.responsibilities.message}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="requirements">Requirements</Label>
              <Textarea id="requirements" rows={4} placeholder="One item per line" {...register('requirements')} />
              {errors.requirements && <p className="text-sm text-destructive">{errors.requirements.message}</p>}
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="preferredQualifications">Preferred Qualifications</Label>
                <Textarea id="preferredQualifications" rows={3} placeholder="One item per line" {...register('preferredQualifications')} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="requiredSkills">Required Skills</Label>
                <Textarea id="requiredSkills" rows={3} placeholder="Comma separated" {...register('requiredSkills')} />
                {errors.requiredSkills && <p className="text-sm text-destructive">{errors.requiredSkills.message}</p>}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="benefits">Benefits</Label>
              <Textarea id="benefits" rows={3} placeholder="One item per line" {...register('benefits')} />
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="space-y-2">
                <Label htmlFor="experienceLevel">Experience Level</Label>
                <Select id="experienceLevel" {...register('experienceLevel')}>
                  <option value="entry">Entry</option>
                  <option value="junior">Junior</option>
                  <option value="mid">Mid</option>
                  <option value="senior">Senior</option>
                  <option value="lead">Lead</option>
                  <option value="executive">Executive</option>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="educationLevel">Education Level</Label>
                <Select id="educationLevel" {...register('educationLevel')}>
                  <option value="high-school">High School</option>
                  <option value="bachelors">Bachelors</option>
                  <option value="masters">Masters</option>
                  <option value="phd">PhD</option>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="vacancies">Number Of Vacancies</Label>
                <Input id="vacancies" type="number" {...register('vacancies', { valueAsNumber: true })} />
                {errors.vacancies && <p className="text-sm text-destructive">{errors.vacancies.message}</p>}
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="applicationEmail">Application Email</Label>
                <Input id="applicationEmail" type="email" {...register('applicationEmail')} />
                {errors.applicationEmail && <p className="text-sm text-destructive">{errors.applicationEmail.message}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="applicationUrl">Application URL</Label>
                <Input id="applicationUrl" type="url" {...register('applicationUrl')} />
                {errors.applicationUrl && <p className="text-sm text-destructive">{errors.applicationUrl.message}</p>}
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="applicationDeadline">Application Deadline</Label>
                <Input id="applicationDeadline" type="date" {...register('applicationDeadline')} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="companyDescription">Company Description</Label>
                <Textarea id="companyDescription" rows={3} {...register('companyDescription')} />
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="keywords">Keywords</Label>
                <Input id="keywords" placeholder="javascript, react, node" {...register('keywords')} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="tags">Tags</Label>
                <Input id="tags" placeholder="full-stack, remote" {...register('tags')} />
              </div>
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
                  <span>Your job posting is being processed. Please wait while we publish it.</span>
                </div>
                <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-200">
                  <div className="h-full w-full animate-pulse rounded-full bg-slate-900" />
                </div>
              </div>
            )}

            <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
              <Button type="button" variant="outline" onClick={() => router.push('/employer/jobs')}>
                Cancel
              </Button>
              <Button type="submit" className="sm:w-auto" disabled={isSubmitting}>
                {isSubmitting ? 'Posting...' : 'Post Job'}
              </Button>
            </div>
          </CardContent>
        </form>
      </Card>
    </div>
  )
}
