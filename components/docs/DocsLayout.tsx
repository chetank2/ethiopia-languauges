import Link from "next/link";
import { docGroupLabels } from "@/content/docs";
import { getDocsByGroup } from "@/lib/navigation";

export function DocsLayout({ children }: { children: React.ReactNode }) {
  const groups = getDocsByGroup();

  return (
    <div className="docs-layout">
      <aside className="docs-sidebar">
        <Link className="docs-home-link" href="/documentation">
          Documentation Home
        </Link>
        {groups.map((group) => (
          <div className="docs-nav-group" key={group.group}>
            <h2>{docGroupLabels[group.group]}</h2>
            {group.docs.map((doc) => (
              <Link href={`/documentation/${doc.slug}`} key={doc.slug}>
                {doc.title}
              </Link>
            ))}
          </div>
        ))}
      </aside>
      <div className="docs-content">{children}</div>
    </div>
  );
}
