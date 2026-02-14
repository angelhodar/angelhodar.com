# angelhodar.com

My personal portfolio and blog built with [Astro](https://astro.build), [Tailwind CSS v4](https://tailwindcss.com), and [MDX](https://mdxjs.com).

## Tech Stack

- **Framework:** Astro 5 (static output)
- **Styling:** Tailwind CSS v4 with OKLCH color system
- **Content:** MDX for blog posts via Astro Content Collections
- **Icons:** astro-icon with Iconify (devicon, logos) + custom SVGs
- **Font:** Inter (self-hosted via @fontsource)
- **Typography:** @tailwindcss/typography for prose content
- **Syntax Highlighting:** Shiki with Catppuccin Frappe theme

## Project Structure

```
src/
├── components/
│   ├── Blog/           # PostCard, PostsContainer, Prose
│   ├── Resume/         # ProjectCard, WorkPositionCard, SkillGroup, Skill, EducationCard
│   ├── Card.astro
│   ├── Header.astro    # Floating pill navbar
│   ├── Footer.astro
│   ├── Section.astro
│   └── ...
├── content/
│   └── blog/           # MDX blog posts
├── icons/              # Custom SVG icons
├── layouts/
│   └── Layout.astro
├── pages/
│   ├── index.astro     # Home (hero + experience + blog highlights)
│   ├── projects.astro  # Projects listing
│   ├── about.astro     # About, skills, experience, education
│   └── blog/
│       ├── index.astro # Blog listing
│       └── [slug].astro
└── styles/
    └── global.css      # OKLCH color tokens, base styles
```

## Getting Started

```bash
npm install
npm run dev
```

## Commands

| Command           | Action                                   |
| :---------------- | :--------------------------------------- |
| `npm run dev`     | Start dev server at `localhost:4321`     |
| `npm run build`   | Build production site to `./dist/`       |
| `npm run preview` | Preview the build locally before deploy  |
