import { Link } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { ChevronDown, Mail, MapPin, Menu as MenuIcon, X, Instagram, Facebook } from "lucide-react";
import { site } from "@/lib/site-config";

const pages = [
  { to: "/portfolio", label: "Portfolio" },
  { to: "/blogs", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

function Logo() {
  return (
    <Link to="/" className="flex flex-col items-center leading-none" aria-label="Cafe Khumaar home">
      <span className="grid h-11 w-11 place-items-center rounded-full border border-gold font-serif text-lg text-gold">K</span>
      <span className="mt-1 font-serif text-3xl">Khumaar</span>
    </Link>
  );
}

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dd, setDd] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 80);
    f(); window.addEventListener("scroll", f); return () => window.removeEventListener("scroll", f);
  }, []);
  const link = "text-sm uppercase tracking-[0.1em] hover:text-gold transition-colors";
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "bg-background/95 backdrop-blur" : ""}`}>
      <div className={`container-site overflow-hidden transition-all duration-500 ${scrolled ? "max-h-0 opacity-0" : "max-h-20"}`}>
        <div className="hidden items-center justify-between border-b py-4 text-[15px] md:flex">
          <a href={`mailto:${site.email}`} className="flex items-center gap-2 hover:text-gold"><Mail className="h-4 w-4" />{site.email}</a>
          <a href={site.mapsUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-gold"><MapPin className="h-4 w-4" />{site.shortAddress}</a>
        </div>
      </div>
      <nav className="container-site flex items-center justify-between py-4 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:gap-14">
        <div className="hidden items-center justify-end gap-12 lg:flex">
          <Link to="/" className={link}>Home</Link>
          <Link to="/menu" className={link}>Menu</Link>
          <div className="relative" onMouseEnter={() => setDd(true)} onMouseLeave={() => setDd(false)}>
            <button className={`${link} flex items-center gap-1`} onClick={() => setDd(!dd)}>Pages <ChevronDown className="h-4 w-4" /></button>
            <div className={`absolute left-0 top-full pt-4 transition-all ${dd ? "visible translate-y-0 opacity-100" : "invisible translate-y-2 opacity-0"}`}>
              <div className="min-w-48 bg-cream p-2 text-cream-foreground">
                {[{ to: "/about", label: "About Us" }, { to: "/chef", label: "Chef" }, { to: "/appointment", label: "Reservation" }].map((p) => (
                  <Link key={p.to} to={p.to} className="block px-4 py-2 text-sm uppercase tracking-wider hover:text-gold">{p.label}</Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Logo />
        <div className="hidden items-center gap-12 lg:flex">
          {pages.map((p) => <Link key={p.to} to={p.to} className={link}>{p.label}</Link>)}
        </div>
        <button className="lg:hidden" aria-label="Open menu" onClick={() => setOpen(true)}><MenuIcon className="h-7 w-7" /></button>
      </nav>
      <div className={`fixed inset-0 z-50 flex flex-col bg-background transition-transform duration-500 lg:hidden ${open ? "translate-x-0" : "translate-x-full"}`}>
        <div className="container-site flex justify-end py-6"><button aria-label="Close menu" onClick={() => setOpen(false)}><X className="h-7 w-7" /></button></div>
        <div className="container-site flex flex-col gap-6">
          {[{ to: "/", label: "Home" }, { to: "/menu", label: "Menu" }, { to: "/about", label: "About Us" }, { to: "/chef", label: "Chef" }, ...pages, { to: "/appointment", label: "Reserve a Table" }].map((p) => (
            <Link key={p.to} to={p.to} onClick={() => setOpen(false)} className="font-serif text-4xl hover:text-gold">{p.label}</Link>
          ))}
        </div>
      </div>
    </header>
  );
}

function Footer() {
  const h = "eyebrow mb-5";
  return (
    <footer className="border-t bg-background">
      <div className="container-site grid gap-12 py-20 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
        <div>
          <p className={h}>Location</p>
          <a href={site.mapsUrl} target="_blank" rel="noreferrer" className="block max-w-xs leading-relaxed text-muted-foreground hover:text-gold">{site.address}</a>
          <p className={`${h} mt-10`}>Contact</p>
          <a href={`tel:${site.phone}`} className="block text-muted-foreground hover:text-gold">{site.phoneDisplay}</a>
          <a href={`mailto:${site.email}`} className="block text-muted-foreground hover:text-gold">{site.email}</a>
        </div>
        <div>
          <p className={h}>Opening Time</p>
          {site.hours.map((x) => <p key={x.days} className="mb-2 text-muted-foreground">{x.days}<br />{x.time}</p>)}
        </div>
        <div>
          <p className={h}>Menu</p>
          {[["/", "Home"], ["/about", "About Us"], ["/contact", "Contact"], ["/portfolio", "Portfolio"], ["/chef", "Chef"], ["/blogs", "Blogs"]].map(([to, l]) => (
            <Link key={to} to={to} className="block py-1 text-muted-foreground hover:text-gold">{l}</Link>
          ))}
        </div>
        <div className="flex flex-col items-start gap-6">
          <p className={h + " mb-0"}>Social Media</p>
          <div className="flex gap-3">
            <a href={site.instagramUrl} target="_blank" rel="noreferrer" aria-label="Instagram" className="grid h-11 w-11 place-items-center rounded-full border hover:border-gold hover:text-gold"><Instagram className="h-4 w-4" /></a>
            <a href={site.facebookUrl} target="_blank" rel="noreferrer" aria-label="Facebook" className="grid h-11 w-11 place-items-center rounded-full border hover:border-gold hover:text-gold"><Facebook className="h-4 w-4" /></a>
          </div>
          <div className="relative mt-4 grid h-28 w-28 place-items-center">
            <svg viewBox="0 0 100 100" className="absolute inset-0 animate-[spin_20s_linear_infinite] text-gold" aria-hidden>
              <defs><path id="c" d="M50 50m-38 0a38 38 0 1 1 76 0a38 38 0 1 1-76 0" /></defs>
              <text fontSize="9" letterSpacing="3" fill="currentColor"><textPath href="#c">STAY HIGH ON FLAVOR • KHUMAAR •</textPath></text>
            </svg>
            <span className="font-serif text-3xl text-gold">K</span>
          </div>
        </div>
      </div>
      <div className="container-site border-t py-6 text-center text-sm text-muted-foreground">Copyright © 2026 Cafe Khumaar. All Rights Reserved.</div>
    </footer>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  return (<><Header /><main>{children}</main><Footer /></>);
}
