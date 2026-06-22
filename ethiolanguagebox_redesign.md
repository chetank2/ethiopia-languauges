# Ethio Language Box Redesign Plan

This file stores the redesign sitemap, content rules, page structure, and working design decisions for the Ethio Language Box website.

Source content archive: [ethiolanguagebox_content.md](/Users/C/Documents/language/ethiolanguagebox_content.md)

## Redesign Goal

Redesign Ethio Language Box from a content-heavy WordPress/docs experience into a clear national language learning and digital preservation platform.

The new site should serve two main audiences:

- Public visitors: learners, educators, students, researchers, diaspora communities, and language communities.
- Platform users: translators, editors, reviewers, audio recorders, administrators, and project contributors.

## Core Positioning

Ethio Language Box helps people learn Ethiopian languages while preserving Ethiopia's linguistic and cultural heritage through digital documentation, learning resources, audio tools, mobile apps, guidebooks, and structured quality-assured workflows.

Suggested headline direction:

```text
Ethio Language Box
Learn, preserve, and celebrate Ethiopia's languages.
```

Suggested supporting copy:

```text
A national language learning and digital preservation platform for Ethiopian languages, offering free learning materials, audio pronunciation, mobile apps, guidebooks, and documentation workflows.
```

## Primary Sitemap

### 1. Home

Purpose: Introduce the platform, mission, learning resources, and clear entry points.

Recommended sections:

- Hero with brand name, mission, and primary calls to action
- Language search or featured language explorer
- Learning resource cards
- Digital preservation mission
- How the language content workflow works
- Featured languages
- Mobile app, audio tools, and guidebooks
- Documentation and contributor entry points
- Footer with key links

Primary calls to action:

- Explore Languages
- Start Learning
- Download App
- Read Documentation
- Sign In

### 2. Languages

Purpose: Let visitors browse, search, and select Ethiopian languages.

Recommended sections:

- Search and filter
- All Languages
- Official Languages of Ethiopia
- Indigenous Languages
- Language families
- Regional language map
- Featured or popular languages

Content sources:

- Homepage language promise: "Learn all 84 diverse languages for FREE."
- Existing links to `/languages/`
- Existing learn URL patterns

### 3. Language Detail

Purpose: Give each language a clear learning and preservation hub.

Recommended sections:

- Language overview
- Region or community context
- Start learning
- Structures
- Conversation
- Vocabulary
- Grammar
- Audio pronunciation
- Culture notes
- Downloads, PDFs, or guidebooks
- Mobile app link

Reusable page template:

```text
/languages/[language-name]/
```

### 4. Learn

Purpose: Organize the course material into a learner-friendly structure.

Recommended sections:

- Part One: Structures
- Part Two: Conversation
- Part Three: Vocabulary
- Part Four: Grammar
- Listening practice
- Speaking practice
- Reading practice
- Writing practice

Current course framing from homepage:

- Structures: Build sentence structure foundations.
- Conversation: Practice real-life dialogues.
- Vocabulary: Expand essential terms and expressions.
- Grammar: Master language rules for accurate speaking and writing.

### 5. Resources

Purpose: Centralize the learning assets.

Recommended sections:

- Online Courses
- Mobile Apps
- Audio Tools
- Self-Study Guidebooks
- PDFs
- Teacher or classroom resources

Current homepage resource types:

- Online Courses
- Mobile Apps
- Audio Tools
- Guide Books

### 6. Cultures

Purpose: Connect language learning with cultural identity and context.

Recommended sections:

- Cultural overview
- Nations and nationalities
- Oral traditions
- Proverbs and expressions
- Cultural learning notes
- Language and identity stories

Current homepage idea:

```text
Our Culture, Our Identity.
```

### 7. Documentation

Purpose: Preserve the existing Docsify documentation in a cleaner public docs hub.

Recommended sections:

- Documentation Home
- Project Overview
- System Architecture
- Language Development Workflow
- Syllabus Content Overview
- User Manuals
- Operations
- Support and FAQ

Documentation sub-sitemap:

- System Documentation
  - Project Overview
  - System Architecture
  - Language Workflow
  - Syllabus Content Overview
