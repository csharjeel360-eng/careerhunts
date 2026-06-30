'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { Search, Plus, Edit, Trash2 } from 'lucide-react'
import { getJobs, deleteJob, getCurrentUser } from '@/lib/api'
import { useToast } from '@/components/ui/use-toast'

export default function EmployerJobsPage() {
  const router = useRouter()
  const { toast } = useToast()
  const [jobs, setJobs] = useState<any[]>([])
  const [search, setSearch] = useState('')
  const [deletingId, setDeletingId] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadEmployerJobs()
  }, [])

  const loadEmployerJobs = async () => {
    setLoading(true)
    try {
      const currentUser = await getCurrentUser()
      if (!currentUser) {
        router.replace('/login')
        return
      }

      const userId = currentUser._id || currentUser.id
      if (!userId) {
        setJobs([])
        return
      }

      const response = await getJobs({ limit: 50, sort: '-postedDate', createdBy: userId })
      setJobs(response.data || [])
    } catch (error) {
      console.error(error)
      toast({ variant: 'destructive', title: 'Unable to load jobs', description: 'Please try again later.' })
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this job permanently?')) return
    setDeletingId(id)
    try {
      await deleteJob(id)
      setJobs((current) => current.filter((job) => job._id !== id))
      toast({ title: 'Job deleted', description: 'The job was removed.' })
    } catch (error) {
      console.error(error)
      toast({ variant: 'destructive', title: 'Unable to delete job', description: 'Please try again.' })
    } finally {
      setDeletingId(null)
    }
  }

  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(search.toLowerCase()) ||
    job.companyId?.name?.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="container mx-auto p-4 space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold">Your Job Postings</h1>
          <p className="text-sm text-slate-500">Manage jobs you have posted and create new openings.</p>
        </div>
        <Link href="/employer/jobs/create">
          <Button>
            <Plus className="mr-2 h-4 w-4" /> Create Job
          </Button>
        </Link>
      </div>

      <Card>
        <CardHeader className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative w-full sm:max-w-xs">
            <Search className="pointer-events-none absolute left-3 top-3 h-4 w-4 text-slate-400" />
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search your jobs..."
              className="w-full rounded-lg border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 text-sm outline-none transition focus:border-slate-400"
            />
          </div>
        </CardHeader>
        <CardContent>
          {loading ? (
            <p className="text-sm text-slate-500">Loading your jobs…</p>
          ) : filteredJobs.length === 0 ? (
            <p className="text-sm text-slate-500">No jobs found. Create your first job posting.</p>
          ) : (
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
                {filteredJobs.map((job) => (
                  <TableRow key={job._id}>
                    <TableCell>{job.title}</TableCell>
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
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
