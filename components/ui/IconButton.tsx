import type { LucideIcon } from "lucide-react";
import Link from "next/link";

type IconButtonProps = {
  icon: LucideIcon;
  label: string;
  href: string;
};

export function IconButton({ icon: Icon, label, href }: IconButtonProps) {
  return (
    <Link className="icon-button" href={href} aria-label={label} title={label}>
      <Icon aria-hidden="true" size={18} />
    </Link>
  );
}
