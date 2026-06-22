import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BookOpen, Headphones, Smartphone } from "lucide-react";
import { LocalizedText as T } from "@/components/i18n/LocalizedText";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { getLanguageBySlug, getLanguages, getLearningParts } from "@/lib/content";
import { routes } from "@/lib/routes";

type LanguageDetailPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return getLanguages().map((language) => ({ slug: language.slug }));
}

export function generateMetadata({ params }: LanguageDetailPageProps): Metadata {
  const language = getLanguageBySlug(params.slug);
  return {
    title: language ? `${language.name} language` : "Language"
  };
}

export default function LanguageDetailPage({ params }: LanguageDetailPageProps) {
  const language = getLanguageBySlug(params.slug);
  const learningParts = getLearningParts();

  if (!language) {
    notFound();
  }

  return (
    <main>
      <section className="page-hero language-detail-hero ethiopic-texture">
        <div className="page-shell split-layout">
          <div>
            <p className="eyebrow"><T id="languageDetail.eyebrow" /></p>
            <h1 className="display">{language.name}</h1>
            {language.nativeName ? <p className="native-name">{language.nativeName}</p> : null}
            <p>{language.summary}</p>
            <div className="hero-actions">
              <Button href={routes.learn}><T id="cta.startLearning" /></Button>
              <Button href={routes.resources} variant="secondary"><T id="languageDetail.viewResources" /></Button>
            </div>
          </div>
          <div className="detail-panel">
            <Badge tone={language.status === "available" ? "green" : "gold"}>
              {language.status === "available" ? <T id="languageDetail.availablePath" /> : <T id="common.comingSoon" />}
            </Badge>
            <dl>
              <div>
                <dt><T id="languageDetail.script" /></dt>
                <dd>{language.scripts.join(", ")}</dd>
              </div>
              <div>
                <dt><T id="languageDetail.family" /></dt>
                <dd>{language.family ?? <T id="common.pendingConfirmation" />}</dd>
              </div>
              <div>
                <dt><T id="languageDetail.region" /></dt>
                <dd>{language.region ?? <T id="common.pendingConfirmation" />}</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="page-shell">
          <SectionHeader
            description={<T id="languageDetail.modulesDesc" />}
            title={<T id="languageDetail.modulesTitle" />}
          />
          <div className="learning-grid">
            {learningParts.map((part) => (
              <article key={part.slug} className={!language.lessonParts.includes(part.slug) ? "muted-card" : undefined}>
                <span>{part.subtitle}</span>
                <h3>{part.title}</h3>
                <p>{language.lessonParts.includes(part.slug) ? part.description : <T id="common.futureContent" />}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section feature-band">
        <div className="page-shell resource-availability">
          <ResourceState active={language.hasAudio} icon={<Headphones />} titleKey="languageDetail.audioPronunciation" />
          <ResourceState active={language.hasGuidebook} icon={<BookOpen />} titleKey="languageDetail.selfStudyGuidebook" />
          <ResourceState active={language.hasMobileApp} icon={<Smartphone />} titleKey="languageDetail.mobileSupport" />
        </div>
      </section>
    </main>
  );
}

function ResourceState({ active, icon, titleKey }: { active: boolean; icon: React.ReactNode; titleKey: string }) {
  return (
    <article className="resource-state">
      <span>{icon}</span>
      <h3><T id={titleKey} /></h3>
      <p>{active ? <T id="languageDetail.availableStarter" /> : <T id="common.futureRelease" />}</p>
    </article>
  );
}
