"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

// Main photo with clickable thumbnails that crossfade the main image.
export default function DetailGallery({ images }) {
  const [active, setActive] = useState(0);
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative aspect-[1.82] overflow-hidden rounded-xl shadow-xl"
      >
        <AnimatePresence initial={false}>
          <motion.div
            key={active}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.12 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9 }}
          >
            <Image src={images[active]} alt="" fill priority sizes="(min-width:1024px) 860px, 100vw" className="object-cover" />
          </motion.div>
        </AnimatePresence>
      </motion.div>
      <div className="mt-4 grid grid-cols-4 gap-3 sm:gap-4">
        {images.map((src, i) => (
          <motion.button
            key={src}
            onClick={() => setActive(i)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 + i * 0.1 }}
            whileHover={{ y: -4 }}
            className={`relative aspect-[1.75] overflow-hidden rounded-lg ring-offset-2 ring-offset-mist transition ${active === i ? "ring-3 ring-sky" : "opacity-80 hover:opacity-100"}`}
          >
            <Image src={src} alt="" fill sizes="200px" className="object-cover" />
          </motion.button>
        ))}
      </div>
    </div>
  );
}
