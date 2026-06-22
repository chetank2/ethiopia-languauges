import type { DocSection, Language } from "@/lib/types";

export function searchLanguages(languages: Language[], query: string) {
  const normalized = query.trim().toLowerCase();

  if (!normalized) {
    return languages;
  }

  return languages.filter((language) =>
    [
      language.name,
      language.nativeName,
      language.region,
      language.family,
      language.summary,
      ...language.scripts
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase()
      .includes(normalized)
  );
}

export function searchDocs(docs: DocSection[], query: string) {
  const normalized = query.trim().toLowerCase();

  if (!normalized) {
    return docs;
  }

  return docs.filter((doc) =>
    [doc.title, doc.group, doc.description].join(" ").toLowerCase().includes(normalized)
  );
}
