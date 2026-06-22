import { CheckCircle2 } from "lucide-react";

export function WorkflowTimeline({ stages }: { stages: string[] }) {
  return (
    <ol className="workflow-timeline">
      {stages.map((stage, index) => (
        <li key={stage}>
          <span className="workflow-node">
            <CheckCircle2 aria-hidden="true" size={18} />
          </span>
          <strong>{stage}</strong>
          <small>Step {index + 1}</small>
        </li>
      ))}
    </ol>
  );
}
