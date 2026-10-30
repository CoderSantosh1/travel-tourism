import PageBanner from "@/components/PageBanner";
import { BlogSection } from "@/components/home/Sections";
import { common, blogsData } from "@/data/site-data";

export const metadata = { title: common.blogBreadcrumb.pageTitle };

export default function BlogPage() {
  return (
    <>
      <PageBanner data={common.blogBreadcrumb} />
      <BlogSection items={blogsData.blogs} button={false} />
    </>
  );
}
