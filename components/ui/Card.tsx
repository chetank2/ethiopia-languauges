import type { ReactNode } from "react";
import { joinClasses } from "@/lib/utils";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className }: CardProps) {
  return <article className={joinClasses("card", className)}>{children}</article>;
}
