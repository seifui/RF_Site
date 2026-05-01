"use client";

import Image from "next/image";
import { Play } from "lucide-react";

import type { CreativeWorkVideoItem } from "@/content/site";
import { siteContent } from "@/content/site";

import { cn } from "@/lib/utils";

/** Matches Figma desktop video frame (561.92×366.14). */
const VIDEO_ASPECT = 562 / 366;

function VideoCard({
  className,
  title,
  thumbnail,
  youtubeUrl,
}: CreativeWorkVideoItem & { className?: string }) {
  return (
    <a
      aria-label={title}
      className={cn(
        "snap-center shrink-0 rounded-video focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand",
        className,
      )}
      href={youtubeUrl}
      rel="noopener noreferrer"
      target="_blank"
    >
      <div
        className="relative w-full overflow-hidden rounded-video"
        style={{ aspectRatio: VIDEO_ASPECT }}
      >
        <Image
          alt=""
          aria-hidden
          className="size-full object-cover"
          fill
          sizes="(max-width: 1023px) 70vw, 30vw"
          src={thumbnail}
        />
        <div className="pointer-events-none absolute inset-0 rounded-video bg-[rgb(52_55_54_/_0.25)]" />
        <span className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <span className="flex size-11 items-center justify-center rounded-full bg-[#ff0300] lg:size-[4.5rem]">
            <Play
              aria-hidden
              className="size-4 translate-x-0.5 fill-white text-white lg:size-6"
              fill="white"
              strokeWidth={0}
            />
          </span>
        </span>
      </div>
    </a>
  );
}

export function CreativeWork() {
  const { headline, subtext, ctaLabel, ctaHref, videos } =
    siteContent.creativeWork;

  return (
    <section
      aria-labelledby="creative-work-heading"
      className="relative flex flex-col gap-10 -mx-6 px-6 pb-14 pt-4 sm:-mx-10 sm:px-10 sm:pt-6 md:-mx-[70px] md:px-[70px] lg:gap-[60px] lg:pb-17 lg:pt-17"
      id="work"
    >
      <div className="mx-auto flex w-full max-w-content flex-col gap-2">
        <h2
          className="text-title-md leading-none tracking-tight text-ink lg:text-display-sm"
          id="creative-work-heading"
        >
          {headline}
        </h2>
        <p className="text-caption text-ink-muted lg:text-body-lg">{subtext}</p>
      </div>

      {/* Full-bleed carousel aligned with Offerings bleed pattern */}
      <div className="relative isolate -mx-6 mb-0 sm:-mx-10 md:-mx-[70px]">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-background to-transparent sm:w-14 lg:w-20"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-background to-transparent sm:w-14 lg:w-20"
        />

        <div className="scrollbar-hide snap-x snap-mandatory overflow-x-auto [-webkit-overflow-scrolling:touch]">
          <div className="flex w-max gap-4 px-[calc((100vw-70vw)/2)] lg:gap-7.5 lg:px-[calc((100vw-30vw)/2)]">
            {videos.map((video, index) => (
              <VideoCard
                className="w-[70vw] lg:w-[30vw]"
                key={`${video.title}-${index}`}
                {...video}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-content justify-center">
        <a
          className="inline-flex items-center justify-center rounded-pill border border-brand px-6 py-4 text-caption font-bold text-brand whitespace-nowrap transition-colors hover:bg-brand/10"
          href={ctaHref}
          rel="noopener noreferrer"
          target="_blank"
        >
          {ctaLabel}
        </a>
      </div>
    </section>
  );
}
