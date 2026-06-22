export const locales = ["en", "am", "om", "ti"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

// Autonyms — language names in their own language (never translated).
export const localeNames: Record<Locale, string> = {
  en: "English",
  am: "አማርኛ",
  om: "Afaan Oromoo",
  ti: "ትግርኛ"
};

export const STORAGE_KEY = "elb-locale";

export function isLocale(value: string | null | undefined): value is Locale {
  return !!value && (locales as readonly string[]).includes(value);
}
