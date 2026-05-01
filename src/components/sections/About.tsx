import { siteContent } from "@/content/site";

export function About() {
  const { about } = siteContent;

  return (
    <section id="about" aria-label="About">
      <div className="mx-auto flex w-full max-w-content flex-col gap-4 lg:gap-3">
        <h2 className="text-title-md text-ink">{about.headline}</h2>
        <p className="text-caption text-ink-muted lg:text-body-lg">
          {about.body}
        </p>
      </div>
    </section>
  );
}
