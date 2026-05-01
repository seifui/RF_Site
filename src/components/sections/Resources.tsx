import Image from "next/image";
import Link from "next/link";
import { Download } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { ResourceItem as ResourceCardContent } from "@/content/site";
import { siteContent } from "@/content/site";

/** Resource card illustration frame in Figma: 258×168; container height matches Offerings (`h-42`). */

function ResourceCard({
  badge,
  description,
  image,
  linkUrl,
  title,
}: ResourceCardContent) {
  return (
    <a
      className="flex flex-col gap-5 outline-none focus-visible:rounded-card focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      href={linkUrl}
    >
      <div className="relative shrink-0">
        <div className="relative h-42 w-full overflow-hidden rounded-card bg-card-soft">
          <Image
            alt=""
            className="object-contain object-center"
            fill
            sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 275px"
            src={image}
          />
        </div>
        {badge ? (
          <div className="absolute left-4 top-4 z-10 inline-flex items-center gap-2 rounded-pill bg-brand px-5 py-2.5 text-brand-foreground">
            <Download aria-hidden className="size-6 shrink-0" />
            <span className="text-caption font-bold">{badge}</span>
          </div>
        ) : null}
      </div>
      <div className="flex min-w-0 flex-col gap-3">
        <h3 className="text-title-sm text-ink">{title}</h3>
        <p className="text-caption text-ink-muted">{description}</p>
      </div>
    </a>
  );
}

export function Resources() {
  const { ctaHref, ctaLabel, headline, items, subtext } = siteContent.resources;

  return (
    <section aria-labelledby="resources-heading" id="resources">
      <div className="mx-auto flex w-full max-w-content flex-col gap-10 lg:gap-16">
        <div className="flex flex-col gap-2">
          <h2 className="text-display-sm text-ink" id="resources-heading">
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

        <div className="flex justify-center">
          <Button
            asChild
            className="rounded-pill border-brand bg-transparent px-6 py-4 text-brand hover:bg-card-soft hover:text-brand"
            variant="outline"
          >
            <Link href={ctaHref}>{ctaLabel}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
