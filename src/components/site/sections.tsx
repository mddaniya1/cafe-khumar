import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Armchair, Bike, Car, CalendarCheck, Check, ChevronDown, Mail, Phone, Quote } from "lucide-react";
import { site, waLink } from "@/lib/site-config";
import { dishes, menu, posts, testimonials, hero, story } from "@/lib/content";
import { Ornament, Reveal, RollButton, SectionHead } from "./ui";
import chefImg from "@/assets/chef-portrait.jpg";
import seatImg from "@/assets/reservation-seating.jpg";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      <img src={hero} alt="Cafe Khumaar rooftop at night overlooking Karachi" width={1920} height={928} className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-overlay" />
      <div className="container-site relative flex min-h-[100svh] flex-col justify-end gap-12 pb-0 pt-48 lg:flex-row lg:items-end lg:justify-between">
        <Reveal className="pb-16 lg:pb-32">
          <h1 className="max-w-xl text-[clamp(52px,7vw,104px)] leading-[1.02]">Stay High on Flavor</h1>
          <div className="mt-10"><RollButton to="/appointment" icon={<CalendarCheck className="h-4 w-4" />}>Reserve Your Table</RollButton></div>
        </Reveal>
        <Reveal delay={200} className="w-full max-w-[400px] self-center rounded-t-full bg-cream px-10 pb-12 pt-20 text-center text-cream-foreground lg:self-end">
          <Ornament className="mx-auto" />
          <p className="mt-6 text-sm uppercase tracking-[0.1em]">Dining Hours at Khumaar</p>
          <div className="mt-6 space-y-3 text-left">
            {site.hours.map((h) => <div key={h.days} className="flex justify-between gap-4 text-[15px]"><span>{h.days}:</span><span>{h.time}</span></div>)}
          </div>
          <p className="mt-10 text-sm uppercase tracking-[0.1em]">Call us for reservations</p>
          <a href={`tel:${site.phone}`} className="mt-3 block text-3xl hover:text-gold">{site.phoneDisplay}</a>
        </Reveal>
      </div>
    </section>
  );
}

