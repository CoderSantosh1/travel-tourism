import PageBanner from "@/components/PageBanner";
import { PackagesSection } from "@/components/home/Sections";
import { packages } from "@/data/site-data";

export const metadata = { title: "Tour Packages" };

export default function TourPackagesPage() {
  return (
    <>
      <PageBanner title="Packages" crumb="Tour Packages" />
      <PackagesSection items={packages} button={false} />
    </>
  );
}
