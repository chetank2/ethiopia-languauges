"use client";

import Link from "next/link";
import { useLocale } from "@/components/i18n/LocaleProvider";
import { footerNav, siteMeta } from "@/content/site";
import { routes } from "@/lib/routes";

const navKey: Record<string, string> = {
  [routes.home]: "nav.home",
  [routes.languages]: "nav.languages",
  [routes.about]: "nav.about"
};

export function Footer() {
  const { t } = useLocale();

  return (
    <footer className="site-footer">
      <div className="tibeb-rule" />
      <div className="page-shell footer-grid">
        <div>
          <div className="brand footer-brand">
            <span>ፊ</span>
            <strong>{siteMeta.name}</strong>
          </div>
          <p>{siteMeta.description}</p>
          <small>© 2021 Ethio Language Box. All rights reserved.</small>
        </div>
        <nav aria-label={t("footer.navigation")}>
          {footerNav.map((item) => (
            <Link href={item.href} key={item.href}>
              {navKey[item.href] ? t(navKey[item.href]) : item.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
