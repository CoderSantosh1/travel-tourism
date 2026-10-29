"use client";

import Image from "next/image";
import Link from "next/link";
import Icon from "./Icon";
import type { Service, TourPackage, Destination, BlogPost } from "@/types/site";

export function ServiceCard({ s }: { s: Service }) {
  return (
    <div className="group h-full rounded-2xl bg-white p-1 shadow-[0_10px_40px_rgba(11,37,69,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_50px_rgba(27,163,198,0.25)]">
      <div className="shine relative h-[150px] overflow-hidden rounded-t-xl sm:h-[170px]">
        <Image src={s.img} alt={s.title} fill sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-110" />
      </div>
      <div className="relative px-5 pb-6 pt-11 text-center">
        <span className="absolute -top-8 left-1/2 grid h-16 w-16 -translate-x-1/2 place-items-center rounded-full border-4 border-white bg-[#e2f6fb] text-sky shadow-md transition-all duration-500 group-hover:rotate-[360deg] group-hover:bg-sky group-hover:text-white">
          <Icon name={s.icon} className="h-7 w-7" />
        </span>
        <h3 className="font-serif text-2xl font-bold text-navy">{s.title}</h3>
        <p className="mx-auto mt-2 max-w-[250px] text-[15px] leading-relaxed text-muted">{s.text}</p>
        <Link href="/services" className="mt-5 inline-flex items-center gap-2 rounded-full border-2 border-sky px-8 py-2 text-sm font-semibold text-sky transition-all duration-300 hover:bg-sky hover:text-white">
          Read More <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}

export function PackageCard({ p, home = false }: { p: TourPackage; home?: boolean }) {
  return (
    <div className="group h-full overflow-hidden rounded-xl bg-white shadow-[0_10px_35px_rgba(11,37,69,0.09)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_50px_rgba(11,37,69,0.18)]">
      <div className="shine relative h-[200px] overflow-hidden">
        <Image src={home && p.homeImg ? p.homeImg : p.img} alt={p.title} fill sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-110" />
        <span className="absolute left-3 top-3 -translate-y-12 rounded-full bg-brand px-3 py-1 text-xs font-semibold text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          Best Seller
        </span>
      </div>
      <div className="p-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-sky">{p.country}</p>
        <h3 className="mt-1 font-serif text-2xl font-bold text-navy transition-colors group-hover:text-sky">{p.title}</h3>
        <p className="mt-1 text-[15px] leading-snug text-muted">{p.text}</p>
        <div className="mt-4 flex items-center justify-between gap-2">
          <span className="flex items-center gap-1.5 whitespace-nowrap text-[13px] text-muted">
            <Icon name="clock" className="h-4 w-4 shrink-0 text-sky" /> {p.days}
          </span>
          <Link href="/package-detail" className="inline-flex shrink-0 items-center gap-1 whitespace-nowrap rounded-full border-2 border-sky px-3 py-1.5 text-xs font-semibold text-sky transition-colors hover:bg-sky hover:text-white">
            View Details <Icon name="arrow" className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export function DestinationCard({ d }: { d: Destination }) {
  return (
    <Link href="/destination-detail" className="group block h-full overflow-hidden rounded-2xl bg-white shadow-[0_10px_35px_rgba(11,37,69,0.09)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_50px_rgba(11,37,69,0.2)]">
      <div className="shine relative h-[210px] overflow-hidden">
        <Image src={d.img} alt={d.title} fill sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw" className="object-cover transition-transform duration-[1200ms] group-hover:scale-115 group-hover:rotate-1" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <span className="absolute bottom-3 left-1/2 flex -translate-x-1/2 translate-y-4 items-center gap-1 text-sm font-medium text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          Explore <Icon name="arrow" className="h-4 w-4" />
        </span>
      </div>
      <div className="relative px-6 pb-6 pt-5">
        <span className="absolute -top-3.5 right-4 flex gap-0.5 rounded-full bg-[#1d5fb8] px-3 py-1 text-white shadow">
          {Array.from({ length: 5 }, (_, i) => <Icon key={i} name="star" className="h-3 w-3" fill="currentColor" strokeWidth={0} />)}
        </span>
        <p className="text-xs font-semibold uppercase tracking-wide text-sky">{d.country}</p>
        <h3 className="mt-1 font-serif text-2xl font-bold text-navy">{d.title}</h3>
        <p className="mt-2 text-[15px] leading-relaxed text-muted">{d.text}</p>
      </div>
    </Link>
  );
}

export function BlogCard({ b }: { b: BlogPost }) {
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-[0_10px_35px_rgba(11,37,69,0.09)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_50px_rgba(11,37,69,0.18)]">
      <div className="shine relative h-[170px] overflow-hidden">
        <Image src={b.img} alt={b.title} fill sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-110" />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-sky">{b.cat}</p>
        <h3 className="mt-1 font-serif text-[22px] font-bold leading-tight text-navy transition-colors group-hover:text-sky">
          <Link href="/blog-detail">{b.title}</Link>
        </h3>
        <p className="mt-2 flex-1 text-[15px] leading-snug text-muted">{b.text}</p>
        <div className="mt-4 flex items-center justify-between text-sm">
          <span className="flex items-center gap-1.5 text-muted"><Icon name="calendar" className="h-4 w-4" /> {b.date}</span>
          <Link href="/blog-detail" className="inline-flex items-center gap-1.5 font-semibold text-sky">
            Read More <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export interface PaginationProps {
  currentPage?: number;
  totalPages?: number;
  onPageChange?: (page: number) => void;
  className?: string;
}

export function Pagination({
  currentPage = 1,
  totalPages = 4,
  onPageChange,
  className = "",
}: PaginationProps) {
  if (totalPages <= 1) return null;

  return (
    <nav aria-label="Pagination" className={`mt-12 flex items-center justify-center gap-3 ${className}`}>
      <button
        type="button"
        disabled={currentPage <= 1}
        onClick={() => onPageChange?.(currentPage - 1)}
        className="grid h-10 w-10 place-items-center rounded-full bg-[#e2f6fb] text-sky transition hover:bg-sky hover:text-white disabled:pointer-events-none disabled:opacity-40"
        aria-label="Previous page"
      >
        <Icon name="chevronLeft" className="h-5 w-5" strokeWidth={3} />
      </button>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
        <button
          key={n}
          type="button"
          onClick={() => onPageChange?.(n)}
          aria-label={`Go to page ${n}`}
          aria-current={n === currentPage ? "page" : undefined}
          className={`grid h-10 w-10 place-items-center rounded-lg text-sm font-medium shadow transition hover:-translate-y-0.5 ${
            n === currentPage
              ? "bg-sky text-white shadow-sky/25"
              : "bg-white text-ink hover:text-sky"
          }`}
        >
          {n}
        </button>
      ))}

      <button
        type="button"
        disabled={currentPage >= totalPages}
        onClick={() => onPageChange?.(currentPage + 1)}
        className="grid h-10 w-10 place-items-center rounded-full bg-[#e2f6fb] text-sky transition hover:bg-sky hover:text-white disabled:pointer-events-none disabled:opacity-40"
        aria-label="Next page"
      >
        <Icon name="chevron" className="h-5 w-5" strokeWidth={3} />
      </button>
    </nav>
  );
}
