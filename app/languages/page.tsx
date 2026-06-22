import type { Metadata } from "next";
import { LanguageExplorer } from "@/components/sections/LanguageExplorer";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { getLanguages } from "@/lib/content";

export const metadata: Metadata = {
  title: "Languages"
};

export default function LanguagesPage() {
  const languages = getLanguages();

  return (
    <main>
      <section className="page-hero ethiopic-texture">
        <div className="page-shell">
          <p className="eyebrow">Languages</p>
          <h1 className="display">Free Online Courses on all 84 Ethiopian Languages at one place.</h1>
          <p>
            Browse Ethiopian language learning paths, pronunciation support, guidebooks, and structured lessons.
            The visible cards below are the confirmed language pages currently modeled in this redesign.
          </p>
          <div className="hero-mini-form" aria-label="Language learning selector">
            <label>
              <span>I know</span>
              <select defaultValue="English">
                <option>English</option>
                <option>Amharic</option>
                <option>Afaan Oromoo</option>
                <option>Tigrigna</option>
                <option>Somali</option>
                <option>Afar</option>
              </select>
            </label>
            <label>
              <span>I want to learn</span>
              <select defaultValue="Amharic">
                <option>Amharic</option>
                <option>Afaan Oromoo</option>
                <option>Tigrigna</option>
                <option>Somali</option>
                <option>Afar</option>
              </select>
            </label>
            <a href="/languages/amharic">Click here to Learn all Official Languages of Ethiopia at once</a>
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="page-shell">
          <SectionHeader
            description="Search for language names, scripts, families, regions, or availability of audio, guidebooks, and mobile learning."
            title="Explore Ethiopian language paths"
          />
          <LanguageExplorer languages={languages} />
        </div>
      </section>
    </main>
  );
}
