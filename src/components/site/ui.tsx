import { Link } from "@tanstack/react-router";
import { useEffect, useRef, type ReactNode } from "react";

type BtnProps = { children: string; icon?: ReactNode; to?: string; href?: string; onClick?: () => void; type?: "button" | "submit"; tone?: "light" | "dark" };

export function RollButton({ children, icon, to, href, onClick, type = "button", tone = "light" }: BtnProps) {
  const cls = `btn-roll ${tone === "light" ? "text-foreground hover:bg-foreground hover:text-background" : "text-cream-foreground hover:bg-cream-foreground hover:text-cream"}`;
  const inner = (
    <>
      {icon}
      <span className="roll"><span>{children}</span><span aria-hidden>{children}</span></span>
    </>
  );
  if (to) return <Link to={to} className={cls}>{inner}</Link>;
  if (href) return <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className={cls}>{inner}</a>;
  return <button type={type} onClick={onClick} className={cls}>{inner}</button>;
}

export function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add("is-in"); io.disconnect(); } }, { threshold: 0.12 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</div>;
}

export function Ornament({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 90 40" className={`h-10 w-[90px] text-gold ${className}`} fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden>
      <path d="M45 4c-4 8-4 16 0 24 4-8 4-16 0-24Z" />
      <path d="M45 28c-8-10-22-12-30-4-5 5 1 12 7 8M45 28c8-10 22-12 30-4 5 5-1 12-7 8" />
    </svg>
  );
}

export function SectionHead({ eyebrow, title, children, center }: { eyebrow: string; title: string; children?: ReactNode; center?: boolean }) {
  return (
    <Reveal className={center ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}>
      <p className="eyebrow mb-5">{eyebrow}</p>
      <h2 className="h2-display">{title}</h2>
      {children && <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">{children}</div>}
    </Reveal>
  );
}

export function PageHero({ eyebrow, title, img }: { eyebrow: string; title: string; img: string }) {
  return (
    <section className="relative flex h-[60vh] min-h-[420px] items-end overflow-hidden">
      <img src={img} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-overlay" />
      <div className="container-site relative pb-16">
        <p className="eyebrow mb-4">{eyebrow}</p>
        <h1 className="text-[clamp(44px,6vw,88px)]">{title}</h1>
      </div>
    </section>
  );
}
