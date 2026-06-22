"use client";

import { useLocale } from "./LocaleProvider";

type RegionProps = {
  children: React.ReactNode;
  className?: string;
  labelKey: string;
};

export function LocalizedDiv({ children, className, labelKey }: RegionProps) {
  const { t } = useLocale();
  return (
    <div className={className} aria-label={t(labelKey)}>
      {children}
    </div>
  );
}

export function LocalizedNav({ children, className, labelKey }: RegionProps) {
  const { t } = useLocale();
  return (
    <nav className={className} aria-label={t(labelKey)}>
      {children}
    </nav>
  );
}

