"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal, Stagger, StaggerItem, DrawLine } from "./Motion";
import Icon from "./Icon";

function Field({ icon, textarea, ...props }) {
  return (
    <label className="relative block">
      <span className="pointer-events-none absolute left-4 top-3.5 text-slate-500"><Icon name={icon} className="h-5 w-5" /></span>
      {textarea ? <textarea rows={4} className="field resize-none" {...props} /> : <input className="field" {...props} />}
    </label>
  );
}

// Navy enquiry / booking card used in the detail-page sidebars.
export function EnquiryCard({ title, subtitle, button = "Send Enquiry", withMessage = true, sendIcon = false }) {
  const [sent, setSent] = useState(false);
  return (
    <Reveal from="right" className="relative overflow-hidden rounded-xl bg-navy p-7 text-white shadow-xl">
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-sky/20 blur-2xl" />
      <h3 className="font-serif text-3xl font-bold">{title}</h3>
      <DrawLine className="mt-2 h-[3px] w-14 rounded bg-gold" />
      <p className="mt-3 text-white/85">{subtitle}</p>
      <form
        className="mt-6 space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          setSent(true);
          e.currentTarget.reset();
        }}
      >
        <Field icon="user" placeholder="Your Name*" required />
        <Field icon="mail" type="email" placeholder="Your Email*" required />
        <Field icon="calendar" type="text" placeholder="Travel Date" onFocus={(e) => (e.target.type = "date")} />
        <Field icon="users" type="number" min="1" placeholder="Number of Travelers" />
        {withMessage && <Field icon="message" textarea placeholder="Your Message" />}
        <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }} className="flex w-full items-center justify-center gap-3 rounded-md bg-sun py-3.5 font-semibold text-navy shadow-lg transition-colors hover:bg-gold">
          {sendIcon && <Icon name="send" className="h-5 w-5" />} {button}
        </motion.button>
      </form>
      <AnimatePresence>
        {sent && (
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="mt-4 flex items-center gap-2 text-sm text-sun">
            <Icon name="check" className="h-4 w-4" /> Thank you! Our travel expert will contact you soon.
          </motion.p>
        )}
      </AnimatePresence>
    </Reveal>
  );
}

export function PopularList({ items, compact = false }) {
  return (
    <Reveal from="right" className="rounded-xl bg-white p-6 shadow-[0_10px_35px_rgba(11,37,69,0.08)]">
      <h3 className="font-serif text-3xl font-bold text-navy">Popular Destinations</h3>
      <DrawLine className="mt-2 h-[3px] w-14 rounded bg-gold" />
      <Stagger className="mt-6 space-y-4" stagger={0.1}>
        {items.map((d) => (
          <StaggerItem key={d.name} from="right">
            <Link href="/destination-detail" className="group flex items-center gap-4">
              <span className={`relative shrink-0 overflow-hidden rounded-md ${compact ? "h-16 w-22" : "h-20 w-24"}`}>
                <Image src={d.img} alt={d.name} fill sizes="100px" className="object-cover transition-transform duration-500 group-hover:scale-115" />
              </span>
              <span className="flex-1">
                <span className="block font-semibold text-navy transition-colors group-hover:text-sky">{d.name}</span>
                <span className="text-sm text-muted">{d.trips} Trips</span>
              </span>
              {!compact && <Icon name="chevron" className="h-5 w-5 text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-sky" />}
            </Link>
          </StaggerItem>
        ))}
      </Stagger>
    </Reveal>
  );
}
