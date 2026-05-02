"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

import { Button } from "@/components/ui/button";
import { siteContent } from "@/content/site";

interface Video {
  title: string;
  youtubeUrl: string;
  thumbnail: string;
}

function VideoCard({ video }: { video: Video }) {
  return (
    <a
      href={video.youtubeUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block aspect-video overflow-hidden rounded-video bg-card-soft"
    >
      <Image
        src={video.thumbnail}
        alt={video.title}
        fill
        sizes="(min-width: 1024px) 600px, 80vw"
        className="object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-600 transition-transform group-hover:scale-110 md:h-14 md:w-14 lg:h-20 lg:w-20">
          <Play className="ml-0.5 h-4 w-4 fill-white text-white md:h-6 md:w-6 lg:ml-1 lg:h-8 lg:w-8" />
        </div>
      </div>
    </a>
  );
}

export function CreativeWork() {
  const { headline, subtext, ctaLabel, ctaHref, videos } =
    siteContent.creativeWork;
  const scrollRef = useRef<HTMLDivElement>(null);

  // Center the scrollable strip so the middle card (index 2 of 5) sits in the viewport.
  // (scrollWidth - clientWidth) / 2 equals max scroll / 2 for symmetric track padding.
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const centerStrip = () => {
      const maxScroll = Math.max(0, container.scrollWidth - container.clientWidth);
      container.scrollLeft = maxScroll / 2;
    };

    centerStrip();
    window.addEventListener("resize", centerStrip);
    return () => window.removeEventListener("resize", centerStrip);
  }, [videos.length]);

  return (
    <section className="w-full" id="work">
      {/* Title block — aligned with content width */}
      <div className="mx-auto max-w-content px-6 lg:px-0">
        <h2 className="text-display-xs text-ink lg:text-display-sm">{headline}</h2>
        <p className="mt-2 text-body-lg text-ink-muted">{subtext}</p>
      </div>

      {/* Carousel — full width with horizontal scroll */}
      <div
        ref={scrollRef}
        className="mt-8 snap-x snap-mandatory overflow-x-auto scrollbar-hide lg:mt-12"
      >
        <div className="flex gap-4 px-[15%] lg:gap-6 lg:px-[20%]">
          {videos.map((video, i) => (
            <div
              key={`${video.title}-${i}`}
              className="w-[70%] flex-shrink-0 snap-center lg:w-[60%]"
            >
              <VideoCard video={video} />
            </div>
          ))}
        </div>
      </div>

      {/* CTA below carousel */}
      <div className="mx-auto mt-10 flex max-w-content justify-center lg:mt-16">
        <Button
          asChild
          className="h-auto w-full rounded-pill border-brand px-6 py-4 text-caption font-bold text-brand hover:bg-card-soft hover:text-brand sm:w-auto"
          variant="outline"
        >
          <a href={ctaHref} rel="noopener noreferrer" target="_blank">
            {ctaLabel}
          </a>
        </Button>
      </div>
    </section>
  );
}
