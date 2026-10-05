import { createFileRoute, notFound } from "@tanstack/react-router";
import { posts } from "@/lib/content";
import { PageHero, Reveal, RollButton } from "@/components/site/ui";

export const Route = createFileRoute("/blogs/$slug")({
  loader: ({ params }) => { const p = posts.find((x) => x.slug === params.slug); if (!p) throw notFound(); return { slug: p.slug }; },
  head: ({ loaderData }) => {
    const p = posts.find((x) => x.slug === loaderData?.slug);
    if (!p) return { meta: [{ title: "Not found" }, { name: "robots", content: "noindex" }] };
    return { meta: [{ title: `${p.title} — Cafe Khumaar` }, { name: "description", content: `${p.title} — a story from the Cafe Khumaar rooftop.` }, { property: "og:title", content: p.title }, { property: "og:description", content: `A story from the Cafe Khumaar rooftop.` }] };
  },
  component: Post,
});

function Post() {
  const { slug } = Route.useLoaderData();
  const p = posts.find((x) => x.slug === slug)!;
  return (
    <>
      <PageHero eyebrow={`${p.tag} · ${p.date}`} title={p.title} img={p.img} />
      <section className="section-pad container-site max-w-3xl">
        <Reveal className="space-y-6 text-lg leading-relaxed text-muted-foreground">
          <p>Article content coming soon — this is a placeholder for the Cafe Khumaar team's story.</p>
          <div className="pt-6"><RollButton to="/blogs">View All Articles</RollButton></div>
        </Reveal>
      </section>
    </>
  );
}
