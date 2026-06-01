import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-background/90 shadow-[0_6px_24px_-12px_rgba(0,0,0,0.18)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 h-16 sm:h-18 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 sm:gap-3 group">
          <img src={logo} alt="Kibrom Agro-Export logo" className="h-6 sm:h-9 w-auto transition-transform group-hover:rotate-[-6deg]" />
          <div className="leading-tight">
            <div className="font-display text-base tracking-tighter sm:text-lg whitespace-nowrap font-semibold text-green-500">Kibrom Niguse Agro Export</div>
            <div className="text-[9px] sm:text-[10px] uppercase tracking-[0.18em] text-gray-400">Since 2009 G.C</div>
          </div>
        </Link>
        <nav className="hidden lg:flex items-center gap-7 lg:gap-9 text-gray-300">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm font-medium"
              activeProps={{ className: "text- text-green-400 hover:text-green-400" }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition shadow-sm"
          >
            <Phone className="h-3.5 w-3.5" /> Get a Quote
          </Link>
        </nav>
        <button onClick={() => setOpen(!open)} className="lg:hidden p-2 rounded-lg bg-primary text-primary-foreground" aria-label="Toggle menu">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden bg-background/95 backdrop-blur-md shadow-lg">
          <nav className="flex flex-col px-6 py-4 gap-3">
            {links.map((l) => (
              <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="py-1.5 text-foreground/80 hover:text-primary">
                {l.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground">
              <Phone className="h-3.5 w-3.5" /> Get a Quote
            </Link>
          </nav>
        </div>
      )}
    </motion.header>
  );
}
