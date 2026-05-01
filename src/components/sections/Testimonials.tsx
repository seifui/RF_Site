"use client";

import Image from "next/image";
import { useState } from "react";

import type { TestimonialItem as TestimonialCardContent } from "@/content/site";
import { siteContent } from "@/content/site";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/** Matches Figma mobile / desktop frame; token-friendly sizes */
const AVATAR_MOBILE = 40;
const AVATAR_DESKTOP = 48;

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
        <div className="relative size-10 shrink-0 overflow-hidden rounded-full lg:size-12">
          <Image
            alt=""
            className="object-cover"
            height={AVATAR_DESKTOP}
            src={avatar}
            width={AVATAR_DESKTOP}
            sizes="(min-width: 1024px) 48px, 40px"
          />
        </div>
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
  const [expanded, setExpanded] = useState(false);

  const hasMore = items.length > initialCount;
  const visibleItems =
    expanded || !hasMore ? items : items.slice(0, initialCount);
  const showLoadMore = hasMore && !expanded;

  return (
    <section aria-labelledby="testimonials-heading" id="testimonials">
      <div className="mx-auto flex w-full max-w-content flex-col gap-10 lg:gap-15">
        <div className="flex flex-col gap-2">
          <h2
            className="text-logo text-ink lg:text-display-sm"
            id="testimonials-heading"
          >
            {headline}
          </h2>
          <p className="text-caption text-ink-muted lg:text-body-lg">
            {subtext}
          </p>
        </div>

        <div className="flex flex-col gap-5 lg:gap-16">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {visibleItems.map((item, index) => (
              <TestimonialCard
                item={item}
                key={`${item.name}-${item.location}`}
                useSofterSurface={index > 0}
              />
            ))}
          </div>

          {showLoadMore ? (
            <div className="flex justify-center">
              <Button
                className="h-auto w-full rounded-pill border-brand bg-transparent px-6 py-4 text-caption font-bold text-brand hover:bg-card-soft hover:text-brand sm:w-auto"
                onClick={() => setExpanded(true)}
                type="button"
                variant="outline"
              >
                {loadMoreLabel}
              </Button>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
