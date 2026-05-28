// Helpers to send inquiries directly to WhatsApp and Email (no backend).

export const CONTACT = {
  whatsapp: "251911069271", // E.164 without "+"
  email: "info@kibromexim.com",
};

export type Inquiry = {
  name: string;
  company?: string;
  email: string;
  phone?: string;
  product?: string;
  message: string;
};

export function buildInquiryText(i: Inquiry): string {
  return [
    "New inquiry — Kibrom Agro-Export",
    "",
    `Name: ${i.name}`,
    i.company ? `Company: ${i.company}` : null,
    `Email: ${i.email}`,
    i.phone ? `Phone: ${i.phone}` : null,
    i.product ? `Product: ${i.product}` : null,
    "",
    "Message:",
    i.message,
  ].filter(Boolean).join("\n");
}

export function whatsappUrl(i: Inquiry): string {
  return `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(buildInquiryText(i))}`;
}

export function mailtoUrl(i: Inquiry): string {
  const subject = `Inquiry from ${i.name}${i.company ? ` (${i.company})` : ""}`;
  return `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(buildInquiryText(i))}`;
}
