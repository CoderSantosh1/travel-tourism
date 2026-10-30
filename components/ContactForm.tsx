"use client";

import { createContext, useContext, useRef, useState, type ReactNode, type FormEvent, type FocusEvent, type ChangeEvent } from "react";
import { AnimatePresence, motion, useAnimationControls } from "framer-motion";
import Icon from "./Icon";
import { common } from "@/data/site-data";
import type { FieldKind, FormField } from "@/types/site";

const msg = common.validationMessages;

/* ---------------- validation rules ---------------- */

type FieldEl = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

const today = () => {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
};

// Returns an error message, or "" when the value is valid.
export function validate(kind: FieldKind, raw: string, required: boolean, label: string): string {
  const value = raw.trim();
  if (!value) {
    if (!required) return "";
    return (kind === "select" ? msg.requiredSelect : msg.requiredText).replace("{label}", label.toLowerCase());
  }
  switch (kind) {
    case "name":
      if (value.length < 2) return msg.nameMin;
      if (!/^[A-Za-z][A-Za-z\s.'-]*$/.test(value)) return msg.nameChars;
      if (value.length > 50) return msg.nameMax;
      return "";
    case "email":
      return /^[^\s@]+@[^\s@]+\.[A-Za-z]{2,}$/.test(value) ? "" : msg.email;
    case "phone": {
      const digits = value.replace(/[\s-]/g, "").replace(/^(\+91|0)/, "");
      return /^[6-9]\d{9}$/.test(digits) ? "" : msg.phone;
    }
    case "date":
      return value < today() ? msg.datePast : "";
    case "travelers": {
      const n = Number(value.replace("+", ""));
      return Number.isInteger(n) && n >= 1 && n <= 50 ? "" : msg.travelersRange;
    }
    case "message":
      if (value.length < 10) return msg.messageMin;
      if (value.length > 1000) return msg.messageMax;
      return "";
    default:
      return "";
  }
}

const checkEl = (el: FieldEl) => validate(el.dataset.kind as FieldKind, el.value, el.dataset.required === "true", el.dataset.label || msg.fallbackLabel);

/* ---------------- form shell ---------------- */

interface FormCtxValue {
  errors: Record<string, string>;
  dark: boolean;
  onBlur: (e: FocusEvent<FieldEl>) => void;
  onChange: (e: ChangeEvent<FieldEl>) => void;
}

const FormCtx = createContext<FormCtxValue>({ errors: {}, dark: false, onBlur: () => {}, onChange: () => {} });

interface AnimatedFormProps {
  children: ReactNode;
  className?: string;
  success: string;
  dark?: boolean;
}

// Validates every field on submit (and each field on blur), then shows a thank-you message.
export function AnimatedForm({ children, className = "", success, dark = false }: AnimatedFormProps) {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);
  const controls = useAnimationControls();
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  const setError = (name: string, msg: string) =>
    setErrors((prev) => {
      if ((prev[name] || "") === msg) return prev;
      const next = { ...prev };
      if (msg) next[name] = msg;
      else delete next[name];
      return next;
    });

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fields = Array.from(form.querySelectorAll<FieldEl>("[data-kind]"));
    const found: Record<string, string> = {};
    for (const el of fields) {
      const msg = checkEl(el);
      if (msg) found[el.name] = msg;
    }
    setErrors(found);
    if (Object.keys(found).length) {
      setSent(false);
      fields.find((el) => found[el.name])?.focus();
      controls.start({ x: [0, -10, 10, -6, 6, 0], transition: { duration: 0.45 } });
      return;
    }
    form.reset();
    setSent(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setSent(false), 6000);
  };

  const ctx: FormCtxValue = {
    errors,
    dark,
    onBlur: (e) => {
      if (e.currentTarget.value.trim() || errors[e.currentTarget.name]) setError(e.currentTarget.name, checkEl(e.currentTarget));
    },
    // Once a field shows an error, re-check it live so the message clears as soon as it's fixed.
    onChange: (e) => {
      if (errors[e.currentTarget.name]) setError(e.currentTarget.name, checkEl(e.currentTarget));
    },
  };

  return (
    <FormCtx.Provider value={ctx}>
      <motion.form animate={controls} noValidate className={className} onSubmit={onSubmit}>
        {children}
        <AnimatePresence>
          {sent && (
            <motion.p
              role="status"
              initial={{ opacity: 0, y: 10, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className={`col-span-full flex items-center justify-center gap-2 font-medium ${dark ? "text-sun" : "text-emerald-600"}`}
            >
              <Icon name="check" className="h-5 w-5" strokeWidth={3} /> {success}
            </motion.p>
          )}
        </AnimatePresence>
      </motion.form>
    </FormCtx.Provider>
  );
}

/* ---------------- field ---------------- */

const inputType: Partial<Record<FieldKind, string>> = { email: "email", phone: "tel", date: "date", travelers: "number" };

export function InputField({ name, kind, icon, placeholder, label, required = false, options = [], rows = 5, fullWidth = false }: FormField) {
  const { errors, dark, onBlur, onChange } = useContext(FormCtx);
  const error = errors[name];
  const id = `f-${name}`;
  const common = {
    id,
    name,
    "data-kind": kind,
    "data-required": String(required),
    "data-label": label || placeholder.replace(/[*.…]+$/, ""),
    "aria-invalid": Boolean(error),
    "aria-describedby": error ? `${id}-err` : undefined,
    "aria-label": placeholder,
    onBlur,
    onChange,
    className: `field ${error ? "!border-red-400 focus:!ring-red-400/20" : ""}`,
  };

  return (
    <div className={fullWidth ? "sm:col-span-2" : ""}>
      <label className="relative block">
        <span className={`pointer-events-none absolute left-4 top-3.5 transition-colors ${error ? "text-red-400" : "text-slate-500"}`}>
          <Icon name={icon} className="h-5 w-5" />
        </span>
        {kind === "message" ? (
          <textarea rows={rows} placeholder={placeholder} {...common} className={`${common.className} resize-none`} />
        ) : kind === "select" ? (
          <>
            <select defaultValue="" {...common} className={`${common.className} appearance-none text-slate-500`}>
              <option value="" disabled>{placeholder}</option>
              {options.map((o) => <option key={o}>{o}</option>)}
            </select>
            <span className="pointer-events-none absolute right-4 top-3.5 text-slate-500"><Icon name="chevronDown" className="h-5 w-5" /></span>
          </>
        ) : (
          <input
            type={inputType[kind] || "text"}
            placeholder={placeholder}
            min={kind === "date" ? today() : kind === "travelers" ? 1 : undefined}
            max={kind === "travelers" ? 50 : undefined}
            autoComplete={kind === "name" ? "name" : kind === "email" ? "email" : kind === "phone" ? "tel" : undefined}
            {...common}
          />
        )}
      </label>
      <AnimatePresence>
        {error && (
          <motion.p
            id={`${id}-err`}
            initial={{ opacity: 0, y: -4, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -4, height: 0 }}
            className={`mt-1.5 flex items-center gap-1.5 text-left text-[13px] ${dark ? "text-red-300" : "text-red-500"}`}
          >
            <Icon name="close" className="h-3.5 w-3.5 shrink-0" strokeWidth={3} /> {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
