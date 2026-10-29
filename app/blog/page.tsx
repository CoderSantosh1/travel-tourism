import PageBanner from "@/components/PageBanner";
import { BlogSection } from "@/components/home/Sections";
import { blogs } from "@/data/site-data";

export const metadata = { title: "Blog" };

export default function BlogPage() {
  return (
    <>
      <PageBanner title="Blog" />
      <BlogSection items={blogs} button={false} />
    </>
  );
}
