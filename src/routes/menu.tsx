import { createFileRoute } from "@tanstack/react-router";
import { meta } from "@/lib/meta";
import { PageHero, RollButton, SectionHead } from "@/components/site/ui";
import { MenuList } from "@/components/site/sections";
import { waLink } from "@/lib/site-config";
import img from "@/assets/dish-boti.jpg";

export const Route = createFileRoute("/menu")({
  head: () => meta("Menu & Prices — Cafe Khumaar", "Fast food & starters, mains & Chinese, BBQ & desi setups, artisan pizzas, mocktails and karak chai — with prices in PKR, at Cafe Khumaar, Nazimabad."),
  component: () => (
    <>
      <PageHero eyebrow="Our Menu" title="Flavors Worth Staying For" img={img} />
      <section className="section-pad container-site">
        <SectionHead eyebrow="Khumaar Signatures" title="The full rooftop menu" center><p>All prices in PKR. Order for delivery (Mon–Thu) via WhatsApp.</p></SectionHead>
        <div className="mt-20"><MenuList withImages={false} /></div>
        <div className="mt-16 text-center"><RollButton href={waLink("Hi Cafe Khumaar! I'd like to place an order.")}>Order on WhatsApp</RollButton></div>
      </section>
    </>
  ),
});
