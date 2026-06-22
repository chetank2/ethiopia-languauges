"use client";

import { BookOpen, Headphones, Smartphone } from "lucide-react";
import Link from "next/link";
import { useLocale } from "@/components/i18n/LocaleProvider";
import { Badge } from "@/components/ui/Badge";
import type { Language } from "@/lib/types";

export function LanguageCard({ language }: { language: Language }) {
  const { t } = useLocale();

  return (
    <Link className="language-card" href={`/languages/${language.slug}`}>
      <div>
        <div className="language-card-top">
          <span className="script-sample">{language.nativeName ?? language.name.slice(0, 2)}</span>
          <Badge tone={language.status === "available" ? "green" : "gold"}>
            {language.status === "available" ? t("common.available") : t("common.comingSoon")}
          </Badge>
        </div>
        <h3>{language.name}</h3>
        <p>{language.summary}</p>
      </div>
      <div className="language-meta">
        <span>{language.family ?? t("languageCard.familyPending")}</span>
        <span>{language.region ?? t("languageCard.regionPending")}</span>
      </div>
      <div className="availability" aria-label={t("languageCard.availableResourceTypes")}>
        {language.hasAudio ? <Headphones aria-label={t("languageCard.audioAvailable")} size={17} /> : null}
        {language.hasGuidebook ? <BookOpen aria-label={t("languageCard.guidebookAvailable")} size={17} /> : null}
        {language.hasMobileApp ? <Smartphone aria-label={t("languageCard.mobileAvailable")} size={17} /> : null}
      </div>
    </Link>
  );
}
