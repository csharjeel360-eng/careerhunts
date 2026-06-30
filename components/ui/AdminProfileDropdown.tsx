'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useToast } from '@/components/ui/use-toast'
import api, { uploadImage } from '@/lib/api'

type Props = {
  adminUser: any
  onUpdate: (user: any) => void
  onSignOut: () => void
}

export default function AdminProfileDropdown({ adminUser, onUpdate, onSignOut }: Props) {
  const [open, setOpen] = useState(false)
  const [editing, setEditing] = useState(false)
  const [name, setName] = useState(adminUser?.name || '')
  const [avatarUrl, setAvatarUrl] = useState(adminUser?.avatar || '')
  const [file, setFile] = useState<File | null>(null)
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [saving, setSaving] = useState(false)
  const [uploading, setUploading] = useState(false)
  const [previewUrl, setPreviewUrl] = useState(adminUser?.avatar || '')
  const { toast } = useToast()
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    setName(adminUser?.name || '')
    setAvatarUrl(adminUser?.avatar || '')
    setPreviewUrl(adminUser?.avatar || '')
  }, [adminUser])

  useEffect(() => {
    if (!file) {
      setPreviewUrl(adminUser?.avatar || '')
      return
    }

    const url = URL.createObjectURL(file)
    setPreviewUrl(url)
    return () => URL.revokeObjectURL(url)
  }, [file, adminUser?.avatar])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (open && ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [open])

  const handleFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0] || null
    setFile(selectedFile)
  }

  const handleSave = async () => {
    setSaving(true)

    try {
      let avatar = avatarUrl

      if (file) {
        setUploading(true)
        const formData = new FormData()
        formData.append('file', file)

        const response = await uploadImage(formData)
        avatar = response?.url || response?.secure_url || avatar
        setUploading(false)
      }

      const payload: any = { name, avatar }
      if (currentPassword || newPassword || confirmPassword) {
        payload.currentPassword = currentPassword
        payload.newPassword = newPassword
        payload.confirmPassword = confirmPassword
      }

      const response = await api.put('/auth/profile', payload)
      const updatedUser = response.data.user

      onUpdate(updatedUser)
      localStorage.setItem('adminUser', JSON.stringify(updatedUser))
      window.dispatchEvent(new CustomEvent('admin-profile-updated'))

      toast({ title: 'Profile updated' })
      setEditing(false)
      setOpen(false)
      setFile(null)
      setCurrentPassword('')
      setNewPassword('')
      setConfirmPassword('')
    } catch (error: any) {
      toast({
        variant: 'destructive',
        title: 'Update failed',
        description: error?.response?.data?.message || error?.message || 'Unable to save changes.',
      })
    } finally {
      setSaving(false)
      setUploading(false)
    }
  }

  const initials = adminUser?.name
    ? adminUser.name
        .split(' ')
        .map((part: string) => part.charAt(0))
        .join('')
        .slice(0, 2)
        .toUpperCase()
    : 'AD'

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="rounded-full focus:outline-none focus:ring-2 focus:ring-slate-500"
      >
        <Avatar className="h-10 w-10">
          {previewUrl ? (
            <AvatarImage src={previewUrl} alt={adminUser?.name || 'Admin'} />
          ) : (
            <AvatarFallback>{initials}</AvatarFallback>
          )}
        </Avatar>
      </button>

      {open && (
        <div className="absolute right-0 z-50 mt-2 w-[320px] rounded-lg border bg-white p-4 shadow-lg">
          {!editing ? (
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Avatar className="h-12 w-12">
                  {previewUrl ? (
                    <AvatarImage src={previewUrl} alt={adminUser?.name || 'Admin'} />
                  ) : (
                    <AvatarFallback>{initials}</AvatarFallback>
                  )}
                </Avatar>
                <div>
                  <div className="text-sm font-semibold text-slate-900">{adminUser?.name || 'Admin'}</div>
                  <div className="text-xs text-slate-500">{adminUser?.email}</div>
                </div>
              </div>

              <div className="space-y-2 text-xs text-slate-600">
                <div>Update your admin profile from here.</div>
                <div>Your name, avatar, and password are editable.</div>
              </div>

              <div className="flex flex-col gap-2">
                <Button size="sm" onClick={() => setEditing(true)}>
                  Edit profile
                </Button>
                <Link href="/admin" className="inline-flex justify-center rounded-md border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">
                  Admin dashboard
                </Link>
                <Button size="sm" variant="ghost" onClick={onSignOut}>
                  Sign out
                </Button>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div>
                <Label htmlFor="admin-name">Full name</Label>
                <Input id="admin-name" value={name} onChange={(event) => setName(event.target.value)} />
              </div>

              <div>
                <Label htmlFor="admin-avatar">Profile image</Label>
                <input id="admin-avatar" type="file" accept="image/*" onChange={handleFile} className="mt-1 block w-full text-sm text-slate-700" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="admin-current-password">Current password</Label>
                <Input
                  id="admin-current-password"
                  type="password"
                  value={currentPassword}
                  onChange={(event) => setCurrentPassword(event.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="admin-new-password">New password</Label>
                <Input
                  id="admin-new-password"
                  type="password"
                  value={newPassword}
                  onChange={(event) => setNewPassword(event.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="admin-confirm-password">Confirm password</Label>
                <Input
                  id="admin-confirm-password"
                  type="password"
                  value={confirmPassword}
                  onChange={(event) => setConfirmPassword(event.target.value)}
                />
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                <Button size="sm" onClick={handleSave} disabled={saving || uploading}>
                  {saving || uploading ? 'Saving...' : 'Save changes'}
                </Button>
                <Button size="sm" variant="ghost" onClick={() => setEditing(false)}>
                  Cancel
                </Button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
