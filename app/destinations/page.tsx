import PageBanner from "@/components/PageBanner";
import { DestinationsSection } from "@/components/home/Sections";
import { destinations } from "@/data/site-data";

export const metadata = { title: "Destinations" };

export default function DestinationsPage() {
  return (
    <>
      <PageBanner title="Destination" crumb="Destinations" />
      <DestinationsSection items={destinations} button={false} />
    </>
  );
}
