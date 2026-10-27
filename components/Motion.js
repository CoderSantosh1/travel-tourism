"use client";

import { motion, useInView, useMotionValue, useSpring, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const ease = [0.22, 1, 0.36, 1];

const offsets = {
  up: { y: 50 },
  down: { y: -50 },
  left: { x: -70 },
  right: { x: 70 },
  zoom: { scale: 0.85 },
  flip: { rotateX: 35, y: 40, transformPerspective: 900 },
};

// Scroll-triggered reveal wrapper.
export function Reveal({ children, from = "up", delay = 0, duration = 0.8, className = "", as = "div", once = true, amount = 0.2 }) {
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, ...offsets[from] }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1, rotateX: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease }}
    >
      {children}
    </Tag>
  );
}

// Parent that staggers its <StaggerItem> children into view.
export function Stagger({ children, className = "", stagger = 0.12, delay = 0, amount = 0.15 }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: stagger, delayChildren: delay } } }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = "", from = "up" }) {
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

// Splits text into words that rise up one after another.
export function SplitText({ text, className = "", delay = 0, stagger = 0.07 }) {
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

// Card that tilts toward the cursor in 3D.
export function Tilt({ children, className = "", max = 8 }) {
  const ref = useRef(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rx = useSpring(useTransform(my, [0, 1], [max, -max]), { stiffness: 200, damping: 18 });
  const ry = useSpring(useTransform(mx, [0, 1], [-max, max]), { stiffness: 200, damping: 18 });

  const onMove = (e) => {
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

// Image wrapper that drifts vertically as the page scrolls.
export function Parallax({ children, className = "", speed = 60 }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [speed, -speed]);
  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}

// Draws a horizontal accent line when it scrolls into view.
export function DrawLine({ className = "" }) {
  const ref = useRef(null);
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
