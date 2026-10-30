"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { headerData } from "@/data/site-data";
import Icon from "./Icon";

// Detail pages highlight their parent section.
const sectionOf = (path: string) => {
  if (path.startsWith("/destination")) return "/destinations";
  if (path.startsWith("/package") || path.startsWith("/tour-packages")) return "/tour-packages";
  if (path.startsWith("/blog")) return "/blog";
  if (path.startsWith("/gallery")) return "/gallery";
  return path;
};

export default function Header() {
  const pathname = usePathname();
  const active = sectionOf(pathname);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <motion.header
      initial={{ y: -90 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${scrolled ? "shadow-[0_8px_30px_rgba(11,37,69,0.12)]" : ""}`}
    >
      <div className={`mx-auto flex max-w-[1400px] items-center justify-between px-4 transition-all duration-300 sm:px-8 ${scrolled ? "h-[64px]" : "h-[76px]"}`}>
        <Link href="/" className="relative shrink-0">
          <Image src={headerData.logo} alt={headerData.logoAlt} width={1109} height={313} priority className={`w-auto transition-all duration-300 ${scrolled ? "h-[40px] xl:h-[44px]" : "h-[46px] xl:h-[54px]"}`} />
        </Link>

        <nav className="hidden items-center lg:flex xl:gap-1 2xl:gap-3">
          {headerData.navLinks.map((l) => {
            const isActive = active === l.url;
            return (
              <Link
                key={l.id}
                href={l.url}
                className={`relative whitespace-nowrap px-2 py-2 text-[14px] transition-colors xl:px-2.5 xl:text-[15px] 2xl:px-3 ${isActive ? "font-medium text-brand" : "text-ink hover:text-brand"}`}
              >
                {l.label}
                {isActive && (
                  <motion.span layoutId="nav-underline" className="absolute inset-x-2 -bottom-0.5 h-[3px] rounded-full bg-brand xl:inset-x-2.5 2xl:inset-x-3" transition={{ type: "spring", stiffness: 380, damping: 30 }} />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href={headerData.bookingButton.url}
            className="group relative hidden overflow-hidden rounded-xl bg-brand px-5 py-2.5 font-medium text-white xl:px-7 xl:py-3 shadow-[0_6px_18px_rgba(217,85,43,0.35)] transition-transform hover:-translate-y-0.5 sm:inline-block"
          >
            <span className="absolute inset-0 -translate-x-full bg-navy transition-transform duration-500 group-hover:translate-x-0" />
            <span className="relative">{headerData.bookingButton.text}</span>
          </Link>
          <button onClick={() => setOpen(!open)} className="grid h-11 w-11 place-items-center rounded-lg bg-mist text-navy lg:hidden" aria-label="Toggle menu">
            <Icon name={open ? "close" : "menu"} className="h-6 w-6" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-slate-100 bg-white lg:hidden"
          >
            <ul className="space-y-1 px-4 py-4">
              {[...headerData.navLinks, { id: "nl-booking", label: headerData.bookingButton.text, url: headerData.bookingButton.url }].map((l, i) => (
                <motion.li key={l.id} initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: i * 0.05 }}>
                  <Link href={l.url} className={`block rounded-lg px-4 py-3 ${active === l.url ? "bg-brand/10 font-medium text-brand" : "text-ink hover:bg-mist"}`}>
                    {l.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
