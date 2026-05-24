import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { ClipboardCheck, FileText, Truck, AlertTriangle, CreditCard, TrendingUp, Warehouse, Phone } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services & Benefits — Kibrom Agro-Export" },
      { name: "description", content: "Quality control, export documentation, logistics, payment terms — what working with Kibrom Agro-Export delivers." },
      { property: "og:title", content: "Services & Benefits — Kibrom Agro-Export" },
      { property: "og:description", content: "End-to-end agricultural export service from Ethiopia." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

function Services() {
  const items = [
    { icon: ClipboardCheck, title: "Quality Controlling", text: "Our team inspects every lot in the warehouse before approval. Sortex-cleaned, HPS, fumigated." },
    { icon: FileText, title: "Export Documentation", text: "Prepared by trained officers — Incoterm 2020, UCP600 compliant. Nothing slips through." },
    { icon: Warehouse, title: "Vetted Warehouses", text: "We supervise cleaning facilities and ensure year-round access to raw materials and finished goods." },
    { icon: Truck, title: "On-time Logistics", text: "Cargo ships when promised. Direct calls keep buyers updated through every leg." },
    { icon: AlertTriangle, title: "Risk Management", text: "If anything threatens a shipment, you know immediately. No surprises." },
    { icon: CreditCard, title: "Flexible Payments", text: "Multiple international payment terms accepted — LC, TT, and more." },
    { icon: TrendingUp, title: "Efficiency & Profit", text: "Quality products at fair prices means your margins stay healthy and your customers stay loyal." },
    { icon: Phone, title: "Direct Communication", text: "You speak directly with us. No layers. No middlemen. No telephone game." },
  ];
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 pt-20 pb-12 md:pt-28">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.2em] text-leaf font-medium">Services & benefits</div>
          <h1 className="mt-3 font-display text-5xl md:text-6xl max-w-3xl">Eight reasons buyers come back.</h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            We're not just shipping bags — we're running a disciplined operation built for long-term partnership.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {items.map((it, i) => (
          <Reveal key={it.title} delay={(i % 4) * 0.06}>
            <div className="h-full rounded-2xl border border-border bg-card p-7 hover:bg-primary hover:text-primary-foreground transition-colors duration-300 group">
              <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary group-hover:bg-primary-foreground/15 group-hover:text-primary-foreground flex items-center justify-center transition-colors">
                <it.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-xl">{it.title}</h3>
              <p className="mt-2 text-sm opacity-80 leading-relaxed">{it.text}</p>
            </div>
          </Reveal>
        ))}
      </section>
    </>
  );
}
