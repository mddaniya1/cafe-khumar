import { createFileRoute } from "@tanstack/react-router";
import { meta } from "@/lib/meta";
import { PageHero } from "@/components/site/ui";
import { Chef, Philosophy } from "@/components/site/sections";
import img from "@/assets/dish-boti.jpg";

export const Route = createFileRoute("/chef")({
  head: () => meta("Our Chef — Cafe Khumaar", "Meet the kitchen behind Cafe Khumaar's burgers, BBQ, pizza and karak chai."),
  component: () => (<><PageHero eyebrow="The Kitchen" title="Meet Our Chef" img={img} /><Chef /><Philosophy /></>),
});
