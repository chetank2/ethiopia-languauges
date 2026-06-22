import type { Metadata } from "next";
import { LocalizedText as T } from "@/components/i18n/LocalizedText";
import { DocsSearch } from "@/components/sections/DocsSearch";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { getDocsIndex } from "@/lib/content";

export const metadata: Metadata = {
  title: "Documentation"
};

export default function DocumentationPage() {
  const docs = getDocsIndex();

  return (
    <main>
      <section className="page-hero ethiopic-texture">
        <div className="page-shell">
          <p className="eyebrow"><T id="docsPage.eyebrow" /></p>
          <h1 className="display"><T id="docsPage.title" /></h1>
          <p>
            <T id="docsPage.desc" />
          </p>
        </div>
      </section>
      <section className="section-tight">
        <div className="page-shell">
          <SectionHeader title={<T id="docsPage.searchTitle" />} description={<T id="docsPage.searchDesc" />} />
          <DocsSearch docs={docs} />
        </div>
      </section>
    </main>
  );
}
