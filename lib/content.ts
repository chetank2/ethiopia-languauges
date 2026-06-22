import fs from "node:fs";
import path from "node:path";
import { contributorRoles, portalTasks, qaStages, workflowStages } from "@/content/contributors";
import { docSections } from "@/content/docs";
import { languages } from "@/content/languages";
import { learningParts, lsrwSkills } from "@/content/learning";
import { resources } from "@/content/resources";

const contentArchivePath = path.join(process.cwd(), "ethiolanguagebox_content.md");

export function getLanguages() {
  return languages;
}

export function getLanguageBySlug(slug: string) {
  return languages.find((language) => language.slug === slug);
}

export function getFeaturedLanguages() {
  return languages.filter((language) => language.status === "available").slice(0, 6);
}

export function getLearningParts() {
  return learningParts;
}

export function getLsrwSkills() {
  return lsrwSkills;
}

export function getResources() {
  return resources;
}

export function getContributorRoles() {
  return contributorRoles;
}

export function getWorkflowStages() {
  return workflowStages;
}

export function getQaStages() {
  return qaStages;
}

export function getPortalTasks() {
  return portalTasks;
}

export function getDocsIndex() {
  return docSections;
}

export function getDocBySlug(slug: string) {
  const normalizedSlug = slug.replace(/^\/|\/$/g, "");
  const section = docSections.find((doc) => doc.slug === normalizedSlug);

  if (!section) {
    return undefined;
  }

  return {
    ...section,
    content: extractDocContent(section.sourceHeading)
  };
}

export function getAdjacentDocs(slug: string) {
  const index = docSections.findIndex((doc) => doc.slug === slug);

  return {
    previous: index > 0 ? docSections[index - 1] : undefined,
    next: index >= 0 && index < docSections.length - 1 ? docSections[index + 1] : undefined
  };
}

function extractDocContent(sourceHeading: string) {
  const archive = fs.readFileSync(contentArchivePath, "utf8");
  const sectionPattern = new RegExp(`^## ${escapeRegExp(sourceHeading)}\\n`, "m");
  const match = sectionPattern.exec(archive);

  if (!match) {
    return `# ${sourceHeading}\n\nContent is pending migration from the extracted archive.`;
  }

  const start = match.index + match[0].length;
  const nextMatch = /^## [^\n]+\n/gm;
  nextMatch.lastIndex = start;
  const next = nextMatch.exec(archive);
  const raw = archive.slice(start, next ? next.index : archive.length).trim();

  return raw.replace(/^Source: .+\n\n/, "").trim();
}

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
