"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { testimonials } from "@/data/site";
import { SectionHeading } from "../ui";
import Icon, { Stars } from "../Icon";

// Repeat the three reviews so the carousel has four pages to cycle through.
const pages = 4;

function Card({ t }) {
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-[0_15px_45px_rgba(11,37,69,0.1)] transition-all duration-500 hover:-translate-y-2">
      <div className="flex-1 px-7 pt-6">
        <div className="flex items-start gap-4">
          <div className="relative h-[90px] w-[90px] shrink-0 overflow-hidden rounded-full ring-4 ring-sky/20 transition-all duration-500 group-hover:ring-sky/60">
            <Image src={t.avatar} alt={t.name} fill sizes="90px" className="scale-110 object-cover" />
          </div>
          <div className="flex-1 pt-3">
            <h4 className="font-semibold text-navy">{t.name}</h4>
            <p className="text-xs text-muted">{t.city}</p>
            <div className="mt-2"><Stars /></div>
          </div>
          <Icon name="quote" className="mt-3 h-10 w-10 text-sky/40 transition-transform duration-500 group-hover:scale-125" fill="currentColor" strokeWidth={0} />
        </div>
        <p className="mt-6 leading-relaxed text-slate-600">{t.text}</p>
      </div>
      <div className="relative mt-5 h-[100px] overflow-hidden">
        <svg viewBox="0 0 400 30" preserveAspectRatio="none" className="absolute -top-px left-0 z-10 h-6 w-full fill-white"><path d="M0 0h400v8C300 30 120 0 0 22z" /></svg>
        <Image src={t.scene} alt="" fill sizes="400px" className="object-cover transition-transform duration-700 group-hover:scale-110" />
      </div>
    </div>
  );
}

export default function Testimonials() {
  const [page, setPage] = useState(0);
  const [dir, setDir] = useState(1);

  const go = (d) => {
    setDir(d);
    setPage((p) => (p + d + pages) % pages);
  };

  useEffect(() => {
    const t = setInterval(() => go(1), 5000);
    return () => clearInterval(t);
  }, []);

  const order = testimonials.map((_, k) => testimonials[(k + page) % testimonials.length]);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#eef8fc] to-mist py-20">
      <div className="pointer-events-none absolute left-[15%] top-16 hidden animate-float text-sky/60 lg:block">
        <Icon name="plane" className="h-14 w-14 rotate-45" fill="currentColor" strokeWidth={0} />
      </div>
      <svg className="pointer-events-none absolute left-0 top-28 hidden h-24 w-72 text-sky/40 lg:block" viewBox="0 0 300 100" fill="none">
        <path d="M0 80 C60 90 80 30 40 40 C10 50 40 90 120 70 S240 20 290 10" stroke="currentColor" strokeWidth="2" strokeDasharray="6 6" />
      </svg>

      <div className="relative mx-auto max-w-[1200px] px-6">
        <SectionHeading
          eyebrow="Clients Reviews"
          title="Traveller’s"
          accent="Testimonial"
          text="Hear from our happy travelers who have experienced unforgettable journeys with us. Their stories inspire us to create even more memorable trips."
        />

        <div className="relative mt-12">
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={page}
              custom={dir}
              initial={{ opacity: 0, x: dir * 120 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: dir * -120 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="grid gap-6 md:grid-cols-3"
            >
              {order.map((t, k) => (
                <div key={t.name} className={k > 0 ? "hidden md:block" : ""}>
                  <Card t={t} />
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-10 flex items-center justify-center gap-4">
          <button onClick={() => go(-1)} className="grid h-10 w-10 place-items-center rounded-full bg-white text-navy shadow transition hover:bg-sky hover:text-white" aria-label="Previous">
            <Icon name="arrow" className="h-4 w-4 rotate-180" />
          </button>
          <div className="flex gap-2">
            {Array.from({ length: pages }, (_, n) => (
              <button key={n} onClick={() => { setDir(n > page ? 1 : -1); setPage(n); }} aria-label={`Page ${n + 1}`} className={`h-2.5 rounded-full transition-all duration-500 ${n === page ? "w-7 bg-navy" : "w-2.5 bg-sky/30"}`} />
            ))}
          </div>
          <button onClick={() => go(1)} className="grid h-10 w-10 place-items-center rounded-full bg-white text-navy shadow transition hover:bg-sky hover:text-white" aria-label="Next">
            <Icon name="arrow" className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