const logos = ["NAZIMABAD", "ROOFTOP", "KARAK", "SMOKE&CO", "MIDNIGHT", "GRILLHOUSE", "CITYVIEW", "CHAI·LAB"];
export function AboutIntro() {
  return (
    <section className="section-pad container-site">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-end">
        <SectionHead eyebrow="about us" title="An open-air rooftop built around flavor, friends and the city lights" />
        <Reveal delay={150} className="space-y-8 text-lg leading-relaxed text-muted-foreground">
          <p>Six floors up in the VOCO Ballroom building, Cafe Khumaar is where Nazimabad comes to unwind — sweeping city views, a breeze after dark and late-night plates that keep the conversation going.</p>
          <RollButton to="/about">More About Us</RollButton>
        </Reveal>
      </div>
      <div className="mt-20 grid border-y md:grid-cols-3">
        {[["6th", "Floor Rooftop Views"], ["3:00 AM", "Open Late"], ["1000–2000", "PKR Per Person"]].map(([n, l], i) => (
          <Reveal key={l} delay={i * 120} className={`relative overflow-hidden px-6 py-14 text-center ${i < 2 ? "md:border-r" : ""} border-b md:border-b-0`}>
            {i === 1 && <><img src={story} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" /><div className="absolute inset-0 bg-overlay" /></>}
            <p className="relative font-serif text-[clamp(44px,5vw,72px)]">{n}</p>
            <p className="eyebrow relative mt-2">{l}</p>
          </Reveal>
        ))}
      </div>
      <div className="mt-16 flex flex-col items-center gap-8 md:flex-row">
        <p className="shrink-0 font-serif text-2xl">100+ <span className="text-muted-foreground">trusted backers</span></p>
        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_15%,black_85%,transparent)]">
          <div className="animate-marquee flex w-max gap-16">
            {[...logos, ...logos].map((l, i) => <span key={i} className="flex h-9 items-center font-serif text-xl tracking-[0.2em] text-muted-foreground">{l}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Story() {
  return (
    <section className="section-pad border-t">
      <div className="container-site">
        <Reveal><img src={story} alt="Friends sharing food on the Khumaar rooftop" loading="lazy" className="aspect-[2.02/1] w-full object-cover" /></Reveal>
        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          <SectionHead eyebrow="Our Story" title="Where rooftop nights turn into rituals" />
          <Reveal delay={150} className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>Khumaar started with a simple idea: a place to hang out above the city, with food that's worth staying for. From Continental classics to smoky Desi BBQ, every plate is built for sharing.</p>
            <p>And when the night stretches on, there's always another round of karak chai.</p>
            <RollButton to="/about">More About Us</RollButton>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function DishCards() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {dishes.map((d, i) => (
        <Reveal key={d.slug} delay={i * 100} className={i % 2 ? "lg:mt-20" : ""}>
          <Link to="/portfolio/$slug" params={{ slug: d.slug }} className="group block">
            <div className="overflow-hidden"><img src={d.img} alt={d.name} loading="lazy" width={880} height={1152} className="aspect-[3/4] w-full object-cover transition-transform duration-700 group-hover:scale-105" /></div>
            <h3 className="mt-5 text-2xl transition-colors group-hover:text-gold">{d.name}</h3>
            <p className="mt-2 text-muted-foreground">{d.desc}</p>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}

export function Philosophy() {
  return (
    <section className="section-pad border-t container-site">
      <div className="mb-16 grid gap-10 lg:grid-cols-2">
        <SectionHead eyebrow="Our culinary philosophy" title="Good ingredients, bold flavor, no shortcuts" />
        <Reveal delay={150} className="space-y-4 text-lg leading-relaxed text-muted-foreground lg:pt-12">
          <p>We start with fresh, quality ingredients and cook them with confidence — honest marinades, real charcoal and sauces made in-house.</p>
          <p>The result is food with character, made to be enjoyed slowly under the open sky.</p>
        </Reveal>
      </div>
      <DishCards />
    </section>
  );
}

const sideImgs = [dishes[0]!.img, dishes[1]!.img, dishes[2]!.img, dishes[3]!.img];
export function MenuList({ withImages = true }: { withImages?: boolean }) {
  return (
    <div className="space-y-20">
      {menu.map((block, bi) => (
        <div key={block.category}>
          <div className="grid gap-8 border-t pt-10 lg:grid-cols-[1fr_2fr]">
            <Reveal><h3 className="text-3xl md:text-4xl">{block.category}</h3></Reveal>
            <div className="divide-y">
              {block.items.map((it, i) => (
                <Reveal key={it.name} delay={i * 60} className="py-6 first:pt-0">
                  <div className="flex items-baseline gap-4">
                    <h4 className="text-2xl">{it.name}</h4>
                    <span className="flex-1 border-b border-dotted" />
                    <span className="text-gold" title="Price to be confirmed">Rs. —</span>
                  </div>
                  <p className="mt-2 text-muted-foreground">{it.desc}</p>
                </Reveal>
              ))}
            </div>
          </div>
          {withImages && bi === 1 && (
            <div className="mt-20 grid gap-6 md:grid-cols-[2fr_1fr]">
              <Reveal><img src={story} alt="" loading="lazy" className="aspect-[1760/1448] w-full object-cover" /></Reveal>
              <Reveal delay={150}><img src={sideImgs[bi]} alt="" loading="lazy" className="aspect-[880/1276] w-full object-cover" /></Reveal>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export function Signatures() {
  return (
    <section className="section-pad border-t container-site">
      <SectionHead eyebrow="Khumaar Signatures" title="Flavors Worth Staying For" center>
        <p>From midnight burgers to smoky boti and a final glass of karak — here's what keeps our tables full. Prices are confirmed at the café.</p>
      </SectionHead>
      <div className="mt-20"><MenuList /></div>
      <div className="mt-16 text-center"><RollButton to="/menu">View All Menu</RollButton></div>
    </section>
  );
}

export function Features() {
  const f = [
    { icon: Armchair, t: "Rooftop Ambience", d: "Aesthetic open-air seating with city views." },
    { icon: Bike, t: "Dine-In & Home Delivery", d: "Delivery available Monday to Thursday." },
    { icon: Car, t: "Free Parking", d: "Free street parking nearby." },
  ];
  return (
    <section className="border-y bg-card">
      <div className="container-site grid md:grid-cols-3">
        {f.map((x, i) => (
          <Reveal key={x.t} delay={i * 120} className={`px-6 py-16 text-center ${i < 2 ? "md:border-r" : ""}`}>
            <x.icon className="mx-auto h-12 w-12 text-gold" strokeWidth={1} />
            <h3 className="mt-6 text-2xl">{x.t}</h3>
            <p className="mt-3 text-muted-foreground">{x.d}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Chef() {
  return (
    <section className="relative overflow-hidden">
      <video className="absolute inset-0 h-full w-full object-cover" autoPlay muted loop playsInline poster={hero} aria-hidden />
      <div className="absolute inset-0 bg-overlay" />
      <div className="container-site section-pad relative grid items-center gap-12 lg:grid-cols-[1fr_1.2fr]">
        <Reveal><img src={chefImg} alt="Head Chef of Cafe Khumaar" loading="lazy" width={768} height={1024} className="mx-auto aspect-[3/4] w-full max-w-md object-cover" /></Reveal>
        <Reveal delay={150}>
          <p className="eyebrow">Meet the kitchen</p>
          <h2 className="h2-display mt-5">Head Chef</h2>
          <p className="mt-3 uppercase tracking-[0.1em] text-muted-foreground">Head Chef, Cafe Khumaar</p>
          <Quote className="mt-10 h-10 w-10 text-gold" strokeWidth={1} />
          <p className="mt-4 font-serif text-[clamp(24px,2.4vw,34px)] leading-snug">"Flavor should stay with you long after the last bite — that's the only rule in our kitchen." <span className="block pt-3 font-sans text-sm text-muted-foreground">(placeholder quote)</span></p>
          <div className="mt-10"><RollButton to="/chef">Meet the Chef</RollButton></div>
        </Reveal>
      </div>
    </section>
  );
}

export function Testimonials() {
  const [i, setI] = useState(0);
  const n = testimonials.length;
  const start = useRef(0);
  useEffect(() => { const t = setInterval(() => setI((v) => (v + 1) % n), 6000); return () => clearInterval(t); }, [n, i]);
  const t = testimonials[i]!;
  return (
    <section className="section-pad container-site text-center">
      <p className="eyebrow">Guest words · placeholder</p>
      <div className="relative mx-auto mt-10 max-w-4xl"
        onTouchStart={(e) => (start.current = e.touches[0]!.clientX)}
        onTouchEnd={(e) => { const d = e.changedTouches[0]!.clientX - start.current; if (Math.abs(d) > 40) setI((v) => (v + (d < 0 ? 1 : n - 1)) % n); }}>
        <Ornament className="mx-auto" />
        <div key={i} className="animate-fade-in">
          <p className="mt-8 hidden font-serif text-[clamp(28px,3vw,44px)] leading-snug md:block">"{t.quote}"</p>
          <p className="mt-8 font-serif text-3xl md:hidden">"{t.short}"</p>
          <p className="mt-10 text-xl">{t.name}</p>
          <p className="eyebrow mt-2">{t.role}</p>
        </div>
        <button aria-label="Previous" onClick={() => setI((i + n - 1) % n)} className="absolute left-[-80px] top-1/2 hidden h-14 w-14 place-items-center rounded-full border hover:border-gold lg:grid"><ArrowLeft className="h-5 w-5" /></button>
        <button aria-label="Next" onClick={() => setI((i + 1) % n)} className="absolute right-[-80px] top-1/2 hidden h-14 w-14 place-items-center rounded-full border hover:border-gold lg:grid"><ArrowRight className="h-5 w-5" /></button>
        <div className="mt-10 flex justify-center gap-2">{testimonials.map((_, k) => <button key={k} aria-label={`Slide ${k + 1}`} onClick={() => setI(k)} className={`h-2 w-2 rounded-full ${k === i ? "bg-gold" : "bg-border"}`} />)}</div>
      </div>
    </section>
  );
}

function Dropdown({ label, options, value, onChange }: { label: string; options: string[]; value: string; onChange: (v: string) => void }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => { const f = (e: MouseEvent) => { if (!ref.current?.contains(e.target as Node)) setOpen(false); }; document.addEventListener("mousedown", f); return () => document.removeEventListener("mousedown", f); }, []);
  return (
    <div ref={ref} className="relative">
      <button type="button" onClick={() => setOpen(!open)} className="flex w-full items-center justify-between border-b border-cream-foreground/30 py-4 text-left">
        <span className={value ? "" : "opacity-60"}>{value || label}</span>
        <ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      <div className={`absolute z-20 mt-1 max-h-64 w-full origin-top overflow-auto bg-background text-foreground shadow-xl transition-all duration-300 ${open ? "scale-y-100 opacity-100" : "pointer-events-none scale-y-95 opacity-0"}`}>
        {options.map((o) => (
          <button type="button" key={o} onClick={() => { onChange(o); setOpen(false); }} className={`flex w-full items-center justify-between px-5 py-3 text-left hover:bg-muted ${o === value ? "text-gold" : ""}`}>
            {o}{o === value && <Check className="h-4 w-4" />}
          </button>
        ))}
      </div>
    </div>
  );
}

const times = ["6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM", "9:30 PM", "10:00 PM", "10:30 PM", "11:00 PM", "11:30 PM", "12:00 AM", "12:30 AM", "1:00 AM", "1:30 AM", "2:00 AM", "2:30 AM"];
export function Reservation() {
  const [g, setG] = useState(""); const [o, setO] = useState(""); const [t, setT] = useState(""); const [err, setErr] = useState(false);
  const book = () => {
    if (!g || !o || !t) { setErr(true); return; }
    setErr(false);
    window.open(waLink(`Hi Cafe Khumaar! I'd like to reserve a table.\nGuests: ${g}\nOccasion: ${o}\nTime: ${t}`), "_blank");
  };
  return (
    <section className="section-pad container-site">
      <div className="grid lg:grid-cols-2">
        <Reveal><img src={seatImg} alt="Lantern-lit rooftop seating at Cafe Khumaar" loading="lazy" width={800} height={1200} className="aspect-[2/3] h-full w-full object-cover" /></Reveal>
        <Reveal delay={150} className="flex flex-col justify-center bg-cream px-8 py-16 text-cream-foreground md:px-16">
          <CalendarCheck className="h-10 w-10 text-gold" strokeWidth={1} />
          <p className="eyebrow mt-6">Table Reservation</p>
          <h2 className="h2-display mt-4">Reserve Your Table</h2>
          <div className="mt-10 space-y-4">
            <Dropdown label="Guests" value={g} onChange={setG} options={["1 Person", "2 Person", "3 Person", "4 Person", "5 Person", "6+ Person"]} />
            <Dropdown label="Occasion" value={o} onChange={setO} options={["Private Event", "Corporate Event", "Wedding Event", "Social Event", "Special Event"]} />
            <Dropdown label="Time" value={t} onChange={setT} options={times} />
          </div>
          {err && <p className="mt-4 text-sm text-destructive">Please choose guests, occasion and time.</p>}
          <div className="mt-10"><RollButton tone="dark" onClick={book} icon={<Phone className="h-4 w-4" />}>Book Now</RollButton></div>
          <p className="mt-6 text-sm opacity-70">*Your table will be held for up to 30 minutes past the reserved time.</p>
        </Reveal>
      </div>
    </section>
  );
}

export function BlogCards() {
  return (
    <div className="grid gap-8 md:grid-cols-3">
      {posts.map((p, i) => (
        <Reveal key={p.slug} delay={i * 100}>
          <Link to="/blogs/$slug" params={{ slug: p.slug }} className="group block">
            <div className="overflow-hidden"><img src={p.img} alt={p.title} loading="lazy" className="aspect-[1920/1330] w-full object-cover transition-transform duration-700 group-hover:scale-105" /></div>
            <div className="mt-5 flex items-center gap-4 text-sm text-muted-foreground"><span>{p.date}</span><span className="border px-3 py-1 text-xs uppercase tracking-wider">{p.tag}</span></div>
            <h3 className="mt-4 text-2xl transition-colors group-hover:text-gold">{p.title}</h3>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}

export function Blog() {
  return (
    <section className="section-pad border-t container-site">
      <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
        <SectionHead eyebrow="Stories from Our Table" title="Latest From Our Rooftop" />
        <RollButton to="/blogs">View All Articles</RollButton>
      </div>
      <BlogCards />
    </section>
  );
}

export function CtaNewsletter() {
  const [email, setEmail] = useState(""); const [state, setState] = useState<"idle" | "err" | "ok">("idle");
  const submit = (e: React.FormEvent) => { e.preventDefault(); setState(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? "ok" : "err"); };
  return (
    <>
      <section className="relative overflow-hidden">
        <img src={hero} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-overlay" />
        <div className="container-site section-pad relative text-center">
          <SectionHead eyebrow="A Table Awaits" title="Stay High on Flavor, Every Night" center>
            <p>Open till late, seven nights a week. Bring your people — we'll bring the view.</p>
          </SectionHead>
          <div className="mt-10"><RollButton to="/appointment" icon={<CalendarCheck className="h-4 w-4" />}>Reserve a Table</RollButton></div>
        </div>
      </section>
      <section className="section-pad container-site">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.4fr_1fr]">
          <Reveal><img src={dishes[3]!.img} alt="" loading="lazy" className="aspect-[3/4] w-full object-cover" /></Reveal>
          <Reveal delay={100} className="text-center">
            <p className="eyebrow">Latest Stories</p>
            <h2 className="h2-display mt-5">Join the Khumaar list</h2>
            <p className="mt-5 text-lg text-muted-foreground">New dishes, late-night events and rooftop stories — straight to your inbox.</p>
            {state === "ok" ? (
              <p className="mt-10 flex items-center justify-center gap-2 text-gold"><Check className="h-5 w-5" /> You're on the list. Thank you!</p>
            ) : (
              <form onSubmit={submit} noValidate className="mt-10">
                <div className="flex items-center gap-3 border-b py-3">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                  <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Your email address" aria-label="Email" className="flex-1 bg-transparent outline-none placeholder:text-muted-foreground" />
                </div>
                {state === "err" && <p className="mt-3 text-left text-sm text-destructive">Please enter a valid email address.</p>}
                <div className="mt-8"><RollButton type="submit">Subscribe</RollButton></div>
              </form>
            )}
          </Reveal>
          <Reveal delay={200}><img src={dishes[1]!.img} alt="" loading="lazy" className="aspect-[3/4] w-full object-cover lg:mt-24" /></Reveal>
        </div>
      </section>
    </>
  );
}
