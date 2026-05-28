import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Leaf, Globe2, ShieldCheck, Award, MessageCircle, Truck, BadgeCheck } from "lucide-react";
import heroFarm from "@/assets/hero-farm.jpg";
// import { LogoMark } from "@/components/site/LogoMark";
import sesame from "@/assets/sesame.jpg";
import coffee from "@/assets/coffee.jpg";
// import pulses from "@/assets/pulses.jpg";
import spices from "@/assets/spices.jpg";
import hero from "@/assets/hero.jpg";
import { Reveal } from "@/components/site/Reveal";
import { LeadForm } from "@/components/site/LeadForm";
import { categories, countries, testimonials } from "@/components/site/data";
import { CONTACT } from "@/lib/lead";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kibrom Agro-Export — Ethiopian Coffee, Pulses, Oil Seeds & Spices" },
      { name: "description", content: "Premium Ethiopian agricultural exports since 2009. Buy Arabica coffee, sesame, pulses and spices direct — verified specs, fair quotes, shipped worldwide in days." },
      { name: "keywords", content: "Ethiopian coffee export, Yirgacheffe, Sidamo, sesame seeds, pulses, kidney beans, chickpeas, turmeric, agro export Ethiopia, Addis Ababa exporter" },
      { property: "og:title", content: "Kibrom Agro-Export — Premium Ethiopian Exports" },
      { property: "og:description", content: "Arabica coffee, oil seeds, pulses & spices from Ethiopia. Trusted by buyers across 9+ countries." },
      { property: "og:url", content: "/" },
      { property: "og:image", content: heroFarm },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Kibrom Niguse Agro-Export Agent",
        url: "/",
        logo: "/favicon.ico",
        foundingDate: "2009",
        address: { "@type": "PostalAddress", streetAddress: "Abdisa Aga Bldg., Office 03", addressLocality: "Addis Ababa", addressCountry: "ET" },
        contactPoint: [{ "@type": "ContactPoint", telephone: "+251-911-06-9271", contactType: "sales", email: "info@kibromexim.com", areaServed: ["UK","IT","CN","DE","RU","ID","AE","IN"] }],
      }),
    }],
  }),
  component: Home,
});

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yImg = useTransform(scrollYProgress, [0, 1], [0, 120]);

  return (
    <section
      ref={ref}
      className="relative isolate -mt-16 sm:-mt-18 flex min-h-[100svh] items-center overflow-hidden"
    >
      {/* BG image — z-0 (not negative) so it stays above page bg-background */}
      <motion.div
        style={{ y: yImg }}
        className="pointer-events-none absolute inset-0 z-0"
        aria-hidden
      >
        <img
          src={heroFarm}
          alt=""
          className="h-full min-h-full w-full object-cover object-center"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-espresso/75 via-espresso/45 to-primary/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-green-800/20 via-green-800/20 to-transparent" />
      </motion.div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-10 px-4 pt-28 pb-16 sm:px-6 sm:pt-32 md:pb-24 lg:grid-cols-12">
        <div className="lg:col-span-7 text-cream">
          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-cream/25 bg-cream/10 backdrop-blur px-4 py-1.5 text-xs font-medium"
          >
            <Leaf className="h-3.5 w-3.5 text-accent" />
            Since 2009 G.C · Addis Ababa, Ethiopia
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-5 font-display text-4xl sm:text-6xl md:text-7xl leading-[1.02]"
          >
            Ethiopia's finest, <span className="italic text-accent">delivered</span> to the world.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-5 max-w-xl text-base sm:text-lg opacity-90 leading-relaxed"
          >
            Premium Arabica coffee, oil seeds, pulses and spices — sourced from highland farms, processed to spec, shipped on time. Send your inquiry in 30 seconds.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a href="#quote" className="group inline-flex items-center gap-2 rounded-full bg-cream text-espresso px-6 py-3 text-sm font-semibold hover:scale-105 transition-transform">
              Get a free quote <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href={`https://wa.me/${CONTACT.whatsapp}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-cream/40 bg-cream/5 backdrop-blur px-6 py-3 text-sm font-medium text-cream hover:bg-cream/10 transition">
              <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
            </a>
          </motion.div>
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-xs uppercase tracking-[0.2em] text-cream/80">
            <span className="inline-flex items-center gap-2"><BadgeCheck className="h-4 w-4 text-accent" /> Verified Quality</span>
            <span className="inline-flex items-center gap-2"><Truck className="h-4 w-4 text-accent" /> Worldwide Shipping</span>
            <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-accent" /> 15+ Years</span>
          </div>
        </div>

        <div className="lg:col-span-5 relative hidden lg:block">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -4 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 1, ease: "easeOut" }}
            className="relative aspect-square rounded-[2.5rem] bg-gradient-to-br from-primary/30 via-accent/30 to-leaf/30 backdrop-blur-sm p-8 border border-cream/20 shadow-2xl"
          >
            <img src={hero} alt="Kibrom Agro-Export logo" className="m-auto w-full h-full object-cover drop-shadow-2xl animate-float rounded-3xl" />
            <motion.img initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} src={coffee} alt="" className="absolute -top-6 -right-6 h-32 w-32 rounded-2xl object-cover border-4 border-cream shadow-xl rotate-6" />
            {/* <motion.img initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} src={pulses} alt="" className="absolute -bottom-6 -left-6 h-32 w-32 rounded-2xl object-cover border-4 border-cream shadow-xl -rotate-6" /> */}
            <motion.img initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1 }} src={sesame} alt="" className="absolute -bottom-4 right-8 h-24 w-24 rounded-full object-cover border-4 border-cream shadow-xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function QuoteBand() {
  return (
    <section id="quote" className="relative -mt-12 md:-mt-20 z-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="grid lg:grid-cols-5 gap-0 rounded-3xl overflow-hidden shadow-2xl border border-border bg-card">
            <div className="lg:col-span-2 bg-primary text-primary-foreground p-8 md:p-10">
              <div className="text-xs uppercase tracking-[0.2em] text-accent">Request a Quote</div>
              <h2 className="mt-3 font-display text-3xl md:text-4xl">Quotes in 1 business day.</h2>
              <p className="mt-4 text-sm opacity-85">Tell us product, volume, port and timeline. We'll come back with full specs, samples on request, and a fair FOB / CIF quote.</p>
              <ul className="mt-6 space-y-2 text-sm opacity-90">
                <li>· Direct from origin (Addis Ababa)</li>
                <li>· Incoterm 2020 &amp; UCP600</li>
                <li>· Sortex-cleaned, HPS, fumigated</li>
              </ul>
            </div>
            <div className="lg:col-span-3 p-6 md:p-8 bg-background">
              <LeadForm compact />
            </div>
          </div>
        </Reveal>
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
    <section className="bg-primary text-primary-foreground mt-24">
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
    <section className="mx-auto max-w-7xl px-4 sm:px-6 py-20 md:py-28">
      <Reveal>
        <div className="flex items-end justify-between gap-6 flex-wrap mb-10">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-leaf font-medium">Our catalogue</div>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl max-w-2xl">Four pillars of Ethiopian agriculture.</h2>
          </div>
          <Link to="/products" className="text-sm font-medium text-primary hover:underline inline-flex items-center gap-1">
            View full catalogue <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Reveal>
      <div className="grid sm:grid-cols-2 gap-5 md:gap-6">
        {categories.map((c, i) => (
          <Reveal key={c.slug} delay={i * 0.08} className="h-full">
            <Link
              to="/products/$category"
              params={{ category: c.slug }}
              className="group relative isolate flex aspect-[14/11] min-h-[220px] overflow-hidden rounded-3xl border border-border bg-espresso shadow-sm"
            >
              <img
                src={c.image}
                alt={c.name}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 z-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div
                className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-espresso/95 via-espresso/35 to-espresso/10"
                aria-hidden
              />
              <div className="relative z-10 mt-auto w-full p-6 text-cream sm:p-8">
                <div className="text-xs uppercase tracking-widest opacity-75">
                  Category 0{i + 1}
                </div>
                <h3 className="mt-1 font-display text-2xl sm:text-3xl md:text-4xl">{c.name}</h3>
                <p className="mt-2 max-w-md text-sm opacity-90">{c.tagline}</p>
                <div className="mt-3 inline-flex items-center gap-2 text-sm font-medium">
                  View specifications
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
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
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-20 md:py-24 grid md:grid-cols-3 gap-6">
        {values.map((v, i) => (
          <Reveal key={v.title} delay={i * 0.1}>
            <div className="rounded-2xl bg-background p-7 md:p-8 h-full border border-border hover:shadow-lg transition-shadow">
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
  const clientLogos = ["Sinopharm Fortune Way", "Citexic Corporation", "Highland Roasters", "Mediterranean Pulses Co.", "Levant Spice Trading", "Pacific Bean Importers"];
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 py-20 md:py-24">
      <Reveal>
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-xs uppercase tracking-[0.2em] text-leaf font-medium">Trusted globally</div>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl">From Ethiopian highlands to nine countries.</h2>
        </div>
      </Reveal>
      <div className="mt-10 overflow-hidden">
        <div className="flex gap-4 animate-marquee whitespace-nowrap">
          {[...countries, ...countries, ...countries].map((c, i) => (
            <span key={i} className="inline-flex items-center gap-3 rounded-full border border-border bg-card px-5 sm:px-6 py-2.5 sm:py-3 font-display text-lg sm:text-xl">
              <span className="h-2 w-2 rounded-full bg-leaf" /> {c}
            </span>
          ))}
        </div>
      </div>
      <Reveal>
        <div className="mt-14 pt-10 border-t border-border">
          <p className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">Selected clients &amp; partners</p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {clientLogos.map(name => (
              <span key={name} className="font-display text-base sm:text-lg text-muted-foreground/80 hover:text-primary transition-colors">
                {name}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="bg-espresso text-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-20 md:py-24 grid md:grid-cols-2 gap-10">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.2em] text-accent font-medium">Buyer reviews</div>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl">Words from our global partners.</h2>
          <p className="mt-5 text-cream/70 max-w-md">A decade and a half of consistent quality, written in the inboxes of our clients.</p>
        </Reveal>
        <div className="space-y-5">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <blockquote className="rounded-2xl border border-cream/15 bg-cream/5 p-6 backdrop-blur">
                <p className="font-display text-lg sm:text-xl italic leading-snug">"{t.quote}"</p>
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
    <section className="mx-auto max-w-7xl px-4 sm:px-6 py-20 md:py-24">
      <Reveal>
        <div className="rounded-[2rem] sm:rounded-[2.5rem] bg-gradient-to-br from-primary via-primary to-leaf p-10 sm:p-14 md:p-20 text-primary-foreground relative overflow-hidden">
          <img src={spices} alt="" aria-hidden className="absolute -right-12 -bottom-12 h-80 w-80 rounded-full object-cover opacity-30" />
          <div className="relative max-w-2xl">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl">Source your next container from Ethiopia.</h2>
            <p className="mt-4 opacity-90 text-sm sm:text-base">Send a 30-second inquiry — straight to our WhatsApp or email.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#quote" className="inline-flex items-center gap-2 rounded-full bg-cream text-espresso px-7 py-3.5 text-sm font-semibold hover:scale-105 transition-transform">
                Start the conversation <ArrowRight className="h-4 w-4" />
              </a>
              <a href={`https://wa.me/${CONTACT.whatsapp}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-cream/30 px-7 py-3.5 text-sm font-medium hover:bg-cream/10 transition">
                <MessageCircle className="h-4 w-4" /> WhatsApp us
              </a>
            </div>
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
      <QuoteBand />
      <Stats />
      <Categories />
      <Values />
      <Reach />
      <Testimonials />
      <CTA />
    </>
  );
}
