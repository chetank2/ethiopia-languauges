"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useLocale } from "@/components/i18n/LocaleProvider";
import { resourceIconMap } from "@/content/site";
import type { Resource } from "@/lib/types";

export function ResourceCard({ resource }: { resource: Resource }) {
  const { t } = useLocale();
  const Icon = resourceIconMap[resource.type];
  const external = resource.href.startsWith("http");

  return (
    <Link
      className="resource-card"
      href={resource.href}
      rel={external ? "noreferrer" : undefined}
      target={external ? "_blank" : undefined}
    >
      <span className="resource-icon">
        <Icon aria-hidden="true" size={22} />
      </span>
      <h3>{resource.title}</h3>
      <p>{resource.description}</p>
      <span className="card-link">
        {t("common.open")} <ArrowUpRight aria-hidden="true" size={16} />
      </span>
    </Link>
  );
}
