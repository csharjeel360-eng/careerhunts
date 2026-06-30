import { auth } from './firebase'
import {
  GoogleAuthProvider,
  signInWithRedirect,
  signInWithPopup,
  getRedirectResult,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  updateProfile,
  signOut as firebaseSignOut,
  type User,
  type UserCredential,
} from 'firebase/auth'
import axios from 'axios'

const googleProvider = new GoogleAuthProvider()
googleProvider.addScope('profile')
googleProvider.addScope('email')

const normalizeApiUrl = (url: string) => {
  const trimmed = url.replace(/\/+$|^\s+|\s+$/g, '')
  return trimmed.endsWith('/api') ? trimmed : `${trimmed}/api`
}

const getDefaultApiUrl = () => {
  if (typeof window !== 'undefined') {
    return `${window.location.origin}/api`
  }
  return '/api'
}

const resolveApiUrl = (envUrl?: string) => {
  const trimmed = envUrl?.trim() || ''
  if (!trimmed) return getDefaultApiUrl()
  if (typeof window !== 'undefined' && trimmed.includes('localhost:5000') && !window.location.hostname.includes('localhost')) {
    return `${window.location.origin}/api`
  }
  return normalizeApiUrl(trimmed)
}

const getApiUrl = () => resolveApiUrl(process.env.NEXT_PUBLIC_API_URL)

// Authenticate with Google via Firebase, then get JWT from backend
export async function signInWithGoogle(redirectPath: string = '/employer', photoURL?: string | null) {
  if (typeof window !== 'undefined') {
    sessionStorage.setItem('googleAuthRedirect', redirectPath)
    localStorage.setItem('googleAuthRedirect', redirectPath)
    if (photoURL) {
      sessionStorage.setItem('googleAuthPhotoURL', photoURL)
      localStorage.setItem('googleAuthPhotoURL', photoURL)
    }
  }
  // Try popup sign-in first (better dev experience). If popup is blocked
  // or fails, fall back to redirect-based sign-in which works in more cases.
  try {
    const popupResult = await signInWithPopup(auth, googleProvider)
    // If popup succeeded, process immediately by sending to backend for JWT
    if (popupResult && popupResult.user) {
      const user = popupResult.user
      const response = await axios.post(`${getApiUrl()}/auth/google`, {
        email: user.email,
        name: user.displayName || user.email?.split('@')[0] || 'User',
        avatar: user.photoURL || null
      })
      if (response.data?.success && response.data?.token) {
        if (typeof window !== 'undefined') {
          localStorage.setItem('token', response.data.token)
        }
        return { user: response.data.user, token: response.data.token, redirectPath }
      }
    }
  } catch (err: any) {
    console.warn('Popup sign-in failed or was blocked, falling back to redirect:', err?.code || err?.message)
    await signInWithRedirect(auth, googleProvider)
  }
}

// Process Google redirect result and get backend JWT
export async function getGoogleRedirectResult() {
  try {
    console.log('Getting Firebase redirect result...')
    let result: UserCredential | null = await getRedirectResult(auth)
    console.log('Firebase redirect result:', result)

    // Some environments (React Strict Mode / Next.js reloads) can cause the redirect
    // result to not be immediately available. As a fallback, wait briefly for
    // onAuthStateChanged to report the signed-in user.
    if (!result) {
      console.log('No redirect result — waiting for auth state change (fallback)')
      result = await new Promise<UserCredential | null>((resolve) => {
        let settled = false
        const timeout = setTimeout(() => {
          if (!settled) {
            settled = true
            resolve(null)
          }
        }, 10000) // wait up to 10s

        const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (!settled) {
            settled = true
            clearTimeout(timeout)
            unsubscribe()
            if (user) {
              resolve({
                user,
                providerId: 'firebase',
                operationType: 'signIn',
              } as UserCredential)
            } else {
              resolve(null)
            }
          }
        })
      })
      console.log('Fallback auth state result:', result)

      // Final attempt: if no result but auth.currentUser exists, use it
      if (!result && auth.currentUser) {
        console.log('Using auth.currentUser as final fallback')
        result = {
          user: auth.currentUser,
          providerId: 'firebase',
          operationType: 'signIn',
        } as UserCredential
      }
    }
    
    if (result && result.user) {
      const user = result.user
      console.log('Firebase user:', { email: user.email, displayName: user.displayName, photoURL: user.photoURL })
      
      // Send Firebase user data to backend to get JWT
      console.log('Sending to backend: POST /auth/google')
      const response = await axios.post(`${getApiUrl()}/auth/google`, {
        email: user.email,
        name: user.displayName || user.email?.split('@')[0] || 'User',
        avatar: user.photoURL || null
      })
      
      console.log('Backend response:', response.data)
      
      if (response.data.success && response.data.token) {
        if (typeof window !== 'undefined') {
          localStorage.setItem('token', response.data.token)
          const redirectPath =
            sessionStorage.getItem('googleAuthRedirect') ||
            localStorage.getItem('googleAuthRedirect') ||
            '/employer'
          const photoURL =
            sessionStorage.getItem('googleAuthPhotoURL') ||
            localStorage.getItem('googleAuthPhotoURL') ||
            null
          sessionStorage.removeItem('googleAuthRedirect')
          sessionStorage.removeItem('googleAuthPhotoURL')
          localStorage.removeItem('googleAuthRedirect')
          localStorage.removeItem('googleAuthPhotoURL')
          return { user: response.data.user, token: response.data.token, redirectPath, photoURL }
        }

        return { user: response.data.user, token: response.data.token, redirectPath: '/employer', photoURL: null }
      }
      
      throw new Error(response.data.message || 'Failed to get backend JWT')
    }

    if (typeof window !== 'undefined' && auth.currentUser) {
      const user = auth.currentUser
      console.log('Current Firebase user:', { email: user.email, displayName: user.displayName })
      
      // Send Firebase user data to backend to get JWT
      console.log('Sending to backend: POST /auth/google')
      const response = await axios.post(`${getApiUrl()}/auth/google`, {
        email: user.email,
        name: user.displayName || user.email?.split('@')[0] || 'User',
        avatar: user.photoURL || null
      })
      
      console.log('Backend response:', response.data)
      
      if (response.data.success && response.data.token) {
        localStorage.setItem('token', response.data.token)
        const redirectPath =
          sessionStorage.getItem('googleAuthRedirect') ||
          localStorage.getItem('googleAuthRedirect') ||
          '/employer'
        const photoURL =
          sessionStorage.getItem('googleAuthPhotoURL') ||
          localStorage.getItem('googleAuthPhotoURL') ||
          null
        sessionStorage.removeItem('googleAuthRedirect')
        sessionStorage.removeItem('googleAuthPhotoURL')
        localStorage.removeItem('googleAuthRedirect')
        localStorage.removeItem('googleAuthPhotoURL')
        return { user: response.data.user, token: response.data.token, redirectPath, photoURL }
      }
      
      throw new Error(response.data.message || 'Failed to get backend JWT')
    }

    console.log('No Firebase auth result found')
    return null
  } catch (error: any) {
    console.error('Google redirect result error:', error)
    if (error.response?.data) {
      console.error('Backend error response:', error.response.data)
    }
    return null
  }
}

