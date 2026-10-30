import PageBanner from "@/components/PageBanner";
import { ServicesSection } from "@/components/home/Sections";
import { common, servicesData } from "@/data/site-data";

export const metadata = { title: common.servicesBreadcrumb.pageTitle };

export default function ServicesPage() {
  return (
    <>
      <PageBanner data={common.servicesBreadcrumb} />
      <ServicesSection items={servicesData.services} />
    </>
  );
}
