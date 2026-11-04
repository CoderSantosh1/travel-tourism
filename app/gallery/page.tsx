import PageBanner from "@/components/PageBanner";
import GalleryGrid from "@/components/GalleryGrid";
import { SectionHeading } from "@/components/ui";
import { common, galleryData } from "@/data/site-data";

export const metadata = { title: common.galleryBreadcrumb.pageTitle };

export default function GalleryPage() {
  return (
    <>
      <PageBanner data={common.galleryBreadcrumb} />
      <section className="bg-mist py-20">
        <div className="mx-auto max-w-[1300px] px-6">
          <SectionHeading
            eyebrow={galleryData.subtitle}
            title={galleryData.title1}
            accent={galleryData.titleAccent}
            text={galleryData.description}
            singleLine
          />
          <GalleryGrid />
        </div>
      </section>
    </>
  );
}
