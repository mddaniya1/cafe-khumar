import { createFileRoute } from "@tanstack/react-router";
import { meta } from "@/lib/meta";
import { PageHero } from "@/components/site/ui";
import { BlogCards } from "@/components/site/sections";
import img from "@/assets/dish-chai.jpg";

export const Route = createFileRoute("/blogs/")({
  head: () => meta("Stories — Cafe Khumaar", "Stories from the Cafe Khumaar rooftop: late nights, favourite dishes and karak chai."),
  component: () => (<><PageHero eyebrow="Stories from Our Table" title="Latest From Our Rooftop" img={img} /><section className="section-pad container-site"><BlogCards /></section></>),
});
