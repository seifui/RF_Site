import {
  About,
  CreativeWork,
  Faq,
  FinalCta,
  Hero,
  Offerings,
  Resources,
  Testimonials,
} from "@/components/sections";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

/** Vertical rhythm between major sections (Figma mobile ~121px incl. rule; desktop 140px). */
const sectionStack =
  "pb-16 pt-16 lg:pb-0 lg:pt-35";

/** Final CTA: same top rhythm as other sections; no bottom pad — spacing to footer uses Footer margin (~36px Figma). */
const sectionBeforeFooter =
  "pt-16 pb-0 lg:pt-35 lg:pb-0";

function SectionRule() {
  return (
    <hr
      aria-hidden
      className="mx-auto my-0 box-border h-0 w-full max-w-content border-0 border-t border-line lg:hidden"
    />
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="text-ink flex min-w-0 w-full flex-col px-6 pt-9 pb-0 sm:px-10 md:px-35 lg:pt-17">
        <div className="pb-16 lg:pb-0">
          <Hero />
        </div>
        <SectionRule />
        <div className={sectionStack}>
          <About />
        </div>
        <SectionRule />
        <div className={sectionStack}>
          <Offerings />
        </div>
        <SectionRule />
        <div className={sectionStack}>
          <CreativeWork />
        </div>
        <SectionRule />
        <div className={sectionStack}>
          <Testimonials />
        </div>
        <SectionRule />
        <div className={sectionStack}>
          <Resources />
        </div>
        <SectionRule />
        <div className={sectionStack}>
          <Faq />
        </div>
        <SectionRule />
        <div className={sectionBeforeFooter}>
          <FinalCta />
        </div>
      </main>
      <Footer className="mt-9" />
    </>
  );
}
