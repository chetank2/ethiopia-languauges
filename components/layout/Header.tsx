"use client";

import Link from "next/link";
import { LanguageSwitcher } from "@/components/i18n/LanguageSwitcher";
import { useLocale } from "@/components/i18n/LocaleProvider";
import { primaryNav, siteMeta } from "@/content/site";
import { routes } from "@/lib/routes";

// Map each nav route to its translation key.
const navKey: Record<string, string> = {
  [routes.home]: "nav.home",
  [routes.languages]: "nav.languages",
  [routes.about]: "nav.about"
};

export function Header() {
  const { t } = useLocale();

  return (
    <header className="site-header">
      <div className="page-shell header-inner">
        <Link className="brand" href={routes.home} aria-label={t("header.homeLabel")}>
          <span>ፊ</span>
          <strong>{siteMeta.name}</strong>
        </Link>
        <nav className="primary-nav" aria-label={t("header.primaryNav")}>
          {primaryNav.map((item) => (
            <Link href={item.href} key={item.href}>
              {navKey[item.href] ? t(navKey[item.href]) : item.label}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}
