"use client";

import { useLocale } from "@/components/i18n/LocaleProvider";
import { contributorRoles } from "@/content/contributors";

export function PortalShell({ children }: { children: React.ReactNode }) {
  const { t } = useLocale();

  return (
    <div className="portal-shell">
      <aside className="portal-sidebar">
        <div className="brand portal-brand">
          <span>ፊ</span>
          <strong>{t("portalShell.title")}</strong>
        </div>
        <nav aria-label={t("portalShell.rolesNav")}>
          {contributorRoles.map((role) => (
            <a href={`#${role.slug}`} key={role.slug}>
              {role.title}
            </a>
          ))}
        </nav>
      </aside>
      <section className="portal-main">{children}</section>
    </div>
  );
}
