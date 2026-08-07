(function (global) {
  const Portfolio = (global.Portfolio = global.Portfolio || {});
  const { t, tList, openProjectModal } = Portfolio;

  function tagsHtml(tags = []) {
    return `<div class="tags">${tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>`;
  }

  function renderHero(profile, ui, lang) {
    const root = document.querySelector("[data-hero]");
    if (!root) return;

    root.innerHTML = `
      <div class="hero__grid">
        <div class="hero__content reveal">
          <p class="section__eyebrow">${t(ui.nav.about, lang)}</p>
          <h1 class="hero__name">${profile.name}</h1>
          <p class="hero__role">${t(profile.role, lang)}</p>
          <p class="hero__location">${t(profile.location, lang)}</p>
          <p class="hero__bio">${t(profile.bio, lang)}</p>
          <div class="hero__actions">
            <a class="btn btn--primary" href="${profile.cvFr}" download>
              <img class="btn__icon" src="assets/icons/download.svg" alt="" />
              ${t(ui.cvFr, lang)}
            </a>
            <a class="btn btn--ghost" href="${profile.cvEn}" download>
              <img class="btn__icon" src="assets/icons/download.svg" alt="" />
              ${t(ui.cvEn, lang)}
            </a>
          </div>
          <div class="social-links">
            <a class="social-link" href="${profile.linkedin}" target="_blank" rel="noopener noreferrer">
              <img src="assets/icons/linkedin.svg" alt="" />
              LinkedIn
            </a>
            <a class="social-link" href="${profile.github}" target="_blank" rel="noopener noreferrer">
              <img src="assets/icons/github.svg" alt="" />
              GitHub
            </a>
            <a class="social-link" href="mailto:${profile.email}">
              <img src="assets/icons/email.svg" alt="" />
              ${profile.email}
            </a>
          </div>
        </div>
        <div class="hero__media reveal">
          <div class="hero__photo-wrap">
            <img class="hero__photo" src="${profile.photo}" alt="${profile.name}" width="1000" height="1000" />
          </div>
        </div>
      </div>
    `;
  }

  function renderSkills(skills, ui, lang) {
    const root = document.querySelector("[data-skills]");
    if (!root) return;

    const domainTags = tList(skills.domains.items, lang)
      .map((item) => `<span class="tag">${item}</span>`)
      .join("");
    const hardTags = (skills.hard.items || [])
      .map((item) => `<span class="tag">${item}</span>`)
      .join("");
    const softTags = tList(skills.soft.items, lang)
      .map((item) => `<span class="tag">${item}</span>`)
      .join("");

    root.innerHTML = `
      <div class="section__header reveal">
        <p class="section__eyebrow">${t(ui.nav.skills, lang)}</p>
        <h2 class="section__title">${t(ui.nav.skills, lang)}</h2>
        <p class="section__lead">${t(skills.lead, lang)}</p>
      </div>
      <div class="skill-groups">
        <article class="skill-card reveal">
          <h3 class="skill-card__title">${t(skills.domains.title, lang)}</h3>
          <div class="tags">${domainTags}</div>
        </article>
        <article class="skill-card reveal">
          <h3 class="skill-card__title">${t(skills.hard.title, lang)}</h3>
          <div class="tags">${hardTags}</div>
        </article>
        <article class="skill-card reveal">
          <h3 class="skill-card__title">${t(skills.soft.title, lang)}</h3>
          <div class="tags">${softTags}</div>
        </article>
      </div>
    `;
  }

  function renderEducation(education, ui, lang) {
    const root = document.querySelector("[data-education]");
    if (!root) return;

    const items = (education.items || [])
      .map((item) => {
        const courses = (item.courses || [])
          .map(
            (course) => `
            <div class="course-item">
              <p class="course-item__title">${t(course.title, lang)}</p>
              <p class="course-item__desc">${t(course.description, lang)}</p>
              ${tagsHtml(course.tags)}
            </div>
          `
          )
          .join("");

        return `
          <article class="timeline-item reveal">
            <div class="timeline-item__meta">
              <span>${t(item.period, lang)}</span>
              <span>${t(item.location, lang)}</span>
            </div>
            <h3 class="timeline-item__title">${t(item.degree, lang)}</h3>
            <p class="timeline-item__subtitle">${t(item.school, lang)}</p>
            <p class="timeline-item__desc">${t(item.description, lang)}</p>
            <p class="section__eyebrow" style="margin-bottom:0.75rem">${t(ui.courses, lang)}</p>
            <div class="course-list">${courses}</div>
            ${tagsHtml(item.tags)}
          </article>
        `;
      })
      .join("");

    root.innerHTML = `
      <div class="section__header reveal">
        <p class="section__eyebrow">${t(ui.nav.education, lang)}</p>
        <h2 class="section__title">${t(ui.nav.education, lang)}</h2>
        <p class="section__lead">${t(education.lead, lang)}</p>
      </div>
      <div class="timeline">${items}</div>
    `;
  }

  function renderExperience(experience, ui, lang) {
    const root = document.querySelector("[data-experience]");
    if (!root) return;

    const items = (experience.items || [])
      .map((item) => {
        const missions = tList(item.missions, lang)
          .map((mission) => `<li>${mission}</li>`)
          .join("");

        return `
          <article class="timeline-item reveal">
            <div class="timeline-item__meta">
              <span>${t(item.period, lang)}</span>
              <span>${t(item.location, lang)}</span>
            </div>
            <h3 class="timeline-item__title">${t(item.role, lang)}</h3>
            <p class="timeline-item__subtitle">${item.company}</p>
            <p class="section__eyebrow" style="margin-bottom:0.75rem">${t(ui.missions, lang)}</p>
            <ul class="timeline-item__missions">${missions}</ul>
            ${tagsHtml(item.tags)}
          </article>
        `;
      })
      .join("");

    root.innerHTML = `
      <div class="section__header reveal">
        <p class="section__eyebrow">${t(ui.nav.experience, lang)}</p>
        <h2 class="section__title">${t(ui.nav.experience, lang)}</h2>
        <p class="section__lead">${t(experience.lead, lang)}</p>
      </div>
      <div class="timeline">${items}</div>
    `;
  }

  function renderCertifications(certifications, ui, lang) {
    const root = document.querySelector("[data-certifications]");
    if (!root) return;

    const items = (certifications.items || [])
      .map((item) => {
        const year = item.year ? ` · ${item.year}` : "";
        return `
          <article class="cert-item reveal">
            <h3 class="cert-item__title">${t(item.title, lang)}</h3>
            <p class="cert-item__meta">${t(item.issuer, lang)}${year}</p>
          </article>
        `;
      })
      .join("");

    root.innerHTML = `
      <div class="section__header reveal">
        <p class="section__eyebrow">${t(ui.nav.certifications, lang)}</p>
        <h2 class="section__title">${t(ui.nav.certifications, lang)}</h2>
        <p class="section__lead">${t(certifications.lead, lang)}</p>
      </div>
      <div class="cert-list">${items}</div>
    `;
  }

  function renderProjects(projects, ui, lang) {
    const root = document.querySelector("[data-projects]");
    if (!root) return;

    const cards = (projects.items || [])
      .map(
        (project, index) => `
        <button type="button" class="project-card reveal" data-project-index="${index}">
          <div class="project-card__media">
            <img src="${project.banner}" alt="" loading="lazy" />
          </div>
          <div class="project-card__body">
            <h3 class="project-card__title">${t(project.title, lang)}</h3>
            <p class="project-card__desc">${t(project.shortDescription, lang)}</p>
            ${tagsHtml(project.tags)}
            <span class="project-card__cta">${t(ui.openProject, lang)}</span>
          </div>
        </button>
      `
      )
      .join("");

    root.innerHTML = `
      <div class="section__header reveal">
        <p class="section__eyebrow">${t(ui.nav.projects, lang)}</p>
        <h2 class="section__title">${t(ui.nav.projects, lang)}</h2>
        <p class="section__lead">${t(projects.lead, lang)}</p>
      </div>
      <div class="project-grid">${cards}</div>
    `;

    root.querySelectorAll("[data-project-index]").forEach((card) => {
      card.addEventListener("click", () => {
        const index = Number(card.getAttribute("data-project-index"));
        const project = projects.items[index];
        if (project) openProjectModal(project, lang, ui);
      });
    });
  }

  function renderNav(ui, lang) {
    const list = document.querySelector("[data-nav-list]");
    if (!list) return;

    const entries = [
      ["#about", ui.nav.about],
      ["#skills", ui.nav.skills],
      ["#education", ui.nav.education],
      ["#experience", ui.nav.experience],
      ["#certifications", ui.nav.certifications],
      ["#projects", ui.nav.projects],
    ];

    list.innerHTML = entries
      .map(
        ([href, label]) => `
        <li><a class="nav__link" href="${href}">${t(label, lang)}</a></li>
      `
      )
      .join("");
  }

  function renderFooter(ui, lang) {
    const root = document.querySelector("[data-footer]");
    if (!root) return;
    const year = new Date().getFullYear();
    root.textContent = t(ui.footer, lang).replace("{year}", String(year));
  }

  function observeReveals() {
    const nodes = document.querySelectorAll(".reveal");
    if (!nodes.length) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      nodes.forEach((node) => node.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    nodes.forEach((node) => observer.observe(node));
  }

  function renderAll(data, lang) {
    const { ui, profile, skills, education, experience, certifications, projects, meta } =
      data;

    document.title = t(meta.title, lang);
    const description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute("content", t(meta.description, lang));

    renderNav(ui, lang);
    renderHero(profile, ui, lang);
    renderSkills(skills, ui, lang);
    renderEducation(education, ui, lang);
    renderExperience(experience, ui, lang);
    renderCertifications(certifications, ui, lang);
    renderProjects(projects, ui, lang);
    renderFooter(ui, lang);
    observeReveals();
  }

  Portfolio.renderAll = renderAll;
})(window);
