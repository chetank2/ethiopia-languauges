"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useLocale } from "@/components/i18n/LocaleProvider";
import { SearchInput } from "@/components/ui/SearchInput";
import { docGroupLabels } from "@/content/docs";
import { searchDocs } from "@/lib/search";
import type { DocSection } from "@/lib/types";

export function DocsSearch({ docs }: { docs: DocSection[] }) {
  const { t } = useLocale();
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => searchDocs(docs, query), [docs, query]);

  return (
    <div className="docs-search-panel">
      <SearchInput
        label={t("docsSearch.label")}
        onChange={setQuery}
        placeholder={t("docsSearch.placeholder")}
        value={query}
      />
      <div className="docs-card-grid">
        {filtered.map((doc) => (
          <Link className="doc-card" href={`/documentation/${doc.slug}`} key={doc.slug}>
            <span>{docGroupLabels[doc.group]}</span>
            <h3>{doc.title}</h3>
            <p>{doc.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
