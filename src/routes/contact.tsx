import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { Mail, Phone, MapPin, Globe, AtSign, MessageCircle } from "lucide-react";
import { LeadForm } from "@/components/site/LeadForm";
import { CONTACT } from "@/lib/lead";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Kibrom Agro-Export — Request a Quote from Ethiopia" },
      { name: "description", content: "Send an inquiry directly to our WhatsApp or email. Coffee, sesame, pulses and spices from Addis Ababa, Ethiopia — quotes within one business day." },
      { property: "og:title", content: "Contact Kibrom Agro-Export" },
      { property: "og:description", content: "Reach our Addis Ababa team for quotes and inquiries — auto-send via WhatsApp or email." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const channels = [
    { icon: Phone, label: "Phone", value: "+251 911 06 9271", href: "tel:+251911069271" },
    { icon: Phone, label: "Office", value: "+251 116 39 4944", href: "tel:+251116394944" },
    { icon: Mail, label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
    { icon: MessageCircle, label: "WhatsApp", value: "+251 911 06 9271", href: `https://wa.me/${CONTACT.whatsapp}` },
    { icon: Globe, label: "Website", value: "www.kibromexim.com", href: "https://www.kibromexim.com" },
    { icon: AtSign, label: "Social", value: "@kbagro8", href: "https://instagram.com/kbagro8" },
    { icon: MapPin, label: "Office", value: "Abdisa Aga Bldg., Office No. 03, Addis Ababa, Ethiopia" },
  ];

  return (
    <>
      <section className="mx-auto max-w-7xl px-6 pt-16 pb-10 md:pt-24 md:pb-14">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.2em] text-leaf font-medium">Contact</div>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl md:text-6xl max-w-3xl">Let's source your next shipment.</h1>
          <p className="mt-5 max-w-2xl text-base sm:text-lg text-muted-foreground">
            Fill the form and send your inquiry straight to our team on <span className="text-foreground font-medium">WhatsApp</span> or
            <span className="text-foreground font-medium"> email</span> — we reply within one business day.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 pb-24 grid lg:grid-cols-5 gap-8">
        <Reveal className="lg:col-span-3">
          <LeadForm />
        </Reveal>
        <Reveal delay={0.1} className="lg:col-span-2">
          <div className="rounded-3xl bg-primary text-primary-foreground p-8 md:p-9 h-full">
            <h2 className="font-display text-2xl">Direct channels</h2>
            <p className="mt-2 text-sm opacity-80">Tap any channel — we answer fast.</p>
            <ul className="mt-8 space-y-5">
              {channels.map(c => {
                const Inner = (
                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-xl bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                      <c.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-widest opacity-70">{c.label}</div>
                      <div className="text-sm mt-0.5 break-words">{c.value}</div>
                    </div>
                  </div>
                );
                return (
                  <li key={c.label}>
                    {c.href ? <a href={c.href} target="_blank" rel="noopener noreferrer" className="block hover:opacity-90 transition-opacity">{Inner}</a> : Inner}
                  </li>
                );
              })}
            </ul>
          </div>
        </Reveal>
      </section>
    </>
  );
}
