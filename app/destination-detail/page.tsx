import Image from "next/image";
import PageBanner from "@/components/PageBanner";
import { EnquiryCard, PopularList } from "@/components/Sidebar";
import { Reveal, Stagger, StaggerItem, DrawLine, SplitText } from "@/components/Motion";
import { BlockTitle } from "@/components/ui";
import Icon, { Stars, type IconName } from "@/components/Icon";
import type { PopularPlace } from "@/types/site";
import DetailGallery from "@/components/DetailGallery";

export const metadata = { title: "Destination Detail" };

const info: [IconName, string, string][] = [
  ["pin", "Location:", "Thailand"],
  ["timer", "Best Time to Visit:", "Nov – Feb"],
  ["clock", "Duration:", "5 – 7 Days"],
  ["users", "Ideal For:", "Families, Couples, Solo Travelers"],
  ["temple", "Main Attractions:", "Beaches, Temples, Night Markets"],
  ["money", "Currency:", "Thai Baht (THB)"],
  ["message", "Language:", "Thai, English"],
  ["sun", "Weather:", "Tropical (25°C – 32°C)"],
];

const facts: [IconName, string, string][] = [
  ["pin", "Country", "Thailand"],
  ["doc", "Visa Requirement", "Yes (for many countries)"],
  ["globe", "Languages Spoken", "Thai, English"],
  ["users", "Per Person (Approx.)", "₹50,000 – ₹80,000"],
  ["expand", "Area", "513,120 km²"],
  ["city", "Main City", "Bangkok"],
];

const experiences = [
  { img: "/destination-detail/island-hopping.jpg", title: "Island Hopping", text: "Explore beautiful islands and enjoy crystal-clear waters." },
  { img: "/destination-detail/cultural-tours.jpg", title: "Cultural Tours", text: "Visit ancient temples and experience rich traditions." },
  { img: "/destination-detail/local-food.jpg", title: "Local Food", text: "Enjoy delicious Thai cuisine and vibrant street markets." },
];

const popular: PopularPlace[] = [
  { name: "Bali, Indonesia", trips: 120, img: "/destination-detail/sidebar/bali.jpg" },
  { name: "Paris, France", trips: 98, img: "/destination-detail/sidebar/paris.jpg" },
  { name: "Dubai, UAE", trips: 110, img: "/destination-detail/sidebar/dubai.jpg" },
  { name: "Kyoto, Japan", trips: 76, img: "/destination-detail/sidebar/kyoto.jpg" },
];

