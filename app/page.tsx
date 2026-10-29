import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Testimonials from "@/components/home/Testimonials";
import { ServicesSection, PackagesSection, DestinationsSection, BlogSection } from "@/components/home/Sections";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <ServicesSection />
      <PackagesSection home />
      <DestinationsSection />
      <Testimonials />
      <BlogSection eyebrow="Travel Stories" />
    </>
  );
}
