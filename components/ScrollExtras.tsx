"use client";

import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Icon from "./Icon";

// Top scroll-progress bar and a back-to-top button.
export default function ScrollExtras() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 25 });
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.div style={{ scaleX }} className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-brand via-sun to-sky" />
      <AnimatePresence>
        {show && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 30 }}
            whileHover={{ y: -4 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 right-6 z-50 grid h-12 w-12 place-items-center rounded-full bg-brand text-white shadow-lg shadow-brand/40"
            aria-label="Back to top"
          >
            <span className="absolute inset-0 animate-pulse-ring rounded-full bg-brand" />
            <Icon name="up" className="relative h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
