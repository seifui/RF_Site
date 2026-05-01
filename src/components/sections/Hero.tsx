import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { siteContent } from "@/content/site";

const HERO_IMAGE_WIDTH = 512;
const HERO_IMAGE_HEIGHT = 455;

export function Hero() {
  const { hero } = siteContent;
  const headlineLines = hero.headline.split("\n").filter(Boolean);

  return (
    <section aria-label="Hero">
      <div className="mx-auto flex w-full max-w-content flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
        <div className="relative order-1 w-full shrink-0 overflow-hidden rounded-card lg:order-2 lg:flex-1">
          <Image
            alt={hero.image.alt}
            className="h-auto w-full object-cover"
            height={HERO_IMAGE_HEIGHT}
            priority
            sizes="(max-width: 1023px) 100vw, 512px"
            src={hero.image.src}
            width={HERO_IMAGE_WIDTH}
          />
        </div>

        <div className="order-2 flex w-full flex-col gap-10 lg:order-1 lg:flex-1 lg:gap-12">
          <div className="flex flex-col gap-4 lg:gap-10">
            <div className="flex flex-col gap-6">
              <h1 className="text-logo font-bold text-ink lg:text-display">
                {headlineLines.map((line, i) => (
                  <span className="block leading-none" key={i}>
                    {line}
                  </span>
                ))}
              </h1>
              <p className="text-caption text-ink-muted lg:text-body-lg">
                {hero.subtext}
              </p>
            </div>

            <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
              <Button
                asChild
                className="w-full rounded-pill border-transparent bg-brand px-6 py-4 text-caption font-bold text-brand-foreground hover:bg-brand/90 lg:w-auto"
                variant="default"
              >
                <Link href={hero.ctaPrimary.href}>{hero.ctaPrimary.label}</Link>
              </Button>
              <Button
                asChild
                className="w-full rounded-pill border-brand bg-transparent px-6 py-4 text-caption font-bold text-brand hover:bg-brand/10 lg:w-auto"
                variant="outline"
              >
                <Link href={hero.ctaSecondary.href}>
                  {hero.ctaSecondary.label}
                </Link>
              </Button>
            </div>
          </div>

          <div className="flex w-full items-start justify-between gap-6 lg:justify-start lg:gap-69">
            {hero.stats.map((stat, i) => (
              <div className="flex min-w-0 flex-col items-start gap-3" key={i}>
                <p className="text-title-md text-ink lg:text-display-md">
                  {stat.value}
                </p>
                <p className="text-caption font-medium text-ink-muted lg:text-body-lg">
                  {stat.mobileLabel != null ? (
                    <>
                      <span className="lg:hidden">{stat.mobileLabel}</span>
                      <span className="hidden lg:inline">{stat.label}</span>
                    </>
                  ) : (
                    stat.label
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
