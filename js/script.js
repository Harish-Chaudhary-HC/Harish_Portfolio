/*
  script.js – content data + behaviour for the portfolio.
  To update the site, edit only the CONFIG and DATA objects below.
*/

const CONFIG = {
  SHOW_PHONE: false // set to true to show your phone number in the Contact section
};

const DATA = {
  name: "Harish Chaudhary",
  headline: "Aspiring Software Developer | Python & MySQL | AI Projects",
  intro: "CITS trainee at NSTI Kanpur, building AI-based tools with Python and MySQL.",
  location: "Kanpur, Uttar Pradesh, India",
  email: "harishbasti93@gmail.com",
  phone: "8175882554",
  linkedin: "https://www.linkedin.com/in/harish-chaudhary-hc",
  github: "https://github.com/Harish-Chaudhary-HC",
  about: "I am a CITS trainee in Computer Software Application (CSA) at NSTI Kanpur. I am learning software development and enjoy working with Python and databases. I am interested in AI-powered tools that help students learn. I have built two AI-based projects and I am looking for chances to learn and grow as a developer.",

  // Newest first
  education: [
    { title: "CITS Trainee (Trade: CSA)", place: "NSTI Kanpur", period: "Session 2026–27", current: true },
    { title: "ITI", place: "Chaitanya Bharat Pvt. ITI, Sant Kabir Nagar", period: "Passing year 2026" },
    { title: "Senior Secondary (Class 12)", place: "Jawahar Navodaya Vidyalaya (JNV), Basti", period: "2024 · 71%" },
    { title: "Secondary (Class 10)", place: "Jawahar Navodaya Vidyalaya (JNV), Basti", period: "2022 · 78%" }
  ],

  skills: [
    { group: "Programming & Tools", items: ["Python", "MySQL", "MySQL Workbench", "VS Code"] },
    { group: "Computer Fundamentals", items: ["Computer Fundamentals", "MS Office (Word, Excel, PowerPoint)", "Internet & Email"] },
    { group: "Soft Skills", items: ["Communication", "Problem Solving", "Teamwork"] }
  ],

  // Leave githubLink / demoLink empty ("") to hide those buttons.
  // Leave image empty ("") or missing to show the gradient placeholder.
  projects: [
    {
      name: "AI-Based Study & Doubt Solver Assistant",
      description: "An AI-based assistant designed to solve doubts of NSTI trainees. Students can type their question in Hindi or English, and the AI explains the solution step-by-step with examples and practice questions. It reduces dependency on instructors in the lab and helps in self-learning.",
      tech: ["Python", "MySQL", "VS Code", "Meta AI / LLM API", "Node.js"],
      contribution: "Project ideation, coding in Python, AI prompt designing, creating the Q&A database in MySQL, and testing.",
      image: "assets/images/project1.jpg", emoji: "🤖", githubLink: "", demoLink: ""
    },
    {
      name: "AI-Based SQL Query Generator (Text to SQL)",
      description: "An AI tool that converts normal English / Hindi sentences into MySQL queries. For example, if a user types \"Show names of all students with marks more than 80\", it automatically generates the correct SELECT query. It makes learning SQL and solving database problems easy for beginners.",
      tech: ["Python", "MySQL", "MySQL Workbench", "VS Code", "AI API"],
      contribution: "Database design, AI integration in Python, query testing, and verifying results in MySQL Workbench.",
      image: "assets/images/project2.jpg", emoji: "🗄️", githubLink: "", demoLink: ""
    }
  ],

  certifications: [
    {
      name: "AI Literacy", issuer: "IBM SkillsBuild", year: "2026",
      image: "assets/images/ai-literacy-certificate.png",
      verifyLink: "https://www.credly.com/badges/bcf57640-bd39-4486-a1c5-c9551d217754/public_url",
      fileLink: "assets/documents/ai-literacy-certificate.pdf"
    }
  ]
};

/* ---------- Helpers ---------- */
const $ = (id) => document.getElementById(id);
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const chips = (list, cls = "") => `<ul class="chips">${list.map((t) => `<li class="chip ${cls}">${esc(t)}</li>`).join("")}</ul>`;
const ext = 'target="_blank" rel="noopener noreferrer"';
document.documentElement.classList.add("js");

/* Hide a section (and its nav link) when it has no data */
function hideSection(id) {
  $(id).hidden = true;
  const link = document.querySelector(`.nav-links a[href="#${id}"]`);
  if (link) link.parentElement.hidden = true;
}

