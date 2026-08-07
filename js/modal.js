(function (global) {
  const Portfolio = (global.Portfolio = global.Portfolio || {});
  const { t } = Portfolio;

  let modalEl;
  let contentEl;
  let closeBtn;
  let lastFocus = null;
  let onCloseCallback = null;

  function ensureModal() {
    if (modalEl) return;

    modalEl = document.createElement("div");
    modalEl.className = "modal";
    modalEl.setAttribute("role", "dialog");
    modalEl.setAttribute("aria-modal", "true");
    modalEl.innerHTML = `
      <div class="modal__backdrop" data-modal-close></div>
      <div class="modal__dialog" role="document">
        <button type="button" class="modal__close" data-modal-close aria-label="Close">×</button>
        <div class="modal__content"></div>
      </div>
    `;
    document.body.appendChild(modalEl);

    contentEl = modalEl.querySelector(".modal__content");
    closeBtn = modalEl.querySelector(".modal__close");

    modalEl.addEventListener("click", (event) => {
      if (event.target.matches("[data-modal-close]")) closeModal();
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && modalEl.classList.contains("is-open")) {
        closeModal();
      }
    });
  }

  function renderMedia(media = []) {
    if (!media.length) return "";
    const items = media
      .map((item) => {
        if (item.type === "video") {
          return `<video src="${item.src}" controls playsinline preload="metadata"></video>`;
        }
        return `<img src="${item.src}" alt="" loading="lazy" />`;
      })
      .join("");
    return `<div class="modal__gallery">${items}</div>`;
  }

  function openProjectModal(project, lang, ui) {
    ensureModal();
    lastFocus = document.activeElement;
    onCloseCallback = null;

    closeBtn.setAttribute("aria-label", t(ui.close, lang));
    modalEl.setAttribute("aria-label", t(project.title, lang));

    const sectionsHtml = (project.sections || [])
      .map(
        (section) => `
        <div>
          <h3 class="modal__section-title">${t(section.title, lang)}</h3>
          <p class="modal__section-text">${t(section.text, lang)}</p>
        </div>
      `
      )
      .join("");

    const tagsHtml = (project.tags || [])
      .map((tag) => `<span class="tag">${tag}</span>`)
      .join("");

    const linkHtml = project.link
      ? `<a class="modal__link" href="${project.link}" target="_blank" rel="noopener noreferrer">${project.link}</a>`
      : "";

    contentEl.innerHTML = `
      <h2 class="modal__title">${t(project.title, lang)}</h2>
      <div class="tags">${tagsHtml}</div>
      <p class="modal__desc">${t(project.shortDescription, lang)}</p>
      ${linkHtml}
      <div class="modal__sections">${sectionsHtml}</div>
      ${renderMedia(project.media)}
    `;

    modalEl.classList.add("is-open");
    document.body.classList.add("modal-open");
    closeBtn.focus();
  }

  function closeModal() {
    if (!modalEl) return;
    modalEl.classList.remove("is-open");
    document.body.classList.remove("modal-open");

    contentEl?.querySelectorAll("video").forEach((video) => {
      video.pause();
    });

    if (typeof onCloseCallback === "function") onCloseCallback();
    if (lastFocus && typeof lastFocus.focus === "function") lastFocus.focus();
  }

  Portfolio.openProjectModal = openProjectModal;
  Portfolio.closeModal = closeModal;
})(window);
