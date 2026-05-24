import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Link,
} from '@tanstack/react-router'

import { Navbar } from '@/components/site/Navbar'
import { Footer } from '@/components/site/Footer'
import { Toaster } from '@/components/ui/sonner'

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl text-primary">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          This page wandered off the farm.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex rounded-full bg-primary px-5 py-2 text-sm text-primary-foreground hover:bg-primary/90"
        >
          Go home
        </Link>
      </div>
    </div>
  )
}

function ErrorComponent({
  error,
  reset,
}: {
  error: Error | unknown
  reset: () => void
}) {
  console.error(error)
  const router = useRouter()
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-xl">Something went wrong</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Please refresh or head back home.
        </p>
        <div className="mt-6 flex justify-center gap-2">
          <button
            type="button"
            onClick={() => {
              void router.invalidate()
              reset()
            }}
            className="rounded-full bg-primary px-5 py-2 text-sm text-primary-foreground"
          >
            Try again
          </button>
          <Link
            to="/"
            className="rounded-full border border-input px-5 py-2 text-sm"
          >
            Home
          </Link>
        </div>
      </div>
    </div>
  )
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()(
  {
    head: () => ({
      meta: [
        { charSet: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          title:
            'Kibrom Niguse Agro-Export Agent — Ethiopian Coffee, Pulses, Oil Seeds & Spices',
        },
        {
          name: 'description',
          content:
            'Premium Ethiopian agricultural exports since 2009: Arabica coffee, oil seeds, pulses, and spices. Shipping worldwide with quality and reliability.',
        },
        { property: 'og:site_name', content: 'Kibrom Agro-Export' },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
      links: [
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com',
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossOrigin: 'anonymous',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&display=swap',
        },
      ],
    }),
    component: RootComponent,
    notFoundComponent: NotFoundComponent,
    errorComponent: ErrorComponent,
  },
)

function RootComponent() {
  const { queryClient } = Route.useRouteContext()
  return (
    <QueryClientProvider client={queryClient}>
      <HeadContent />
      <div className="flex min-h-screen flex-col bg-background font-sans text-foreground antialiased">
        <Navbar />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
        <Toaster />
      </div>
    </QueryClientProvider>
  )
}
