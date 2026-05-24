import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Leaf, Globe2, ShieldCheck, Award } from "lucide-react";
import logo from "@/assets/logo.png";
import sesame from "@/assets/sesame.jpg";
import coffee from "@/assets/coffee.jpg";
import pulses from "@/assets/pulses.jpg";
import spices from "@/assets/spices.jpg";
import { Reveal } from "@/components/site/Reveal";
import { categories, countries, testimonials } from "@/components/site/data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kibrom Agro-Export — Ethiopian Coffee, Pulses, Oil Seeds & Spices" },
      { name: "description", content: "Premium Ethiopian agricultural exports since 2009. Arabica coffee, sesame, pulses, and spices shipped worldwide with verified quality." },
      { property: "og:title", content: "Kibrom Agro-Export — Premium Ethiopian Exports" },
      { property: "og:description", content: "Arabica coffee, oil seeds, pulses & spices from Ethiopia. Trusted by buyers across 9+ countries." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-gradient-to-b from-cream via-background to-secondary/40">
      <motion.div style={{ y: y1 }} className="pointer-events-none absolute -top-10 -left-16 h-72 w-72 rounded-full bg-leaf/20 blur-3xl" />
      <motion.div style={{ y: y2 }} className="pointer-events-none absolute -bottom-20 -right-10 h-96 w-96 rounded-full bg-accent/30 blur-3xl" />
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-28 md:pt-28 md:pb-36 grid lg:grid-cols-12 gap-12 items-center relative">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 backdrop-blur px-4 py-1.5 text-xs font-medium text-muted-foreground"
          >
            <Leaf className="h-3.5 w-3.5 text-leaf" />
            Since 2009 G.C · Addis Ababa, Ethiopia
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 font-display text-5xl sm:text-6xl md:text-7xl leading-[1.02] text-foreground"
          >
            Ethiopia's finest, <span className="italic text-primary">delivered</span> to the world.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed"
          >
            Kibrom Niguse Agro-Export Agent supplies premium Arabica coffee, oil seeds, pulses
            and spices — sourced from highland farms, processed to spec, and shipped on time.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <Link to="/products" className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition">
              Explore products <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 backdrop-blur px-6 py-3 text-sm font-medium hover:bg-secondary transition">
              Request a quote
            </Link>
          </motion.div>
          <div className="mt-10 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <span className="font-display italic text-base normal-case text-primary">"Live Live & Learn"</span>
          </div>
        </div>

        <div className="lg:col-span-5 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -6 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative aspect-square rounded-[2.5rem] bg-gradient-to-br from-primary/15 via-accent/20 to-leaf/20 p-8 border border-border shadow-2xl"
          >
            <img src={logo} alt="Kibrom Agro-Export logo" className="absolute inset-0 m-auto h-1/2 w-auto drop-shadow-xl animate-float" />
            <motion.img
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
              src={coffee} alt="Coffee beans" className="absolute -top-6 -right-6 h-32 w-32 rounded-2xl object-cover border-4 border-background shadow-lg rotate-6"
            />
            <motion.img
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
              src={pulses} alt="Pulses" className="absolute -bottom-6 -left-6 h-32 w-32 rounded-2xl object-cover border-4 border-background shadow-lg -rotate-6"
            />
            <motion.img
              initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1 }}
              src={sesame} alt="Sesame" className="absolute -bottom-4 right-8 h-24 w-24 rounded-full object-cover border-4 border-background shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const items = [
    { value: "15+", label: "Years exporting" },
    { value: "9+", label: "Countries served" },
    { value: "20+", label: "Product varieties" },
    { value: "100%", label: "Reliability promise" },
  ];
  return (
    <section className="border-y border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        {items.map((it, i) => (
          <Reveal key={it.label} delay={i * 0.08}>
            <div>
              <div className="font-display text-4xl md:text-5xl">{it.value}</div>
              <div className="mt-1 text-xs uppercase tracking-widest opacity-70">{it.label}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Categories() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
      <Reveal>
        <div className="flex items-end justify-between gap-6 flex-wrap mb-12">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-leaf font-medium">Our catalogue</div>
            <h2 className="mt-3 font-display text-4xl md:text-5xl max-w-2xl">Four pillars of Ethiopian agriculture.</h2>
          </div>
          <Link to="/products" className="text-sm font-medium text-primary hover:underline inline-flex items-center gap-1">
            View full catalogue <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Reveal>
      <div className="grid md:grid-cols-2 gap-6">
        {categories.map((c, i) => (
          <Reveal key={c.slug} delay={i * 0.1}>
            <Link
              to="/products/$category"
              params={{ category: c.slug }}
              className="group relative block overflow-hidden rounded-3xl border border-border bg-card aspect-[16/10]"
            >
              <img src={c.image} alt={c.name} className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/90 via-espresso/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-cream">
                <div className="text-xs uppercase tracking-widest opacity-70">Category 0{i + 1}</div>
                <h3 className="font-display text-3xl md:text-4xl mt-1">{c.name}</h3>
                <p className="mt-2 text-sm opacity-90 max-w-md">{c.tagline}</p>
                <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium">
                  Explore <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Values() {
  const values = [
    { icon: ShieldCheck, title: "100% Reliable", text: "Transparent dealings, on-time shipments, every contract honoured." },
    { icon: Award, title: "Verified Quality", text: "Sortex-cleaned, HPS, fumigated — inspected by our team at the warehouse." },
    { icon: Globe2, title: "Global Logistics", text: "Incoterm 2020 & UCP600. We handle docs end-to-end so you don't have to." },
  ];
  return (
    <section className="bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 py-24 grid lg:grid-cols-3 gap-8">
        {values.map((v, i) => (
          <Reveal key={v.title} delay={i * 0.1}>
            <div className="rounded-2xl bg-background p-8 h-full border border-border hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                <v.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-2xl">{v.title}</h3>
              <p className="mt-2 text-muted-foreground text-sm leading-relaxed">{v.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Reach() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <Reveal>
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-xs uppercase tracking-[0.2em] text-leaf font-medium">Global reach</div>
          <h2 className="mt-3 font-display text-4xl md:text-5xl">From Ethiopian highlands to nine countries.</h2>
        </div>
      </Reveal>
      <div className="mt-12 overflow-hidden">
        <div className="flex gap-4 animate-marquee whitespace-nowrap">
          {[...countries, ...countries, ...countries].map((c, i) => (
            <span key={i} className="inline-flex items-center gap-3 rounded-full border border-border bg-card px-6 py-3 font-display text-xl">
              <span className="h-2 w-2 rounded-full bg-leaf" />
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="bg-espresso text-cream">
      <div className="mx-auto max-w-7xl px-6 py-24 grid md:grid-cols-2 gap-10">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.2em] text-accent font-medium">Buyer reviews</div>
          <h2 className="mt-3 font-display text-4xl md:text-5xl">Words from our global partners.</h2>
          <p className="mt-5 text-cream/70 max-w-md">A decade and a half of consistent quality, written in the inboxes of our clients.</p>
        </Reveal>
        <div className="space-y-6">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <blockquote className="rounded-2xl border border-cream/15 bg-cream/5 p-6 backdrop-blur">
                <p className="font-display text-xl italic leading-snug">"{t.quote}"</p>
                <footer className="mt-4 text-xs uppercase tracking-widest text-accent">— {t.from}</footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <Reveal>
        <div className="rounded-[2.5rem] bg-gradient-to-br from-primary via-primary to-leaf p-12 md:p-20 text-primary-foreground relative overflow-hidden">
          <img src={spices} alt="" className="absolute -right-12 -bottom-12 h-80 w-80 rounded-full object-cover opacity-30" />
          <div className="relative max-w-2xl">
            <h2 className="font-display text-4xl md:text-5xl">Source your next container from Ethiopia.</h2>
            <p className="mt-4 opacity-90">Tell us what you need — variety, volume, port. We'll come back with specs and a fair quote.</p>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-cream text-espresso px-7 py-3.5 text-sm font-medium hover:scale-105 transition-transform">
              Start the conversation <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Categories />
      <Values />
      <Reach />
      <Testimonials />
      <CTA />
    </>
  );
}
