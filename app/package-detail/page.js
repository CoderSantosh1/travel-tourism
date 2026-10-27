import Image from "next/image";
import PageBanner from "@/components/PageBanner";
import { EnquiryCard, PopularList } from "@/components/Sidebar";
import { Reveal, Stagger, StaggerItem, DrawLine, Parallax } from "@/components/Motion";
import { SectionHeading } from "@/components/ui";
import Icon, { Stars } from "@/components/Icon";

export const metadata = { title: "Package Detail" };

const highlights = [
  ["plane", "Round Trip Flights"],
  ["bed", "Luxury Hotels"],
  ["car", "Private Transfers"],
  ["utensils", "Daily Breakfast"],
  ["camera", "Sightseeing Tours"],
  ["headset", "24/7 Support"],
];

const itinerary = [
  ["Day 1: Departure", "Depart from India and arrive at your destination.", "day-1"],
  ["Day 2: Paris", "Explore the romantic city of Paris.", "day-2"],
  ["Day 3: Swiss Alps", "Enjoy breathtaking views in the Swiss Alps.", "day-3"],
  ["Day 4: Rome", "Visit the historic Colosseum in Rome.", "day-4"],
  ["Day 5: Return", "Fly back home with unforgettable memories.", "day-5"],
];

const popular = [
  { name: "Paris, France", trips: 98, img: "/images/sidebar/paris-2.jpg" },
  { name: "Bali, Indonesia", trips: 120, img: "/images/sidebar/bali-2.jpg" },
  { name: "Santorini, Greece", trips: 110, img: "/images/sidebar/santorini.jpg" },
];

export default function PackageDetailPage() {
  return (
    <>
      <PageBanner title="Package Detail" />
      <section className="bg-mist py-16">
        <div className="mx-auto max-w-[1300px] px-6">
          <SectionHeading eyebrow="Travel Package" title="Package" accent="Detail" text="Discover the perfect blend of adventure, relaxation and culture with our handpicked travel package." />

          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_330px]">
            <div>
              <Reveal from="zoom" className="relative aspect-[2.3] overflow-hidden rounded-xl shadow-xl">
                <Parallax speed={30} className="absolute -inset-8">
                  <Image src="/images/package-detail/main.jpg" alt="Friends enjoying a coastal view" fill priority sizes="(min-width:1024px) 900px, 100vw" className="object-cover" />
                </Parallax>
              </Reveal>

              <div className="mt-6 flex flex-wrap items-start justify-between gap-4">
                <Reveal>
                  <p className="flex items-center gap-2 font-serif text-xl font-semibold text-sky"><Icon name="pin" className="h-5 w-5" /> Europe</p>
                  <h2 className="font-serif text-4xl font-bold text-navy sm:text-5xl">Europe Adventure Tour</h2>
                </Reveal>
                <Reveal from="right" delay={0.2}>
                  <div className="rounded-lg bg-navy px-6 py-3 text-white shadow-lg">
                    <span className="text-2xl font-bold">$1,200</span> <span className="text-sm text-white/80">/ Per Person</span>
                  </div>
                </Reveal>
              </div>

              <Reveal delay={0.1} className="mt-4 flex flex-wrap items-center gap-x-8 gap-y-2 text-navy">
                <span className="flex items-center gap-2"><Icon name="calendar" className="h-5 w-5" /> 7 Days / 6 Nights</span>
                <span className="flex items-center gap-2"><Icon name="pin" className="h-5 w-5" /> Multiple Cities</span>
                <span className="flex items-center gap-2"><Stars /> <span className="text-sm">4.8 (1,250 Reviews)</span></span>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="mt-4 text-lg leading-relaxed text-muted">
                  Explore the best of Europe with our specially curated tour package. Visit iconic landmarks, experience diverse cultures and create unforgettable memories on this amazing journey.
                </p>
              </Reveal>

              <Reveal className="mt-8 flex items-center gap-4">
                <DrawLine className="h-[3px] w-12 rounded bg-gold" />
                <h3 className="font-serif text-3xl font-bold text-navy">Itinerary</h3>
              </Reveal>

              <Stagger className="relative mt-6 space-y-5" stagger={0.15}>
                <span className="absolute bottom-10 left-[19px] top-10 w-[2px] bg-navy sm:left-[39px]" />
                {itinerary.map(([title, text, img], i) => (
                  <StaggerItem key={title} from="left" className="group relative flex items-center gap-4 sm:gap-8">
                    <span className="relative z-10 grid h-10 w-10 shrink-0 place-items-center rounded-full bg-navy text-lg font-bold text-white ring-4 ring-mist transition-colors duration-300 group-hover:bg-sky sm:ml-5">
                      {i + 1}
                    </span>
                    <div className="flex flex-1 items-center justify-between gap-4 rounded-lg bg-[#eef4fa] p-4 transition-all duration-300 group-hover:bg-white group-hover:shadow-lg sm:p-5">
                      <div>
                        <h4 className="text-xl font-semibold text-navy">{title}</h4>
                        <p className="mt-1 text-slate-600">{text}</p>
                      </div>
                      <div className="relative hidden h-[76px] w-[140px] shrink-0 overflow-hidden rounded-md sm:block">
                        <Image src={`/images/package-detail/${img}.jpg`} alt="" fill sizes="140px" className="object-cover transition-transform duration-500 group-hover:scale-115" />
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>

            <aside className="space-y-8">
              <Reveal from="right" className="rounded-xl bg-white p-6 shadow-[0_10px_35px_rgba(11,37,69,0.08)]">
                <h3 className="font-serif text-3xl font-bold text-navy">Package Highlights</h3>
                <DrawLine className="mt-2 h-[3px] w-16 rounded bg-gold" />
                <Stagger className="mt-6 space-y-5" stagger={0.08}>
                  {highlights.map(([icon, label]) => (
                    <StaggerItem key={label} from="right" className="group flex items-center gap-8">
                      <Icon name={icon} className="h-7 w-7 text-navy transition-transform group-hover:scale-125 group-hover:text-sky" />
                      <span className="text-lg text-slate-600">{label}</span>
                    </StaggerItem>
                  ))}
                </Stagger>
              </Reveal>
              <EnquiryCard title="Book This Package" subtitle="Plan your dream trip today!" button="Book Now" withMessage={false} sendIcon />
              <PopularList items={popular} compact />
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
