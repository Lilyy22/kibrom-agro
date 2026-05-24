import { Toaster as Sonner } from 'sonner'

export function Toaster() {
  return (
    <Sonner
      position="top-center"
      richColors
      toastOptions={{
        classNames: {
          toast:
            'bg-background text-foreground border border-border shadow-lg',
        },
      }}
    />
  )
}
