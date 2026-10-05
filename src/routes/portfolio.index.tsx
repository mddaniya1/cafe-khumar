import { createFileRoute } from "@tanstack/react-router";
import { meta } from "@/lib/meta";
import { PageHero } from "@/components/site/ui";
import { DishCards } from "@/components/site/sections";
import img from "@/assets/dish-pizza.jpg";

export const Route = createFileRoute("/portfolio/")({
  head: () => meta("Signature Dishes — Cafe Khumaar", "A look at Cafe Khumaar's signature dishes: burgers, chicken boti, Shahi pizza and karak chai."),
  component: () => (<><PageHero eyebrow="Portfolio" title="Our Signature Plates" img={img} /><section className="section-pad container-site"><DishCards /></section></>),
});
