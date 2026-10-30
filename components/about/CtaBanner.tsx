import Image from "next/image";
import Link from "next/link";
import { Reveal, SplitText, DrawLine, Parallax } from "../Motion";
import Icon from "../Icon";
import { ctaData } from "@/data/site-data";

// "Ready to Explore" call-to-action band with the wave and flight path.
export default function CtaBanner() {
  const { subtitle, title1, titleAccent, description, button, image } = ctaData;
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#eef8fc] via-[#eef8fc] to-transparent">
      <div className="absolute inset-y-0 right-0 w-full md:w-[58%]">
        <Parallax speed={30} className="absolute -inset-y-10 inset-x-0">
          <Image src={image.src} alt={image.alt} fill sizes="(min-width:768px) 58vw, 100vw" className="object-cover object-right" />
        </Parallax>
        <div className="absolute inset-0 bg-gradient-to-r from-[#eef8fc] via-[#eef8fc]/40 to-transparent md:via-transparent" />
      </div>

      <div className="relative mx-auto max-w-[1300px] px-6 pb-36 pt-16 md:pb-40 lg:px-16">
        <div className="max-w-xl">
          <Reveal className="flex items-center gap-4">
            <DrawLine className="h-[2px] w-12 bg-gold" />
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-sky">{subtitle}</span>
            <DrawLine className="h-[2px] w-12 bg-gold" />
          </Reveal>
          <h2 className="mt-3 font-serif text-4xl font-bold leading-tight text-navy sm:text-5xl">
            <SplitText text={title1} />
            <br />
            <SplitText text={titleAccent} className="text-sky" delay={0.25} />
          </h2>
          <Reveal delay={0.2}>
            <p className="mt-4 max-w-md text-[17px] leading-relaxed text-slate-600">
              {description}
            </p>
          </Reveal>
          <Reveal delay={0.35} className="mt-7">
            <Link href={button.url} className="group inline-flex items-center gap-3 rounded-full bg-sun px-10 py-3.5 font-semibold text-navy shadow-lg shadow-sun/40 transition-all hover:-translate-y-0.5 hover:bg-gold">
              {button.text} <Icon name="arrow" className="h-5 w-5 transition-transform group-hover:translate-x-1.5" />
            </Link>
          </Reveal>
        </div>
      </div>

      {/* layered waves along the bottom */}
      <svg className="absolute bottom-0 left-0 h-28 w-full md:h-36" viewBox="0 0 1440 160" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 40 C 240 120, 520 140, 820 110 C 1000 90, 1100 120, 1440 160 L1440 160 L0 160 Z" fill="#1ba3c6" opacity="0.9" />
        <path d="M0 70 C 260 140, 560 160, 860 135 C 1040 120, 1180 150, 1440 160 L0 160 Z" fill="#0b2545" />
      </svg>
      <div className="absolute bottom-8 left-6 flex items-end gap-3 text-white md:left-10">
        <Icon name="pin" className="h-8 w-8 animate-float" />
        <svg className="mb-2 h-10 w-44" viewBox="0 0 180 40" fill="none" aria-hidden="true">
          <path d="M2 32 C 50 44, 110 40, 160 10" stroke="currentColor" strokeWidth="1.5" strokeDasharray="5 5" opacity="0.8" />
        </svg>
        <Icon name="plane" className="-ml-6 mb-6 h-8 w-8 -rotate-12 animate-float-slow" fill="currentColor" strokeWidth={0} />
      </div>
    </section>
  );
}
