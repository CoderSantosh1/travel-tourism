import PageBanner from "@/components/PageBanner";
import About from "@/components/home/About";
import Testimonials from "@/components/home/Testimonials";
import { ServicesSection, DestinationsSection } from "@/components/home/Sections";

export const metadata = { title: "About Us" };

export default function AboutPage() {
  return (
    <>
      <PageBanner title="About Us" />
      <About />
      <ServicesSection />
      <DestinationsSection />
      <Testimonials />
    </>
  );
}
