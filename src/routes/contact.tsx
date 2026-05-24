import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { Mail, Phone, MapPin, Globe, AtSign, Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Kibrom Agro-Export" },
      { name: "description", content: "Talk to Kibrom Niguse Agro-Export Agent. Addis Ababa, Ethiopia. Phone, email, and quote requests." },
      { property: "og:title", content: "Contact Kibrom Agro-Export" },
      { property: "og:description", content: "Reach our team in Addis Ababa for quotes and inquiries." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
    toast.success("Thanks — we'll get back to you within one business day.");
    (e.target as HTMLFormElement).reset();
    setTimeout(() => setSent(false), 3000);
  }

  const channels = [
    { icon: Phone, label: "Phone", value: "+251 911 06 9271", href: "tel:+251911069271" },
    { icon: Phone, label: "Office", value: "+251 116 39 4944", href: "tel:+251116394944" },
    { icon: Mail, label: "Email", value: "info@kibromexim.com", href: "mailto:info@kibromexim.com" },
    { icon: Globe, label: "Website", value: "www.kibromexim.com", href: "https://www.kibromexim.com" },
    { icon: AtSign, label: "Social", value: "@kbagro8", href: "https://instagram.com/kbagro8" },
    { icon: MapPin, label: "Office", value: "Abdisa Aga Bldg., Office No. 03, Addis Ababa, Ethiopia" },
  ];

  return (
    <>
      <section className="mx-auto max-w-7xl px-6 pt-20 pb-12 md:pt-28">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.2em] text-leaf font-medium">Contact</div>
          <h1 className="mt-3 font-display text-5xl md:text-6xl max-w-3xl">Let's source your next shipment.</h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Tell us product, volume, port and timeline — we'll come back with full specs and a quote.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 grid lg:grid-cols-5 gap-10">
        <Reveal className="lg:col-span-3">
          <form onSubmit={onSubmit} className="rounded-3xl border border-border bg-card p-8 md:p-10 space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <Field label="Your name" name="name" required />
              <Field label="Company" name="company" />
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              <Field label="Email" name="email" type="email" required />
              <Field label="Phone (optional)" name="phone" />
            </div>
            <Field label="Product of interest" name="product" placeholder="e.g. Yirgacheffe Gr 1, 2 containers" />
            <div>
              <label className="text-sm font-medium">Message</label>
              <textarea
                name="message" rows={5} required
                className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                placeholder="Volumes, destination port, timeline..."
              />
            </div>
            <button
              type="submit"
              disabled={sent}
              className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-3 text-sm font-medium hover:bg-primary/90 transition disabled:opacity-60"
            >
              {sent ? "Sent" : "Send inquiry"} <Send className="h-4 w-4" />
            </button>
          </form>
        </Reveal>
        <Reveal delay={0.1} className="lg:col-span-2">
          <div className="rounded-3xl bg-primary text-primary-foreground p-8 md:p-10 h-full">
            <h2 className="font-display text-2xl">Direct channels</h2>
            <p className="mt-2 text-sm opacity-80">We answer fast — usually same day.</p>
            <ul className="mt-8 space-y-5">
              {channels.map(c => {
                const Inner = (
                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-xl bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                      <c.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-widest opacity-70">{c.label}</div>
                      <div className="text-sm mt-0.5">{c.value}</div>
                    </div>
                  </div>
                );
                return (
                  <li key={c.label}>
                    {c.href ? <a href={c.href} target="_blank" rel="noopener noreferrer" className="block hover:opacity-90">{Inner}</a> : Inner}
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

function Field({ label, name, type = "text", required, placeholder }: { label: string; name: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <div>
      <label className="text-sm font-medium">{label}</label>
      <input
        name={name} type={type} required={required} placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
      />
    </div>
  );
}
