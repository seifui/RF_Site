import { siteContent } from "@/content/site";
import { cn } from "@/lib/utils";

export function Footer({ className }: { className?: string }) {
  return (
    <footer className={cn("pt-2 pb-4 sm:pb-5", className)}>
      <div className="mx-auto w-full max-w-content px-6 sm:px-10 md:px-35">
        <p className="text-center text-xs-ui text-ink-muted">
          {siteContent.footer.copyright}
        </p>
      </div>
    </footer>
  );
}
