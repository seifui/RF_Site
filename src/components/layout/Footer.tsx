import { siteContent } from "@/content/site";

export function Footer() {
  return (
    <footer className="py-8">
      <div className="mx-auto w-full max-w-content px-6 sm:px-10 md:px-35">
        <p className="text-center text-xs-ui text-ink-muted">
          {siteContent.footer.copyright}
        </p>
      </div>
    </footer>
  );
}
