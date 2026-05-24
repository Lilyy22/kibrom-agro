import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { categories } from "@/components/site/data";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Kibrom Agro-Export" },
      { name: "description", content: "Ethiopian oil seeds, Arabica coffee, pulses and spices — full export specifications for global buyers." },
      { property: "og:title", content: "Products — Kibrom Agro-Export" },
      { property: "og:description", content: "Browse our full Ethiopian agricultural catalogue." },
      { property: "og:url", content: "/products" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: Products,
});

function Products() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 pt-20 pb-12 md:pt-28">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.2em] text-leaf font-medium">Catalogue</div>
          <h1 className="mt-3 font-display text-5xl md:text-6xl max-w-3xl">Premium Ethiopian agricultural products.</h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Every product is machine-cleaned, inspected, and fumigated prior to shipment.
            Specifications meet international standards across our four categories.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 space-y-6">
        {categories.map((c, i) => (
          <Reveal key={c.slug} delay={i * 0.06}>
            <Link
              to="/products/$category"
              params={{ category: c.slug }}
              className="group grid md:grid-cols-2 gap-0 overflow-hidden rounded-3xl border border-border bg-card hover:shadow-xl transition-shadow"
            >
              <div className="relative aspect-[4/3] md:aspect-auto overflow-hidden">
                <img src={c.image} alt={c.name} className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-110" />
              </div>
              <div className="p-10 md:p-14 flex flex-col justify-center">
                <div className="text-xs uppercase tracking-widest text-leaf">0{i + 1} · {c.items.length} varieties</div>
                <h2 className="mt-3 font-display text-4xl">{c.name}</h2>
                <p className="mt-3 text-muted-foreground">{c.tagline}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {c.items.slice(0, 4).map(it => (
                    <li key={it.name} className="text-xs rounded-full bg-secondary px-3 py-1 text-secondary-foreground">{it.name}</li>
                  ))}
                  {c.items.length > 4 && <li className="text-xs rounded-full bg-secondary px-3 py-1">+{c.items.length - 4}</li>}
                </ul>
                <div className="mt-6 inline-flex items-center gap-2 text-primary font-medium text-sm">
                  See specifications <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          </Reveal>
        ))}
      </section>
    </>
  );
}
