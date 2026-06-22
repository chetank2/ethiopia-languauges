import Link from "next/link";
import type { ReactNode } from "react";
import { joinClasses } from "@/lib/utils";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost" | "blue";
  className?: string;
  type?: "button" | "submit";
};

export function Button({ children, href, variant = "primary", className, type = "button" }: ButtonProps) {
  const classes = joinClasses("button", `button-${variant}`, className);

  if (href) {
    return (
      <Link className={classes} href={href}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} type={type}>
      {children}
    </button>
  );
}
