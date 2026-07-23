'use client'

import type { Metadata } from 'next'
import { getNoIndexMetadata } from '@/lib/seo'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { Search, Plus, Eye, Edit, Trash2 } from 'lucide-react'
import { getJobs, deleteJob } from '@/lib/api'

export default function AdminJobsPage() {
  const [jobs, setJobs] = useState<any[]>([])
  const [search, setSearch] = useState('')
  const [deletingId, setDeletingId] = useState<string | null>(null)

  useEffect(() => {
    loadJobs()
  }, [])

  const loadJobs = async () => {
    const response = await getJobs({ limit: 50, sort: '-postedDate' })
    setJobs(response.data || [])
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this job permanently?')) return
    setDeletingId(id)
    try {
      await deleteJob(id)
      setJobs((current) => current.filter((job) => job._id !== id))
    } catch (error) {
      console.error(error)
      alert('Unable to delete job. Please try again.')
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
          <h1 className="text-3xl font-bold">Manage Jobs</h1>
          <p className="text-sm text-slate-500">Review, edit, or delete job postings created by employers.</p>
        </div>
        <Link href="/admin/jobs/create">
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
              placeholder="Search jobs..."
              className="w-full rounded-lg border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 text-sm outline-none transition focus:border-slate-400"
            />
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Company</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Posted</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredJobs.map((job) => (
                <TableRow key={job._id}>
                  <TableCell>{job.title}</TableCell>
                  <TableCell>{job.companyId?.name || 'Unknown'}</TableCell>
                  <TableCell>
                    <Badge variant={job.status === 'active' ? 'default' : 'secondary'}>
                      {job.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{new Date(job.postedDate).toLocaleDateString()}</TableCell>
                  <TableCell className="text-right space-x-2">
                    <Link href={`/jobs/${job.slug}`}>
                      <Button variant="ghost" size="sm"><Eye className="h-4 w-4" /></Button>
                    </Link>
                    <Link href={`/admin/jobs/${job.slug}/edit`}>
                      <Button variant="ghost" size="sm"><Edit className="h-4 w-4" /></Button>
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
        </CardContent>
      </Card>
    </div>
  )
}
