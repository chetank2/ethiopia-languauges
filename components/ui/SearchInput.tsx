"use client";

import { Search } from "lucide-react";

type SearchInputProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  label: string;
};

export function SearchInput({ value, onChange, placeholder, label }: SearchInputProps) {
  return (
    <label className="search-input">
      <span className="sr-only">{label}</span>
      <Search aria-hidden="true" size={20} />
      <input value={value} onChange={(event) => onChange(event.target.value)} placeholder={placeholder} />
    </label>
  );
}
