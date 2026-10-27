"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Icon from "./Icon";

export function InputField({ icon, textarea, select, options = [], className = "", ...props }) {
  return (
    <label className={`relative block ${className}`}>
      <span className="pointer-events-none absolute left-4 top-3.5 text-slate-500"><Icon name={icon} className="h-5 w-5" /></span>
      {textarea ? (
        <textarea rows={5} className="field resize-none" {...props} />
      ) : select ? (
        <>
          <select className="field appearance-none text-slate-500" defaultValue="" {...props}>
            <option value="" disabled>{props.placeholder}</option>
            {options.map((o) => <option key={o}>{o}</option>)}
          </select>
          <span className="pointer-events-none absolute right-4 top-3.5 text-slate-500"><Icon name="chevronDown" className="h-5 w-5" /></span>
        </>
      ) : (
        <input className="field" {...props} />
      )}
    </label>
  );
}

// Client-side form shell that shows a thank-you message on submit.
export function AnimatedForm({ children, className = "", success }) {
  const [sent, setSent] = useState(false);
  return (
    <form
      className={className}
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
        e.currentTarget.reset();
        setTimeout(() => setSent(false), 5000);
      }}
    >
      {children}
      <AnimatePresence>
        {sent && (
          <motion.p
            initial={{ opacity: 0, y: 10, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="col-span-full flex items-center justify-center gap-2 font-medium text-emerald-600"
          >
            <Icon name="check" className="h-5 w-5" strokeWidth={3} /> {success}
          </motion.p>
        )}
      </AnimatePresence>
    </form>
  );
}
