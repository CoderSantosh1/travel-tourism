"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Icon from "./Icon";

// Inner-page hero: slow Ken Burns zoom, scroll parallax, letter-by-letter title.
export default function PageBanner({ title, crumb }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative h-[300px] overflow-hidden bg-navy sm:h-[370px]">
      <motion.div style={{ y }} className="absolute inset-0">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.25 }}
          animate={{ scale: 1.05 }}
          transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image src="/images/common/page-banner.jpg" alt="" fill priority sizes="100vw" className="object-cover" />
        </motion.div>
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-navy/30 via-navy/20 to-navy/50" />

      <motion.div style={{ opacity: fade }} className="relative flex h-full flex-col items-center justify-center px-4 text-center">
        <h1 className="font-serif text-5xl font-bold text-white drop-shadow-lg sm:text-6xl md:text-7xl">
          {title.split("").map((ch, i) => (
            <motion.span
              key={i}
              className="inline-block"
              initial={{ opacity: 0, y: 60, rotateX: -90 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.04, ease: [0.22, 1, 0.36, 1] }}
            >
              {ch === " " ? " " : ch}
            </motion.span>
          ))}
        </h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-5 flex items-center gap-2 rounded-full bg-white/15 px-5 py-2 text-sm text-white backdrop-blur-md"
        >
          <Link href="/" className="hover:text-sun">Home</Link>
          <Icon name="chevron" className="h-4 w-4" />
          <span className="text-sun">{crumb || title}</span>
        </motion.div>
      </motion.div>

      {/* plane gliding across the banner */}
      <div className="pointer-events-none absolute top-16 left-0 animate-fly text-white/70">
        <Icon name="plane" className="h-8 w-8 rotate-45" fill="currentColor" strokeWidth={0} />
      </div>
    </section>
  );
}
