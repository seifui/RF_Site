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
      <main className="text-ink flex flex-col gap-8 px-6 py-10 sm:px-10 sm:py-12 md:px-35 md:py-17">
        <Hero />
        <About />
        <Offerings />
        <CreativeWork />
        <Testimonials />
        <Resources />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