- User Manuals
  - User Login Guide
  - Translator Manual
  - Editor Manual
  - Reviewer Manual
  - Audio Recorder Manual
  - Administrator Manual
- Operations
  - User Management
  - PDF Generation
  - Mobile App Management
- Support
  - Troubleshooting
  - FAQ

### 8. Contributors

Purpose: Explain who contributes to the platform and how quality is maintained.

Recommended sections:

- Become a Contributor
- Translator Role
- Editor Role
- Reviewer Role
- Audio Recorder Role
- Administrator Role
- Quality Assurance Workflow

Workflow:

```text
Author -> Translator -> Editor -> Reviewer -> Audio Recorder -> Website -> Mobile App -> PDF
```

QA governance:

```text
Translator Self-QA -> Editor Validation -> Reviewer Certification -> Audio Validation -> Publication
```

### 9. About

Purpose: Explain the initiative, mission, partners, and preservation vision.

Recommended sections:

- About Ethio Language Box
- Mission and vision
- Digital preservation
- Language learning access
- Partners
- Founder or team
- Governance and QA

Current homepage claims to reconcile:

- Homepage says the project is jointly undertaken by the Ministry of Culture and Sport and Akmonlink College.
- Docs say it is a Ministry of Education initiative aligned with Digital Ethiopia 2030.

Rule: confirm the current official ownership and partner wording before publishing final copy.

### 10. Contact

Purpose: Give clear paths for requests and support.

Recommended sections:

- General inquiry
- Request guidebooks
- Partnership inquiry
- Technical support
- Contributor interest

### 11. Login

Purpose: Provide direct access for platform users.

Recommended sections:

- Platform login
- Contributor dashboard
- Admin access
- Help for login issues

## Recommended Navigation

Primary nav:

- Home
- Languages
- Learn
- Resources
- Documentation
- About
- Contact
- Login

Secondary or utility nav:

- Mobile App
- Audio Tools
- Guidebooks
- Contributor Portal

Footer nav:

- Home
- About
- Languages
- Cultures
- Documentation
- Contact
- Privacy
- Login

## Launch Phases

### Phase 1

Build the core public website:

- Home
- Languages
- Language Detail
- Learn
- Resources
- Documentation
- About
- Contact
- Login

### Phase 2

Add deeper experience pages:

- Cultures
- Contributor pages
- Regional language map
- Language comparison
- Teacher resources
- Download center

## Content Rules

Use these rules when rewriting or reorganizing content.

1. Keep the mission clear: learning plus preservation.
2. Use plain, confident language. Avoid bureaucratic phrasing where a learner-facing phrase is clearer.
3. Keep official claims consistent across the homepage and documentation.
4. Do not bury the platform purpose inside long paragraphs.
5. Every major page should have one clear primary action.
6. Separate public learning content from internal workflow documentation.
7. Make language discovery central: search, browse, and language detail pages should be easy to reach.
8. Treat audio, mobile apps, PDFs, and guidebooks as resource types, not scattered homepage cards.
9. Preserve existing documentation content, but reorganize it into clearer groups.
10. Keep the contributor workflow visible, especially for translators, editors, reviewers, and audio recorders.
11. Avoid duplicated page links with different labels unless the labels serve different user intentions.
12. When content conflicts, mark it for confirmation instead of silently choosing one version.

## Design Rules

Use these rules for visual and UX decisions.

1. The site should feel official, warm, educational, and culturally grounded.
2. Avoid a generic marketing look. The first viewport should clearly signal Ethiopian languages and Ethio Language Box.
3. Use real or relevant visual assets where possible: language learning, books, mobile apps, audio, maps, culture, and community.
4. Prioritize clarity over decoration.
5. Use accessible contrast and readable typography.
6. Keep page sections scannable with strong headings and short supporting copy.
7. Use cards only for repeated items such as languages, resources, manuals, and role summaries.
8. Use icons for resource types: course, mobile app, audio, guidebook, PDF, documentation.
9. Make the language search prominent on Home and Languages.
10. Make mobile layouts first-class, especially for learners using phones.
11. Keep documentation pages dense and navigable, with sidebar navigation and search.
12. Keep contributor/admin content utilitarian and workflow-focused.

