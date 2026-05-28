import { useState, type FormEvent } from "react";
import { Send, MessageCircle, Mail } from "lucide-react";
import { toast } from "sonner";
import { whatsappUrl, mailtoUrl, type Inquiry } from "@/lib/lead";

type Props = { compact?: boolean; defaultProduct?: string };

export function LeadForm({ compact = false, defaultProduct }: Props) {
  const [data, setData] = useState<Inquiry>({
    name: "", company: "", email: "", phone: "",
    product: defaultProduct ?? "", message: "",
  });

  function update<K extends keyof Inquiry>(k: K, v: Inquiry[K]) {
    setData(prev => ({ ...prev, [k]: v }));
  }

  function validate(): string | null {
    if (!data.name.trim()) return "Please enter your name.";
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(data.email)) return "Please enter a valid email.";
    if (!data.message.trim()) return "Please add a short message.";
    return null;
  }

  function submit(target: "whatsapp" | "email") {
    const err = validate();
    if (err) { toast.error(err); return; }
    const url = target === "whatsapp" ? whatsappUrl(data) : mailtoUrl(data);
    window.open(url, target === "whatsapp" ? "_blank" : "_self");
    toast.success(target === "whatsapp" ? "Opening WhatsApp…" : "Opening your email app…");
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    submit("whatsapp");
  }

  return (
    <form onSubmit={onSubmit} className={`rounded-3xl border border-border bg-card ${compact ? "p-6" : "p-7 md:p-9"} space-y-4`}>
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Your name *" value={data.name} onChange={v => update("name", v)} />
        <Field label="Company" value={data.company ?? ""} onChange={v => update("company", v)} />
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Email *" type="email" value={data.email} onChange={v => update("email", v)} />
        <Field label="Phone" value={data.phone ?? ""} onChange={v => update("phone", v)} />
      </div>
      <Field label="Product of interest" value={data.product ?? ""} onChange={v => update("product", v)} placeholder="e.g. Yirgacheffe Gr 1, 2 x 20ft" />
      <div>
        <label className="text-sm font-medium">Message *</label>
        <textarea
          value={data.message}
          onChange={e => update("message", e.target.value)}
          rows={compact ? 3 : 4}
          maxLength={1000}
          required
          className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
          placeholder="Volumes, destination port, timeline…"
        />
      </div>
      <div className="flex flex-col sm:flex-row gap-3 pt-1">
        <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] text-white px-6 py-3 text-sm font-semibold hover:opacity-90 transition flex-1">
          <MessageCircle className="h-4 w-4" /> Send via WhatsApp
        </button>
        <button type="button" onClick={() => submit("email")} className="inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold hover:bg-primary/90 transition flex-1">
          <Mail className="h-4 w-4" /> Send via Email
        </button>
      </div>
      <p className="text-[11px] text-muted-foreground flex items-center gap-1.5 pt-1">
        <Send className="h-3 w-3" /> Your details auto-fill a message to our team — no data is stored on this site.
      </p>
    </form>
  );
}

function Field({ label, value, onChange, type = "text", placeholder }: {
  label: string; value: string; onChange: (v: string) => void; type?: string; placeholder?: string;
}) {
  return (
    <div>
      <label className="text-sm font-medium">{label}</label>
      <input
        type={type}
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        maxLength={255}
        className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
      />
    </div>
  );
}
