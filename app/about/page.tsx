import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import About from "@/components/home/About";
import CtaBanner from "@/components/about/CtaBanner";
import TourGuides from "@/components/about/TourGuides";

export const metadata: Metadata = { title: "About Us" };

export default function AboutPage() {
  return (
    <>
      <PageBanner title="About Us" />
      <About variant="page" />
      <CtaBanner />
      <TourGuides />
    </>
  );
}
