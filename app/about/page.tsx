import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About"
};

const aims = [
  "To keep alive all Ethiopian Languages and Cultures through trilingual self-study guide books, online courses, mobile applications, and audio CDs.",
  "To break down the language barriers among various nations and nationalities of Ethiopia.",
  "To establish a better understanding of cultural practices among various nations and nationalities of Ethiopia.",
  "To establish further communication between Ethiopia and the rest of the world.",
  "To prevent the extinction of Ethiopian Languages and Cultures.",
  "To promote unity in diversity in the land of Ethiopia."
];

export default function AboutPage() {
  return (
    <main>
      <section className="page-hero ethiopic-texture">
        <div className="page-shell">
          <p className="eyebrow">About Ethio Language Box</p>
          <h1 className="display">A community service project for Ethiopian languages and cultures.</h1>
          <p>
            Ethio Language Box is a unique community service project of the Ministry of Culture and Sport,
            dedicated to documenting and digitizing Ethiopian languages on a single platform.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="page-shell content-stack">
          <article className="story-panel">
            <h2>Ethio Language Box: A Unique Community Service Project of Ministry of Culture and Sport</h2>
            <p>
              As part of its commitment to meaningful community engagement, the Ministry of Culture and Sport,
              through its Research and Community Service Directorate, has proudly undertaken the Ethio Language
              Box project, a remarkable initiative dedicated to the documentation and digitization of all the
              Ethiopian languages on a single platform.
            </p>
            <p>
              Ethiopia is home to a rich tapestry of ancestral languages and cultural heritage that once
              flourished vibrantly across generations. The Ethio Language Box project strives to preserve and
              celebrate this invaluable legacy, offering a cultural service to the nation. Language documentation
              and digitization efforts form part of a broader movement among indigenous communities to safeguard
              their cultural identity against the homogenizing forces of modern global trends.
            </p>
            <p>
              Indigenous language teachers and activists are central figures in this noble endeavor, working
              passionately to protect and promote their languages and cultural heritage.
            </p>
          </article>

          <article className="story-panel">
            <h2>Learn Ethiopian Languages - Speak with the Hearts of Ethiopians</h2>
            <p>
              In line with the vision to strengthen national unity and intercultural understanding, the platform
              offers online courses designed to enable anyone, whether Ethiopian or foreign, to learn Ethiopian
              languages other than their own mother tongue through the medium of English and Ethiopian languages.
            </p>
            <p>
              Each course is thoughtfully prepared under the guidance of respected linguists and language experts.
              This pioneering initiative is intended to foster stronger bonds among people from different parts of
              Ethiopia, promote mutual understanding, and contribute to national harmony.
            </p>
          </article>

          <section className="aims-panel" aria-labelledby="our-aims">
            <p className="eyebrow">Our Aims</p>
            <h2 className="display" id="our-aims">Preserve, teach, connect.</h2>
            <div className="aim-grid">
              {aims.map((aim, index) => (
                <article className="aim-card" key={aim}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{aim}</p>
                </article>
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
