# Responsive Portfolio Website — Tasleem Bibi

A mobile-first personal portfolio website for **Tasleem Bibi**, Frontend Developer from Sukkur, Sindh, Pakistan.

## About Tasleem

- **Education:** BSCS, Begum Nusrat Bhutto Women University Sukkur, Aug 2022 – 2026 (final year)
- **Certifications:** PITP Certified Web Developer & Data Scientist, Sukkur IBA University, Sep–Nov 2025
- **Experience:** Frontend Developer Intern, Decode Labs Sukkur, Apr–May 2026
- **LinkedIn:** https://www.linkedin.com/in/tasleem-bibi-431b2a361/
- **Fiverr:** [@taslem_services](https://www.fiverr.com/taslem_services)

## Features

- Responsive layout (mobile-first, 3-column project grid on desktop)
- Mobile hamburger menu
- Dark / light mode toggle (preference saved in `localStorage`)
- Smooth scrolling navigation
- Skills filter (All / Frontend / Programming / Data & Tools)
- Contact form with JavaScript validation (name, email format, message length)
- Sections: Hero, About, Skills, Projects, Experience, Contact

## Skills used

HTML, CSS (variables, Flexbox, Grid, media queries), JavaScript (DOM, events, localStorage, form validation), Responsive Web Design

## How to run

No build step, no server needed:

1. Download / clone this folder.
2. Open `index.html` in any browser (double-click it).
3. Or serve it locally: `python3 -m http.server` then visit `http://localhost:8000`

## Structure

```
responsive-portfolio-website/
├── index.html   # Hero, About, Skills, Projects, Experience, Contact
├── style.css    # Mobile-first styles + dark mode + responsive breakpoints
├── script.js    # Menu, theme toggle, skills filter, form validation
└── README.md
```

## Notes

- The profile visual is a "TB" initials placeholder — no photo file is used.
- The contact form validates on the front end only; there is no backend yet. To receive real messages, connect it to Formspree or a backend later.
- The Projects section links to the sibling projects in this repo: `../modern-landing-page/` and `../python-data-analysis/`.
