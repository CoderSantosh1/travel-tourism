import PageBanner from "@/components/PageBanner";
import { BlogSection } from "@/components/home/Sections";
import { Pagination } from "@/components/Cards";
import { blogs } from "@/data/site";

export const metadata = { title: "Blog" };

export default function BlogPage() {
  return (
    <>
      <PageBanner title="Blog" />
      <div className="bg-mist pb-16">
        <BlogSection items={blogs} button={false} />
        <div className="-mt-8"><Pagination /></div>
      </div>
    </>
  );
}
