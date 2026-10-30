"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Reveal, Stagger, StaggerItem, DrawLine } from "./Motion";
import Icon from "./Icon";
import { AnimatedForm, InputField } from "./ContactForm";
import type { EnquiryFormData, PopularData } from "@/types/site";

// Navy enquiry / booking card used in the detail-page sidebars.
export function EnquiryCard({ form }: { form: EnquiryFormData }) {
  const { title, subtitle, buttonText, sendIcon, successMessage, fields } = form;
  return (
    <Reveal from="right" className="relative overflow-hidden rounded-xl bg-navy p-7 text-white shadow-xl">
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-sky/20 blur-2xl" />
      <h3 className="font-serif text-3xl font-bold">{title}</h3>
      <DrawLine className="mt-2 h-[3px] w-14 rounded bg-gold" />
      <p className="mt-3 text-white/85">{subtitle}</p>
      <AnimatedForm dark className="mt-6 space-y-4" success={successMessage}>
        {fields.map((f) => <InputField key={f.name} {...f} />)}
        <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }} className="flex w-full items-center justify-center gap-3 rounded-md bg-sun py-3.5 font-semibold text-navy shadow-lg transition-colors hover:bg-gold">
          {sendIcon && <Icon name="send" className="h-5 w-5" />} {buttonText}
        </motion.button>
      </AnimatedForm>
    </Reveal>
  );
}

export function PopularList({ data, compact = false }: { data: PopularData; compact?: boolean }) {
  const { title, tripsLabel, url, items } = data;
  return (
    <Reveal from="right" className="rounded-xl bg-white p-6 shadow-[0_10px_35px_rgba(11,37,69,0.08)]">
      <h3 className="font-serif text-3xl font-bold text-navy">{title}</h3>
      <DrawLine className="mt-2 h-[3px] w-14 rounded bg-gold" />
      <Stagger className="mt-6 space-y-4" stagger={0.1}>
        {items.map((d) => (
          <StaggerItem key={d.name} from="right">
            <Link href={url} className="group flex items-center gap-4">
              <span className={`relative shrink-0 overflow-hidden rounded-md ${compact ? "h-16 w-22" : "h-20 w-24"}`}>
                <Image src={d.img} alt={d.name} fill sizes="100px" className="object-cover transition-transform duration-500 group-hover:scale-115" />
              </span>
              <span className="flex-1">
                <span className="block font-semibold text-navy transition-colors group-hover:text-sky">{d.name}</span>
                <span className="text-sm text-muted">{d.trips} {tripsLabel}</span>
              </span>
              {!compact && <Icon name="chevron" className="h-5 w-5 text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-sky" />}
            </Link>
          </StaggerItem>
        ))}
      </Stagger>
    </Reveal>
  );
}
