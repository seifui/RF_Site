"use client";

import Image from "next/image";

import type { TestimonialItem as TestimonialCardContent } from "@/content/site";
import { siteContent } from "@/content/site";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/** Largest rendered avatar size for `next/image` (40px mobile, 48px lg). */
const AVATAR_IMG_SIZE = 48;

function TestimonialCard({
  item,
  useSofterSurface,
}: {
  item: TestimonialCardContent;
  useSofterSurface: boolean;
}) {
  const { name, location, quote, clientType, avatar } = item;

  return (
    <article
      className={cn(
        "flex flex-col gap-5 rounded-card p-5 lg:p-8",
        useSofterSurface ? "bg-card-softer" : "bg-card-soft",
      )}
    >
      <div className="flex items-center gap-3">
        <Image
          alt={name}
          src={avatar}
          width={AVATAR_IMG_SIZE}
          height={AVATAR_IMG_SIZE}
          sizes="(min-width: 1024px) 48px, 40px"
          className="h-10 w-10 shrink-0 rounded-full object-cover lg:h-12 lg:w-12"
        />
        <div className="flex min-w-0 flex-col">
          <p className="text-body-lg font-bold text-ink lg:text-title-sm">
            {name}
          </p>
          <p className="text-caption text-ink-muted">{location}</p>
        </div>
      </div>
      <p className="text-body-lg text-ink">{quote}</p>
      <p className="text-caption font-bold text-ink-muted">{clientType}</p>
    </article>
  );
}

export function Testimonials() {
  const { headline, initialCount, items, loadMoreLabel, subtext } =
    siteContent.testimonials;
  const visibleCount = initialCount;

  return (
    <section aria-labelledby="testimonials-heading" id="testimonials">
      <div className="mx-auto flex w-full max-w-content flex-col gap-10 lg:gap-15">
        <div className="flex flex-col gap-2">
          <h2
            className="text-display-xs text-ink lg:text-display-sm"
            id="testimonials-heading"
          >
            {headline}
          </h2>
          <p className="text-caption text-ink-muted lg:text-body-lg">
            {subtext}
          </p>
        </div>

        <div className="flex flex-col">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {items.slice(0, visibleCount).map((item, index) => (
              <TestimonialCard
                item={item}
                key={`${item.name}-${item.location}`}
                useSofterSurface={index > 0}
              />
            ))}
          </div>

          <div className="mt-10 flex justify-center lg:mt-16">
            <Button
              className="h-auto w-full rounded-pill border-brand px-6 py-4 text-caption font-bold text-brand hover:bg-card-soft hover:text-brand sm:w-auto"
              onClick={() => {}}
              type="button"
              variant="outline"
            >
              {loadMoreLabel}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
