import { createFileRoute } from "@tanstack/react-router";
import { meta } from "@/lib/meta";
import { PageHero } from "@/components/site/ui";
import { Reservation } from "@/components/site/sections";
import img from "@/assets/reservation-seating.jpg";

export const Route = createFileRoute("/appointment")({
  head: () => meta("Reserve a Table — Cafe Khumaar", "Book your rooftop table at Cafe Khumaar via WhatsApp. Open 6 PM till late every night."),
  component: () => (<><PageHero eyebrow="Table Reservation" title="Reserve Your Table" img={img} /><Reservation /></>),
});
