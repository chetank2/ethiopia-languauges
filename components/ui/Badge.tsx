import type { ReactNode } from "react";
import { joinClasses } from "@/lib/utils";

type BadgeProps = {
  children: ReactNode;
  tone?: "green" | "gold" | "blue" | "red" | "neutral";
};

export function Badge({ children, tone = "neutral" }: BadgeProps) {
  return <span className={joinClasses("badge", `badge-${tone}`)}>{children}</span>;
}
