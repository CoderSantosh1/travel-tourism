"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { gallery } from "@/data/site-data";
import Icon from "./Icon";
import { Pagination } from "./Cards";

export default function GalleryGrid({
  items = gallery,
  itemsPerPage = 12,
}: {
  items?: string[];
  itemsPerPage?: number;
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [open, setOpen] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;
  }, []);

  const totalPages = Math.ceil(items.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = items.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages || page === currentPage) return;
    setCurrentPage(page);
    if (sectionRef.current) {
      const yOffset = -80;
      const y = sectionRef.current.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") setOpen((n) => ((n ?? 0) + 1) % currentItems.length);
      if (e.key === "ArrowLeft") setOpen((n) => ((n ?? 0) - 1 + currentItems.length) % currentItems.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, currentItems.length]);

  return (
    <div ref={sectionRef}>
      <motion.div
        key={currentPage}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="mt-12 grid grid-cols-2 gap-5 lg:grid-cols-4"
      >
        {currentItems.map((src, i) => (
          <motion.button
            key={src}
            onClick={() => setOpen(i)}
            initial={{ opacity: 0, scale: 0.88, rotate: i % 2 ? 2 : -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.55, delay: (i % 4) * 0.07, ease: [0.22, 1, 0.36, 1] }}
            className="group relative aspect-[1.05] overflow-hidden rounded-xl shadow-lg"
          >
            <Image
              src={src}
              alt={`Gallery photo ${startIndex + i + 1}`}
              fill
              sizes="(min-width:1024px) 25vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-115"
            />
            <span className="absolute inset-0 grid place-items-center bg-navy/50 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <span className="grid h-14 w-14 scale-0 place-items-center rounded-full bg-white text-sky transition-transform duration-500 group-hover:scale-100">
                <Icon name="zoom" className="h-6 w-6" />
              </span>
            </span>
          </motion.button>
        ))}
      </motion.div>

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}

      {/* Lightbox Modal */}
      <AnimatePresence>
        {open !== null && currentItems[open] && (
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
                <Image src={currentItems[open]} alt={`Gallery photo ${startIndex + open + 1}`} fill sizes="768px" className="object-cover" />
              </motion.div>
            </AnimatePresence>
            {([
              ["chevronLeft", "left-4", -1],
              ["chevron", "right-4", 1],
            ] as const).map(([icon, pos, d]) => (
              <button
                key={icon}
                onClick={(e) => {
                  e.stopPropagation();
                  setOpen((n) => ((n ?? 0) + d + currentItems.length) % currentItems.length);
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
    </div>
  );
}
