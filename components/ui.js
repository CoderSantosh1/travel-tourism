import Link from "next/link";
import { Reveal, SplitText, DrawLine } from "./Motion";
import Icon from "./Icon";

// Eyebrow + two-tone heading + intro used at the top of most sections.
export function SectionHeading({ eyebrow, title, accent, text, align = "center", className = "" }) {
  const center = align === "center";
  return (
    <div className={`${center ? "mx-auto text-center" : ""} max-w-3xl ${className}`}>
      <Reveal className={`flex items-center gap-4 ${center ? "justify-center" : ""}`}>
        {center && <DrawLine className="h-[2px] w-12 bg-gold" />}
        <span className="text-sm font-semibold uppercase tracking-[0.25em] text-sky">{eyebrow}</span>
        <DrawLine className="h-[2px] w-12 bg-gold" />
      </Reveal>
      <h2 className="mt-3 font-serif text-4xl font-bold leading-tight text-navy sm:text-5xl">
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
export function BlockTitle({ children, className = "" }) {
  return (
    <div className={className}>
      <h3 className="font-serif text-3xl font-bold text-navy">{children}</h3>
      <DrawLine className="mt-2 h-[3px] w-14 rounded bg-gold" />
    </div>
  );
}

export function PillButton({ href, children, variant = "solid", className = "" }) {
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
