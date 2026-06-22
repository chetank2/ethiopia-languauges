"use client";

import { useMemo, useState } from "react";
import { LanguageCard } from "@/components/cards/LanguageCard";
import { useLocale } from "@/components/i18n/LocaleProvider";
import { SearchInput } from "@/components/ui/SearchInput";
import { searchLanguages } from "@/lib/search";
import type { Language, ScriptType } from "@/lib/types";

type LanguageExplorerProps = {
  languages: Language[];
};

const scripts: Array<ScriptType | "All"> = ["All", "Ethiopic", "Latin", "Arabic", "Other"];

export function LanguageExplorer({ languages }: LanguageExplorerProps) {
  const { t } = useLocale();
  const [query, setQuery] = useState("");
  const [script, setScript] = useState<ScriptType | "All">("All");
  const [resource, setResource] = useState<"all" | "audio" | "guidebook" | "mobile">("all");

  const filtered = useMemo(() => {
    return searchLanguages(languages, query).filter((language) => {
      const scriptMatch = script === "All" || language.scripts.includes(script);
      const resourceMatch =
        resource === "all" ||
        (resource === "audio" && language.hasAudio) ||
        (resource === "guidebook" && language.hasGuidebook) ||
        (resource === "mobile" && language.hasMobileApp);

      return scriptMatch && resourceMatch;
    });
  }, [languages, query, resource, script]);

  return (
    <section className="explorer-panel" aria-labelledby="language-explorer-title">
      <div className="explorer-controls">
        <SearchInput
          label={t("languageExplorer.searchLabel")}
          onChange={setQuery}
          placeholder={t("languageExplorer.searchPlaceholder")}
          value={query}
        />
        <div className="filter-row" aria-label={t("languageExplorer.scriptFilters")}>
          {scripts.map((item) => (
            <button
              aria-pressed={script === item}
              className={script === item ? "filter-active" : ""}
              key={item}
              onClick={() => setScript(item)}
              type="button"
            >
              {item === "All" ? t("common.all") : item}
            </button>
          ))}
        </div>
        <div className="filter-row" aria-label={t("languageExplorer.resourceFilters")}>
          {[
            ["all", "languageExplorer.allResources"],
            ["audio", "languageExplorer.audio"],
            ["guidebook", "languageExplorer.guidebooks"],
            ["mobile", "languageExplorer.mobileApp"]
          ].map(([value, label]) => (
            <button
              aria-pressed={resource === value}
              className={resource === value ? "filter-active" : ""}
              key={value}
              onClick={() => setResource(value as typeof resource)}
              type="button"
            >
              {t(label)}
            </button>
          ))}
        </div>
      </div>
      <div className="explorer-content">
        <div className="abstract-map" aria-hidden="true">
          <span />
          <i />
        </div>
        <div className="language-grid">
          {filtered.map((language) => (
            <LanguageCard language={language} key={language.slug} />
          ))}
        </div>
      </div>
    </section>
  );
}
