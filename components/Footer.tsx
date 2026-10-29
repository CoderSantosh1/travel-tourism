import Image from "next/image";
import Link from "next/link";
import { contact, quickLinks, footerServices, footerDestinations } from "@/data/site-data";
import { Reveal, DrawLine } from "./Motion";
import Icon from "./Icon";
import type { ReactNode } from "react";

function Column({ title, children, delay }: { title: string; children: ReactNode; delay: number }) {
  return (
    <Reveal delay={delay}>
      <h4 className="font-serif text-2xl font-bold tracking-tight text-white">{title}</h4>
      <DrawLine className="mt-3 mb-6 h-[3px] w-10 rounded bg-sky" />
      <ul className="space-y-3">{children}</ul>
    </Reveal>
  );
}

function FooterLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <li>
      <Link href={href} className="group inline-flex items-center gap-3 text-white/90 transition-colors hover:text-sky">
        <Icon name="chevron" className="h-4 w-4 text-sky transition-transform group-hover:translate-x-1" strokeWidth={3} />
        <span className="transition-transform group-hover:translate-x-1">{children}</span>
      </Link>
    </li>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy text-white">
      <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-sky/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-brand/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-[1200px] gap-12 px-6 py-20 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr]">
        <Reveal from="left">
          <Image src="/common/logo-white.png" alt="TourAvibe" width={1109} height={313} className="h-[72px] w-auto" />
          <p className="mt-5 max-w-sm text-[17px] leading-relaxed text-white/90">
            Explore the world with unforgettable experiences, handpicked destinations and customized travel packages crafted just for you.
          </p>
          <ul className="mt-6 space-y-3 text-white/90">
            <li className="flex gap-4"><Icon name="pin" className="mt-0.5 h-5 w-5 shrink-0 text-sky" /> <span>{contact.address}</span></li>
            <li className="flex gap-4"><Icon name="phone" className="h-5 w-5 shrink-0 text-sky" /> <a href={`tel:${contact.phone.replace(/\s+/g, "")}`} className="hover:text-sky">{contact.phone}</a></li>
            <li className="flex gap-4"><Icon name="mail" className="h-5 w-5 shrink-0 text-sky" /> <a href={`mailto:${contact.email}`} className="hover:text-sky">{contact.email}</a></li>
          </ul>
        </Reveal>

        <Column title="Quick Links" delay={0.1}>
          {quickLinks.map((l) => <FooterLink key={l.href} href={l.href}>{l.label}</FooterLink>)}
        </Column>
        <Column title="Our Services" delay={0.2}>
          {footerServices.map((s) => <FooterLink key={s} href="/services">{s}</FooterLink>)}
        </Column>
        <Column title="Popular Destinations" delay={0.3}>
          {footerDestinations.map((d) => <FooterLink key={d} href="/destinations">{d}</FooterLink>)}
        </Column>
      </div>

      <div className="relative border-t border-sky/30 py-7 text-center text-white/90">
        © {new Date().getFullYear()} TourAvibe. All Rights Reserved. Powered by Lestow.
      </div>
    </footer>
  );
}
