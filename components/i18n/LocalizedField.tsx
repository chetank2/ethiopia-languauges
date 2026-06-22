"use client";

import { useLocale } from "./LocaleProvider";

type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "placeholder"> & {
  placeholderKey: string;
};

type TextareaProps = Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "placeholder"> & {
  placeholderKey: string;
};

export function LocalizedInput({ placeholderKey, ...props }: InputProps) {
  const { t } = useLocale();
  return <input {...props} placeholder={t(placeholderKey)} />;
}

export function LocalizedTextarea({ placeholderKey, ...props }: TextareaProps) {
  const { t } = useLocale();
  return <textarea {...props} placeholder={t(placeholderKey)} />;
}