export async function signInWithEmail(email: string, password: string) {
  try {
    // Authenticate against backend to get app JWT
    const response = await axios.post(`${getApiUrl()}/auth/login`, {
      identifier: email,
      password,
    })

    if (response.data?.success && response.data?.token) {
      const token = response.data.token
      if (typeof window !== 'undefined') localStorage.setItem('token', token)
      try {
        await signInWithEmailAndPassword(auth, email, password)
      } catch (firebaseErr: any) {
        console.warn('Firebase sign-in sync failed:', firebaseErr)
      }
      return { user: response.data.user, token }
    }

    throw new Error(response.data?.message || 'Login failed')
  } catch (err: any) {
    console.error('Backend login error:', err)
    // Fallback: try Firebase auth if backend fails
    try {
      const result = await signInWithEmailAndPassword(auth, email, password)
      const user = result.user
      const token = await user.getIdToken()
      if (typeof window !== 'undefined') localStorage.setItem('token', token)
      return { user, token }
    } catch (fbErr: any) {
      console.error('Firebase login fallback error:', fbErr)
      throw new Error(fbErr?.message || err?.message || 'Login failed')
    }
  }
}

export async function signUpWithEmail(
  email: string,
  password: string,
  displayName?: string,
  photoURL?: string | null
) {
  try {
    const result = await createUserWithEmailAndPassword(auth, email, password)
    const user = result.user

    if (displayName || photoURL) {
      await updateProfile(user, {
        displayName: displayName || undefined,
        photoURL: photoURL || undefined,
      })
    }

    // Create backend user to obtain app JWT
    try {
      const response = await axios.post(`${getApiUrl()}/auth/register`, {
        name: displayName || user.email?.split('@')[0] || 'User',
        email,
        password,
        avatar: photoURL || null,
        role: 'employer',
      })

      if (response.data?.success && response.data?.token) {
        if (typeof window !== 'undefined') localStorage.setItem('token', response.data.token)
        return { user: response.data.user, token: response.data.token }
      }
    } catch (backendErr: any) {
      console.error('Backend register error:', backendErr)
      // Even if backend registration fails, return the Firebase user
      const token = await user.getIdToken()
      if (typeof window !== 'undefined') localStorage.setItem('token', token)
      return { user, token }
    }

    // Fallback: return Firebase user token if backend didn't return one
    const token = await user.getIdToken()
    if (typeof window !== 'undefined') localStorage.setItem('token', token)
    return { user, token }
  } catch (err: any) {
    // Surface helpful error information for debugging and provide user-friendly messages
    console.error('Firebase signUp error:', err)
    let message = 'Sign up failed. Please try again.'
    if (err?.code) {
      switch (err.code) {
        case 'auth/email-already-in-use':
          message = 'An account with this email already exists. Please sign in or reset your password.'
          break
        case 'auth/invalid-email':
          message = 'The email address is invalid. Please enter a valid email.'
          break
        case 'auth/weak-password':
          message = 'Password is too weak. Choose a stronger password.'
          break
        case 'auth/network-request-failed':
          message = 'Network error. Check your internet connection and try again.'
          break
        default:
          message = err.message || message
      }
    } else if (err?.message) {
      message = err.message
    }
    throw new Error(message)
  }
}

export async function sendPasswordReset(email: string) {
  await sendPasswordResetEmail(auth, email)
}

export async function updateFirebaseProfile(displayName: string | null, photoURL: string | null) {
  if (!auth.currentUser) {
    throw new Error('No authenticated user available to update profile.')
  }

  await updateProfile(auth.currentUser, {
    displayName: displayName || auth.currentUser.displayName,
    photoURL: photoURL || auth.currentUser.photoURL,
  })

  const token = await auth.currentUser.getIdToken(true)
  if (typeof window !== 'undefined') localStorage.setItem('token', token)
  return { user: auth.currentUser, token }
}

export async function signOut() {
  await firebaseSignOut(auth)
  if (typeof window !== 'undefined') {
    localStorage.removeItem('token')
    localStorage.removeItem('adminUser')
  }
}

export async function getCurrentToken() {
  const user = auth.currentUser
  if (!user) return null
  return await user.getIdToken()
}
