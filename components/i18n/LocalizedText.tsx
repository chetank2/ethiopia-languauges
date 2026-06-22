"use client";

import { useLocale } from "./LocaleProvider";

export function LocalizedText({ id }: { id: string }) {
  const { t } = useLocale();
  return <>{t(id)}</>;
}

