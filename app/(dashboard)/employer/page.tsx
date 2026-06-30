"use client"

import { useEffect, useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { auth } from '@/lib/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { updateFirebaseProfile } from '@/lib/auth'
import { uploadImageToCloudinary } from '@/lib/cloudinary'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { useToast } from '@/components/ui/use-toast'
import { ArrowRight, Briefcase, Building2, Loader2, Plus, Trash2, TrendingUp, UserRound } from 'lucide-react'
import { getJobs, getCurrentUser, deleteJob } from '@/lib/api'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'

const buildUserProfile = (firebaseUser: any, backendUser: any = null) => {
  const resolvedName = backendUser?.name || firebaseUser?.displayName || backendUser?.username || firebaseUser?.email?.split('@')[0] || 'Employer'
  const resolvedEmail = backendUser?.email || firebaseUser?.email || ''
  const resolvedPhoto = backendUser?.avatar || firebaseUser?.photoURL || firebaseUser?.providerData?.[0]?.photoURL || ''

  return {
    displayName: resolvedName,
    email: resolvedEmail,
    photoURL: resolvedPhoto,
  }
}

export default function EmployerDashboard() {
  const router = useRouter()
  const { toast } = useToast()
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState<any>(null)
  const [dashboardSelectedFile, setDashboardSelectedFile] = useState<File | null>(null)
  const [dashboardPreviewUrl, setDashboardPreviewUrl] = useState<string>('')
  const [dashboardUploading, setDashboardUploading] = useState(false)
  const [jobs, setJobs] = useState<any[]>([])
  const [loadingJobs, setLoadingJobs] = useState(true)
  const [deletingId, setDeletingId] = useState<string | null>(null)
  const [companyId, setCompanyId] = useState<string | null>(null)

  const stats = useMemo(() => {
    const activeJobs = jobs.filter((job) => job.status === 'active').length

    return {
      total: jobs.length,
      active: activeJobs,
    }
  }, [jobs])

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (!firebaseUser) {
        toast({
          variant: 'destructive',
          title: 'Not signed in',
          description: 'Please sign in to access the employer dashboard.',
        })
        router.replace('/login')
        return
      }

      const syncUser = async () => {
        try {
          const backendUser = await getCurrentUser()
          setUser(buildUserProfile(firebaseUser, backendUser))
        } catch (error) {
          console.error('Failed to load employer profile:', error)
          setUser(buildUserProfile(firebaseUser))
        } finally {
          setLoading(false)
        }
      }

      void syncUser()
    })

    const handleProfileUpdated = async () => {
      if (auth.currentUser) {
        await auth.currentUser.reload()
        try {
          const backendUser = await getCurrentUser()
          setUser(buildUserProfile(auth.currentUser, backendUser))
        } catch (error) {
          console.error('Failed to refresh employer profile:', error)
          setUser(buildUserProfile(auth.currentUser))
        }
      }
    }

    window.addEventListener('firebase-profile-updated', handleProfileUpdated)

    return () => {
      unsubscribe()
      window.removeEventListener('firebase-profile-updated', handleProfileUpdated)
    }
  }, [router, toast])

  useEffect(() => {
    const load = async () => {
      setLoadingJobs(true)
      try {
        const currentUser = await getCurrentUser()
        if (!currentUser) return

        const userId = currentUser._id || currentUser.id
        if (!userId) {
          setCompanyId(null)
          setJobs([])
          return
        }

        setCompanyId(currentUser.companyId || null)
        const res = await getJobs({ createdBy: userId, sort: '-postedDate', limit: 50 })
        setJobs(res.data || [])
      } catch (err) {
        console.error(err)
      } finally {
        setLoadingJobs(false)
      }
    }
    load()
  }, [])

  useEffect(() => {
    if (!dashboardSelectedFile) {
      setDashboardPreviewUrl('')
      return
    }

    const objectUrl = URL.createObjectURL(dashboardSelectedFile)
    setDashboardPreviewUrl(objectUrl)

    return () => URL.revokeObjectURL(objectUrl)
  }, [dashboardSelectedFile])

  const handleDashboardImageUpload = async () => {
    if (!dashboardSelectedFile) return

    setDashboardUploading(true)
    try {
      const photoURL = await uploadImageToCloudinary(dashboardSelectedFile)
      await updateFirebaseProfile(user?.displayName || null, photoURL)
      setUser(auth.currentUser)
      toast({
        title: 'Image updated',
        description: 'Your profile image was uploaded to Cloudinary and saved.',
      })
      setDashboardSelectedFile(null)
    } catch (error: any) {
      toast({
        variant: 'destructive',
        title: 'Upload failed',
        description: error.message || 'Unable to upload image. Please try again.',
      })
    } finally {
      setDashboardUploading(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this job permanently?')) return
    setDeletingId(id)

    try {
      await deleteJob(id)
      setJobs((current) => current.filter((job) => job._id !== id))
      toast({ title: 'Job deleted', description: 'The job was removed.' })
    } catch (error: any) {
      console.error(error)
      toast({ variant: 'destructive', title: 'Unable to delete job', description: 'Please try again.' })
    } finally {
      setDeletingId(null)
    }
  }

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
        <div className="flex flex-col items-center gap-3 rounded-2xl border border-slate-200 bg-white px-8 py-6 shadow-sm">
          <Loader2 className="h-10 w-10 animate-spin text-slate-900" />
          <p className="text-sm text-slate-600">Loading your dashboard…</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(15,23,42,0.04),_transparent_40%),linear-gradient(135deg,_#f8fafc_0%,_#f1f5f9_100%)] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-6">
        <section className="overflow-hidden rounded-[28px] border border-slate-200 bg-white/90 shadow-[0_24px_80px_-35px_rgba(15,23,42,0.45)] backdrop-blur">
          <div className="grid gap-8 p-6 lg:grid-cols-[1.1fr_0.9fr] lg:p-8">
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm font-medium text-slate-700">
                <Briefcase className="h-4 w-4" />
                Employer dashboard
              </div>
              <div className="space-y-3">
                <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                  Welcome back, {user?.displayName || 'Employer'}.
                </h1>
                <p className="max-w-2xl text-base text-slate-600">
                  Manage your active roles, keep your company profile polished, and stay on top of your hiring pipeline.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href="/employer/jobs/create">
                  <Button className="rounded-full px-5">
                    <Plus className="mr-2 h-4 w-4" /> Post a new job
                  </Button>
                </Link>
                <Link href="/employer/profile">
                  <Button variant="outline" className="rounded-full px-5">
                    <Building2 className="mr-2 h-4 w-4" /> View company profile
                  </Button>
                </Link>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-950 p-5 text-white">
              <div className="flex items-center gap-3">
                <Avatar className="h-14 w-14 border-2 border-white/20">
                  <AvatarImage src={user?.photoURL || ''} alt={user?.displayName || 'Employer'} />
                  <AvatarFallback className="bg-slate-800 text-lg font-semibold text-white">
                    {user?.displayName?.charAt(0)?.toUpperCase() || 'E'}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium text-slate-300">Signed in as</p>
                  <p className="font-semibold">{user?.displayName || 'Employer'}</p>
                  <p className="text-sm text-slate-400">{user?.email || 'Manage your postings'}</p>
                </div>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-white/10 bg-white/10 p-3">
                  <div className="flex items-center gap-2 text-sm text-slate-300">
                    <Briefcase className="h-4 w-4" /> Active roles
                  </div>
                  <p className="mt-2 text-2xl font-semibold">{stats.active}</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/10 p-3">
                  <div className="flex items-center gap-2 text-sm text-slate-300">
                    <UserRound className="h-4 w-4" /> Company setup
                  </div>
                  <p className="mt-2 text-lg font-semibold">{companyId ? 'Connected' : 'Needs profile'}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-2">
          <Card className="border-slate-200 shadow-sm">
            <CardContent className="flex items-center justify-between p-5">
              <div>
                <p className="text-sm text-slate-500">Total postings</p>
                <p className="mt-1 text-2xl font-semibold text-slate-900">{stats.total}</p>
              </div>
              <div className="rounded-2xl bg-slate-100 p-3 text-slate-700">
                <Briefcase className="h-5 w-5" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-slate-200 shadow-sm">
            <CardContent className="flex items-center justify-between p-5">
              <div>
                <p className="text-sm text-slate-500">Active listings</p>
                <p className="mt-1 text-2xl font-semibold text-slate-900">{stats.active}</p>
              </div>
              <div className="rounded-2xl bg-emerald-100 p-3 text-emerald-700">
                <TrendingUp className="h-5 w-5" />
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Card className="border-slate-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-slate-900">Quick actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Link href="/employer/jobs/create" className="block rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:border-slate-300 hover:bg-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-slate-900">Create a new listing</p>
                    <p className="text-sm text-slate-500">Publish your next opportunity in minutes.</p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-slate-500" />
                </div>
              </Link>

              <Link href="/employer/profile" className="block rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:border-slate-300 hover:bg-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-slate-900">Refine your company profile</p>
                    <p className="text-sm text-slate-500">Keep your employer brand up to date.</p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-slate-500" />
                </div>
              </Link>

              <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-4">
                <p className="font-medium text-slate-900">Hiring momentum</p>
                <p className="mt-1 text-sm text-slate-500">
                  {stats.active > 0 ? `You have ${stats.active} active listing${stats.active > 1 ? 's' : ''} currently visible.` : 'Start by publishing your first job listing.'}
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-slate-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-slate-900">Recent job postings</CardTitle>
            </CardHeader>
            <CardContent>
              {loadingJobs ? (
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-500">
                  Loading your job postings…
                </div>
              ) : jobs.length === 0 ? (
                <div className="space-y-3 rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-5">
                  <p className="font-medium text-slate-900">No listings yet</p>
                  <p className="text-sm text-slate-500">
                    {companyId ? "You haven't posted any jobs yet. Start with your first listing to attract top talent." : 'Complete your company profile and create your first job posting to get started.'}
                  </p>
                  <Link href="/employer/jobs/create">
                    <Button className="mt-2 rounded-full">
                      <Plus className="mr-2 h-4 w-4" /> Create your first job
                    </Button>
                  </Link>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Title</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Posted</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {jobs.map((job) => (
                        <TableRow key={job._id}>
                          <TableCell className="font-medium text-slate-900">{job.title}</TableCell>
                          <TableCell>
                            <Badge variant={job.status === 'active' ? 'default' : 'secondary'}>
                              {job.status}
                            </Badge>
                          </TableCell>
                          <TableCell>{new Date(job.postedDate).toLocaleDateString()}</TableCell>
                          <TableCell className="text-right space-x-2">
                            <Link href={`/jobs/${job.slug}`}>
                              <Button variant="ghost" size="sm">View</Button>
                            </Link>
                            <Link href={`/employer/jobs/${job.slug}/edit`}>
                              <Button variant="ghost" size="sm">Edit</Button>
                            </Link>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-destructive"
                              onClick={() => handleDelete(job._id)}
                              disabled={deletingId === job._id}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              )}
            </CardContent>
          </Card>
        </section>

        <section className="rounded-[24px] border border-slate-200 bg-white/80 p-5 shadow-sm">
          <p className="text-sm leading-6 text-slate-600">
            If you want to edit your company information, please create a new job post first. If a job post already exists, open any job and use the edit option to update your company details. The company name is displayed consistently across all job listings, so each job will reflect the same company name unless it is updated from the shared company profile.
          </p>
        </section>
      </div>
    </div>
  )
}
