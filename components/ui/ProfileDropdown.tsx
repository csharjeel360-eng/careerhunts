"use client"

import { useState, useRef } from 'react'
import { auth } from '@/lib/firebase'
import { updateProfile as firebaseUpdateProfile } from 'firebase/auth'
import { uploadImage } from '@/lib/api'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/use-toast'

type Props = {
  user: any
  onSignOut: () => void
}

export default function ProfileDropdown({ user, onSignOut }: Props) {
  const [open, setOpen] = useState(false)
  const [editing, setEditing] = useState(false)
  const [name, setName] = useState(user?.displayName || '')
  const [file, setFile] = useState<File | null>(null)
  const { toast } = useToast()
  const ref = useRef<HTMLDivElement | null>(null)

  const toggle = () => setOpen((v) => !v)

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0] || null
    setFile(f)
  }

  const handleSave = async () => {
    try {
      let photoURL = user?.photoURL || undefined
      if (file) {
        const form = new FormData()
        form.append('file', file)
        const res = await uploadImage(form)
        photoURL = res?.url || res?.secure_url || photoURL
      }

      if (!auth.currentUser) throw new Error('No authenticated user')

      await firebaseUpdateProfile(auth.currentUser, {
        displayName: name || undefined,
        photoURL,
      })

      // Notify header to reload profile
      window.dispatchEvent(new CustomEvent('firebase-profile-updated'))
      toast({
        title: 'Profile updated',
        description: 'Please sign out and sign back in to see your updated profile everywhere.',
      })
      setEditing(false)
      setOpen(false)
    } catch (err: any) {
      toast({ variant: 'destructive', title: 'Update failed', description: err.message || 'Please try again.' })
    }
  }

  return (
    <div className="relative" ref={ref}>
      <button onClick={toggle} className="rounded-full focus:outline-none">
        <Avatar className="h-10 w-10">
          {user?.photoURL ? (
            <AvatarImage src={user.photoURL} alt={user.displayName || user.email || 'Profile'} />
          ) : (
            <AvatarFallback>
              {(user?.displayName || user?.email || 'U')
                .split(' ')
                .map((p: string) => p[0])
                .join('')
                .slice(0, 2)
                .toUpperCase()}
            </AvatarFallback>
          )}
        </Avatar>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-64 rounded-md border bg-white p-3 shadow-lg z-50">
          {!editing ? (
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0">
                  <Avatar className="h-10 w-10">
                    {user?.photoURL ? <AvatarImage src={user.photoURL} alt={user.displayName || user.email} /> : <AvatarFallback>{(user?.displayName || user?.email || 'U').charAt(0).toUpperCase()}</AvatarFallback>}
                  </Avatar>
                </div>
                <div>
                  <div className="text-sm font-medium text-slate-700">{user?.displayName || 'No name'}</div>
                  <div className="text-xs text-slate-500">{user?.email}</div>
                </div>
              </div>
              <div className="flex flex-col gap-2 pt-2">
                <Button size="sm" onClick={() => setEditing(true)}>Edit Profile</Button>
                <Button size="sm" variant="ghost" onClick={() => setOpen(false)}>Close</Button>
                <Button size="sm" variant="outline" onClick={() => { setOpen(false); onSignOut() }}>
                  Log Out
                </Button>
              </div>
              <p className="pt-1 text-[11px] leading-5 text-slate-500">
                To view your updated profile everywhere, sign out and sign back in after saving changes.
              </p>
            </div>
          ) : (
            <div className="space-y-2">
              <label className="block text-xs text-slate-500">Name</label>
              <input className="w-full rounded border px-2 py-1" value={name} onChange={(e) => setName(e.target.value)} />
              <label className="block text-xs text-slate-500">Profile Image</label>
              <input type="file" accept="image/*" onChange={handleFile} />
              <div className="flex gap-2 pt-2">
                <Button size="sm" onClick={handleSave}>Save</Button>
                <Button size="sm" variant="ghost" onClick={() => setEditing(false)}>Cancel</Button>
              </div>
              <p className="text-[11px] leading-5 text-slate-500">
                Your profile will appear updated after you sign out and sign in again.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
