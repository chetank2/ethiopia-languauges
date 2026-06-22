import type { ContributorRole, PortalTask } from "@/lib/types";

export const workflowStages = [
  "Author",
  "Translator",
  "Editor",
  "Reviewer",
  "Audio",
  "Website",
  "Mobile",
  "PDF"
];

export const qaStages = [
  "Translator Self-QA",
  "Editor Validation",
  "Reviewer Certification",
  "Audio Validation",
  "Publication"
];

export const contributorRoles: ContributorRole[] = [
  {
    slug: "translator",
    title: "Translator",
    summary: "Creates accurate, culturally grounded translations from assigned statements and topics.",
    responsibilities: ["Select assigned topics", "Translate with structural accuracy", "Check terminology and context", "Save work for editorial validation"],
    workflowStage: 2
  },
  {
    slug: "editor",
    title: "Editor",
    summary: "Improves translated content for clarity, consistency, grammar, and publication readiness.",
    responsibilities: ["Review translated topics", "Validate grammar and terminology", "Return unclear content", "Approve content for reviewer certification"],
    workflowStage: 3
  },
  {
    slug: "reviewer",
    title: "Reviewer",
    summary: "Certifies language accuracy, cultural context, and final readiness before publication steps.",
    responsibilities: ["Review edited content", "Certify accuracy", "Flag cultural or grammar issues", "Approve for audio and publication"],
    workflowStage: 4
  },
  {
    slug: "audio-recorder",
    title: "Audio Recorder",
    summary: "Records clear native pronunciation after text has passed the required QA stages.",
    responsibilities: ["Record approved statements", "Check clarity and pacing", "Validate playback", "Submit audio for final review"],
    workflowStage: 5
  },
  {
    slug: "administrator",
    title: "Administrator",
    summary: "Manages users, workflow readiness, publication status, and access control.",
    responsibilities: ["Create user accounts", "Assign permissions", "Monitor workflow progress", "Coordinate publication outputs"],
    workflowStage: 1
  }
];

export const portalTasks: PortalTask[] = [
  {
    id: "task-001",
    title: "Structural phrases review",
    language: "Afaan Oromoo",
    role: "Editor",
    stage: "Editor Validation",
    status: "in-review"
  },
  {
    id: "task-002",
    title: "Audio recording batch",
    language: "Amharic",
    role: "Audio Recorder",
    stage: "Audio Validation",
    status: "ready"
  },
  {
    id: "task-003",
    title: "Conversation corrections",
    language: "Wolaita",
    role: "Translator",
    stage: "Translator Self-QA",
    status: "needs-fix"
  },
  {
    id: "task-004",
    title: "PDF readiness check",
    language: "Sidaamu Afoo",
    role: "Administrator",
    stage: "Publication",
    status: "approved"
  }
];
