(function (global) {
  const Portfolio = (global.Portfolio = global.Portfolio || {});
  const LANG_KEY = "portfolio-lang";

  function detectLang() {
    const saved = localStorage.getItem(LANG_KEY);
    if (saved === "fr" || saved === "en") return saved;
    return navigator.language?.toLowerCase().startsWith("fr") ? "fr" : "en";
  }

  function setLang(lang) {
    localStorage.setItem(LANG_KEY, lang);
    document.documentElement.lang = lang;
  }

  function t(value, lang) {
    if (value == null) return "";
    if (typeof value === "string") return value;
    if (typeof value === "object") {
      return value[lang] ?? value.fr ?? value.en ?? "";
    }
    return String(value);
  }

  function tList(value, lang) {
    if (!value) return [];
    if (Array.isArray(value)) {
      return value.map((item) => t(item, lang));
    }
    if (typeof value === "object" && (value.fr || value.en)) {
      const list = value[lang] ?? value.fr ?? value.en ?? [];
      return Array.isArray(list) ? list : [];
    }
    return [];
  }

  Portfolio.detectLang = detectLang;
  Portfolio.setLang = setLang;
  Portfolio.t = t;
  Portfolio.tList = tList;
})(window);
