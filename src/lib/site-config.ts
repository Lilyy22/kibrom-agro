/**
 * Public canonical URL for SEO, sitemap, and Open Graph.
 * Override with `VITE_SITE_URL` in `.env` for staging previews.
 */
export const SITE_ORIGIN =
  import.meta.env.VITE_SITE_URL?.replace(/\/$/, '') ??
  'https://www.kibromexim.com'

export const COMPANY = {
  legalName: 'Kibrom Niguse Agro-Export Agent',
  shortName: 'Kibrom Agro-Export',
  tagline: 'Premium Ethiopian agricultural exports since 2009.',
  foundingYear: 2009,
  email: 'info@kibromexim.com',
  /** Display only */
  phone: '+251 911 06 9271',
  /** office line */
  officePhone: '+251 116 39 4944',
  /** WhatsApp: country + number without + or spaces */
  whatsappDigits: '251911069271',
  website: 'https://www.kibromexim.com',
  address:
    'Piaza, Atkilt Tera Bldg, 2nd floor, Addis Ababa, Ethiopia',
  instagramHandle: '@Kibrom_niguse',
  instagramUrl: 'https://www.instagram.com/Kibrom_niguse',
} as const

export function absoluteUrl(pathOrUrl: string): string {
  if (pathOrUrl.startsWith('http')) return pathOrUrl
  const path = pathOrUrl.startsWith('/') ? pathOrUrl : `/${pathOrUrl}`
  return `${SITE_ORIGIN}${path}`
}
