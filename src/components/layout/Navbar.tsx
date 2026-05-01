import Link from "next/link";

import { siteContent } from "@/content/site";
import { cn } from "@/lib/utils";
import { MobileMenu } from "@/components/layout/MobileMenu";

export function Navbar() {
  const { nav } = siteContent;

  return (
    <header className="shrink-0 px-6 pt-10 sm:px-10 sm:pt-12 md:px-12 md:pt-12">
      <div
        className={cn(
          "flex w-full items-center justify-between rounded-pill border border-line bg-white px-5 py-1.5 lg:justify-start"
        )}
      >
        <Link
          href="/"
          className={cn(
            "text-ink flex min-h-11 min-w-0 shrink-0 items-center gap-1 pr-4 no-underline"
          )}
          aria-label="Rangi Fernando home"
        >
          {/* eslint-disable-next-line @next/next/no-img-element -- SVG brand mark */}
          <img
            src={nav.logo.markSrc}
            alt=""
            width={30}
            height={30}
            className={cn("size-6 shrink-0 lg:size-7.5")}
          />
          <span className={cn("font-medium lowercase text-title-sm lg:text-logo")}>
            {nav.logo.wordmark}
          </span>
        </Link>

        <nav
          aria-label="Main navigation"
          className={cn("hidden min-w-0 flex-1 justify-center lg:flex")}
        >
          <div className={cn("flex flex-nowrap items-center gap-29")}>
            {nav.links.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                prefetch={false}
                className={cn(
                  "text-caption whitespace-nowrap no-underline transition-colors hover:text-ink",
                  index === 0
                    ? "font-semibold text-ink"
                    : "font-normal text-ink-muted"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>

        <Link
          href={nav.cta.href}
          prefetch={false}
          className={cn(
            "hidden items-center justify-center whitespace-nowrap rounded-pill bg-brand px-5 py-2.5 text-center text-caption font-bold !text-white no-underline transition-opacity hover:opacity-90 lg:inline-flex"
          )}
        >
          {nav.cta.label}
        </Link>

        <MobileMenu nav={nav} />
      </div>
    </header>
  );
}
