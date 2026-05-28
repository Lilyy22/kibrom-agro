import { createFileRoute, Link } from '@tanstack/react-router'
import { Check } from 'lucide-react'

import { Reveal } from '@/components/site/Reveal'
import { categories } from '@/components/site/data'

export const Route = createFileRoute('/specifications')({
  head: () => ({
    meta: [
      {
        title: 'Product specifications — Kibrom Agro-Export Ethiopia',
      },
      {
        name: 'description',
        content:
          'Export specifications for Ethiopian arabica coffee, sesame and oil seeds, pulses, and spices — purity, moisture, grading and QA checkpoints.',
      },
      { property: 'og:url', content: '/specifications' },
    ],
    links: [{ rel: 'canonical', href: '/specifications' }],
  }),
  component: SpecificationsPage,
})

function SpecificationsPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 sm:px-6 pt-16 pb-10 md:pt-24">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.22em] text-leaf font-semibold">
            Technical library
          </p>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl md:text-[3.25rem] leading-tight">
            Product specifications &amp; descriptions
          </h1>
          <p className="mt-6 max-w-3xl text-muted-foreground leading-relaxed">
            Full export dossier for procurement and QA teams — aligned with our company profile.
            Need a signed COA or sample?{' '}
            <Link to="/contact" className="text-primary font-medium hover:underline">
              Contact the export desk
            </Link>
            .
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl space-y-16 px-4 sm:px-6 pb-24">
        {categories.map((cat, ci) => (
          <Reveal key={cat.slug} delay={ci * 0.05}>
            <article id={cat.slug} className="scroll-mt-28 rounded-3xl border border-border bg-card overflow-hidden">
              <div className="grid md:grid-cols-[1fr,minmax(0,320px)] gap-0 border-b border-border">
                <div className="p-8 md:p-10">
                  <p className="text-xs uppercase tracking-widest text-leaf">{cat.name}</p>
                  <h2 className="mt-2 font-display text-3xl">{cat.name}</h2>
                  <p className="mt-4 text-muted-foreground leading-relaxed">{cat.overview}</p>
                  <Link
                    to="/products/$category"
                    params={{ category: cat.slug }}
                    className="mt-6 inline-flex text-sm font-semibold text-primary hover:underline"
                  >
                    View product gallery →
                  </Link>
                </div>
                <div className="relative min-h-[200px] md:min-h-full">
                  <img src={cat.image} alt="" className="absolute inset-0 h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 to-transparent md:bg-gradient-to-l" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border">
                {cat.items.map((item) => (
                  <div key={item.name} className="p-8 md:p-9">
                    <h3 className="font-display text-xl">{item.name}</h3>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                    <ul className="mt-5 space-y-2">
                      {item.specs.map((spec) => (
                        <li key={spec} className="flex gap-2 text-sm text-muted-foreground">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-leaf" />
                          {spec}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </section>
    </>
  )
}
