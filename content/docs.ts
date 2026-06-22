import type { DocSection } from "@/lib/types";

export const docSections: DocSection[] = [
  {
    slug: "system/project-overview",
    title: "Project Overview",
    group: "system",
    sourceHeading: "Project Overview",
    description: "Vision, mission, objectives, stakeholders, key features, and expected outcomes."
  },
  {
    slug: "system/system-architecture",
    title: "System Architecture",
    group: "system",
    sourceHeading: "System Architecture",
    description: "Core components, workflow architecture, lifecycle, and architectural principles."
  },
  {
    slug: "system/language-workflow",
    title: "Language Workflow",
    group: "system",
    sourceHeading: "Language Workflow",
    description: "The end-to-end content flow from statements through translation, review, audio, web, app, and PDF."
  },
  {
    slug: "system/syllabus-content-overview",
    title: "Syllabus Content Overview",
    group: "system",
    sourceHeading: "Syllabus Content Overview",
    description: "Topic ranges and content categories for structures, conversation, vocabulary, and grammar."
  },
  {
    slug: "manuals/user-login-guide",
    title: "User Login Guide",
    group: "manuals",
    sourceHeading: "User Login Guide",
    description: "Step-by-step login, workspace access, and security recommendations."
  },
  {
    slug: "manuals/translator-manual",
    title: "Translator Manual",
    group: "manuals",
    sourceHeading: "Translator Manual",
    description: "Translator responsibilities, topic selection, translation process, quality standards, and checklist."
  },
  {
    slug: "manuals/editor-manual",
    title: "Editor Manual",
    group: "manuals",
    sourceHeading: "Editor Manual",
    description: "Editor responsibilities, editing process, approval choices, and validation checklist."
  },
  {
    slug: "manuals/reviewer-manual",
    title: "Reviewer Manual",
    group: "manuals",
    sourceHeading: "Reviewer Manual",
    description: "Reviewer certification standards, quality control, and governance principles."
  },
  {
    slug: "manuals/audio-recorder-manual",
    title: "Audio Recorder Manual",
    group: "manuals",
    sourceHeading: "Audio Recorder Manual",
    description: "Audio recording workflow, validation, file readiness, and quality control standards."
  },
  {
    slug: "manuals/admin-manual",
    title: "Administrator Manual",
    group: "manuals",
    sourceHeading: "Administrator Manual",
    description: "Administration responsibilities, user accounts, workflow monitoring, and access control."
  },
  {
    slug: "operations/user-management",
    title: "User Management",
    group: "operations",
    sourceHeading: "User Management",
    description: "Creating, assigning, updating, and deactivating user accounts."
  },
  {
    slug: "operations/pdf-generation",
    title: "PDF Generation",
    group: "operations",
    sourceHeading: "PDF Generation",
    description: "PDF readiness requirements, generation workflow, review, naming, and release checklist."
  },
  {
    slug: "operations/mobile-app-management",
    title: "Mobile App Management",
    group: "operations",
    sourceHeading: "Mobile App Management",
    description: "Mobile content readiness, audio checks, display review, release, and monitoring."
  },
  {
    slug: "support/troubleshooting",
    title: "Troubleshooting",
    group: "support",
    sourceHeading: "Troubleshooting",
    description: "Common login, permission, saving, duplicate content, PDF, audio, mobile, and workflow issues."
  },
  {
    slug: "support/faq",
    title: "FAQ",
    group: "support",
    sourceHeading: "FAQ",
    description: "Frequently asked questions for users, translation, review, audio, PDFs, mobile, and QA governance."
  }
];

export const docGroupLabels = {
  system: "System Documentation",
  manuals: "User Manuals",
  operations: "Operations",
  support: "Support"
} as const;