/* ---------- Render content ---------- */
function render() {
  $("hero-name").textContent = DATA.name;
  $("hero-headline").textContent = DATA.headline;
  $("hero-intro").textContent = DATA.intro;
  $("year").textContent = new Date().getFullYear();

  const gh = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.69 1.25 3.34.96.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.7 5.4-5.27 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z"/></svg>';
  const li = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/></svg>';
  $("hero-social").innerHTML =
    `<a href="${DATA.github}" ${ext} aria-label="GitHub profile">${gh}</a>` +
    `<a href="${DATA.linkedin}" ${ext} aria-label="LinkedIn profile">${li}</a>`;

  // About
  DATA.about ? ($("about-text").textContent = DATA.about) : hideSection("about");

  // Education
  if (DATA.education.length) {
    $("education-list").innerHTML = DATA.education.map((e) =>
      `<li><h3>${esc(e.title)}${e.current ? '<span class="badge">Current</span>' : ""}</h3>
       <p class="meta">${esc(e.place)}</p><p class="meta">${esc(e.period)}</p></li>`).join("");
  } else hideSection("education");

  // Skills
  if (DATA.skills.length) {
    $("skills-list").innerHTML = DATA.skills.map((g) => `<div><h3>${esc(g.group)}</h3>${chips(g.items)}</div>`).join("");
  } else hideSection("skills");

  // Projects
  if (DATA.projects.length) {
    $("projects-list").innerHTML = DATA.projects.map((p) => {
      const media = p.image
        ? `<img src="${esc(p.image)}" alt="${esc(p.name)} preview" loading="lazy" onerror="this.parentElement.textContent='${p.emoji || "💻"}'">`
        : (p.emoji || "💻");
      const buttons = (p.githubLink ? `<a class="btn" href="${esc(p.githubLink)}" ${ext}>GitHub</a>` : "") +
                      (p.demoLink ? `<a class="btn" href="${esc(p.demoLink)}" ${ext}>Live Demo</a>` : "");
      return `<article class="card"><div class="card-media" aria-hidden="false">${media}</div>
        <div class="card-body"><h3>${esc(p.name)}</h3><p>${esc(p.description)}</p>${chips(p.tech, "small")}
        <p class="contrib"><strong>My contribution:</strong> ${esc(p.contribution)}</p>
        ${buttons ? `<div class="btn-row">${buttons}</div>` : ""}</div></article>`;
    }).join("");
  } else hideSection("projects");

  // Certifications
  if (DATA.certifications.length) {
    $("cert-list").innerHTML = DATA.certifications.map((c) =>
      `<article class="card cert-card">
        ${c.image ? `<div class="card-media"><img src="${esc(c.image)}" alt="${esc(c.name)} certificate from ${esc(c.issuer)}" loading="lazy"></div>` : ""}
        <div class="card-body"><h3>${esc(c.name)}</h3><p>${esc(c.issuer)} · ${esc(c.year)}</p>
        <div class="btn-row">
          ${c.verifyLink ? `<a class="btn primary" href="${esc(c.verifyLink)}" ${ext}>Verify Certificate</a>` : ""}
          ${c.fileLink ? `<a class="btn" href="${esc(c.fileLink)}" ${ext}>View PDF</a>` : ""}
        </div></div></article>`).join("");
  } else hideSection("certifications");

  // Contact
  const rows = [
    ["Email", `<a href="mailto:${esc(DATA.email)}">${esc(DATA.email)}</a>`],
    ["LinkedIn", `<a href="${esc(DATA.linkedin)}" ${ext}>linkedin.com/in/harish-chaudhary-hc</a>`],
    ["GitHub", `<a href="${esc(DATA.github)}" ${ext}>github.com/Harish-Chaudhary-HC</a>`],
    ["Location", esc(DATA.location)]
  ];
  if (CONFIG.SHOW_PHONE && DATA.phone) rows.splice(1, 0, ["Phone", `<a href="tel:+91${esc(DATA.phone)}">${esc(DATA.phone)}</a>`]);
  $("contact-list").innerHTML = rows.map(([k, v]) => `<li><strong>${k}</strong><span>${v}</span></li>`).join("");
}

/* ---------- Theme toggle (remembers choice) ---------- */
function setupTheme() {
  const btn = $("theme-toggle");
  let saved = null;
  try { saved = localStorage.getItem("theme"); } catch (e) {}
  const theme = saved || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  const apply = (t) => { document.documentElement.dataset.theme = t; btn.textContent = t === "dark" ? "☀️" : "🌙"; };
  apply(theme);
  btn.addEventListener("click", () => {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    apply(next);
    try { localStorage.setItem("theme", next); } catch (e) {}
  });
}

/* ---------- Mobile menu ---------- */
function setupMenu() {
  const menu = $("nav-links"), btn = $("menu-toggle");
  const close = () => { menu.classList.remove("open"); btn.setAttribute("aria-expanded", "false"); };
  btn.addEventListener("click", () => {
    const open = menu.classList.toggle("open");
    btn.setAttribute("aria-expanded", String(open));
  });
  menu.addEventListener("click", (e) => { if (e.target.tagName === "A") close(); });
}

/* ---------- Active link, reveal, back-to-top ---------- */
function setupScroll() {
  const links = [...document.querySelectorAll(".nav-links a")];
  const sections = [...document.querySelectorAll("main section")].filter((s) => !s.hidden);
  const spy = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) links.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + en.target.id));
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  sections.forEach((s) => spy.observe(s));

  const reveal = new IntersectionObserver((entries) => {
    entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("visible"); reveal.unobserve(en.target); } });
  }, { threshold: 0.1 });
  document.querySelectorAll(".reveal").forEach((el) => reveal.observe(el));

  const top = $("to-top");
  addEventListener("scroll", () => { top.hidden = scrollY < 600; }, { passive: true });
  top.addEventListener("click", () => scrollTo({ top: 0, behavior: "smooth" }));
}

render();
setupTheme();
setupMenu();
setupScroll();
