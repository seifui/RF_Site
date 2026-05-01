import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { siteContent } from "@/content/site";

export function FinalCta() {
  const { headline, subtext, ctaPrimary, ctaSecondary, backgroundImage } =
    siteContent.finalCta;

  return (
    <div className="mx-auto w-full max-w-content">
      <section
        aria-labelledby="final-cta-heading"
        className="relative isolate my-12 overflow-hidden rounded-card lg:my-20"
        id="contact"
      >
        <Image
          alt=""
          className="object-cover"
          fill
          priority={false}
          sizes="(min-width: 1024px) 1140px, 100vw"
          src={backgroundImage}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-card bg-surface/20"
        />

        <div className="relative z-10 flex flex-col items-center gap-8 px-6 py-16 text-center lg:py-24">
          <div className="flex w-full flex-col gap-5 text-ink">
            <h2
              className="text-display-sm text-balance lg:text-display-md"
              id="final-cta-heading"
            >
              {headline}
            </h2>
            <p className="text-caption text-pretty lg:text-body-lg">{subtext}</p>
          </div>

          <div className="flex w-full flex-col gap-3 lg:w-auto lg:flex-row lg:gap-3">
            <Button
              asChild
              className="w-full rounded-pill border-transparent bg-deep px-6 py-4 text-caption font-bold text-surface hover:bg-deep/90 lg:w-auto"
              variant="default"
            >
              <Link href={ctaPrimary.href}>{ctaPrimary.label}</Link>
            </Button>
            <Button
              asChild
              className="w-full rounded-pill border-ink bg-transparent px-6 py-4 text-caption font-bold text-ink hover:bg-ink/10 hover:text-ink lg:w-auto"
              variant="outline"
            >
              <Link
                href={ctaSecondary.href}
                rel="noopener noreferrer"
                target="_blank"
              >
                {ctaSecondary.label}
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
