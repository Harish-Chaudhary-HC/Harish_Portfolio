# Harish Chaudhary – Portfolio Website

A responsive personal portfolio built with HTML5, CSS3 and Vanilla JavaScript. No build step. It works on GitHub Pages as it is.

## Files

```
portfolio/
├── index.html
├── css/style.css
├── js/script.js
├── assets/
│   ├── images/     profile.jpg, ai-literacy-certificate.png
│   └── documents/  resume.pdf, ai-literacy-certificate.pdf
└── README.md
```

## Add or change images and documents

- **Photo:** replace `assets/images/profile.jpg` (keep the same name).
- **Resume:** replace `assets/documents/resume.pdf`.
- **Project images (optional):** add `assets/images/project1.jpg` and `assets/images/project2.jpg`. Until then, a coloured placeholder is shown.

## Edit content

Open `js/script.js` and edit only the `DATA` object at the top: about text, education, skills, projects and certifications.

- Add a project link by filling `githubLink` or `demoLink`. The button appears only when a link is present.
- Phone number is hidden by default. Set `SHOW_PHONE: true` in `CONFIG` to show it.
- If a list (for example `projects`) is empty, that section and its menu link are hidden automatically.

## Change theme colours

Edit the CSS variables in the `:root` and `[data-theme="dark"]` blocks at the top of `css/style.css`. `--accent` is the main colour.

## Deploy on GitHub Pages

1. Create a new public repository on GitHub. For a clean URL, name it `Harish-Chaudhary-HC.github.io`.
2. Upload everything inside the `portfolio` folder (so `index.html` is at the top level of the repository).
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, then click **Save**.
5. Wait about a minute, then open your live URL: `https://harish-chaudhary-hc.github.io`.

## Test checklist

- [ ] Email, LinkedIn, GitHub and Verify Certificate links open correctly
- [ ] Download Resume saves the PDF
- [ ] Light and dark theme toggle works and is remembered after refresh
- [ ] Mobile menu opens and closes after tapping a link
- [ ] Layout looks right on phone, tablet and desktop
