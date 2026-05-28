import { COMPANY } from '@/lib/site-config'

const PRESET_INQUIRY = [
  `Hello ${COMPANY.shortName} team,`,
  '',
  `I'd like an export quote:`,
  '• Product & grade:',
  '• Estimated volume:',
  '• Destination port / country:',
  '• Target timeline:',
  '',
  'Thank you.',
].join('\n')

export function whatsappHref(message = PRESET_INQUIRY): string {
  return `https://wa.me/${COMPANY.whatsappDigits}?text=${encodeURIComponent(message)}`
}

export function mailtoInquiryHref(
  subject = 'Export inquiry — Kibrom Agro-Export',
  body = PRESET_INQUIRY,
): string {
  return `mailto:${COMPANY.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}
