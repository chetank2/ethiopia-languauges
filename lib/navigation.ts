import { docGroupLabels } from "@/content/docs";
import { getDocsIndex } from "@/lib/content";
import type { DocGroup } from "@/lib/types";

export function getDocsByGroup() {
  const docs = getDocsIndex();

  return (Object.keys(docGroupLabels) as DocGroup[]).map((group) => ({
    group,
    label: docGroupLabels[group],
    docs: docs.filter((doc) => doc.group === group)
  }));
}
