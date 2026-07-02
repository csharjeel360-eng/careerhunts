'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { auth } from '@/lib/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { updateFirebaseProfile } from '@/lib/auth'
import { uploadImageToCloudinary } from '@/lib/cloudinary'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { useToast } from '@/components/ui/use-toast'
import { Loader2 } from 'lucide-react'
import { ArrowLeft } from 'lucide-react'

const profileSchema = z.object({
  displayName: z.string().min(2, 'Name must be at least 2 characters'),
})

export type ProfileFormData = z.infer<typeof profileSchema>

export default function EmployerProfilePage() {
  const router = useRouter()
  const { toast } = useToast()
  const [loading, setLoading] = useState(true)
  const [submitting, setSubmitting] = useState(false)
  const [editing, setEditing] = useState(false)
  const [user, setUser] = useState<any>(null)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string>('')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
  })

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (!firebaseUser) {
        router.replace('/login')
        return
      }

      setUser(firebaseUser)
      reset({
        displayName: firebaseUser.displayName || '',
      })
      setLoading(false)
    })

    return () => unsubscribe()
  }, [router, reset])

  // Handle browser back/popstate gracefully: if history is empty or back would fail,
  // redirect to employer dashboard to avoid navigation errors.
  useEffect(() => {
    const onPop = () => {
      try {
        if (typeof window !== 'undefined' && window.history.length <= 1) {
          router.replace('/employer')
        }
      } catch (err) {
        router.replace('/employer')
      }
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('popstate', onPop)
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('popstate', onPop)
      }
    }
  }, [router])

  useEffect(() => {
    if (!selectedFile) {
      setPreviewUrl('')
      return
    }

    const objectUrl = URL.createObjectURL(selectedFile)
    setPreviewUrl(objectUrl)

    return () => URL.revokeObjectURL(objectUrl)
  }, [selectedFile])

  const onSubmit = async (data: ProfileFormData) => {
    setSubmitting(true)
    try {
      let photoURL: string | null = null
      if (selectedFile) {
        photoURL = await uploadImageToCloudinary(selectedFile)
      }

      await updateFirebaseProfile(data.displayName, photoURL)
      if (auth.currentUser) {
        await auth.currentUser.reload()
      }

      const updatedUser = auth.currentUser
      setUser(
        updatedUser
          ? {
              uid: updatedUser.uid,
              email: updatedUser.email,
              displayName: updatedUser.displayName,
              photoURL: updatedUser.photoURL,
            }
          : null,
      )
      reset({ displayName: updatedUser?.displayName || '' })
      setSelectedFile(null)
      setPreviewUrl('')
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new Event('firebase-profile-updated'))
      }
      toast({
        title: 'Profile updated',
        description: 'Your changes have been saved. Please sign out and sign back in to see them reflected across the site.',
      })
      router.push('/employer')
    } catch (error: any) {
      toast({
        variant: 'destructive',
        title: 'Update failed',
        description: error?.message || 'Unable to update profile. Please try again.',
      })
    } finally {
      setSubmitting(false)
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="flex flex-col items-center gap-3">
          <Loader2 className="h-10 w-10 animate-spin text-primary" />
          <p className="text-muted-foreground">Loading profile…</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <Card className="shadow-xl">
          <CardHeader className="space-y-4 text-center p-10">
            <div className="absolute left-6 top-6">
              <button
                onClick={() => router.push('/employer')}
                aria-label="Go back"
                className="inline-flex items-center gap-2 rounded px-2 py-1 text-sm hover:bg-slate-100"
              >
                <ArrowLeft className="h-4 w-4" /> Back
              </button>
            </div>
            <Avatar className="mx-auto h-24 w-24">
              {user?.photoURL ? (
                <AvatarImage src={user.photoURL} alt={user.displayName || user.email || 'Profile'} />
              ) : (
                <AvatarFallback>
                  {(user?.displayName || user?.email || 'E')
                    .split(' ')
                    .map((part) => part[0])
                    .join('')
                    .slice(0, 2)}
                </AvatarFallback>
              )}
            </Avatar>
            <CardTitle className="text-3xl">Employer Profile</CardTitle>
            <CardDescription className="max-w-xl mx-auto text-base text-slate-600">
              Review and manage your employer profile details. Update your name or profile picture at any time, and sign out and sign back in if you want to see the changes reflected across the site.
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6 p-8">
            {!editing ? (
              <div className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl border border-slate-200 bg-white p-6">
                    <p className="text-sm font-medium text-slate-500">Display Name</p>
                    <p className="mt-2 text-xl font-semibold text-slate-900">{user?.displayName || 'No name set'}</p>
                  </div>
                  <div className="rounded-3xl border border-slate-200 bg-white p-6">
                    <p className="text-sm font-medium text-slate-500">Email</p>
                    <p className="mt-2 text-xl font-semibold text-slate-900">{user?.email}</p>
                  </div>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-6">
                  <p className="text-sm font-medium text-slate-500">Profile Picture</p>
                  <p className="mt-2 text-sm text-slate-600">
                    Your current profile image is displayed above. Upload a new image when editing.
                  </p>
                </div>

                <div className="flex justify-center">
                  <Button type="button" onClick={() => setEditing(true)} className="h-11 px-6">
                    Edit Profile
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl border border-slate-200 bg-white p-6">
                    <p className="text-sm font-medium text-slate-500">Email</p>
                    <p className="mt-2 text-xl font-semibold text-slate-900">{user?.email}</p>
                  </div>
                  <div className="rounded-3xl border border-slate-200 bg-white p-6">
                    <p className="text-sm font-medium text-slate-500">Display Name</p>
                    <Input id="displayName" type="text" {...register('displayName')} />
                    {errors.displayName && <p className="text-sm text-destructive">{errors.displayName.message}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="photoFile">Upload Profile Picture</Label>
                  <input
                    id="photoFile"
                    type="file"
                    accept="image/*"
                    onChange={(event) => {
                      const file = event.target.files?.[0] || null
                      setSelectedFile(file)
                    }}
                    className="block w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900"
                  />
                  <p className="text-sm text-slate-500">
                    Choose a local image to upload to Cloudinary or leave the current profile picture unchanged.
                  </p>
                  {previewUrl ? (
                    <div className="mt-2 rounded-3xl border border-slate-200 bg-slate-50 p-3">
                      <p className="text-sm font-medium text-slate-600">Preview</p>
                      <img src={previewUrl} alt="Profile preview" className="mt-2 h-32 w-full max-w-xs rounded-xl object-cover" />
                    </div>
                  ) : null}
                </div>

                <CardFooter className="flex flex-wrap justify-end gap-3 p-0">
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={() => {
                      setEditing(false)
                      setSelectedFile(null)
                      setPreviewUrl('')
                      reset({ displayName: user?.displayName || '' })
                    }}
                    className="h-11 px-6"
                  >
                    Cancel
                  </Button>
                  <Button type="submit" disabled={submitting} className="h-11 px-6">
                    {submitting ? 'Saving...' : 'Save Profile'}
                  </Button>
                </CardFooter>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