export default function DestinationDetailPage() {
  return (
    <>
      <PageBanner title="Destination Detail" />
      <section className="bg-mist py-16">
        <div className="mx-auto grid max-w-[1300px] gap-10 px-6 lg:grid-cols-[1fr_390px]">
          <div>
            <DetailGallery
              images={[
                "/destination-detail/main.jpg",
                "/destination-detail/thumb-2.jpg",
                "/destination-detail/thumb-3.jpg",
                "/destination-detail/thumb-4.jpg",
              ]}
            />

            <Reveal className="mt-8 flex items-center gap-2 font-semibold uppercase text-sky">
              <Icon name="pin" className="h-5 w-5" /> Thailand
            </Reveal>
            <h2 className="mt-2 font-serif text-4xl font-bold leading-tight text-navy sm:text-5xl">
              <SplitText text="A Complete Guide for Travelers in Thailand" />
            </h2>
            <Reveal delay={0.2}>
              <p className="mt-4 text-lg leading-relaxed text-muted">
                Thailand is a dream destination for travelers, offering a perfect mix of stunning beaches, vibrant cities, rich culture and delicious food. Whether you are looking for adventure, relaxation or cultural experiences, Thailand has something for everyone. In this guide, we will explore the best places to visit, things to do and useful travel tips to make your Thailand trip unforgettable.
              </p>
            </Reveal>

            <Reveal className="mt-8 rounded-xl bg-[#e6f2fb] p-8">
              <BlockTitle>Good to Know</BlockTitle>
              <Stagger className="mt-6 grid gap-6 sm:grid-cols-2" stagger={0.08}>
                {facts.map(([icon, label, value]) => (
                  <StaggerItem key={label} className="group flex items-center gap-4">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-navy text-white transition-transform duration-500 group-hover:rotate-[360deg] group-hover:bg-sky">
                      <Icon name={icon} className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="font-semibold text-navy">{label}</p>
                      <p className="text-slate-600">{value}</p>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </Reveal>

            <Reveal className="mt-10">
              <BlockTitle>Why Visit Thailand?</BlockTitle>
              <p className="mt-4 text-lg leading-relaxed text-muted">
                Thailand is known for its warm hospitality, breathtaking landscapes and diverse experiences. From beautiful islands and crystal-clear waters to historic temples and lively markets, the country offers a unique travel experience that suits every type of traveler.
              </p>
            </Reveal>

            <Reveal from="zoom" className="mt-8 flex gap-6 rounded-xl bg-[#e6f2fb] p-7">
              <Icon name="quote" className="h-14 w-14 shrink-0 text-sky/70" fill="currentColor" strokeWidth={0} />
              <p className="font-serif text-2xl italic leading-snug text-navy">“Thailand is not just a destination, it’s an experience. A place where every moment brings a new adventure.”</p>
            </Reveal>

            <Reveal className="mt-10"><BlockTitle>Top Experiences in Thailand</BlockTitle></Reveal>
            <Stagger className="mt-6 grid gap-6 sm:grid-cols-3">
              {experiences.map((e) => (
                <StaggerItem key={e.title} className="group">
                  <div className="shine relative h-40 overflow-hidden rounded-xl shadow-md">
                    <Image src={e.img} alt={e.title} fill sizes="300px" className="object-cover transition-transform duration-700 group-hover:scale-115" />
                  </div>
                  <h4 className="mt-4 text-lg font-semibold text-navy transition-colors group-hover:text-sky">{e.title}</h4>
                  <p className="mt-1 text-muted">{e.text}</p>
                </StaggerItem>
              ))}
            </Stagger>

            <Reveal className="mt-10">
              <BlockTitle>Final Thoughts</BlockTitle>
              <p className="mt-4 text-lg leading-relaxed text-muted">
                Thailand is a destination that leaves a lasting impression. With its natural beauty, rich culture, friendly people and endless experiences, it is a perfect place for your next holiday. Start planning your trip today and create unforgettable memories in the Land of Smiles.
              </p>
            </Reveal>
          </div>

          <aside className="space-y-8">
            <Reveal from="right" className="rounded-xl bg-white p-6 shadow-[0_10px_35px_rgba(11,37,69,0.08)]">
              <h3 className="font-serif text-3xl font-bold text-navy">Destination Information</h3>
              <DrawLine className="mt-2 h-[3px] w-14 rounded bg-gold" />
              <ul className="mt-5 divide-y divide-slate-100">
                {info.map(([icon, label, value]) => (
                  <li key={label} className="grid grid-cols-[28px_130px_1fr] items-start gap-2 py-3 text-[15px]">
                    <Icon name={icon} className="mt-0.5 h-5 w-5 text-navy" />
                    <span className="font-medium text-navy">{label}</span>
                    <span className="text-slate-500">{value}</span>
                  </li>
                ))}
                <li className="grid grid-cols-[28px_130px_1fr] items-center gap-2 py-3 text-[15px]">
                  <Icon name="star" className="h-5 w-5 text-navy" />
                  <span className="font-medium text-navy">Rating:</span>
                  <span className="flex items-center gap-2 text-slate-500"><Stars count={4} /> (4.8)</span>
                </li>
              </ul>
            </Reveal>
            <EnquiryCard title="Plan Your Trip" subtitle="Fill out the form and our travel expert will get in touch with you." />
            <PopularList items={popular} />
          </aside>
        </div>
      </section>
    </>
  );
}
