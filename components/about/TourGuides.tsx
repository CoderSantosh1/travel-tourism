import Image from "next/image";
import { guides } from "@/data/site-data";
import { SectionHeading } from "../ui";
import { Stagger, StaggerItem } from "../Motion";

export default function TourGuides() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f1f9fc] to-mist py-20">
      <div className="pointer-events-none absolute -right-32 top-0 h-80 w-80 rounded-full bg-[#dff1f8]" />
      <div className="relative mx-auto max-w-[1300px] px-6">
        <SectionHeading
          eyebrow="Meet With Our"
          title="Tour"
          accent="Guide"
          text="Our expert tour guides are passionate travelers who love to share their knowledge, helping you explore destinations with unique insights and memorable experiences."
        />
        <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" stagger={0.12}>
          {guides.map((g) => (
            <StaggerItem key={g.name} from="flip">
              <div className="group h-full overflow-hidden rounded-xl bg-white shadow-[0_10px_35px_rgba(11,37,69,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_50px_rgba(27,163,198,0.2)]">
                <div className="shine relative h-[170px] overflow-hidden">
                  <Image src={g.cover} alt="" fill sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="relative px-6 pb-7 pt-20 text-center">
                  <span className="absolute -top-16 left-1/2 h-[136px] w-[136px] -translate-x-1/2 overflow-hidden rounded-full border-[5px] border-white bg-white shadow-lg transition-transform duration-500 group-hover:scale-105">
                    <Image src={g.photo} alt={g.name} fill sizes="136px" className="scale-110 object-cover" />
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-navy">{g.name}</h3>
                  <p className="mt-0.5 text-sm font-medium text-sky">{g.role}</p>
                  <span className="mx-auto mt-3 block h-[2px] w-10 bg-gold transition-all duration-500 group-hover:w-20" />
                  <p className="mt-3 text-[15px] leading-relaxed text-muted">{g.text}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
