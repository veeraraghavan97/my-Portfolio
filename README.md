# Veera Raghavan — Portfolio

A React + Vite + Tailwind CSS + Framer Motion portfolio. Built as a proper
component-driven project rather than a single HTML file, so it's easy to
extend, restyle, and maintain.

## Stack

- **React 18** — components in `src/components/`
- **Vite** — dev server + build tool
- **Tailwind CSS** — utility-first styling, theme tokens in `tailwind.config.js`
- **Framer Motion** — scroll-triggered reveal animations
- **lucide-react** — icons

## Project structure

```
src/
  components/     One component per section (Hero, About, Experience, ...)
  data/
    content.js    ALL page content lives here — edit this file, not the components
  hooks/
    useActiveSection.js   Powers the scroll-aware nav highlighting
  App.jsx         Composes the page
  main.jsx        React entry point
  index.css       Tailwind directives + a few global styles
```

## Running locally

```bash
npm install
npm run dev       # starts a dev server, usually at http://localhost:5173
```

## Building for production

```bash
npm run build      # outputs static files to dist/
npm run preview    # preview the production build locally
```

`dist/` is a fully static site — drop it anywhere that serves static files.

## Deploying

**Vercel / Netlify (recommended, free tier is plenty):**
1. Push this project to a GitHub repo.
2. Import the repo on vercel.com or netlify.com.
3. Build command: `npm run build`, output directory: `dist`. Both platforms
   auto-detect this for Vite projects.

**GitHub Pages:**
1. `npm run build`
2. Deploy the contents of `dist/` to a `gh-pages` branch (e.g. with the
   `gh-pages` npm package, or GitHub Actions).

## Updating your content

Almost everything — experience, skills, certifications, HTB machines,
blog notes, contact links — lives in `src/data/content.js`. Edit that file
and the whole site updates; you shouldn't need to touch component files for
routine content changes.

To add a blog post, add an object to the `notes` array:
```js
{ date: '2026-08-01', title: 'Post title', excerpt: 'One-line summary.', tag: 'azure' }
```

To log an HTB machine, add an object to the `htbMachines` array:
```js
{ name: 'Machine name', difficulty: 'Easy', os: 'Linux', date: '2026-08-01' }
```
(You'll want to render this list somewhere once you start filling it in —
currently only the count is surfaced in the "What I'm building now" section.)

## The agent widget

The bottom-right "Ask VRM-Agent" widget (`src/components/AgentWidget.jsx`)
is a rule-based keyword matcher against `agentKB` in `content.js` — no model
behind it yet. When you're ready to wire up a real agent:

1. Replace the `matchAgent()` function with a call to your backend
   (e.g. a small serverless function that calls the Claude API — never call
   a model API directly from the browser with a secret key).
2. The rest of the widget UI (open/close state, message log, input) doesn't
   need to change.
