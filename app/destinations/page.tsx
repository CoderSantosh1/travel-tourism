import PageBanner from "@/components/PageBanner";
import { DestinationsSection } from "@/components/home/Sections";
import { common, destinationsData } from "@/data/site-data";

export const metadata = { title: common.destinationsBreadcrumb.pageTitle };

export default function DestinationsPage() {
  return (
    <>
      <PageBanner data={common.destinationsBreadcrumb} />
      <DestinationsSection items={destinationsData.destinations} button={false} />
    </>
  );
}
