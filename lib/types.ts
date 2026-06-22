export type NavItem = {
  label: string;
  href: string;
};

export type ScriptType = "Ethiopic" | "Latin" | "Arabic" | "Other";
export type LessonPart = "structures" | "conversation" | "vocabulary" | "grammar";

export type Language = {
  slug: string;
  name: string;
  nativeName?: string;
  scripts: ScriptType[];
  region?: string;
  family?: string;
  status: "available" | "coming-soon";
  hasAudio: boolean;
  hasGuidebook: boolean;
  hasMobileApp: boolean;
  lessonParts: LessonPart[];
  summary: string;
};

export type Resource = {
  slug: string;
  title: string;
  type: "course" | "mobile-app" | "audio" | "guidebook" | "pdf" | "docs";
  description: string;
  href: string;
};

export type ContributorRole = {
  slug: string;
  title: string;
  summary: string;
  responsibilities: string[];
  workflowStage: number;
};

export type DocGroup = "system" | "manuals" | "operations" | "support";

export type DocSection = {
  slug: string;
  title: string;
  group: DocGroup;
  sourceHeading: string;
  description: string;
};

export type LearningPart = {
  slug: LessonPart;
  title: string;
  subtitle: string;
  description: string;
  topicRange: string;
};

export type PortalTask = {
  id: string;
  title: string;
  language: string;
  role: string;
  stage: string;
  status: "ready" | "in-review" | "needs-fix" | "approved";
};
