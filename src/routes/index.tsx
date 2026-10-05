import { createFileRoute } from "@tanstack/react-router";
import { meta } from "@/lib/meta";
import { AboutIntro, Blog, Chef, CtaNewsletter, Features, Hero, Philosophy, Reservation, Signatures, Story, Testimonials } from "@/components/site/sections";

export const Route = createFileRoute("/")({
  head: () => meta("Cafe Khumaar — Rooftop Café in Nazimabad, Karachi", "Stay High on Flavor. Open-air rooftop café on the 6th floor in Nazimabad, Karachi — Continental, Desi BBQ, pizza and karak chai till 3 AM."),
  component: () => (
    <>
      <Hero /><AboutIntro /><Story /><Philosophy /><Signatures /><Features /><Chef /><Testimonials /><Reservation /><Blog /><CtaNewsletter />
    </>
  ),
});
