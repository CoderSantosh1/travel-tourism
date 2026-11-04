import Link from "next/link";
import { Reveal, SplitText, DrawLine } from "./Motion";
import Icon from "./Icon";
import type { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  accent?: string;
  text?: string;
  align?: "center" | "left";
  /** Keep the heading on one line from tablet width up. */
  singleLine?: boolean;
  className?: string;
}

// Eyebrow + two-tone heading + intro used at the top of most sections.
export function SectionHeading({ eyebrow, title, accent, text, align = "center", singleLine = false, className = "" }: SectionHeadingProps) {
  const center = align === "center";
  return (
    <div className={`${center ? "mx-auto text-center" : ""} ${singleLine ? "max-w-5xl" : "max-w-3xl"} ${className}`}>
      <Reveal className={`flex items-center gap-3 sm:gap-4 ${center ? "justify-center" : ""}`}>
        {center && <DrawLine className="h-[2px] w-8 shrink-0 bg-gold sm:w-12" />}
        <span className="whitespace-nowrap text-xs font-semibold uppercase tracking-[0.18em] text-sky sm:text-sm sm:tracking-[0.25em]">{eyebrow}</span>
        <DrawLine className="h-[2px] w-8 shrink-0 bg-gold sm:w-12" />
      </Reveal>
      <h2 className={`mt-3 text-balance font-serif text-[2rem] font-bold leading-tight text-navy sm:text-5xl ${singleLine ? "md:whitespace-nowrap" : ""}`}>
        <SplitText text={title} /> {accent && <SplitText text={accent} className="text-sky" delay={0.25} />}
      </h2>
      {text && (
        <Reveal delay={0.2}>
          <p className="mt-4 text-[17px] leading-relaxed text-muted">{text}</p>
        </Reveal>
      )}
    </div>
  );
}

// Small title with gold underline used in detail pages / sidebars.
export function BlockTitle({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={className}>
      <h3 className="text-balance font-serif text-2xl font-bold text-navy sm:text-3xl">{children}</h3>
      <DrawLine className="mt-2 h-[3px] w-14 rounded bg-gold" />
    </div>
  );
}

export function PillButton({ href, children, variant = "solid", className = "" }: { href: string; children: ReactNode; variant?: "solid" | "outline"; className?: string }) {
  const styles =
    variant === "solid"
      ? "bg-sky text-white shadow-[0_8px_20px_rgba(27,163,198,0.35)] hover:bg-navy"
      : "border-2 border-sky text-sky hover:bg-sky hover:text-white";
  return (
    <Link href={href} className={`group inline-flex items-center gap-2 rounded-full px-8 py-3 font-medium transition-all duration-300 hover:-translate-y-0.5 ${styles} ${className}`}>
      {children}
      <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1.5" />
    </Link>
  );
}
