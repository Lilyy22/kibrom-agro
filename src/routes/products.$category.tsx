import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { categories, type Category } from "@/components/site/data";
import { LeadForm } from "@/components/site/LeadForm";
import { ArrowLeft, Check } from "lucide-react";

export const Route = createFileRoute("/products/$category")({
  loader: ({ params }) => {
    const cat = categories.find(c => c.slug === params.category);
    if (!cat) throw notFound();
    return { cat };
  },
  head: ({ params, loaderData }) => {
    const name = loaderData?.cat.name ?? params.category;
    return {
      meta: [
        { title: `${name} — Kibrom Agro-Export` },
        { name: "description", content: `Ethiopian ${name.toLowerCase()} export specifications: varieties, purity, moisture, and quality grades.` },
        { property: "og:title", content: `${name} — Kibrom Agro-Export` },
        { property: "og:description", content: loaderData?.cat.tagline ?? "" },
        { property: "og:url", content: `/products/${params.category}` },
        { property: "og:image", content: loaderData?.cat.image ?? "" },
      ],
      links: [{ rel: "canonical", href: `/products/${params.category}` }],
    };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-6 py-32 text-center">
      <h1 className="font-display text-4xl">Category not found</h1>
      <Link to="/products" className="mt-6 inline-flex text-primary hover:underline">Back to products</Link>
    </div>
  ),
  errorComponent: ({ error, reset }) => (
    <div className="mx-auto max-w-3xl px-6 py-32 text-center">
      <h1 className="font-display text-2xl">Couldn't load this category</h1>
      <p className="mt-2 text-sm text-muted-foreground">{error.message}</p>
      <button onClick={reset} className="mt-6 rounded-full bg-primary px-5 py-2 text-sm text-primary-foreground">Try again</button>
    </div>
  ),
  component: Category,
});

function Category() {
  const { cat } = Route.useLoaderData() as { cat: Category };
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={cat.image} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-espresso/90 via-espresso/70 to-espresso/40" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-28 md:pt-28 md:pb-36 text-cream">
          <Reveal>
            <Link to="/products" className="inline-flex items-center gap-2 text-sm opacity-80 hover:opacity-100">
              <ArrowLeft className="h-4 w-4" /> All products
            </Link>
            <div className="mt-6 text-xs uppercase tracking-[0.2em] text-accent">{cat.items.length} varieties</div>
            <h1 className="mt-3 font-display text-5xl md:text-7xl max-w-3xl">{cat.name}</h1>
            <p className="mt-5 text-lg max-w-xl opacity-90">{cat.tagline}</p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cat.items.map((it, i) => (
            <Reveal key={it.name} delay={i * 0.05}>
              <div className="h-full rounded-2xl border border-border bg-card p-7 hover:border-primary/40 hover:-translate-y-1 transition-all duration-300">
                <div className="text-xs uppercase tracking-widest text-leaf">Variety {String(i + 1).padStart(2, "0")}</div>
                <h3 className="mt-2 font-display text-2xl">{it.name}</h3>
                <ul className="mt-5 space-y-2">
                  {it.specs.map(s => (
                    <li key={s} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="h-4 w-4 mt-0.5 text-leaf flex-shrink-0" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 sm:px-6 pb-24">
        <Reveal>
          <div className="text-center mb-8">
            <div className="text-xs uppercase tracking-[0.2em] text-leaf font-medium">Request specs</div>
            <h2 className="mt-3 font-display text-3xl md:text-4xl">Inquire about {cat.name}</h2>
            <p className="mt-3 text-muted-foreground">Send a 30-second inquiry — straight to our WhatsApp or email.</p>
          </div>
          <LeadForm defaultProduct={cat.name} />
        </Reveal>
      </section>
    </>
  );
}
