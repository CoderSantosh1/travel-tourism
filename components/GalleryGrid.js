"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { gallery } from "@/data/site";
import Icon from "./Icon";

export default function GalleryGrid() {
  const [open, setOpen] = useState(null);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") setOpen((n) => (n + 1) % gallery.length);
      if (e.key === "ArrowLeft") setOpen((n) => (n - 1 + gallery.length) % gallery.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <div className="mt-12 grid grid-cols-2 gap-5 lg:grid-cols-4">
        {gallery.map((src, i) => (
          <motion.button
            key={src}
            onClick={() => setOpen(i)}
            initial={{ opacity: 0, scale: 0.8, rotate: i % 2 ? 3 : -3 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: (i % 4) * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="group relative aspect-[1.05] overflow-hidden rounded-xl shadow-lg"
          >
            <Image src={src} alt={`Gallery photo ${i + 1}`} fill sizes="(min-width:1024px) 25vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-115" />
            <span className="absolute inset-0 grid place-items-center bg-navy/50 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <span className="grid h-14 w-14 scale-0 place-items-center rounded-full bg-white text-sky transition-transform duration-500 group-hover:scale-100">
                <Icon name="zoom" className="h-6 w-6" />
              </span>
            </span>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {open !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
            className="fixed inset-0 z-[70] grid place-items-center bg-[#04101f]/90 p-4 backdrop-blur-sm"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={open}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35 }}
                className="relative aspect-[1.05] w-full max-w-3xl overflow-hidden rounded-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <Image src={gallery[open]} alt="" fill sizes="768px" className="object-cover" />
              </motion.div>
            </AnimatePresence>
            {[
              ["chevronLeft", "left-4", -1],
              ["chevron", "right-4", 1],
            ].map(([icon, pos, d]) => (
              <button
                key={icon}
                onClick={(e) => {
                  e.stopPropagation();
                  setOpen((n) => (n + d + gallery.length) % gallery.length);
                }}
                className={`absolute ${pos} top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/15 text-white hover:bg-sky`}
                aria-label={d > 0 ? "Next" : "Previous"}
              >
                <Icon name={icon} className="h-6 w-6" strokeWidth={3} />
              </button>
            ))}
            <button onClick={() => setOpen(null)} className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-white/15 text-white hover:bg-brand" aria-label="Close">
              <Icon name="close" className="h-6 w-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
