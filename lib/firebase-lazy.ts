// Lazy Firebase initialization - only load when needed
let firebaseAuthListener: (() => void) | null = null

export async function initializeFirebaseAuth(callback: (user: any) => void) {
  if (firebaseAuthListener) {
    return // Already initialized
  }

  const { auth } = await import('@/lib/firebase')
  const { onAuthStateChanged } = await import('firebase/auth')

  firebaseAuthListener = onAuthStateChanged(auth, callback)
  return firebaseAuthListener
}

export function unsubscribeFirebaseAuth() {
  if (firebaseAuthListener) {
    firebaseAuthListener()
    firebaseAuthListener = null
  }
}
