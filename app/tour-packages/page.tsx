import PageBanner from "@/components/PageBanner";
import { PackagesSection } from "@/components/home/Sections";
import { common, packagesData } from "@/data/site-data";

export const metadata = { title: common.packagesBreadcrumb.pageTitle };

export default function TourPackagesPage() {
  return (
    <>
      <PageBanner data={common.packagesBreadcrumb} />
      <PackagesSection items={packagesData.packages} button={false} />
    </>
  );
}
