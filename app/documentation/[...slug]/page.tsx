import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DocsLayout } from "@/components/docs/DocsLayout";
import { LocalizedNav } from "@/components/i18n/LocalizedRegion";
import { LocalizedText as T } from "@/components/i18n/LocalizedText";
import { Badge } from "@/components/ui/Badge";
import { MarkdownRenderer } from "@/lib/markdown";
import { getAdjacentDocs, getDocBySlug, getDocsIndex } from "@/lib/content";

type DocPageProps = {
  params: {
    slug?: string[];
  };
};

export function generateStaticParams() {
  return getDocsIndex().map((doc) => ({ slug: doc.slug.split("/") }));
}

export function generateMetadata({ params }: DocPageProps): Metadata {
  const slug = params.slug?.join("/");
  const doc = slug ? getDocBySlug(slug) : undefined;
  return {
    title: doc?.title ?? "Documentation"
  };
}

export default function DocPage({ params }: DocPageProps) {
  const slug = params.slug?.join("/");

  if (!slug) {
    notFound();
  }

  const doc = getDocBySlug(slug);

  if (!doc) {
    notFound();
  }

  const adjacent = getAdjacentDocs(doc.slug);

  return (
    <main className="docs-page">
      <div className="page-shell">
        <DocsLayout>
          <div className="doc-header">
            <Badge tone="blue">{doc.group}</Badge>
            <h1 className="display">{doc.title}</h1>
            <p>{doc.description}</p>
          </div>
          <MarkdownRenderer content={doc.content} />
          <LocalizedNav className="doc-pagination" labelKey="docsPage.pagination">
            {adjacent.previous ? <Link href={`/documentation/${adjacent.previous.slug}`}><T id="docsPage.previous" />: {adjacent.previous.title}</Link> : <span />}
            {adjacent.next ? <Link href={`/documentation/${adjacent.next.slug}`}><T id="docsPage.next" />: {adjacent.next.title}</Link> : null}
          </LocalizedNav>
        </DocsLayout>
      </div>
    </main>
  );
}
