(function (global) {
  const Portfolio = global.Portfolio;
  const { detectLang, setLang, renderAll } = Portfolio;

  async function loadContent() {
    const response = await fetch("data/content.json", { cache: "no-cache" });
    if (!response.ok) {
      throw new Error(`Failed to load content.json (${response.status})`);
    }
    return response.json();
  }

  function updateLangButtons(currentLang) {
    document.querySelectorAll("[data-lang]").forEach((btn) => {
      const lang = btn.getAttribute("data-lang");
      const active = lang === currentLang;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    });
  }

  function setupLangSwitch(onChange) {
    const group = document.querySelector(".lang-switch");
    if (!group || group.dataset.bound === "true") return;
    group.dataset.bound = "true";

    group.addEventListener("click", (event) => {
      const btn = event.target.closest("[data-lang]");
      if (!btn) return;
      const lang = btn.getAttribute("data-lang");
      if (lang) onChange(lang);
    });
  }

  function setupMobileNav() {
    const toggle = document.querySelector("[data-nav-toggle]");
    const nav = document.querySelector("[data-nav]");
    if (!toggle || !nav || toggle.dataset.bound === "true") return;
    toggle.dataset.bound = "true";

    const close = () => {
      toggle.classList.remove("is-open");
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    };

    toggle.addEventListener("click", () => {
      const open = !nav.classList.contains("is-open");
      toggle.classList.toggle("is-open", open);
      nav.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    nav.addEventListener("click", (event) => {
      if (event.target.closest("a")) close();
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 900) close();
    });
  }

  function setupActiveNav() {
    if (window.__portfolioNavBound) return;
    window.__portfolioNavBound = true;

    const sync = () => {
      const sections = [...document.querySelectorAll("main section[id]")];
      const links = document.querySelectorAll(".nav__link");
      const scrollPos = window.scrollY + 120;
      let currentId = sections[0]?.id;

      for (const section of sections) {
        if (section.offsetTop <= scrollPos) currentId = section.id;
      }

      links.forEach((link) => {
        const href = link.getAttribute("href");
        link.classList.toggle("is-active", href === `#${currentId}`);
      });
    };

    window.addEventListener("scroll", sync, { passive: true });
    sync();
  }

  async function boot() {
    const appError = document.querySelector("[data-app-error]");
    try {
      const data = await loadContent();
      let lang = detectLang();

      const render = (nextLang) => {
        lang = nextLang;
        setLang(lang);
        renderAll(data, lang);
        updateLangButtons(lang);
      };

      setupLangSwitch((nextLang) => {
        if (nextLang !== lang) render(nextLang);
      });
      setupMobileNav();
      setupActiveNav();
      render(lang);
    } catch (error) {
      console.error(error);
      if (appError) {
        appError.hidden = false;
        appError.textContent =
          "Impossible de charger le contenu du portfolio. Vérifiez data/content.json.";
      }
    }
  }

  boot();
})(window);
