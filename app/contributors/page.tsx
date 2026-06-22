import type { Metadata } from "next";
import { LocalizedText as T } from "@/components/i18n/LocalizedText";
import { Badge } from "@/components/ui/Badge";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { WorkflowTimeline } from "@/components/ui/WorkflowTimeline";
import { getContributorRoles, getQaStages, getWorkflowStages } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contributors"
};

export default function ContributorsPage() {
  const roles = getContributorRoles();
  const workflow = getWorkflowStages();
  const qa = getQaStages();

  return (
    <main>
      <section className="page-hero ethiopic-texture">
        <div className="page-shell">
          <p className="eyebrow"><T id="contributorsPage.eyebrow" /></p>
          <h1 className="display"><T id="contributorsPage.title" /></h1>
          <p><T id="contributorsPage.desc" /></p>
        </div>
      </section>
      <section className="section">
        <div className="page-shell">
          <SectionHeader title={<T id="contributorsPage.lifecycleTitle" />} description={<T id="contributorsPage.lifecycleDesc" />} />
          <WorkflowTimeline stages={workflow} />
        </div>
      </section>
      <section className="section feature-band">
        <div className="page-shell">
          <SectionHeader title={<T id="contributorsPage.rolesTitle" />} description={<T id="contributorsPage.rolesDesc" />} />
          <div className="role-grid">
            {roles.map((role) => (
              <article className="role-card" id={role.slug} key={role.slug}>
                <Badge tone="green"><T id="contributorsPage.stage" /> {role.workflowStage}</Badge>
                <h3>{role.title}</h3>
                <p>{role.summary}</p>
                <ul>
                  {role.responsibilities.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="page-shell">
          <SectionHeader title={<T id="contributorsPage.qaTitle" />} description={<T id="contributorsPage.qaDesc" />} />
          <WorkflowTimeline stages={qa} />
        </div>
      </section>
    </main>
  );
}