## Visual Identity Research

### Cultural Signals

The visual system should reflect Ethiopia through language, learning, preservation, and cultural continuity. Avoid reducing the identity to only flag stripes. The strongest references are:

- Ethiopian flag colors: green, yellow, red, and the blue emblem field.
- Pan-African resonance: Ethiopia's green, yellow, and red have wider continental meaning because of Ethiopia's historical role.
- Ethiopic or Ge'ez script: a major identity anchor for Amharic, Tigrinya, Ge'ez, and several other Ethiopian and Eritrean languages.
- Multiscript reality: many Ethiopian languages also use Latin-based orthographies, so the typography must support both Ethiopic and Latin scripts well.
- Traditional textiles: white or natural cotton grounds with colored tibeb-style borders and accents.
- Illuminated manuscripts: parchment, ink, deep reds, greens, blues, golds, and hand-crafted ornament.
- Learning tools: books, mobile apps, audio waveforms, lesson cards, language maps, and pronunciation cues.

### Recommended Theme Direction

Use a warm cultural-learning platform theme:

```text
Official enough to feel trustworthy.
Warm enough to feel cultural and human.
Clear enough to support serious learning and documentation.
```

The best direction is not a loud tricolor interface. Instead, use parchment, cotton white, charcoal text, and deep green as the foundation, then use gold, red, and blue as controlled accents.

### Primary Palette

Use this palette for the main redesign:

| Role | Color | Hex | Usage |
|---|---:|---:|---|
| Deep Green | Forest / land / growth | `#176B3A` | Primary buttons, nav active state, key accents |
| Gold | learning / harmony / illumination | `#F2B705` | Highlights, icons, badges, selected states |
| Heritage Red | energy / memory / emphasis | `#B8322A` | Small alerts, cultural accents, important calls |
| Emblem Blue | trust / digital platform | `#2557A7` | Links, documentation accents, system UI |
| Parchment | manuscript / warmth | `#F7F1E3` | Page bands, soft backgrounds |
| Cotton White | textile / clarity | `#FFFDF7` | Main page background |
| Ink Charcoal | readability | `#1F2522` | Body text and headings |
| Warm Gray | quiet structure | `#E6DED0` | Borders and dividers |

### Palette Rules

1. Use deep green as the primary brand color.
2. Use gold as the main highlight, not as a large background.
3. Use red sparingly so it does not become visually aggressive.
4. Use blue mostly for digital/system/documentation cues.
5. Use parchment and cotton white for warmth and readability.
6. Keep body text near charcoal, not pure black.
7. Avoid large red-yellow-green stripes except in small ceremonial or footer details.
8. Use textile-inspired border details subtly, not as heavy decoration.

### Alternate Palette Routes

#### Route A: Cultural Archive

Best for a preservation-first identity.

- Background: `#F7F1E3`
- Text: `#221F1A`
- Primary: `#176B3A`
- Accent: `#C89B2C`
- Secondary accent: `#7A2E27`
- Border: `#D8CAB4`

#### Route B: Digital Learning

Best for a cleaner app-like product.

- Background: `#FFFDF7`
- Text: `#1F2522`
- Primary: `#2557A7`
- Secondary: `#176B3A`
- Accent: `#F2B705`
- Success: `#2F855A`

#### Route C: National Platform

Best for a more official government-adjacent presence.

- Background: `#FFFFFF`
- Text: `#17211B`
- Primary: `#0F5D36`
- Accent: `#E7B416`
- Secondary: `#204B8F`
- Critical accent: `#B8322A`

Recommended route: combine Route A and Route B. Use Cultural Archive for public storytelling and Digital Learning for lessons, search, docs, and dashboards.

### Typography Recommendation

The site must support Ethiopic and Latin scripts gracefully.

Recommended font stack:

```css
font-family:
  "Noto Sans Ethiopic",
  "Noto Sans",
  system-ui,
  -apple-system,
  BlinkMacSystemFont,
  "Segoe UI",
  sans-serif;
```

