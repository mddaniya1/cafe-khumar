import { createFileRoute } from "@tanstack/react-router";
import { meta } from "@/lib/meta";
import { PageHero, Reveal, RollButton } from "@/components/site/ui";
import { site, waLink } from "@/lib/site-config";
import img from "@/assets/hero-rooftop.jpg";

export const Route = createFileRoute("/contact")({
  head: () => meta("Contact — Cafe Khumaar", "Find Cafe Khumaar on the 6th floor of the VOCO Ballroom building, Nazimabad, Karachi. Call or WhatsApp +92 324 0231006."),
  component: Contact,
});

function Contact() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Find Us Above the City" img={img} />
      <section className="section-pad container-site grid gap-12 md:grid-cols-3">
        <Reveal><p className="eyebrow mb-4">Location</p><a href={site.mapsUrl} target="_blank" rel="noreferrer" className="text-lg hover:text-gold">{site.address}</a><p className="mt-3 text-muted-foreground">{site.landmark}</p></Reveal>
        <Reveal delay={100}><p className="eyebrow mb-4">Contact</p><a href={`tel:${site.phone}`} className="block text-lg hover:text-gold">{site.phoneDisplay}</a><a href={`mailto:${site.email}`} className="block text-lg hover:text-gold">{site.email}</a><div className="mt-8"><RollButton href={waLink()}>WhatsApp Us</RollButton></div></Reveal>
        <Reveal delay={200}><p className="eyebrow mb-4">Opening Time</p>{site.hours.map((h) => <p key={h.days} className="text-lg">{h.days}: {h.time}</p>)}<p className="mt-3 text-muted-foreground">Dine-in · Rooftop seating · Delivery Mon–Thu · Free street parking</p></Reveal>
      </section>
    </>
  );
}
