import { services, packages, destinations, blogs } from "@/data/site";
import { SectionHeading, PillButton } from "../ui";
import { Stagger, StaggerItem, Reveal } from "../Motion";
import { ServiceCard, PackageCard, DestinationCard, BlogCard } from "../Cards";
import Icon from "../Icon";

export function ServicesSection({ items = services.slice(0, 4), showHeading = true }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f1f9fc] to-white py-20">
      <div className="pointer-events-none absolute right-[8%] top-12 hidden animate-float-slow text-sky lg:block">
        <Icon name="plane" className="h-10 w-10 rotate-45" fill="currentColor" strokeWidth={0} />
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
        <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((s) => (
            <StaggerItem key={s.title} from="flip"><ServiceCard s={s} /></StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

export function PackagesSection({ items = packages.slice(0, 4), home = false, button = true }) {
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

export function DestinationsSection({ items = destinations.slice(0, 4), button = true }) {
  return (
    <section className="bg-gradient-to-b from-mist to-[#eef8fc] py-20">
      <div className="mx-auto max-w-[1300px] px-6">
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

export function BlogSection({ items = blogs.slice(0, 4), button = true, eyebrow }) {
  return (
    <section className="bg-mist py-20">
      <div className="mx-auto max-w-[1300px] px-6">
        <SectionHeading
          eyebrow={eyebrow || "Latest Blog"}
          title="Our Recent"
          accent="Posts"
          text="Discover travel tips, destination guides and inspiring stories to help you plan your next unforgettable journey."
        />
        <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" stagger={0.1}>
          {items.map((b) => (
            <StaggerItem key={b.title}><BlogCard b={b} /></StaggerItem>
          ))}
        </Stagger>
        {button && <Reveal className="mt-10 text-center"><PillButton href="/blog">View All Blog</PillButton></Reveal>}
      </div>
    </section>
  );
}
