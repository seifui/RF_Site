"use client";

import * as React from "react";
import Link from "next/link";

import type { NavContent } from "@/content/site";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

type MobileMenuProps = {
  nav: NavContent;
  className?: string;
};

export function MobileMenu({ nav, className }: MobileMenuProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          type="button"
          variant="ghost"
          aria-label="Open menu"
          className={cn(
            "text-ink shrink-0 rounded-pill px-3 py-3 min-h-12 min-w-12 lg:hidden",
            className
          )}
        >
          {/* eslint-disable-next-line @next/next/no-img-element -- local SVG markup asset */}
          <img
            src={nav.menuIconSrc}
            alt=""
            width={24}
            height={24}
            className="pointer-events-none size-6"
          />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        showCloseButton
        className="border-line bg-surface text-ink sm:max-w-sm"
      >
        <SheetHeader className="text-left">
          <SheetTitle className="sr-only">Menu</SheetTitle>
        </SheetHeader>
        <nav
          aria-label="Mobile navigation"
          className="flex flex-col gap-6 px-2 pb-8 pt-4"
        >
          <div className="flex flex-col gap-1">
            {nav.links.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                prefetch={false}
                onClick={() => setOpen(false)}
                className={cn(
                  "text-caption rounded-pill hover:bg-card-soft px-4 py-3 transition-colors",
                  index === 0 && "bg-card-soft font-bold text-ink",
                  index !== 0 && "font-medium text-ink-muted"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <Link
            href={nav.cta.href}
            prefetch={false}
            onClick={() => setOpen(false)}
            className="shrink-0 self-stretch rounded-pill bg-brand px-5 py-2.5 text-center text-caption font-bold !text-white no-underline transition-opacity hover:opacity-90"
          >
            {nav.cta.label}
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
