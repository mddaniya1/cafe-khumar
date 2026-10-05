import { createFileRoute } from "@tanstack/react-router";
import { meta } from "@/lib/meta";
import { PageHero } from "@/components/site/ui";
import { AboutIntro, Features, Story } from "@/components/site/sections";
import img from "@/assets/story-rooftop.jpg";

export const Route = createFileRoute("/about")({
  head: () => meta("About Us — Cafe Khumaar", "The story behind Cafe Khumaar, an open-air rooftop café on the 6th floor in Nazimabad, Karachi."),
  component: () => (<><PageHero eyebrow="About Us" title="Our Rooftop Story" img={img} /><AboutIntro /><Story /><Features /></>),
});
