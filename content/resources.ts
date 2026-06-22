import type { Resource } from "@/lib/types";

export const resources: Resource[] = [
  {
    slug: "online-courses",
    title: "Online Courses",
    type: "course",
    description: "Structured curriculum for self-learning Ethiopian languages at a steady pace.",
    href: "/languages"
  },
  {
    slug: "mobile-apps",
    title: "Mobile Apps",
    type: "mobile-app",
    description: "Interactive mobile learning experiences for practice on the go.",
    href: "https://play.google.com/store/apps/details?id=com.mynameisethiopia.lelec"
  },
  {
    slug: "audio-tools",
    title: "Audio Tools",
    type: "audio",
    description: "Native-speaker pronunciation examples and audio practice moments.",
    href: "/learn"
  },
  {
    slug: "guidebooks",
    title: "Self-Study Guidebooks",
    type: "guidebook",
    description: "Multilingual self-study guidebooks designed for effective independent learning.",
    href: "/contact"
  },
  {
    slug: "pdf-books",
    title: "PDF Books",
    type: "pdf",
    description: "Publication-ready learning materials generated from reviewed and approved content.",
    href: "/documentation/operations/pdf-generation"
  },
  {
    slug: "documentation",
    title: "Documentation",
    type: "docs",
    description: "Project, workflow, operations, and user manual documentation for contributors.",
    href: "/documentation"
  }
];
