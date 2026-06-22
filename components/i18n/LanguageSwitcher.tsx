"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Globe } from "lucide-react";
import { localeNames, locales, type Locale } from "@/lib/i18n/config";
import { useLocale } from "./LocaleProvider";

export function LanguageSwitcher() {
  const { locale, setLocale, t } = useLocale();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  function choose(next: Locale) {
    setLocale(next);
    setOpen(false);
  }

  return (
    <div className="lang-switcher" ref={ref}>
      <button
        type="button"
        className="lang-trigger"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t("languageSwitcher.changeLanguage")}
        onClick={() => setOpen((v) => !v)}
      >
        <Globe size={18} aria-hidden="true" />
        <span>{localeNames[locale]}</span>
        <svg width="10" height="6" viewBox="0 0 10 6" aria-hidden="true">
          <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" />
        </svg>
      </button>
      {open ? (
        <ul className="lang-menu" role="listbox" aria-label={t("languageSwitcher.languages")}>
          {locales.map((code) => (
            <li key={code} role="option" aria-selected={code === locale}>
              <button type="button" onClick={() => choose(code)} className={code === locale ? "is-active" : ""}>
                <span>{localeNames[code]}</span>
                {code === locale ? <Check size={15} aria-hidden="true" /> : null}
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
