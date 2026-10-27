import PageBanner from "@/components/PageBanner";
import GalleryGrid from "@/components/GalleryGrid";
import { SectionHeading } from "@/components/ui";
import { Pagination } from "@/components/Cards";

export const metadata = { title: "Gallery" };

export default function GalleryPage() {
  return (
    <>
      <PageBanner title="Gallery" />
      <section className="bg-mist py-20">
        <div className="mx-auto max-w-[1300px] px-6">
          <SectionHeading
            eyebrow="Our Gallery"
            title="A Journey Through"
            accent="Beautiful Moments"
            text="Explore our travel gallery and get inspired by stunning destinations, unforgettable experiences and scenic beauty from around the world."
          />
          <GalleryGrid />
          <Pagination />
        </div>
      </section>
    </>
  );
}
