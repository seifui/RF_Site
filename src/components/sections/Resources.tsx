import Image from "next/image";
import Link from "next/link";
import { Download } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { ResourceItem as ResourceCardContent } from "@/content/site";
import { siteContent } from "@/content/site";

/** Card frame matches Figma 258×168; raster assets live in `public/images/resources/`. */

function ResourceCard({
  badge,
  description,
  image,
  linkUrl,
  title,
}: ResourceCardContent) {
  return (
    <a
      className="block min-w-0 outline-none focus-visible:rounded-card focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      href={linkUrl}
    >
      <div className="relative aspect-[258/168] w-full overflow-hidden rounded-card bg-card-soft">
        {badge ? (
          <span className="absolute left-3 top-3 z-10 inline-flex items-center gap-1 rounded-pill bg-brand px-3 py-1 text-brand-foreground text-xs-ui">
            <Download aria-hidden className="size-3 shrink-0" />
            {badge}
          </span>
        ) : null}
        <Image
          alt={title}
          className="box-content object-contain object-center"
          fill
          sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 275px"
          src={image}
          style={{ color: "rgba(241, 253, 246, 0)" }}
        />
      </div>
      <h3 className="text-title-sm text-ink mt-4">{title}</h3>
      <p className="text-caption text-ink-muted mt-2">{description}</p>
    </a>
  );
}

export function Resources() {
  const { ctaHref, ctaLabel, headline, items, subtext } = siteContent.resources;

  return (
    <section aria-labelledby="resources-heading" id="resources">
      <div className="mx-auto flex w-full max-w-content flex-col">
        <div className="flex flex-col gap-10 lg:gap-16">
          <div className="flex flex-col gap-2">
            <h2
              className="text-display-xs text-ink lg:text-display-sm"
              id="resources-heading"
            >
              {headline}
            </h2>
            <p className="text-caption text-ink-muted lg:text-body-lg">{subtext}</p>
          </div>

          <ul className="grid list-none grid-cols-1 gap-10 p-0 md:grid-cols-2 md:gap-5 lg:grid-cols-4 lg:gap-5">
            {items.map((item) => (
              <li className="min-w-0" key={item.title}>
                <ResourceCard {...item} />
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 flex justify-center lg:mt-16">
          <Button
            asChild
            className="h-auto w-full rounded-pill border-brand px-6 py-4 text-caption font-bold text-brand hover:bg-card-soft hover:text-brand sm:w-auto"
            variant="outline"
          >
            <Link href={ctaHref}>{ctaLabel}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
