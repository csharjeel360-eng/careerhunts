"use client"

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState, useTransition } from 'react'
import { Menu, Sparkles, X } from 'lucide-react'
import { signOut } from '@/lib/auth'
import ProfileDropdown from '@/components/ui/ProfileDropdown'
import AdminProfileDropdown from '@/components/ui/AdminProfileDropdown'
import { useToast } from '@/components/ui/use-toast'

type NavItem = {
  label: string
  href: string
}

interface HeaderAuthProps {
  navItems: NavItem[]
}

export default function HeaderAuth({ navItems }: HeaderAuthProps) {
  const pathname = usePathname()
  const router = useRouter()
  const { toast } = useToast()
  const [user, setUser] = useState<any>(null)
  const [adminUser, setAdminUser] = useState<any>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isPending, startTransition] = useTransition()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedAdmin = localStorage.getItem('adminUser')
      if (storedAdmin && storedAdmin.trim()) {
        try {
          const parsedAdmin = JSON.parse(storedAdmin)
          if (parsedAdmin && typeof parsedAdmin === 'object' && parsedAdmin.role === 'admin') {
            setAdminUser(parsedAdmin)
          } else {
            localStorage.removeItem('adminUser')
          }
        } catch {
          localStorage.removeItem('adminUser')
        }
      }
    }
  }, [])

  useEffect(() => {
    let unsubscribe: (() => void) | null = null
    let isMounted = true

    const timeoutId = setTimeout(() => {
      if (!isMounted) return

      startTransition(async () => {
        try {
          const { auth } = await import('@/lib/firebase')
          const { onAuthStateChanged } = await import('firebase/auth')

          unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
            if (!isMounted) return

            if (!firebaseUser) {
              setUser(null)
              return
            }

            setUser({
              displayName: firebaseUser.displayName,
              email: firebaseUser.email,
              photoURL: firebaseUser.photoURL || firebaseUser.providerData?.[0]?.photoURL || '',
            })
          })
        } catch (error) {
          console.error('Failed to initialize Firebase:', error)
        }
      })
    }, 100)

    const handleProfileUpdated = async () => {
      if (!isMounted) return

      startTransition(async () => {
        try {
          const { auth } = await import('@/lib/firebase')
          if (auth.currentUser) {
            await auth.currentUser.reload()
            setUser({
              displayName: auth.currentUser.displayName,
              email: auth.currentUser.email,
              photoURL: auth.currentUser.photoURL || auth.currentUser.providerData?.[0]?.photoURL || '',
            })
          }
        } catch (error) {
          console.error('Failed to update profile:', error)
        }
      })
    }

    window.addEventListener('firebase-profile-updated', handleProfileUpdated)

    return () => {
      isMounted = false
      clearTimeout(timeoutId)
      if (unsubscribe) {
        unsubscribe()
      }
      window.removeEventListener('firebase-profile-updated', handleProfileUpdated)
    }
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  const handleSignOut = async () => {
    try {
      await signOut()
      setAdminUser(null)
      setUser(null)
      const redirectPath = adminUser ? '/admin/login' : '/login'
      router.replace(redirectPath)
    } catch {
      toast({
        variant: 'destructive',
        title: 'Logout failed',
        description: 'Unable to sign out. Please try again.',
      })
    }
  }

  const handleAdminUpdate = (updatedAdmin: any) => {
    setAdminUser(updatedAdmin)
  }

  const handleCreateJob = () => {
    const hasToken = typeof window !== 'undefined' && !!localStorage.getItem('token')
    const targetPath = user || adminUser || hasToken ? '/employer' : '/login?next=/employer'
    router.push(targetPath)
  }

  const [isHydrated, setIsHydrated] = useState(false)

  useEffect(() => {
    setIsHydrated(true)
  }, [])

  const renderAuthActions = () => {
    if (!isHydrated) {
      return (
        <div className="flex items-center gap-2">
          <div className="h-10 w-24 rounded-full border border-slate-200 bg-slate-100/80" />
          <div className="h-10 w-10 rounded-full border border-slate-200 bg-slate-100/80 lg:hidden" />
        </div>
      )
    }

    return (
      <>
        <button
          type="button"
          onClick={handleCreateJob}
          className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:text-slate-900"
        >
          <Sparkles className="h-4 w-4" />
          Post a Job
        </button>

        {adminUser ? (
          <AdminProfileDropdown adminUser={adminUser} onUpdate={handleAdminUpdate} onSignOut={handleSignOut} />
        ) : user ? (
          <ProfileDropdown user={user} onSignOut={handleSignOut} />
        ) : null}
      </>
    )
  }

  return (
    <>
      <div className="hidden items-center gap-3 lg:flex">{renderAuthActions()}</div>

      <div className="flex items-center gap-2 lg:hidden">
        {isHydrated ? (
          <>
            {adminUser ? (
              <AdminProfileDropdown adminUser={adminUser} onUpdate={handleAdminUpdate} onSignOut={handleSignOut} />
            ) : user ? (
              <ProfileDropdown user={user} onSignOut={handleSignOut} />
            ) : null}
          </>
        ) : null}

        <button
          type="button"
          onClick={() => setMobileMenuOpen((open) => !open)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-slate-300 hover:text-slate-900"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="border-t border-slate-200/80 bg-white/95 px-4 py-4 shadow-sm lg:hidden sm:px-6">
          <div className="mx-auto flex max-w-7xl flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-2xl px-3 py-2 text-sm font-medium transition ${pathname === item.href ? 'bg-slate-900 text-white' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'}`}
              >
                {item.label}
              </Link>
            ))}

            <button
              type="button"
              onClick={handleCreateJob}
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-100 hover:text-slate-900"
            >
              <Sparkles className="h-4 w-4" />
              Post a Job
            </button>
          </div>
        </div>
      )}
    </>
  )
}
