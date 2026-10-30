import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import About from "@/components/home/About";
import CtaBanner from "@/components/about/CtaBanner";
import TourGuides from "@/components/about/TourGuides";
import { common } from "@/data/site-data";

export const metadata: Metadata = { title: common.aboutBreadcrumb.pageTitle };

export default function AboutPage() {
  return (
    <>
      <PageBanner data={common.aboutBreadcrumb} />
      <About variant="page" />
      <CtaBanner />
      <TourGuides />
    </>
  );
}
