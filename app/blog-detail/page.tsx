import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import { Reveal, Stagger, StaggerItem, SplitText, DrawLine, Parallax } from "@/components/Motion";
import { BlockTitle } from "@/components/ui";
import Icon from "@/components/Icon";

export const metadata = { title: "Blog Detail" };

const recent = [
  { title: "10 Best Destinations for a Summer Vacation", date: "12 Oct 2026", img: "/blog/blog-10.jpg" },
  { title: "A Complete Guide to Exploring Thailand", date: "10 Oct 2026", img: "/blog/blog-2.jpg" },
  { title: "How to Plan a Perfect Budget Trip", date: "08 Oct 2026", img: "/blog/blog-3.jpg" },
  { title: "Top 5 Offbeat Destinations You Must Visit", date: "05 Oct 2026", img: "/blog/blog-4.jpg" },
];

const tips = [
  "Plan your trip according to the weather and season.",
  "Keep your travel documents and essentials ready.",
  "Try local food and street markets for an authentic experience.",
  "Respect the local culture and traditions.",
  "Book your accommodation and tours in advance.",
];

export default function BlogDetailPage() {
  return (
    <>
      <PageBanner title="Blog Detail" />
      <section className="bg-mist py-16">
        <div className="mx-auto grid max-w-[1300px] gap-10 px-6 lg:grid-cols-[1fr_380px]">
          <article>
            <Reveal from="zoom" className="relative aspect-[2.1] overflow-hidden rounded-xl shadow-xl">
              <Parallax speed={30} className="absolute -inset-8">
                <Image src="/blog-detail/main.jpg" alt="Traveller in Thailand" fill priority sizes="(min-width:1024px) 880px, 100vw" className="object-cover" />
              </Parallax>
            </Reveal>

            <Reveal delay={0.1} className="mt-6 flex flex-wrap gap-x-8 gap-y-2 text-slate-500">
              <span className="flex items-center gap-2"><Icon name="calendar" className="h-5 w-5 text-sky" /> 10 Oct 2026</span>
              <span className="flex items-center gap-2"><Icon name="user" className="h-5 w-5 text-sky" /> By Admin</span>
              <span className="flex items-center gap-2"><Icon name="folder" className="h-5 w-5 text-sky" /> Travel Guide</span>
            </Reveal>

            <h1 className="mt-4 font-serif text-4xl font-bold leading-tight text-navy sm:text-5xl">
              <SplitText text="A Complete Guide to Exploring Thailand" />
            </h1>
            <Reveal delay={0.2}>
              <p className="mt-4 text-lg leading-relaxed text-muted">
                Thailand is a dream destination for travelers, offering a perfect mix of stunning beaches, vibrant cities, rich culture and delicious food. Whether you are looking for adventure, relaxation or cultural experiences, Thailand has something for everyone. In this guide, we will explore the best places to visit, things to do and useful travel tips to make your Thailand trip unforgettable.
              </p>
            </Reveal>

            <Reveal className="mt-10">
              <BlockTitle>Why Visit Thailand?</BlockTitle>
              <p className="mt-4 text-lg leading-relaxed text-muted">
                Thailand is known for its warm hospitality, breathtaking landscapes and diverse experiences. From beautiful islands and crystal-clear waters to historic temples and lively markets, the country offers a unique travel experience that suits every type of traveler.
              </p>
            </Reveal>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              {["temple", "boats"].map((img, i) => (
                <Reveal key={img} from={i ? "right" : "left"} className="group relative aspect-[1.7] overflow-hidden rounded-xl shadow-md">
                  <Image src={`/blog-detail/${img}.jpg`} alt="" fill sizes="440px" className="object-cover transition-transform duration-700 group-hover:scale-110" />
                </Reveal>
              ))}
            </div>

            <Reveal className="mt-10">
              <BlockTitle>Top Destinations in Thailand</BlockTitle>
              <p className="mt-4 text-lg leading-relaxed text-muted">
                From the bustling streets of Bangkok to the serene beaches of Phuket, Thailand offers a variety of destinations. Explore historic temples, enjoy island hopping, experience local markets and indulge in authentic Thai cuisine. Each destination has its own charm and makes your journey memorable.
              </p>
            </Reveal>

            <Reveal from="zoom" className="mt-8 flex gap-6 rounded-xl bg-[#e6f2fb] p-7">
              <Icon name="quote" className="h-14 w-14 shrink-0 text-sky/60" fill="currentColor" strokeWidth={0} />
              <p className="font-serif text-2xl italic leading-snug text-navy">Thailand is not just a destination, it’s an experience. A place where every moment brings a new adventure.</p>
            </Reveal>

            <Reveal className="mt-10"><BlockTitle>Travel Tips for Your Thailand Trip</BlockTitle></Reveal>
            <Stagger className="mt-5 space-y-3" stagger={0.1}>
              {tips.map((t) => (
                <StaggerItem key={t} from="left" className="flex items-center gap-3 text-lg text-slate-600">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-sky text-white"><Icon name="check" className="h-3.5 w-3.5" strokeWidth={3} /></span>
                  {t}
                </StaggerItem>
              ))}
            </Stagger>

            <Reveal className="mt-10">
              <BlockTitle>Final Thoughts</BlockTitle>
              <p className="mt-4 text-lg leading-relaxed text-muted">
                Thailand is a destination that leaves a lasting impression. With its natural beauty, rich culture, friendly people and endless experiences, it is a perfect place for your next holiday. Start planning your trip today and create unforgettable memories in the Land of Smiles.
              </p>
            </Reveal>
            <Reveal from="up" className="group relative mt-6 aspect-[6.4] overflow-hidden rounded-xl shadow-md">
              <Image src="/blog-detail/final.jpg" alt="" fill sizes="880px" className="object-cover transition-transform duration-[2s] group-hover:scale-110" />
            </Reveal>
          </article>

          <aside>
            <Reveal from="right" className="sticky top-24 rounded-xl bg-white p-6 shadow-[0_10px_35px_rgba(11,37,69,0.08)]">
              <h3 className="font-serif text-3xl font-bold text-navy">Recent Posts</h3>
              <DrawLine className="mt-2 h-[3px] w-14 rounded bg-gold" />
              <Stagger className="mt-6 divide-y divide-slate-100" stagger={0.1}>
                {recent.map((r) => (
                  <StaggerItem key={r.title} from="right">
                    <Link href="/blog-detail" className="group flex gap-4 py-4">
                      <span className="relative h-[100px] w-[118px] shrink-0 overflow-hidden rounded-md">
                        <Image src={r.img} alt="" fill sizes="120px" className="object-cover transition-transform duration-500 group-hover:scale-115" />
                      </span>
                      <span>
                        <span className="block font-serif text-lg leading-snug text-navy transition-colors group-hover:text-sky">{r.title}</span>
                        <span className="mt-3 flex items-center gap-2 text-sm text-slate-500"><Icon name="calendar" className="h-4 w-4 text-sky" /> {r.date}</span>
                      </span>
                    </Link>
                  </StaggerItem>
                ))}
              </Stagger>
            </Reveal>
          </aside>
        </div>
      </section>
    </>
  );
}
