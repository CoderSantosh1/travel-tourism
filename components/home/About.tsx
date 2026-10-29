import Image from "next/image";
import { Reveal, Stagger, StaggerItem, SplitText, DrawLine, Parallax } from "../Motion";
import Icon, { type IconName } from "../Icon";

const features: { icon: IconName; title: string; text: string; color: string }[] = [
  { icon: "users", title: "Expert Travel Planners", text: "Personalized itineraries for every traveler.", color: "bg-sky" },
  { icon: "shield", title: "Trusted & Reliable", text: "Your journey is in safe hands.", color: "bg-gold" },
  { icon: "star", title: "Best Travel Experiences", text: "Handpicked destinations and activities.", color: "bg-gold" },
  { icon: "heart", title: "24/7 Customer Support", text: "Always here to assist you.", color: "bg-sky" },
];

// The About Us page shows the longer story instead of the feature list.
const story = [
  "At TourAvibe, we believe travel is more than visiting new places — it’s about creating unforgettable memories. We are a team of passionate travel experts dedicated to crafting unique and personalized travel experiences for individuals, families, and groups.",
  "From the first idea to the moment you return home, we take care of every detail — flights, stays, transfers and sightseeing — so you can simply enjoy the journey without any stress.",
  "Our handpicked destinations span sun-kissed beaches, snow-capped mountains, vibrant cities and hidden cultural gems, each chosen to give you authentic experiences you will talk about for years.",
  "With transparent pricing, trusted local partners and 24/7 support, thousands of happy travelers rely on us to turn their dream holidays into reality. Your next adventure starts here.",
];

export default function About({ variant = "home" }: { variant?: "home" | "page" }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-mist to-white py-20 lg:py-24">
      <div className="pointer-events-none absolute -left-40 top-10 h-[420px] w-[420px] rounded-full bg-[#dff1f8]" />
      <div className="relative mx-auto grid max-w-[1300px] items-center gap-14 px-6 lg:grid-cols-[1fr_1.15fr]">
        {/* arch photo collage */}
        <div className="relative mx-auto h-[520px] w-full max-w-[540px] sm:h-[600px]">
          <Reveal from="left" className="absolute left-0 top-0 h-[78%] w-[62%]">
            <div className="relative h-full w-full overflow-hidden rounded-t-full rounded-b-[2.5rem] border-[6px] border-white shadow-2xl">
              <Parallax speed={25} className="absolute -inset-6">
                <Image src="/about/about-1.jpg" alt="Traveller on a boat" fill sizes="340px" className="object-cover object-top" />
              </Parallax>
            </div>
          </Reveal>
          <Reveal from="up" delay={0.25} className="absolute bottom-0 right-0 h-[63%] w-[52%]">
            <div className="relative h-full w-full overflow-hidden rounded-t-full rounded-b-[2.5rem] border-[6px] border-white shadow-2xl">
              <Image src="/about/about-2.jpg" alt="Santorini" fill sizes="280px" className="object-cover transition-transform duration-700 hover:scale-110" />
            </div>
          </Reveal>
          <Reveal from="zoom" delay={0.5} className="absolute right-[2%] top-[22%] z-10">
            <div className="flex animate-float items-center gap-3 rounded-full bg-white py-3 pl-3 pr-7 shadow-xl">
              <span className="relative grid h-11 w-11 place-items-center rounded-full bg-sky text-white">
                <span className="absolute inset-0 animate-pulse-ring rounded-full bg-sky" />
                <Icon name="pin" className="relative h-5 w-5" />
              </span>
              <span className="font-semibold text-navy">Memorable Journeys</span>
            </div>
          </Reveal>
          <div className="absolute -bottom-4 left-6 hidden h-24 w-24 animate-spin-slow rounded-full border-2 border-dashed border-sky/40 sm:block" />
        </div>

        <div>
          <Reveal className="flex items-center gap-4">
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-sky">About Us</span>
            <DrawLine className="h-[2px] w-16 bg-gold" />
          </Reveal>
          <h2 className="mt-4 font-serif text-4xl font-bold leading-tight text-navy sm:text-5xl">
            <SplitText text="We are Professional Planners For Your" /> <SplitText text="Best Trip" className="text-sky" delay={0.4} />
          </h2>
          {variant === "page" ? (
            <Stagger className="mt-6 space-y-4" stagger={0.12}>
              {story.map((p) => (
                <StaggerItem key={p.slice(0, 20)}>
                  <p className="text-[17px] leading-relaxed text-muted">{p}</p>
                </StaggerItem>
              ))}
            </Stagger>
          ) : (
            <>
              <Reveal delay={0.2}>
                <p className="mt-6 text-lg leading-relaxed text-muted">{story[0]}</p>
              </Reveal>
              <Stagger className="mt-10 grid gap-8 sm:grid-cols-2" stagger={0.15}>
                {features.map((f) => (
                  <StaggerItem key={f.title} className="group flex gap-4">
                    <span className={`grid h-14 w-14 shrink-0 place-items-center rounded-full ${f.color} text-white shadow-lg transition-transform duration-500 group-hover:rotate-[360deg] group-hover:scale-110`}>
                      <Icon name={f.icon} className="h-6 w-6" />
                    </span>
                    <div>
                      <h4 className="text-lg font-semibold text-navy">{f.title}</h4>
                      <p className="text-[15px] text-muted">{f.text}</p>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
