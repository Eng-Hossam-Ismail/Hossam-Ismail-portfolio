# Hossam Ismail — Civil & Structural Engineer Portfolio

A premium, bilingual (English / Arabic) personal portfolio website with dark/light themes, RTL support, and a fully centralized content system.

---

## Tech Stack

- **React 18 + TypeScript** — component architecture, type safety
- **Vite** — fast dev server and build
- **Tailwind CSS** — design system, theming, responsive layout
- **Framer Motion** — restrained, accessible animations
- **Lucide React** — consistent icon set

No UI theme library or CMS. Content lives in plain TypeScript files you edit directly.

---

## How to edit your content (no design knowledge needed)

All your personal information lives in **one folder**: `src/data/`.

| What you want to change | File to edit |
|---|---|
| Name, title, email, phone, WhatsApp, LinkedIn, location, bio, hero headline, quick stats, social links | `src/data/portfolio.ts` |
| Which sections show in the navbar (show/hide) | `src/data/portfolio.ts` → `nav` array (set `enabled: true/false`) |
| Skills (categories + items) | `src/data/portfolio.ts` → `skills` array |
| Experience / work history | `src/data/portfolio.ts` → `experience` array |
| Training entries | `src/data/portfolio.ts` → `training` array |
| Education | `src/data/portfolio.ts` → `education` array |
| Certifications | `src/data/portfolio.ts` → `certifications` array |
| Projects | `src/data/projects.ts` |
| Button labels, section titles, all UI wording (English + Arabic) | `src/data/ui.ts` |
| SEO (title, description, canonical URL, social image) | `src/data/portfolio.ts` → `seo` |

### Bilingual content

Any text that needs both languages is an object with `en` and `ar` keys:

```ts
{ en: 'Civil Engineer', ar: 'مهندس مدني' }
```

Change either side and the site updates automatically when that language is active.

### Replace your CV

Replace the file at:

```
public/assets/cv/Hossam-Ismail-CV.pdf
```

Keep the same filename, or update `cvPath` in `src/data/portfolio.ts` to point to a new file. The "Download CV" button in the navbar, hero, and footer all read from this single path.

### Replace your profile photo

Replace the file at:

```
public/assets/profile/hossam-profile.webp
```

Keep the same filename, or update `profileImage` in `src/data/portfolio.ts`. A square-ish portrait (roughly 4:5) works best.

### Add a project

Open `src/data/projects.ts`. Copy the commented template, uncomment it, fill in your real details, and add it to the `projects` array. The Projects section populates automatically — including the card, detail modal, gallery, and tags.

```ts
export const projects: ProjectEntry[] = [
  {
    id: 'my-project',
    title: { en: 'Project Name', ar: 'اسم المشروع' },
    shortDescription: { en: 'One line.', ar: 'سطر واحد.' },
    type: 'Structural Design',
    year: '2025',
    software: ['ETABS', 'AutoCAD'],
    // ...see the template for all optional fields
  },
];
```

### Add experience, training, education, certifications

Each is an array in `src/data/portfolio.ts`. Add a new object to the relevant array following the shape of the existing entries. The TypeScript types (in `src/data/types.ts`) will tell your editor what fields are available.

### Hide a section

In the `nav` array in `src/data/portfolio.ts`, set `enabled: false` on any section. It disappears from the navbar and the page.

---

## Languages & Theme

- Language switch (EN / AR) persists across visits and switches full RTL/LTR layout.
- Dark / Light toggle persists and respects your system preference on first visit.
- Both are stored in `localStorage` under `hi-lang` and `hi-theme`.

---

## Contact form note

The contact form opens the visitor's email app pre-filled to your address — it works with **no backend**. To collect messages automatically (store them in a database), connect a form backend such as Supabase, Formspree, or a Supabase Edge Function. The form note in `src/data/ui.ts` explains this to visitors.

---

## Run / Build

```bash
npm install      # install dependencies
npm run dev      # start dev server
npm run build    # production build
npm run typecheck # type check
```

---

## Project structure

```
src/
  data/           # ← ALL editable content lives here
    types.ts      # TypeScript types (shape of the data)
    portfolio.ts  # personal info, skills, experience, training, education, etc.
    projects.ts   # projects array
    ui.ts         # UI strings (buttons, labels) in EN + AR
  context/        # theme + language providers
  components/
    layout/       # navbar, footer
    sections/     # hero, about, skills, experience, training, education, projects, certifications, contact
    ui/           # shared UI: section header, profile photo, CV button, toggles
  hooks/          # scroll-reveal hook
```

Built with precision.
