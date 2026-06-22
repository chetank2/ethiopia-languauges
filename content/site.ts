import { BookOpen, FileText, Headphones, Languages, LayoutDashboard, LibraryBig, LogIn, MessageSquare, Smartphone, UsersRound } from "lucide-react";
import type { NavItem } from "@/lib/types";
import { routes } from "@/lib/routes";

export const siteMeta = {
  name: "Ethio Language Box",
  tagline: "Learn, preserve, and celebrate Ethiopia's languages.",
  description:
    "A national language learning and digital preservation platform for Ethiopian languages, offering learning materials, audio pronunciation, mobile apps, guidebooks, and documentation workflows.",
  ownershipNote:
    "A national initiative jointly undertaken by the Ministry of Culture & Sport and Akmonlink College.",
  initiative: "An initiative of the Ministry of Culture & Sport, in collaboration with Akmonlink College.",
  partners: ["Ministry of Culture & Sport", "Akmonlink College"],
  languageClaimNeedsVerification: false
};

export const primaryNav: NavItem[] = [
  { label: "Home", href: routes.home },
  { label: "About", href: routes.about },
  { label: "Languages", href: routes.languages },
  { label: "Cultures", href: routes.cultures }
];

export const utilityNav: NavItem[] = [];

export const footerNav: NavItem[] = [
  ...primaryNav
];

export const resourceIconMap = {
  course: BookOpen,
  "mobile-app": Smartphone,
  audio: Headphones,
  guidebook: LibraryBig,
  pdf: FileText,
  docs: FileText,
  languages: Languages,
  contributors: UsersRound,
  portal: LayoutDashboard,
  contact: MessageSquare,
  login: LogIn
};
