import PageBanner from "@/components/PageBanner";
import { ServicesSection } from "@/components/home/Sections";
import { services } from "@/data/site";

export const metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <>
      <PageBanner title="Services" />
      <ServicesSection items={services} />
    </>
  );
}
