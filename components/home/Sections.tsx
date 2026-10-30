"use client";
import { services, packages, destinations, blogs } from "@/data/site-data";
import { SectionHeading, PillButton } from "../ui";
import { Stagger, StaggerItem, Reveal } from "../Motion";
import { ServiceCard, PackageCard, DestinationCard, BlogCard, Pagination } from "../Cards";
import Icon from "../Icon";
import type { Service, TourPackage, Destination, BlogPost } from "@/types/site";
import { useState, useRef, useEffect } from "react";

export function ServicesSection({
  items = services.slice(0, 4),
  showHeading = true,
  itemsPerPage = 4,
  paginate = true,
}: {
  items?: Service[];
  showHeading?: boolean;
  itemsPerPage?: number;
  paginate?: boolean;
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const sectionRef = useRef<HTMLElement>(null);
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;
  }, []);

  const totalPages = Math.ceil(items.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = paginate
    ? items.slice(startIndex, startIndex + itemsPerPage)
    : items;

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages || page === currentPage) return;
    setCurrentPage(page);
    if (sectionRef.current) {
      const yOffset = -80;
      const y = sectionRef.current.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-gradient-to-b from-[#f1f9fc] to-white py-20">
      {/* Floating plane */}
      <div className="pointer-events-none absolute right-[8%] top-12 hidden animate-float-slow text-sky lg:block">
        <Icon
          name="plane"
          className="h-10 w-10 rotate-45"
          fill="currentColor"
          strokeWidth={0}
        />
      </div>

      <div className="relative mx-auto max-w-[1300px] px-6">
        {showHeading && (
          <SectionHeading
            eyebrow="Our Services"
            title="Explore Our"
            accent="Travel Services"
            text="From personalized tour planning to unforgettable experiences, we offer a wide range of travel services to make your journey smooth, exciting and truly memorable."
          />
        )}

        {/* Service Cards */}
        <Stagger
          key={currentPage}
          animate={isMounted.current ? "show" : undefined}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {currentItems.map((s) => (
            <StaggerItem key={s.title} from="flip">
              <ServiceCard s={s} />
            </StaggerItem>
          ))}
        </Stagger>

        {/* Pagination */}
        {paginate && totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )}
      </div>
    </section>
  );
}
export function PackagesSection({ items = packages.slice(0, 4), home = false, button = true }: { items?: TourPackage[]; home?: boolean; button?: boolean }) {
  return (
    <section className="bg-mist py-20">
      <div className="mx-auto max-w-[1300px] px-6">
        <SectionHeading
          eyebrow="Choose Your Package"
          title="Popular Tour"
          accent="Packages"
          text="Discover our handpicked tour packages to the world’s most amazing destinations. Travel more, explore more and create unforgettable memories."
        />
        <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((p) => (
            <StaggerItem key={p.title}><PackageCard p={p} home={home} /></StaggerItem>
          ))}
        </Stagger>
        {button && <Reveal className="mt-10 text-center"><PillButton href="/tour-packages">View All Packages</PillButton></Reveal>}
      </div>
    </section>
  );
}

export function DestinationsSection({ items = destinations.slice(0, 4), button = true }: { items?: Destination[]; button?: boolean }) {
  return (
    <section className="bg-gradient-to-b from-mist to-[#eef8fc] py-20">
      <div className="mx-auto max-w-325px px-6">
        <SectionHeading
          eyebrow="Popular Destinations"
          title="Explore Top"
          accent="Destinations"
          text="Discover the most beautiful places around the world. From stunning cities to serene landscapes, find your next travel destination with us."
        />
        <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" stagger={0.1}>
          {items.map((d) => (
            <StaggerItem key={d.title} from="zoom"><DestinationCard d={d} /></StaggerItem>
          ))}
        </Stagger>
        {button && <Reveal className="mt-10 text-center"><PillButton href="/destinations">View All Destinations</PillButton></Reveal>}
      </div>
    </section>
  );
}

export function BlogSection({
  items = blogs.slice(0, 4),
  button = true,
  eyebrow,
  itemsPerPage = 4,
  paginate = true,
}: {
  items?: BlogPost[];
  button?: boolean;
  eyebrow?: string;
  itemsPerPage?: number;
  paginate?: boolean;
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const sectionRef = useRef<HTMLElement>(null);
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;
  }, []);

  const totalPages = Math.ceil(items.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = paginate
    ? items.slice(startIndex, startIndex + itemsPerPage)
    : items;

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages || page === currentPage) return;
    setCurrentPage(page);
    if (sectionRef.current) {
      const yOffset = -80;
      const y = sectionRef.current.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section ref={sectionRef} className="bg-mist py-20">
      <div className="mx-auto max-w-[1300px] px-6">
        <SectionHeading
          eyebrow={eyebrow || "Latest Blog"}
          title="Our Recent"
          accent="Posts"
          text="Discover travel tips, destination guides and inspiring stories to help you plan your next unforgettable journey."
        />
        <Stagger
          key={currentPage}
          animate={isMounted.current ? "show" : undefined}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          stagger={0.1}
        >
          {currentItems.map((b) => (
            <StaggerItem key={b.title}>
              <BlogCard b={b} />
            </StaggerItem>
          ))}
        </Stagger>

        {button && (
          <Reveal className="mt-10 text-center">
            <PillButton href="/blog">View All Blog</PillButton>
          </Reveal>
        )}

        {paginate && totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )}
      </div>
    </section>
  );
}
