import { siteContent } from "@/content/site";

export function About() {
  const { about } = siteContent;

  return (
    <section id="about" aria-label="About" className="w-full">
      <div className="mx-auto w-full max-w-content">
        <div className="flex w-full flex-col gap-4 lg:max-w-[749px] lg:gap-3">
          <h2 className="text-title-md text-ink">{about.headline}</h2>
          <p className="text-caption text-ink-muted lg:text-body-lg">
            {about.body}
          </p>
        </div>
      </div>
    </section>
  );
}
