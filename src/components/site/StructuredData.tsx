import { COMPANY, SITE_ORIGIN } from '@/lib/site-config'

export function StructuredDataOrganization() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: COMPANY.legalName,
    alternateName: COMPANY.shortName,
    url: SITE_ORIGIN,
    logo: `${SITE_ORIGIN}/favicon.svg`,
    email: COMPANY.email,
    telephone: COMPANY.phone.replace(/\s/g, ''),
    foundingDate: String(COMPANY.foundingYear),
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Piaza, Atkilt Tera Bldg, 2nd floor',
      addressLocality: 'Addis Ababa',
      addressCountry: 'ET',
    },
    sameAs: [COMPANY.website, COMPANY.instagramUrl],
    description: COMPANY.tagline,
  }

  return (
    <script
      type="application/ld+json"
      // Trusted static JSON serialization of `data`
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
