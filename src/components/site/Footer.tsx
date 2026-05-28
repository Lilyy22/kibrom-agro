import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Globe, ArrowRight } from "lucide-react";
import logo from "@/assets/logo.png";
import bg from "@/assets/savanna-bg.jpg";

export function Footer() {
  return (
    <footer className="mt-24 sm:mt-32 relative isolate overflow-hidden text-cream">
      {/* Background image */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-espresso/40 via-primary/60 to-espresso/95" aria-hidden="true" />

      <div className="mx-auto max-w-7xl px-6 pt-20 pb-10">
        {/* CTA strip */}
        <div className="rounded-3xl border border-cream/15 bg-cream/[0.06] backdrop-blur-sm p-8 md:p-10 flex flex-col md:flex-row gap-6 md:items-center md:justify-between">
          <div>
            <h3 className="font-display text-2xl md:text-3xl">Ready to import from Ethiopia?</h3>
            <p className="mt-2 text-sm opacity-80 max-w-md">Get specs, samples and a fair FOB / CIF quote within one business day.</p>
          </div>
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-cream text-espresso px-6 py-3 text-sm font-semibold hover:scale-105 transition-transform self-start md:self-auto">
            Request a quote <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <img src={logo} alt="" className="h-12 w-auto bg-cream rounded-xl p-1.5" />
              <div>
                <div className="font-display text-xl">Kibrom Niguse</div>
                <div className="text-[10px] uppercase tracking-[0.2em] opacity-70">Agro-Export Agent</div>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm opacity-80 leading-relaxed">
              Ethiopian premium agricultural exports — oil seeds, Arabica coffee, pulses and spices.
              Trusted by buyers across the UK, Italy, China, Germany, Russia, Indonesia, Dubai and India.
            </p>
            <p className="mt-4 font-display italic text-accent">"Live Live &amp; Learn"</p>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-display text-base mb-4">Explore</h4>
            <ul className="space-y-2.5 text-sm opacity-90">
              <li><Link to="/" className="hover:text-accent">Home</Link></li>
              <li><Link to="/about" className="hover:text-accent">About</Link></li>
              <li><Link to="/products" className="hover:text-accent">Products</Link></li>
              <li><Link to="/services" className="hover:text-accent">Services</Link></li>
              <li><Link to="/contact" className="hover:text-accent">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="font-display text-base mb-4">Contact</h4>
            <ul className="space-y-3 text-sm opacity-90">
              <li><a href="tel:+251911069271" className="flex gap-2 hover:text-accent"><Phone className="h-4 w-4 mt-0.5" /> +251 911 06 9271</a></li>
              <li><a href="mailto:info@kibromexim.com" className="flex gap-2 hover:text-accent"><Mail className="h-4 w-4 mt-0.5" /> info@kibromexim.com</a></li>
              <li><a href="https://www.kibromexim.com" className="flex gap-2 hover:text-accent"><Globe className="h-4 w-4 mt-0.5" /> www.kibromexim.com</a></li>
              {/* <li><a href="https://instagram.com/kbagro8" className="flex gap-2 hover:text-accent"><Instagram className="h-4 w-4 mt-0.5" /> @kbagro8</a></li> */}
              <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5" /> Abdisa Aga Bldg., Office 03, Addis Ababa</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-cream/15 text-xs opacity-70 flex justify-between flex-wrap gap-2">
          <span>© {new Date().getFullYear()} Kibrom Niguse Agro-Export Agent. All rights reserved.</span>
          <span>Addis Ababa · Ethiopia</span>
        </div>
      </div>
    </footer>
  );
}
