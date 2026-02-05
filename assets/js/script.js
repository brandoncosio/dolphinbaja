/* =========================
   Menu (hamburguesa PNG -> X RemixIcon) + Drawer
========================= */
const body = document.body;
const menuBtn = document.querySelector("[data-menu-btn]");
const drawer = document.querySelector("[data-drawer]");
const overlay = document.querySelector("[data-overlay]");

function setMenu(open) {
  body.classList.toggle("is-menu-open", open);

  if (menuBtn) {
    menuBtn.setAttribute("aria-expanded", String(open));
    menuBtn.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");

    // Cuando abre, asegura visibilidad y foco (útil en móvil)
    if (open) menuBtn.focus({ preventScroll: true });
  }

  if (drawer) drawer.setAttribute("aria-hidden", String(!open));
}

menuBtn?.addEventListener("click", () => {
  const isOpen = body.classList.contains("is-menu-open");
  setMenu(!isOpen);
});

overlay?.addEventListener("click", () => setMenu(false));

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") setMenu(false);
});

// Cierra al dar click en cualquier link del drawer (mejor UX móvil)
drawer?.addEventListener("click", (e) => {
  const target = e.target;
  if (target && target.closest && target.closest("a")) setMenu(false);
});

/* =========================
   Slider (lento, animación suave)
   Cambia imagen + texto + dots
========================= */
const slides = Array.from(document.querySelectorAll("[data-slides] .slide"));
const dots = Array.from(document.querySelectorAll("[data-dots] .dot"));
const heroText = document.querySelector("[data-hero-text]");

const content = [
  {
    title: "MÁS QUE BUCEO,<br>UNA EXPERIENCIA INOLVIDABLE",
    subtitle: "Cada inmersión está diseñada para conectar con el mar, la naturaleza y el momento."
  },
  {
    title: "EXPLORA BAJA<br>DESDE EL MAR",
    subtitle: "Tours y salidas guiadas para descubrir paisajes submarinos únicos con seguridad y atención personalizada."
  },
  {
    title: "SNORKEL Y AVENTURA<br>PARA TODOS",
    subtitle: "Vive el océano con experiencias pensadas para principiantes, familias y amantes de la naturaleza."
  },
  {
    title: "INMERSIONES GUIADAS<br>CON EXPERTOS",
    subtitle: "Equipo, guía y acompañamiento para que disfrutes cada momento con confianza."
  },
  {
    title: "RECUERDOS QUE<br>SE QUEDAN CONTIGO",
    subtitle: "Momentos reales, agua cristalina y la emoción de una experiencia que vale la pena repetir."
  }
];

let index = 0;
let timer = null;
const INTERVAL = 4500; // lento y agradable

function renderText(i) {
  if (!heroText) return;

  heroText.classList.add("is-animating");

  // Espera un poco para que se note la salida, luego cambia y entra
  window.setTimeout(() => {
    const h1 = heroText.querySelector(".hero__title");
    const p = heroText.querySelector(".hero__subtitle");

    if (h1) h1.innerHTML = content[i]?.title ?? "";
    if (p) p.textContent = content[i]?.subtitle ?? "";

    heroText.classList.remove("is-animating");
  }, 320);
}

function goTo(i) {
  if (!slides.length) return;

  index = (i + slides.length) % slides.length;

  slides.forEach((s, si) => s.classList.toggle("is-active", si === index));
  dots.forEach((d, di) => d.classList.toggle("is-active", di === index));

  renderText(index);
}

function next() {
  goTo(index + 1);
}

function start() {
  stop();
  timer = window.setInterval(next, INTERVAL);
}

function stop() {
  if (timer) window.clearInterval(timer);
  timer = null;
}

// Dots click
dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    goTo(i);
    start();
  });
});

// Pausa slider cuando el menú está abierto (evita distracción)
const observer = new MutationObserver(() => {
  const open = body.classList.contains("is-menu-open");
  if (open) stop();
  else start();
});
observer.observe(body, { attributes: true, attributeFilter: ["class"] });

// Init
goTo(0);
start();


// =========================
// PRELOADER (min 3s) + fade out
// =========================
document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("ddLoader");
  if (!loader) return;

  const MIN_TIME = 3000; // ⬅️ antes 2000, ahora 3s
  const start = performance.now();

  const hideLoader = () => {
    const elapsed = performance.now() - start;
    const wait = Math.max(0, MIN_TIME - elapsed);

    setTimeout(() => {
      loader.classList.add("is-hidden");
      setTimeout(() => loader.remove(), 700);
    }, wait);
  };

  window.addEventListener("load", hideLoader, { once: true });

  // fallback
  setTimeout(() => {
    if (document.readyState === "complete") hideLoader();
  }, MIN_TIME + 800);
});
