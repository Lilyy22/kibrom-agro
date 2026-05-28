import { Mail, MessageCircle } from 'lucide-react'
import { mailtoInquiryHref, whatsappHref } from '@/lib/lead-links'

type Variant = 'light' | 'dark' | 'outline'

export function LeadChannels({
  variant = 'light',
  className = '',
  compact = false,
}: {
  variant?: Variant
  className?: string
  compact?: boolean
}) {
  const whatsapp = whatsappHref()
  const email = mailtoInquiryHref()

  const outer =
    variant === 'dark'
      ? compact
        ? 'flex flex-col sm:flex-row gap-2 sm:gap-3'
        : 'flex flex-col sm:flex-row gap-3 flex-wrap justify-center lg:justify-start'
      : 'flex flex-col sm:flex-row gap-3 flex-wrap'

  const wa =
    variant === 'dark'
      ? 'bg-leaf hover:bg-leaf/90 text-cream rounded-full px-6 py-3.5 font-semibold text-sm inline-flex items-center justify-center gap-2 shadow-lg shadow-black/25 transition-colors'
      : variant === 'outline'
        ? 'bg-transparent border-2 border-leaf text-leaf hover:bg-leaf hover:text-cream rounded-full px-6 py-3.5 font-semibold text-sm inline-flex items-center justify-center gap-2 transition-colors'
        : 'bg-leaf hover:bg-leaf/90 text-cream rounded-full px-6 py-3.5 font-semibold text-sm inline-flex items-center justify-center gap-2 shadow-lg shadow-black/15 transition-colors'

  const mail =
    variant === 'dark'
      ? 'bg-primary-foreground text-primary hover:bg-cream rounded-full px-6 py-3.5 font-semibold text-sm inline-flex items-center justify-center gap-2 transition-colors ring-2 ring-primary-foreground/20'
      : 'bg-espresso hover:bg-espresso/90 text-cream rounded-full px-6 py-3.5 font-semibold text-sm inline-flex items-center justify-center gap-2 transition-colors'

  return (
    <div className={`${outer} ${className}`}>
      <a href={whatsapp} target="_blank" rel="noopener noreferrer" className={wa}>
        <MessageCircle className="h-5 w-5 shrink-0" aria-hidden />
        Open WhatsApp
      </a>
      <a href={email} className={mail}>
        <Mail className="h-5 w-5 shrink-0" aria-hidden />
        Email inquiry
      </a>
    </div>
  )
}
