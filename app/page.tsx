"use client";

import { useEffect } from "react";
import { ArrowRight, BookMarked, BookOpen, Headphones, Search, Smartphone } from "lucide-react";
import { useLocale } from "@/components/i18n/LocaleProvider";
import { routes } from "@/lib/routes";

const featuredChips = [
  { am: "አ", name: "Amharic" },
  { am: "A", name: "Afaan Oromoo" },
  { am: "ት", name: "Tigrigna" },
  { am: "A", name: "Afar" },
  { am: "S", name: "Somali" },
  { am: "ሲ", name: "Sidaamu Afoo" },
  { am: "ወ", name: "Wolaita" },
  { am: "T", name: "Tambarsa" },
  { am: "H", name: "Halaba" },
  { am: "K", name: "Kabena" },
  { am: "M", name: "Mareko" },
  { am: "A", name: "Awi" },
  { am: "N", name: "Nuer" },
];

const stats = [
  { key: "stat.languages", num: "84" },
  { key: "stat.topics", num: "350" },
  { key: "stat.statements", num: "4,253" },
  { key: "stat.categories", num: "4" }
];

const resources = [
  { c: "var(--green)", Icon: BookOpen, titleKey: "res.courses", desc: "Study with our structured curriculum, anytime online.", ctaKey: "cta.startLearning", href: routes.languages },
  { c: "var(--blue)", Icon: Smartphone, titleKey: "res.mobile", desc: "Learn on the go with our interactive mobile applications.", ctaKey: "cta.exploreLanguages", href: routes.languages },
  { c: "var(--red)", Icon: Headphones, titleKey: "res.audio", desc: "Perfect your pronunciation with native speaker audio examples.", ctaKey: "cta.exploreCultures", href: routes.cultures },
  { c: "var(--gold)", Icon: BookMarked, titleKey: "res.books", desc: "Self-study guide books designed for effective language learning.", ctaKey: "cta.aboutProject", href: routes.about }
];

const parts = [
  { rom: "I", stepKey: "part.one", titleKey: "part.structures", desc: "Build a strong foundation by understanding sentence structures and how words fit together to create meaning.", cta: "Learn Structures" },
  { rom: "II", stepKey: "part.two", titleKey: "part.conversation", desc: "Practice real-life conversations and dialogues to gain confidence, fluency, and ease in everyday interactions.", cta: "Boost Conversation" },
  { rom: "III", stepKey: "part.three", titleKey: "part.vocabulary", desc: "Expand your word bank with essential terms and expressions for clear and effective communication.", cta: "Enrich Vocabulary" },
  { rom: "IV", stepKey: "part.four", titleKey: "part.grammar", desc: "Master the rules that guide language use, ensuring accuracy and clarity in speaking and writing.", cta: "Master the Rules" }
];

const features = [
  { k: "ሀ", title: "Expertly Designed", desc: "Meticulously crafted by seasoned language professionals and linguistic experts, ensuring a unique, high-quality experience." },
  { k: "ለ", title: "Not Just Translation", desc: "This method avoids rote translation and memorization. Instead, it builds logical formulas for natural communication." },
  { k: "ሐ", title: "Practical Focus", desc: "Express present, past, future, and continuous actions through clear rules, examples, and exercises for real situations." }
];

const audience = [
  { tag: "Beginner", title: "Understand but not speak", desc: "Comprehend Ethiopian languages but struggle to express yourself? Bridge that gap through structured speaking practice." },
  { tag: "Intermediate", title: "Speak, but not correctly", desc: "Polish pronunciation and grammatical accuracy through targeted exercises." },
  { tag: "Advanced", title: "Speak, but not fluently", desc: "Build speed, natural phrasing, and ease through immersion-based practice." },
  { tag: "Heart to Heart", title: "Speak with cultural depth", desc: "Connect with cultural nuances and the emotional roots of the language." },
  { tag: "Polyglot Path", title: "Become multilingual", desc: "Strengthen your skills while fitting into a broader multilingual journey." },
  { tag: "Expert", title: "Teach and Inspire", desc: "Guide others, share knowledge, and help preserve the language for future generations." }
];

const skills = [
  { big: "L", titleKey: "skill.listening", desc: "Understand the cultural practices of the Nations and Nationalities of Ethiopia." },
  { big: "S", titleKey: "skill.speaking", desc: "Speak with the hearts of communities in their mother tongues on any topic." },
  { big: "R", titleKey: "skill.reading", desc: "Read literature in indigenous languages and enrich contextual vocabulary." },
  { big: "W", titleKey: "skill.writing", desc: "Write to friends or conduct business correspondence across communities." }
];

