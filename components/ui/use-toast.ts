// This is a simplified version. You can use the actual shadcn/ui toast component
import { useCallback, useMemo } from 'react'
import { toast as sonnerToast } from 'sonner'

type ToastFn = (...args: any[]) => any

export function useToast(): { toast: ToastFn; dismiss: any } {
  const toast = useCallback((...args: any[]) => (sonnerToast as any)(...args), [])
  const dismiss = useMemo(() => sonnerToast.dismiss, [])

  return {
    toast,
    dismiss,
  }
}
