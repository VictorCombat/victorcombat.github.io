(function () {
  const root = document.querySelector("[data-site-bg]");
  if (!root) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const svgNS = "http://www.w3.org/2000/svg";

  const GRADIENTS = [
    {
      id: "hex-grad-idle",
      stops: [
        { offset: "0%", color: "#5b2fd6", opacity: "0.55" },
        { offset: "100%", color: "#1a1620", opacity: "0.15" },
      ],
    },
    {
      id: "hex-grad-a",
      stops: [
        { offset: "0%", color: "#c4b5fd", opacity: "0.9" },
        { offset: "55%", color: "#7c4dff", opacity: "0.55" },
        { offset: "100%", color: "#2a2234", opacity: "0.1" },
      ],
    },
    {
      id: "hex-grad-b",
      stops: [
        { offset: "0%", color: "#a78bfa", opacity: "0.85" },
        { offset: "50%", color: "#5b2fd6", opacity: "0.5" },
        { offset: "100%", color: "#121014", opacity: "0.05" },
      ],
    },
    {
      id: "hex-grad-c",
      stops: [
        { offset: "0%", color: "#ddd6fe", opacity: "0.75" },
        { offset: "40%", color: "#8b5cf6", opacity: "0.6" },
        { offset: "100%", color: "#3b0764", opacity: "0.2" },
      ],
    },
    {
      id: "hex-grad-d",
      stops: [
        { offset: "0%", color: "#7c4dff", opacity: "0.95" },
        { offset: "60%", color: "#4c1d95", opacity: "0.45" },
        { offset: "100%", color: "#0e0c10", opacity: "0.08" },
      ],
    },
  ];

  const ACTIVE_GRAD_IDS = GRADIENTS.slice(1).map((g) => g.id);

  let hexes = [];
  let pulseTimer = null;
  let flashTimer = null;

  function hexPoints(cx, cy, size) {
    const points = [];
    for (let i = 0; i < 6; i += 1) {
      const angle = (Math.PI / 180) * 60 * i - Math.PI / 6;
      points.push([cx + size * Math.cos(angle), cy + size * Math.sin(angle)]);
    }
    return points;
  }

  function pointsAttr(points) {
    return points.map((p) => `${p[0].toFixed(2)},${p[1].toFixed(2)}`).join(" ");
  }

  function rand(min, max) {
    return min + Math.random() * (max - min);
  }

  function pick(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function createGradients(defs) {
    GRADIENTS.forEach((grad, index) => {
      const el = document.createElementNS(svgNS, "radialGradient");
      el.setAttribute("id", grad.id);
      el.setAttribute("cx", "35%");
      el.setAttribute("cy", "30%");
      el.setAttribute("r", "75%");
      // Slightly vary gradient centers so the field feels less uniform
      if (index > 0) {
        el.setAttribute("cx", `${30 + (index * 12) % 40}%`);
        el.setAttribute("cy", `${25 + (index * 17) % 45}%`);
      }
      grad.stops.forEach((stop) => {
        const s = document.createElementNS(svgNS, "stop");
        s.setAttribute("offset", stop.offset);
        s.setAttribute("stop-color", stop.color);
        s.setAttribute("stop-opacity", stop.opacity);
        el.appendChild(s);
      });
      defs.appendChild(el);
    });
  }

  function setGradient(hex, gradId) {
    hex.setAttribute("fill", `url(#${gradId})`);
  }

  function clearTimers() {
    if (pulseTimer) clearInterval(pulseTimer);
    if (flashTimer) clearInterval(flashTimer);
    pulseTimer = null;
    flashTimer = null;
  }

  function assignPulseSubset() {
    if (!hexes.length || reduceMotion) return;

    hexes.forEach((hex) => {
      hex.classList.remove("site-bg__hex--pulse", "site-bg__hex--flash");
      setGradient(hex, "hex-grad-idle");
      hex.style.removeProperty("--hex-dur");
      hex.style.removeProperty("--hex-delay");
    });

    const count = Math.max(8, Math.floor(hexes.length * 0.18));
    const chosen = new Set();
    while (chosen.size < count) {
      chosen.add(Math.floor(Math.random() * hexes.length));
    }

    chosen.forEach((index) => {
      const hex = hexes[index];
      setGradient(hex, pick(ACTIVE_GRAD_IDS));
      hex.style.setProperty("--hex-dur", `${rand(3.5, 7.5).toFixed(2)}s`);
      hex.style.setProperty("--hex-delay", `${rand(0, 5).toFixed(2)}s`);
      hex.classList.add("site-bg__hex--pulse");
    });
  }

  function flashRandomHexes() {
    if (!hexes.length || reduceMotion) return;

    const count = Math.max(3, Math.floor(hexes.length * 0.04));
    for (let i = 0; i < count; i += 1) {
      const hex = pick(hexes);
      if (hex.classList.contains("site-bg__hex--flash")) continue;

      const prevFill = hex.getAttribute("fill");
      const wasPulse = hex.classList.contains("site-bg__hex--pulse");

      setGradient(hex, pick(ACTIVE_GRAD_IDS));
      hex.style.setProperty("--hex-dur", `${rand(2.2, 3.6).toFixed(2)}s`);
      hex.style.setProperty("--hex-delay", "0s");
      hex.classList.remove("site-bg__hex--pulse");
      hex.classList.add("site-bg__hex--flash");

      const onEnd = () => {
        hex.classList.remove("site-bg__hex--flash");
        hex.removeEventListener("animationend", onEnd);
        if (wasPulse) {
          setGradient(hex, pick(ACTIVE_GRAD_IDS));
          hex.style.setProperty("--hex-dur", `${rand(3.5, 7.5).toFixed(2)}s`);
          hex.style.setProperty("--hex-delay", `${rand(0, 2).toFixed(2)}s`);
          hex.classList.add("site-bg__hex--pulse");
        } else {
          hex.setAttribute("fill", prevFill || "url(#hex-grad-idle)");
        }
      };
      hex.addEventListener("animationend", onEnd);
    }
  }

  function build() {
    clearTimers();

    const width = window.innerWidth;
    const height = window.innerHeight;
    const size = width < 700 ? 34 : width < 1100 ? 42 : 48;
    const hexH = Math.sqrt(3) * size;
    const colStep = size * 1.5;
    const rowStep = hexH;

    root.innerHTML = "";
    hexes = [];

    const glow = document.createElement("div");
    glow.className = "site-bg__glow";
    root.appendChild(glow);

    const svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("class", "site-bg__canvas");
    svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
    svg.setAttribute("preserveAspectRatio", "xMidYMid slice");
    svg.setAttribute("aria-hidden", "true");

    const defs = document.createElementNS(svgNS, "defs");
    createGradients(defs);
    svg.appendChild(defs);

    const cols = Math.ceil(width / colStep) + 2;
    const rows = Math.ceil(height / rowStep) + 2;

    for (let row = -1; row < rows; row += 1) {
      for (let col = -1; col < cols; col += 1) {
        const cx = col * colStep + size;
        const cy = row * rowStep + hexH / 2 + ((col % 2) * hexH) / 2;
        const pts = hexPoints(cx, cy, size);

        const polygon = document.createElementNS(svgNS, "polygon");
        polygon.setAttribute("class", "site-bg__hex");
        polygon.setAttribute("points", pointsAttr(pts));
        setGradient(polygon, "hex-grad-idle");
        svg.appendChild(polygon);
        hexes.push(polygon);
      }
    }

    root.appendChild(svg);

    if (!reduceMotion) {
      assignPulseSubset();
      pulseTimer = setInterval(assignPulseSubset, 9000);
      flashTimer = setInterval(flashRandomHexes, 1600);
    }
  }

  let resizeTimer;
  function onResize() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(build, 180);
  }

  build();
  window.addEventListener("resize", onResize, { passive: true });
})();
