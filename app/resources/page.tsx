import type { Metadata } from "next";
import { LocalizedText as T } from "@/components/i18n/LocalizedText";
import { ResourceCard } from "@/components/cards/ResourceCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { getResources } from "@/lib/content";

export const metadata: Metadata = {
  title: "Resources"
};

export default function ResourcesPage() {
  const resources = getResources();

  return (
    <main>
      <section className="page-hero ethiopic-texture">
        <div className="page-shell">
          <p className="eyebrow"><T id="resourcesPage.eyebrow" /></p>
          <h1 className="display"><T id="resourcesPage.title" /></h1>
          <p><T id="resourcesPage.desc" /></p>
        </div>
      </section>
      <section className="section">
        <div className="page-shell">
          <SectionHeader title={<T id="resourcesPage.libraryTitle" />} description={<T id="resourcesPage.libraryDesc" />} />
          <div className="resource-grid">
            {resources.map((resource) => (
              <ResourceCard key={resource.slug} resource={resource} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
