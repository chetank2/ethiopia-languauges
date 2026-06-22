import type { Metadata } from "next";
import { LocalizedText as T } from "@/components/i18n/LocalizedText";
import { Badge } from "@/components/ui/Badge";
import { WorkflowTimeline } from "@/components/ui/WorkflowTimeline";
import { PortalShell } from "@/components/portal/PortalShell";
import { getPortalTasks, getQaStages, getWorkflowStages } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contributor Portal"
};

export default function PortalPage() {
  const tasks = getPortalTasks();
  const workflow = getWorkflowStages();
  const qa = getQaStages();

  return (
    <main className="portal-page">
      <PortalShell>
        <div className="portal-header">
          <div>
            <p className="eyebrow"><T id="portalPage.eyebrow" /></p>
            <h1 className="display"><T id="portalPage.title" /></h1>
            <p><T id="portalPage.desc" /></p>
          </div>
          <Badge tone="blue"><T id="portalPage.prototype" /></Badge>
        </div>
        <section className="portal-section">
          <h2><T id="portalPage.workflowBoard" /></h2>
          <WorkflowTimeline stages={workflow} />
        </section>
        <section className="portal-section">
          <h2><T id="portalPage.assignedTasks" /></h2>
          <div className="task-grid">
            {tasks.map((task) => (
              <article className={`task-card status-${task.status}`} key={task.id}>
                <Badge tone={task.status === "approved" ? "green" : task.status === "needs-fix" ? "red" : "gold"}>{task.status}</Badge>
                <h3>{task.title}</h3>
                <p>{task.language}</p>
                <span>{task.role} · {task.stage}</span>
              </article>
            ))}
          </div>
        </section>
        <section className="portal-section">
          <h2><T id="portalPage.qaChecklist" /></h2>
          <div className="qa-grid">
            {qa.map((stage) => (
              <label key={stage}>
                <input type="checkbox" readOnly checked={stage !== "Publication"} />
                {stage}
              </label>
            ))}
          </div>
        </section>
      </PortalShell>
    </main>
  );
}
