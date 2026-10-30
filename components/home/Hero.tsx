"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Icon from "../Icon";
import { ease } from "../Motion";
import { heroData } from "@/data/site-data";

const { slides, subtitle, title1, titleHighlight, title2, description, primaryButton, secondaryButton } = heroData;
const highlightCount = titleHighlight.split(" ").length;

export default function Hero() {
  const [i, setI] = useState(0);
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const textY = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % slides.length), 6500);
    return () => clearInterval(t);
  }, []);

  return (
    <section ref={ref} className="relative h-[680px] overflow-hidden bg-navy sm:h-[600px] lg:h-[640px]">
      {/* Ken Burns crossfade slider */}
      <motion.div style={{ y: bgY }} className="absolute inset-0">
        <AnimatePresence initial={false}>
          <motion.div
            key={i}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.18 }}
            animate={{ opacity: 1, scale: 1.02 }}
            exit={{ opacity: 0 }}
            transition={{ opacity: { duration: 1.4 }, scale: { duration: 7.5, ease: "linear" } }}
          >
            <Image src={slides[i]} alt="" fill priority sizes="100vw" className="object-cover object-right" />
          </motion.div>
        </AnimatePresence>
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#06182e]/85 via-[#06182e]/45 to-transparent" />

      <motion.div style={{ y: textY }} className="relative mx-auto flex h-full max-w-[1400px] flex-col justify-center px-6 sm:px-16">
        <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3, ease }} className="flex items-center gap-4">
          <span className="font-script text-3xl text-white sm:text-4xl">{subtitle}</span>
          <motion.span initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.8, delay: 1 }} className="hidden h-[3px] w-16 origin-left rounded bg-brand sm:block" />
        </motion.div>

        <h1 className="mt-4 font-serif text-[2.6rem] font-bold leading-[1.08] text-white sm:text-6xl lg:text-7xl">
          {[title1.split(" "), `${titleHighlight} ${title2}`.split(" ")].map((line, li) => (
            <span key={li} className="block">
              {line.map((w, wi) => (
                <span key={w} className="inline-block overflow-hidden pb-2 align-bottom">
                  <motion.span
                    className={`inline-block ${li === 1 && wi < highlightCount ? "text-brand" : ""}`}
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.9, delay: 0.5 + li * 0.25 + wi * 0.08, ease }}
                  >
                    {w}&nbsp;
                  </motion.span>
                </span>
              ))}
            </span>
          ))}
        </h1>

        <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.2 }} className="mt-5 max-w-lg text-[17px] leading-relaxed text-white/95">
          {description}
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.45 }} className="mt-8 flex flex-wrap gap-4">
          <Link href={primaryButton.url} className="group relative overflow-hidden rounded-full bg-brand px-8 py-3.5 font-medium text-white shadow-lg shadow-brand/40">
            <span className="absolute inset-0 translate-y-full bg-white transition-transform duration-500 group-hover:translate-y-0" />
            <span className="relative flex items-center gap-2 transition-colors group-hover:text-brand">{primaryButton.text} <Icon name="arrow" className="h-4 w-4" /></span>
          </Link>
          <Link href={secondaryButton.url} className="rounded-full border-2 border-white/80 px-8 py-3.5 font-medium text-white backdrop-blur-sm transition hover:bg-white hover:text-navy">
            {secondaryButton.text}
          </Link>
        </motion.div>
      </motion.div>

      {/* slide indicators */}
      <div className="absolute bottom-8 right-6 hidden gap-2 sm:flex sm:right-16">
        {slides.map((_, n) => (
          <button key={n} onClick={() => setI(n)} aria-label={`Slide ${n + 1}`} className="relative h-1.5 w-10 overflow-hidden rounded-full bg-white/35">
            {n === i && <motion.span key={i} className="absolute inset-y-0 left-0 bg-white" initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 6.5, ease: "linear" }} />}
          </button>
        ))}
      </div>

      {/* scroll cue */}
      <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 1.8 }} className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 sm:block">
        <div className="flex h-11 w-7 justify-center rounded-full border-2 border-white/70 pt-2">
          <span className="h-2 w-1 rounded-full bg-white" />
        </div>
      </motion.div>

      <div className="pointer-events-none absolute top-24 left-0 animate-fly text-white/80">
        <Icon name="plane" className="h-9 w-9 rotate-45" fill="currentColor" strokeWidth={0} />
      </div>
    </section>
  );
}
