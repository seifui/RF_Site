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

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="text-ink flex min-w-0 w-full flex-col gap-16 px-6 pt-9 pb-10 sm:px-10 sm:pb-12 md:px-35 md:pb-17 lg:gap-24 lg:pt-17">
        <Hero />
        <About />
        <Offerings />
        <CreativeWork />
        <Testimonials />
        <Resources />
        <Faq />
        <FinalCta />
      </main>
      <div className="mt-16 lg:mt-24">
        <Footer />
      </div>
    </>
  );
}
