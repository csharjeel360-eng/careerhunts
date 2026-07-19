"use client"

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useToast } from '@/components/ui/use-toast'
import { getAdminAnalytics, getCurrentUser } from '@/lib/api'
import { signOut } from '@/lib/auth'
import { Briefcase, Users, Flag, Plus, Loader2 } from 'lucide-react'

type AnalyticsData = {
  totalJobs: number
  totalUsers: number
  totalEmployers: number
  featuredJobs: number
  pendingJobs: number
}

const initialAnalytics: AnalyticsData = {
  totalJobs: 0,
  totalUsers: 0,
  totalEmployers: 0,
  featuredJobs: 0,
  pendingJobs: 0,
}

export default function AdminDashboard() {
  const [loading, setLoading] = useState(true)
  const [analytics, setAnalytics] = useState<AnalyticsData>(initialAnalytics)
  const router = useRouter()
  const { toast } = useToast()

  useEffect(() => {
    const loadDashboard = async () => {
      const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null
      const storedUser = typeof window !== 'undefined' ? localStorage.getItem('adminUser') : null

      if (!token) {
        toast({
          variant: 'destructive',
          title: 'Access Denied',
          description: 'You must be signed in as an admin to view this page.',
        })
        router.push('/admin/login')
        return
      }

      const verifyAndLoad = async (user: any) => {
        if (user?.role !== 'admin') {
          toast({
            variant: 'destructive',
            title: 'Access Denied',
            description: 'You do not have permission to access this page.',
          })
          router.push('/admin/login')
          return
        }

        localStorage.setItem('adminUser', JSON.stringify(user))
        await loadAnalytics()
      }

      if (storedUser && storedUser.trim()) {
        try {
          const parsedUser = JSON.parse(storedUser)
          if (parsedUser && typeof parsedUser === 'object') {
            await verifyAndLoad(parsedUser)
            return
          }
          localStorage.removeItem('adminUser')
        } catch {
          localStorage.removeItem('adminUser')
        }
      }

      try {
        const user = await getCurrentUser()
        if (!user || user.role !== 'admin') {
          throw new Error('Unauthorized')
        }
        await verifyAndLoad(user)
      } catch {
        toast({
          variant: 'destructive',
          title: 'Session Expired',
          description: 'Please sign in again as an admin.',
        })
        router.push('/admin/login')
      }
    }

    loadDashboard()
  }, [router, toast])

  const loadAnalytics = async () => {
    try {
      const data = await getAdminAnalytics()
      setAnalytics(data || initialAnalytics)
    } catch {
      toast({
        variant: 'destructive',
        title: 'Unable to load analytics',
        description: 'Please refresh the page or check your network connection.',
      })
      setAnalytics(initialAnalytics)
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = async () => {
    try {
      await signOut()
      router.push('/admin/login')
    } catch {
      toast({
        variant: 'destructive',
        title: 'Logout failed',
        description: 'Unable to sign out. Please try again.',
      })
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="animate-spin h-12 w-12 text-primary" />
          <p className="text-muted-foreground">Loading admin dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto p-4 md:p-6 space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
          <p className="text-slate-600">Manage jobs, users, and platform analytics from one place.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button variant="secondary" onClick={handleLogout}>
            Sign Out
          </Button>
          <Link href="/admin/jobs/create">
            <Button>
              <Plus className="mr-2 h-4 w-4" /> Create Job
            </Button>
          </Link>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Briefcase className="h-5 w-5 text-primary" />
              <CardTitle>Total Jobs</CardTitle>
            </div>
            <CardDescription>Active and archived job postings.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-semibold">{analytics.totalJobs}</div>
            <Badge variant="secondary" className="mt-3">
              {analytics.pendingJobs} pending approvals
            </Badge>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-emerald-600" />
              <CardTitle>Total Users</CardTitle>
            </div>
            <CardDescription>Registered platform accounts.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-semibold">{analytics.totalUsers}</div>
            <Badge variant="default" className="mt-3">
              {analytics.totalEmployers} employers
            </Badge>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Flag className="h-5 w-5 text-slate-900" />
              <CardTitle>Featured Jobs</CardTitle>
            </div>
            <CardDescription>Top listings currently highlighted.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-semibold">{analytics.featuredJobs}</div>
            <Badge variant="outline" className="mt-3">
              {analytics.pendingJobs} pending
            </Badge>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <Link href="/admin/jobs" className="group">
          <Card className="transition hover:-translate-y-1 hover:shadow-lg">
            <CardHeader>
              <CardTitle>Manage Jobs</CardTitle>
              <CardDescription>Review, edit, or delete job postings.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-slate-600">Open the job management area to take action on listings.</div>
            </CardContent>
          </Card>
        </Link>

        <Link href="/admin/users" className="group">
          <Card className="transition hover:-translate-y-1 hover:shadow-lg">
            <CardHeader>
              <CardTitle>Manage Users</CardTitle>
              <CardDescription>View and remove users from the platform.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-slate-600">See all user accounts and manage access.</div>
            </CardContent>
          </Card>
        </Link>

        <Card className="transition hover:-translate-y-1 hover:shadow-lg">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common admin tasks at a glance.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between">
              <span>Post a new job</span>
              <Link href="/admin/jobs/create">
                <Button size="sm">Create</Button>
              </Link>
            </div>
            <div className="flex items-center justify-between">
              <span>Review all jobs</span>
              <Link href="/admin/jobs">
                <Button size="sm" variant="secondary">Open</Button>
              </Link>
            </div>
            <div className="flex items-center justify-between">
              <span>Manage users</span>
              <Link href="/admin/users">
                <Button size="sm" variant="secondary">View</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
