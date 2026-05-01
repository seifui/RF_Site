import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { siteContent } from "@/content/site";

export function Faq() {
  const { headline, headlineMobile, items, subtext } = siteContent.faq;

  return (
    <section
      aria-labelledby="faq-heading"
      className="rounded-shell bg-surface"
      id="faq"
    >
      <div className="mx-auto flex w-full max-w-content flex-col gap-10 lg:gap-17">
        <div className="flex flex-col gap-2">
          <h2
            className="text-logo text-ink lg:text-display-sm"
            id="faq-heading"
          >
            <span className="inline lg:hidden">{headlineMobile}</span>
            <span className="hidden lg:inline">{headline}</span>
          </h2>
          <p className="text-caption text-ink-muted lg:text-body-lg">
            {subtext}
          </p>
        </div>

        <Accordion
          type="single"
          collapsible
          className="w-full border-t border-line"
        >
          {items.map((item, i) => (
            <AccordionItem
              key={item.question}
              value={`item-${i}`}
              className="not-last:border-b not-last:border-line"
            >
              <AccordionTrigger className="py-3 text-body-lg font-bold text-ink hover:no-underline lg:py-5 lg:text-title-sm">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-body-lg text-ink-muted">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
