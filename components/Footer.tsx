import Image from "next/image";
import Link from "next/link";
import { common } from "@/data/site-data";
import { Reveal, DrawLine } from "./Motion";
import Icon from "./Icon";
import type { ReactNode } from "react";

function Column({ title, children, delay, className = "" }: { title: string; children: ReactNode; delay: number; className?: string }) {
  return (
    <Reveal delay={delay} className={className}>
      <h4 className="font-serif text-xl font-bold tracking-tight text-white sm:text-2xl">{title}</h4>
      <DrawLine className="mb-5 mt-3 h-[3px] w-10 rounded bg-sky sm:mb-6" />
      <ul className="space-y-3">{children}</ul>
    </Reveal>
  );
}

function FooterLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <li>
      <Link href={href} className="group inline-flex items-center gap-2 text-[15px] text-white/90 sm:gap-3 sm:text-base transition-colors hover:text-sky">
        <Icon name="chevron" className="h-4 w-4 text-sky transition-transform group-hover:translate-x-1" strokeWidth={3} />
        <span className="transition-transform group-hover:translate-x-1">{children}</span>
      </Link>
    </li>
  );
}

export default function Footer() {
  const { Footer: footer, contactInfo: contact } = common;
  return (
    <footer className="relative overflow-hidden bg-navy text-white">
      <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-sky/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-brand/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-[1280px] grid-cols-2 gap-x-6 gap-y-10 px-6 py-14 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr]">
        <Reveal from="left" className="col-span-2 lg:col-span-1">
          <Image src={footer.logo} alt={footer.logoAlt} width={1109} height={313} className="h-[42px] w-auto sm:h-[54px]" />
          <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-white/90 sm:mt-5 sm:text-[17px]">
            {footer.description}
          </p>
          <ul className="mt-6 space-y-3 text-white/90">
            <li className="flex gap-4"><Icon name="pin" className="mt-0.5 h-5 w-5 shrink-0 text-sky" /> <span>{contact.address}</span></li>
            <li className="flex gap-4"><Icon name="phone" className="h-5 w-5 shrink-0 text-sky" /> <a href={contact.phoneUrl} className="hover:text-sky">{contact.phone}</a></li>
            <li className="flex gap-4"><Icon name="mail" className="h-5 w-5 shrink-0 text-sky" /> <a href={contact.emailUrl} className="hover:text-sky">{contact.email}</a></li>
          </ul>
        </Reveal>

        <Column title={footer.quickLinksTitle} delay={0.1}>
          {footer.quickLinks.map((l) => <FooterLink key={l.id} href={l.url}>{l.label}</FooterLink>)}
        </Column>
        <Column title={footer.servicesTitle} delay={0.2}>
          {footer.servicesLinks.map((l) => <FooterLink key={l.id} href={l.url}>{l.label}</FooterLink>)}
        </Column>
        <Column title={footer.destinationsTitle} delay={0.3} className="col-span-2 sm:col-span-1">
          {footer.destinationsLinks.map((l) => <FooterLink key={l.id} href={l.url}>{l.label}</FooterLink>)}
        </Column>
      </div>

      <div className="relative border-t border-sky/30 py-7 text-center text-white/90">
        {footer.copyrightText.replace("{year}", String(new Date().getFullYear()))}
      </div>
    </footer>
  );
}
