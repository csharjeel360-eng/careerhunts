import { NextResponse } from 'next/server'
import { getLiveJobs } from '@/lib/live-jobs'

export const dynamic = 'force-dynamic'

export async function GET() {
  const jobs = await getLiveJobs()
  return NextResponse.json({ jobs })
}