const quotes = [
  { text: "If you talk to a man in a language he understands that goes to his head. If you talk to him in his language that goes to his heart.", who: "Nelson Rolihlahla Mandela" },
  { text: "Language is the road map of a culture. It tells you where its people come from and where they are going.", who: "Rita Mae Brown" },
  { text: "A different language is a different vision of life.", who: "Federico Fellini" },
  { text: "When languages are lost, most of the knowledge that went with them gets lost.", who: "Nicholas Ostler" }
];

export default function HomePage() {
  const { t } = useLocale();

  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".rd-reveal"));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("rd-in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el, i) => {
      el.style.transitionDelay = `${Math.min(i % 4, 3) * 0.08}s`;
      io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <main className="rd-home">
      {/* HERO */}
      <section className="rd-hero">
        <div className="rd-geez" aria-hidden="true">{t("hero.script")}</div>
        <div className="page-shell rd-hero-grid">
          <div className="rd-reveal">
            <span className="rd-eyebrow"><span className="rd-dot" /> {t("hero.eyebrow")}</span>
            <h1 className="rd-title">
              <span className="rd-script">{t("hero.script")}</span>
              {t("hero.title1")}<br />{t("hero.title2")}
            </h1>
            <p className="rd-lead">
              Learn all <strong>84 diverse Ethiopian languages</strong> <span className="rd-free">for FREE</span> — with
              expert-designed guidebooks, native-speaker audio, mobile apps, and structured online courses.
            </p>
            <div className="rd-actions">
              <a className="rd-btn rd-btn-primary" href={routes.languages}>{t("cta.exploreLanguages")} <ArrowRight aria-hidden="true" size={17} /></a>
              <a className="rd-btn rd-btn-gold" href={routes.languages}>{t("cta.startLearning")}</a>
              <a className="rd-btn rd-btn-ghost" href={routes.cultures}>Explore Cultures</a>
            </div>
            <p className="rd-mantra">{t("hero.mantra")}</p>
          </div>
          <div className="rd-card rd-reveal">
            <div className="rd-search">
              <Search className="rd-ic" aria-hidden="true" size={18} />
              <span>{t("hero.searchPlaceholder")}</span>
              <ArrowRight className="rd-go" aria-hidden="true" size={18} />
            </div>
            <div className="rd-chips">
              {featuredChips.map((chip) => (
                <a className="rd-chip" key={chip.name} href={routes.languages}>
                  <span className="rd-am">{chip.am}</span>{chip.name}
                </a>
              ))}
              <a className="rd-chip" href={routes.languages}>+71 more</a>
            </div>
          </div>
        </div>
      </section>

      <div className="rd-tibeb rd-thin" />

      {/* STATS */}
      <section className="rd-statband">
        <div className="page-shell rd-stat-inner">
          {stats.map((s) => (
            <div className="rd-stat rd-reveal" key={s.key}>
              <div className="rd-num">{s.num}</div>
              <div className="rd-lbl">{t(s.key)}</div>
            </div>
          ))}
        </div>
      </section>

      {/* RESOURCES */}
      <section className="rd-block" id="resources">
        <div className="page-shell">
          <div className="rd-sec-head rd-reveal">
            <div className="rd-sec-eyebrow">{t("resources.eyebrow")}</div>
            <h2>{t("resources.title")}</h2>
            <p>Online courses, mobile apps, audio pronunciation tools, and multilingual self-study guidebooks, built for every Ethiopian language.</p>
          </div>
          <div className="rd-res-grid">
            {resources.map((r) => (
              <article className="rd-res rd-reveal" key={r.titleKey} style={{ ["--c" as string]: r.c }}>
                <div className="rd-ico"><r.Icon aria-hidden="true" size={24} /></div>
                <h3>{t(r.titleKey)}</h3>
                <p>{r.desc}</p>
                <a className="rd-link" href={r.href}>{t(r.ctaKey)} <ArrowRight aria-hidden="true" size={16} /></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FOUR PARTS */}
      <section className="rd-block rd-feat-band" id="learn">
        <div className="page-shell">
          <div className="rd-sec-head rd-reveal">
            <div className="rd-sec-eyebrow">{t("parts.eyebrow")}</div>
            <h2>{t("parts.title")}</h2>
            <p>Not rote translation — logical formulas for natural communication, built step by step across four comprehensive parts.</p>
          </div>
          <div className="rd-parts">
            {parts.map((p) => (
              <article className="rd-part rd-reveal" key={p.titleKey}>
                <div className="rd-rom">{p.rom}</div>
                <div>
                  <div className="rd-step">{t(p.stepKey)}</div>
                  <h3>{t(p.titleKey)}</h3>
                  <p>{p.desc}</p>
                  <span className="rd-cta">{p.cta} <ArrowRight aria-hidden="true" size={15} /></span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* UNIQUE FEATURES */}
      <section className="rd-block">
        <div className="page-shell">
          <div className="rd-sec-head rd-reveal">
            <div className="rd-sec-eyebrow">{t("features.eyebrow")}</div>
            <h2>{t("features.title")}</h2>
          </div>
          <div className="rd-feats">
            {features.map((f) => (
              <div className="rd-feat rd-reveal" key={f.title}>
                <span className="rd-k" aria-hidden="true">{f.k}</span>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AUDIENCE */}
      <section className="rd-block rd-feat-band">
        <div className="page-shell">
          <div className="rd-sec-head rd-reveal">
            <div className="rd-sec-eyebrow">{t("audience.eyebrow")}</div>
            <h2>{t("audience.title")}</h2>
            <p>From understanding without speaking, to teaching and inspiring others — there&apos;s an entry point for you.</p>
          </div>
          <div className="rd-aud">
            {audience.map((a) => (
              <div className="rd-lvl rd-reveal" key={a.tag}>
                <div className="rd-tag">{a.tag}</div>
                <h3>{a.title}</h3>
                <p>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LSRW */}
      <section className="rd-block rd-lsrw-band">
        <div className="rd-geez" aria-hidden="true">ማ</div>
        <div className="page-shell">
          <div className="rd-sec-head rd-reveal" style={{ maxWidth: "60ch" }}>
            <div className="rd-sec-eyebrow" style={{ color: "var(--gold-soft)" }}>{t("lsrw.eyebrow")}</div>
            <h2 style={{ color: "#fff" }}>{t("lsrw.title")}</h2>
            <p style={{ color: "rgba(255,255,255,0.82)" }}>
              Four core skills, built through practical exercises and real-life scenarios — the foundation for lifelong success in any language.
            </p>
          </div>
          <div className="rd-lsrw">
            {skills.map((s) => (
              <div className="rd-skill rd-reveal" key={s.titleKey}>
                <div className="rd-big">{s.big}</div>
                <h3>{t(s.titleKey)}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTES */}
      <section className="rd-block">
        <div className="page-shell">
          <div className="rd-sec-head rd-reveal">
            <div className="rd-sec-eyebrow">{t("quotes.eyebrow")}</div>
            <h2>{t("quotes.title")}</h2>
          </div>
          <div className="rd-quotes">
            {quotes.map((q) => (
              <figure className="rd-quote rd-reveal" key={q.who}>
                <p>{q.text}</p>
                <figcaption className="rd-who">— {q.who}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="rd-block rd-feat-band" id="about">
        <div className="page-shell rd-about">
          <div className="rd-reveal">
            <div className="rd-sec-eyebrow">{t("about.eyebrow")}</div>
            <h2 style={{ fontSize: "clamp(1.8rem,4vw,2.6rem)", marginBottom: "1rem" }}>{t("about.title")}</h2>
            <p>
              The Ethio Language Box Project is a national initiative jointly undertaken by the <strong>Ministry of
              Culture &amp; Sport</strong> and <strong>Akmonlink College</strong>, dedicated to the documentation and
              digital preservation of Ethiopian languages — creating multilingual self-study guidebooks, mobile apps,
              online courses, and audio pronunciation tools to make language learning accessible to everyone.
            </p>
            <p>We believe that preserving languages is essential to maintaining cultural heritage and diversity.</p>
            <a className="rd-btn rd-btn-primary" href={routes.about}>About the project <ArrowRight aria-hidden="true" size={17} /></a>
          </div>
          <aside className="rd-founder rd-reveal">
            <div className="rd-av">KS</div>
            <h3>Dr. K. Sekhar</h3>
            <div className="rd-role">Founder, Ethio Language Box</div>
            <p style={{ fontSize: "0.9rem", color: "var(--ink-soft)" }}>
              A national initiative to preserve and promote Ethiopia&apos;s rich linguistic heritage.
            </p>
            <div className="rd-partners-label">{t("about.initiative")}</div>
            <div className="rd-partners">
              <span>Ministry of Culture &amp; Sport</span>
              <span>Akmonlink College</span>
            </div>
          </aside>
        </div>
      </section>

      <div className="rd-tibeb" />
    </main>
  );
}
