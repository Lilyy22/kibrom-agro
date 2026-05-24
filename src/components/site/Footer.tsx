import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Globe, AtSign } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img src={logo} alt="" className="h-12 w-auto bg-cream rounded-xl p-1" />
            <div>
              <div className="font-display text-xl">Kibrom Niguse</div>
              <div className="text-xs uppercase tracking-widest opacity-70">Agro-Export Agent</div>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm opacity-80 leading-relaxed">
            Ethiopian premium agricultural exports — oil seeds, Arabica coffee, pulses, and spices.
            Trusted by buyers across the UK, Italy, China, Germany, Russia, Indonesia, Dubai and India.
          </p>
        </div>
        <div>
          <h4 className="font-display text-base mb-4">Explore</h4>
          <ul className="space-y-2 text-sm opacity-90">
            <li><Link to="/about" className="hover:opacity-100 hover:underline">About</Link></li>
            <li><Link to="/products" className="hover:opacity-100 hover:underline">Products</Link></li>
            <li><Link to="/services" className="hover:opacity-100 hover:underline">Services</Link></li>
            <li><Link to="/contact" className="hover:opacity-100 hover:underline">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-base mb-4">Contact</h4>
          <ul className="space-y-3 text-sm opacity-90">
            <li className="flex gap-2"><Phone className="h-4 w-4 mt-0.5" /> +251 911 06 9271</li>
            <li className="flex gap-2"><Mail className="h-4 w-4 mt-0.5" /> info@kibromexim.com</li>
            <li className="flex gap-2"><Globe className="h-4 w-4 mt-0.5" /> www.kibromexim.com</li>
            <li className="flex gap-2"><AtSign className="h-4 w-4 mt-0.5" /> @kbagro8</li>
            <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5" /> Abdisa Aga Bldg., Office 03, Addis Ababa</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/15">
        <div className="mx-auto max-w-7xl px-6 py-5 text-xs opacity-70 flex justify-between flex-wrap gap-2">
          <span>© {new Date().getFullYear()} Kibrom Niguse Agro-Export Agent. All rights reserved.</span>
          <span className="font-display italic">Live Live & Learn</span>
        </div>
      </div>
    </footer>
  );
}
