import type { Metadata } from "next";
import { Headphones } from "lucide-react";
import { LocalizedDiv } from "@/components/i18n/LocalizedRegion";
import { LocalizedText as T } from "@/components/i18n/LocalizedText";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { getLearningParts, getLsrwSkills } from "@/lib/content";

export const metadata: Metadata = {
  title: "Learn"
};

export default function LearnPage() {
  const learningParts = getLearningParts();
  const skills = getLsrwSkills();

  return (
    <main>
      <section className="page-hero ethiopic-texture">
        <div className="page-shell">
          <p className="eyebrow"><T id="learnPage.eyebrow" /></p>
          <h1 className="display"><T id="learnPage.title" /></h1>
          <p>
            <T id="learnPage.desc" />
          </p>
        </div>
      </section>
      <section className="section">
        <div className="page-shell learning-grid">
          {learningParts.map((part) => (
            <article key={part.slug}>
              <span>{part.subtitle}</span>
              <h2>{part.title}</h2>
              <p>{part.description}</p>
              <small>{part.topicRange}</small>
            </article>
          ))}
        </div>
      </section>
      <section className="section feature-band">
        <div className="page-shell split-layout">
          <div>
            <p className="eyebrow"><T id="learnPage.audioEyebrow" /></p>
            <h2 className="display"><T id="learnPage.audioTitle" /></h2>
            <p>
              <T id="learnPage.audioDesc" />
            </p>
          </div>
          <LocalizedDiv className="audio-card" labelKey="learnPage.audioPreview">
            <Headphones aria-hidden="true" size={32} />
            <div className="waveform">
              {Array.from({ length: 28 }).map((_, index) => (
                <span key={index} style={{ height: `${18 + ((index * 17) % 52)}px` }} />
              ))}
            </div>
          </LocalizedDiv>
        </div>
      </section>
      <section className="section">
        <div className="page-shell">
          <SectionHeader description={<T id="learnPage.lsrwDesc" />} title={<T id="learnPage.lsrwTitle" />} />
          <div className="resource-grid">
            {skills.map((skill) => (
              <article className="card" key={skill.title}>
                <h3>{skill.title}</h3>
                <p>{skill.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
