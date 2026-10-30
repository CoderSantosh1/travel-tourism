import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Testimonials from "@/components/home/Testimonials";
import { ServicesSection, PackagesSection, DestinationsSection, BlogSection } from "@/components/home/Sections";
import { blogsData } from "@/data/site-data";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <ServicesSection />
      <PackagesSection home />
      <DestinationsSection />
      <Testimonials />
      <BlogSection eyebrow={blogsData.homeSubtitle} />
    </>
  );
}
