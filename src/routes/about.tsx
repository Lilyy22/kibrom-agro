import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { Target, Eye, Sprout, Handshake } from "lucide-react";
import logo from "@/assets/logo.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Kibrom Agro-Export" },
      { name: "description", content: "Since 2009 G.C, Kibrom Niguse Agro-Export Agent has supplied Ethiopian oil seeds, coffee, pulses and spices to buyers worldwide." },
      { property: "og:title", content: "About Kibrom Agro-Export" },
      { property: "og:description", content: "A decade and a half of disciplined Ethiopian agricultural exports." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  const pillars = [
    { icon: Eye, title: "Who We Are", text: "A legally registered Ethiopian exporter led by qualified, decades-experienced staff." },
    { icon: Target, title: "Our Mission", text: "Disease-free crops at fair prices — sourced, inspected, and shipped with care." },
    { icon: Sprout, title: "Our Service", text: "We supply Ethiopian-origin agricultural products to buyers across four continents." },
    { icon: Handshake, title: "Core Values", text: "100% reliability, transparency, and the highest quality at every stage." },
  ];
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 pt-20 pb-12 md:pt-28 grid lg:grid-cols-12 gap-10 items-center">
        <Reveal className="lg:col-span-7">
          <div className="text-xs uppercase tracking-[0.2em] text-leaf font-medium">About us</div>
          <h1 className="mt-3 font-display text-5xl md:text-6xl leading-[1.05]">A decade and a half of Ethiopian exports, done right.</h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Kibrom Niguse Agro-Export Agent has been engaged in agro-exportation since 2009 G.C — supplying
            pulses, washed and natural Arabica coffee, oil seeds and spices from Ethiopia to global markets.
            We are legally registered and operate strictly under international trade laws.
          </p>
        </Reveal>
        <Reveal delay={0.15} className="lg:col-span-5">
          <div className="aspect-square rounded-3xl bg-gradient-to-br from-leaf/20 via-accent/20 to-primary/10 flex items-center justify-center border border-border">
            <img src={logo} alt="Kibrom logo" className="h-1/2 w-auto animate-float" />
          </div>
        </Reveal>
      </section>

      <section className="bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6 py-24 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <div className="bg-background rounded-2xl p-8 h-full border border-border">
                <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  <p.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-xl">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-24 text-center">
        <Reveal>
          <p className="font-display text-2xl md:text-3xl italic leading-relaxed text-foreground/80">
            "We are well-experienced from the production level at the farm lands — through processing and
            exporting — for more than a decade and a half. We avoid the traditional way of market exchange,
            minimize risk, and treat every shipment like our own."
          </p>
          <div className="mt-6 text-xs uppercase tracking-widest text-muted-foreground">— Kibrom Niguse, Founder</div>
        </Reveal>
      </section>
    </>
  );
}
