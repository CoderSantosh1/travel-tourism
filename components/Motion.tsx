"use client";

import { motion, useInView, useMotionValue, useSpring, useTransform, useScroll, type TargetAndTransition } from "framer-motion";
import { useRef, type ReactNode, type MouseEvent } from "react";

export const ease = [0.22, 1, 0.36, 1] as const;

const offsets = {
  up: { y: 50 },
  down: { y: -50 },
  left: { x: -70 },
  right: { x: 70 },
  zoom: { scale: 0.85 },
  flip: { rotateX: 35, y: 40, transformPerspective: 900 },
} satisfies Record<string, TargetAndTransition>;

export type RevealFrom = keyof typeof offsets;

interface RevealProps {
  children?: ReactNode;
  from?: RevealFrom;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  amount?: number;
}

// Scroll-triggered reveal wrapper.
export function Reveal({ children, from = "up", delay = 0, duration = 0.8, className = "", once = true, amount = 0.2 }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...offsets[from] }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1, rotateX: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

interface StaggerProps {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
  amount?: number;
  animate?: string;
}

// Parent that staggers its <StaggerItem> children into view.
export function Stagger({ children, className = "", stagger = 0.12, delay = 0, amount = 0.15, animate }: StaggerProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      animate={animate}
      viewport={{ once: true, amount }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: stagger, delayChildren: delay } } }}
    >
      {children}
    </motion.div>
  );
}

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
  from?: RevealFrom;
}

export function StaggerItem({ children, className = "", from = "up" }: StaggerItemProps) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, ...offsets[from] },
        show: { opacity: 1, x: 0, y: 0, scale: 1, rotateX: 0, transition: { duration: 0.75, ease } },
      }}
    >
      {children}
    </motion.div>
  );
}

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
}

// Splits text into words that rise up one after another.
export function SplitText({ text, className = "", delay = 0, stagger = 0.07 }: SplitTextProps) {
  const words = text.split(" ");
  // The trigger lives on the wrapper: each word starts clipped, so it can't observe itself.
  return (
    <motion.span className={className} aria-label={text} initial="hidden" whileInView="show" viewport={{ once: true }}>
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden pb-[0.08em] align-bottom" aria-hidden="true">
          <motion.span
            className="inline-block"
            variants={{
              hidden: { y: "110%", rotate: 4 },
              show: { y: 0, rotate: 0, transition: { duration: 0.8, delay: delay + i * stagger, ease } },
            }}
          >
            {w}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}

interface TiltProps {
  children: ReactNode;
  className?: string;
  max?: number;
}

// Card that tilts toward the cursor in 3D.
export function Tilt({ children, className = "", max = 8 }: TiltProps) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rx = useSpring(useTransform(my, [0, 1], [max, -max]), { stiffness: 200, damping: 18 });
  const ry = useSpring(useTransform(mx, [0, 1], [-max, max]), { stiffness: 200, damping: 18 });

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width);
    my.set((e.clientY - r.top) / r.height);
  };
  const reset = () => {
    mx.set(0.5);
    my.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 1000 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface ParallaxProps {
  children: ReactNode;
  className?: string;
  speed?: number;
}

// Image wrapper that drifts vertically as the page scrolls.
export function Parallax({ children, className = "", speed = 60 }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [speed, -speed]);
  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}

// Draws a horizontal accent line when it scrolls into view.
export function DrawLine({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  return (
    <motion.span
      ref={ref}
      className={`block origin-left ${className}`}
      initial={{ scaleX: 0 }}
      animate={inView ? { scaleX: 1 } : {}}
      transition={{ duration: 0.9, ease, delay: 0.2 }}
    />
  );
}