Display headings:

```css
font-family:
  "Noto Serif Ethiopic",
  "Noto Serif",
  Georgia,
  serif;
```

Use cases:

- Use `Noto Sans Ethiopic` for body text, UI labels, forms, filters, navigation, documentation, and learning interfaces.
- Use `Noto Serif Ethiopic` for major story headings, quote sections, cultural pages, and manuscript-inspired moments.
- Consider `Abyssinica SIL` for special Ethiopic-script samples or cultural callouts, especially where calligraphic character matters.
- Use a Latin companion such as `Noto Sans` so Latin-script Ethiopian languages like Afaan Oromoo and Somali sit comfortably beside Ethiopic text.

### Typography Rules

1. Do not use decorative pseudo-African fonts.
2. Do not use a Latin-only font as the primary typeface.
3. Test headings with Ethiopic and Latin examples side by side.
4. Keep documentation and dashboards in sans-serif for readability.
5. Use serif Ethiopic sparingly for cultural weight, not for dense UI.
6. Make language names visually equal, regardless of script.

### Visual Motifs

Use:

- Ethiopic letterforms as subtle texture or section markers.
- Soft manuscript/parchment surfaces.
- Tibeb-inspired border bands for separators or footer details.
- Map and region cues for language discovery.
- Audio waveform motifs for pronunciation.
- Lesson-card patterns for Structures, Conversation, Vocabulary, and Grammar.

Avoid:

- Overusing flag stripes.
- Generic safari, tribal, or tourist imagery.
- Heavy ornamental backgrounds behind reading text.
- Dark, low-contrast manuscript themes that hurt readability.
- Decorative symbols that imply one ethnic or religious identity represents all Ethiopian languages.

### Sample UI Token Direction

```css
:root {
  --color-bg: #fffdf7;
  --color-surface: #f7f1e3;
  --color-text: #1f2522;
  --color-muted: #6d6a61;
  --color-border: #e6ded0;
  --color-primary: #176b3a;
  --color-primary-dark: #0f4f2b;
  --color-accent-gold: #f2b705;
  --color-accent-red: #b8322a;
  --color-accent-blue: #2557a7;
}
```

### Source Notes

- Ethiopia's flag is green, yellow, and red with a blue emblem field; the colors have long historical and cultural significance.
- The Ethiopic or Ge'ez script is an abugida used for multiple Ethiopian and Eritrean languages, while many Ethiopian languages also use Latin-based orthographies.
- Abyssinica SIL is an Ethiopic font based on calligraphic traditions and supports a broad Ethiopic Unicode range.
- Noto Sans Ethiopic and Noto Serif Ethiopic are practical web font choices for multilingual Ethiopic support.

## Homepage Content Inventory

Current homepage content to preserve or improve:

- Welcome to Ethio Language Box
- Our Language, Our Identity.
- Our Culture, Our Identity.
- Ethiopian Languages: Learn all 84 diverse languages for FREE.
- Documentation and Digital Preservation
- Online Courses
- Mobile Apps
- Audio Tools
- Guide Books
- About Ethio Language Box Project
- Ethiopian Languages Learning Resources
- Part One: Structures
- Part Two: Conversation
- Part Three: Vocabulary
- Part Four: Grammar
- Unique Features
- Expertly Designed
- Not Just Translation
- Practical Focus
- Course Contents
- Who is this Course for?
- Master L.S.R.W Skills
- Popular Quotes on Languages

## Open Content Questions

- Which ministry or institution should be listed as the official owner?
- Should Akmonlink College be presented as a partner, implementer, or founder institution?
- Is "all 84 languages" the current verified number?
- Which language list should be canonical?
- Should the site emphasize language learning, digital preservation, or both equally?
- Should docs remain public, or should some manuals be moved behind login?
- What is the desired primary conversion: start learning, download app, sign in, or contact?

## Source Files

- Extracted content: [ethiolanguagebox_content.md](/Users/C/Documents/language/ethiolanguagebox_content.md)
- Redesign plan: [ethiolanguagebox_redesign.md](/Users/C/Documents/language/ethiolanguagebox_redesign.md)
