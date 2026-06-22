import Link from "next/link";

type MarkdownRendererProps = {
  content: string;
};

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  const blocks = content.split(/\n{2,}/).filter((block) => block.trim().length > 0);

  return (
    <div className="markdown-body">
      {blocks.map((block, index) => (
        <MarkdownBlock block={block.trim()} key={`${index}-${block.slice(0, 20)}`} />
      ))}
    </div>
  );
}

function MarkdownBlock({ block }: { block: string }) {
  if (block.startsWith("```")) {
    return <pre>{block.replace(/^```[a-z]*\n?|\n?```$/g, "")}</pre>;
  }

  const heading = block.match(/^(#{1,4})\s+(.+)$/);
  if (heading) {
    const level = heading[1].length;
    const text = heading[2];
    const id = slugify(text);
    if (level === 1) return <h1 id={id}>{text}</h1>;
    if (level === 2) return <h2 id={id}>{text}</h2>;
    if (level === 3) return <h3 id={id}>{text}</h3>;
    return <h4 id={id}>{text}</h4>;
  }

  if (block.includes("\n- ")) {
    const lines = block.split("\n");
    const intro = lines[0].startsWith("- ") ? "" : lines.shift();
    return (
      <>
        {intro ? <p>{renderInline(intro)}</p> : null}
        <ul>
          {lines
            .filter((line) => line.trim().startsWith("- "))
            .map((line) => (
              <li key={line}>{renderInline(line.replace(/^\s*-\s+/, ""))}</li>
            ))}
        </ul>
      </>
    );
  }

  if (/^\d+\.\s/m.test(block)) {
    return (
      <ol>
        {block.split("\n").map((line) => (
          <li key={line}>{renderInline(line.replace(/^\d+\.\s+/, ""))}</li>
        ))}
      </ol>
    );
  }

  return <p>{renderInline(block.replace(/\n/g, " "))}</p>;
}

function renderInline(value: string) {
  const parts = value.split(/(\[[^\]]+\]\([^)]+\)|`[^`]+`|\*\*[^*]+\*\*)/g);

  return parts.map((part, index) => {
    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (link) {
      const href = link[2].startsWith("http") ? link[2] : `/documentation/${link[2].replace(/\.md$/, "")}`;
      return (
        <Link href={href} key={`${part}-${index}`}>
          {link[1]}
        </Link>
      );
    }

    if (part.startsWith("`") && part.endsWith("`")) {
      return <code key={`${part}-${index}`}>{part.slice(1, -1)}</code>;
    }

    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={`${part}-${index}`}>{part.slice(2, -2)}</strong>;
    }

    return part;
  });
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}
