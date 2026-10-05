import { createFileRoute, notFound } from "@tanstack/react-router";
import { dishes } from "@/lib/content";
import { PageHero, Reveal, RollButton } from "@/components/site/ui";

export const Route = createFileRoute("/portfolio/$slug")({
  loader: ({ params }) => { const d = dishes.find((x) => x.slug === params.slug); if (!d) throw notFound(); return { slug: d.slug }; },
  head: ({ loaderData }) => {
    const d = dishes.find((x) => x.slug === loaderData?.slug);
    if (!d) return { meta: [{ title: "Not found" }, { name: "robots", content: "noindex" }] };
    return { meta: [{ title: `${d.name} — Cafe Khumaar` }, { name: "description", content: d.desc }, { property: "og:title", content: `${d.name} — Cafe Khumaar` }, { property: "og:description", content: d.desc }] };
  },
  component: Dish,
});

function Dish() {
  const { slug } = Route.useLoaderData();
  const d = dishes.find((x) => x.slug === slug)!;
  return (
    <>
      <PageHero eyebrow="Signature Dish" title={d.name} img={d.img} />
      <section className="section-pad container-site grid gap-12 lg:grid-cols-2">
        <Reveal><img src={d.img} alt={d.name} className="aspect-[3/4] w-full object-cover" /></Reveal>
        <Reveal delay={150} className="self-center"><p className="text-2xl leading-relaxed text-muted-foreground">{d.desc}</p><div className="mt-10"><RollButton to="/menu">View All Menu</RollButton></div></Reveal>
      </section>
    </>
  );
}
