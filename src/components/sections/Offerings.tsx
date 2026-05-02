import Image from "next/image";

import type { OfferingItem as OfferingCardContent } from "@/content/site";
import { siteContent } from "@/content/site";

function OfferingCard({ description, image, title }: OfferingCardContent) {
  return (
    <article className="flex flex-col gap-5">
      <div className="relative h-42 w-full shrink-0 overflow-hidden rounded-card">
        <Image
          alt=""
          className="object-cover"
          fill
          sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 275px"
          src={image}
        />
      </div>
      <div className="flex min-w-0 flex-col gap-3">
        <h3 className="text-title-md text-ink">{title}</h3>
        <p className="text-caption text-ink-muted lg:text-body-lg">
          {description}
        </p>
      </div>
    </article>
  );
}

export function Offerings() {
  const { headline, items, subtext } = siteContent.offerings;

  return (
    <section aria-labelledby="offerings-heading" id="offerings">
      <div className="mx-auto flex w-full max-w-content flex-col gap-10 lg:gap-16">
        <div className="flex flex-col gap-2">
          <h2
            className="text-display-xs text-ink lg:text-display-sm"
            id="offerings-heading"
          >
            {headline}
          </h2>
          <p className="text-caption text-ink-muted lg:text-body-lg">
            {subtext}
          </p>
        </div>

        <ul className="grid list-none grid-cols-1 gap-10 p-0 md:grid-cols-2 md:gap-5 lg:grid-cols-4 lg:gap-5">
          {items.map((item) => (
            <li className="min-w-0" key={item.title}>
              <OfferingCard {...item} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
