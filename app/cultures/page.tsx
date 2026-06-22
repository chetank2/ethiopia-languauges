import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Cultures"
};

const greetingPractices = [
  "Bow the head and raise one's hat.",
  "Address people with titles such as Ato, Weziro, Woizrit, Doctor, or Engineer.",
  "Address very elderly people with Gash.",
  "Follow hierarchy with respect to age, wealth, education, and social contribution."
];

const cultureCards = [
  {
    title: "Ethiopian Greetings",
    body:
      "In Ethiopian culture, greetings are very important and often unique, somewhat lengthy rituals. They are expressed with body language, respect, and warmth. Ethiopians greet by shaking hands, hitting shoulders, hugging, and kissing. The kind of greeting indicates intimacy, affection, and attachment."
  },
  {
    title: "Ethiopian Injera",
    body:
      "The staple food of the Ethiopian home is injera, a pancake usually made from teff, a locally grown cereal found in Ethiopia. A typical meal consists of a large injera with boiled vegetables, spicy sauces, milk curds, and on special days chicken, beef, lamb, or fish."
  },
  {
    title: "Ethiopian Coffee Ceremony",
    body:
      "The Ethiopian coffee ceremony, known as Bunna in Amharic, is a social and communal tradition. The ceremony includes washing and roasting green coffee beans, brewing the coffee in a jebena, and serving three rounds: Awol, Tona, and Baraka."
  }
];

export default function CulturesPage() {
  return (
    <main>
      <section className="page-hero ethiopic-texture">
        <div className="page-shell">
          <p className="eyebrow">Cultures</p>
          <h1 className="display">Our Culture, Our Identity.</h1>
          <p>
            Explore Ethiopian greetings, food traditions, coffee ceremony, and community language heritage
            alongside the learning experience.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="page-shell culture-grid">
          {cultureCards.map((card) => (
            <article className="culture-card" key={card.title}>
              <h2>{card.title}</h2>
              <p>{card.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-tight feature-band">
        <div className="page-shell split-layout">
          <div className="story-panel">
            <h2>ጤና ይስጥልኝ / Tena yistilign</h2>
            <p>
              The first and universal aspect of Ethiopian greeting is an inquiry into the health of one&apos;s
              counterpart, whether the person is family, friend, or stranger. It is not dependent on relative
              social status.
            </p>
            <p>
              Ethiopians not only inquire about one another&apos;s health, but also ask after family members, animals,
              harvest, business, and personal life when familiar. Answers are often prefaced with thanks to God,
              and bad news is usually saved for later in the conversation.
            </p>
          </div>
          <div className="story-panel">
            <h2>While greeting, Ethiopians</h2>
            <ul className="plain-list">
              {greetingPractices.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="page-shell culture-course">
          <div>
            <p className="eyebrow">Learning example</p>
            <h2 className="display">Culture and language belong together.</h2>
            <p>
              The original platform presents language lessons with structures, conversation, vocabulary, grammar,
              and audio examples. This reference screen shows how culture pages can connect directly into learning
              modules such as “Learn Afaan Oromoo - Speak with the Hearts.”
            </p>
          </div>
          <Image
            alt="Reference screenshot showing an Ethio Language Box course interface with structures, audio, and bilingual examples."
            height={821}
            src="/images/cultures-course-reference.png"
            width={2048}
          />
        </div>
      </section>

      <section className="section-tight">
        <div className="page-shell story-panel">
          <h2>The Anywaa and their Language</h2>
          <p>
            The Anywaa are Luo Nilotic people who mostly live in Gambella, south-western Ethiopia. The tribal
            name Anywaa is derived from the root nywaak, meaning doing together or sharing. The Anywaa are
            riverine people who mostly settle along the Openo, Akobo, Alworo, Gilo, and Oboth rivers.
          </p>
          <p>
            The Anywaa language belongs to the Western Nilotic branch under the Nilo-Saharan language phylum.
            The Anywaa call their language dha Anywaa, meaning mouth of Anywaa. The language has more than
            100,000 speakers and uses a Latin-based script developed for education in the Gambella region.
          </p>
        </div>
      </section>
    </main>
  );
}
