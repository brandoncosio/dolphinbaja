const body = document.body;
const menuBtn = document.querySelector("[data-menu-btn]");
const drawer = document.querySelector("[data-drawer]");
const overlay = document.querySelector("[data-overlay]");
const header = document.querySelector("[data-header]");

/* ===== MENU MÓVIL ===== */

function setMenu(open) {
  body.classList.toggle("is-menu-open", open);

  if (menuBtn) {
    menuBtn.setAttribute("aria-expanded", String(open));
    menuBtn.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
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

drawer?.addEventListener("click", (e) => {
  if (e.target.closest("a")) setMenu(false);
});

/* ===== HEADER SCROLL ===== */

window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    header.classList.add("is-scrolled");
  } else {
    header.classList.remove("is-scrolled");
  }
});

/* =========================
   Slider (slow, smooth animation)
   Changes image + text + dots
========================= */
const slides = Array.from(document.querySelectorAll("[data-slides] .slide"));
const dots = Array.from(document.querySelectorAll("[data-dots] .dot"));
const heroText = document.querySelector("[data-hero-text]");

const content = [
  {
    title: "MORE THAN DIVING,<br>AN UNFORGETTABLE EXPERIENCE",
    subtitle: "Every dive is designed to connect you with the ocean, nature, and the moment."
  },
  {
    title: "EXPLORE BAJA<br>FROM THE SEA",
    subtitle: "Guided tours and excursions to discover unique underwater landscapes with safety and personalized attention."
  },
  {
    title: "SNORKELING AND ADVENTURE<br>FOR EVERYONE",
    subtitle: "Experience the ocean with activities designed for beginners, families, and nature lovers."
  },
  {
    title: "GUIDED DIVES<br>WITH EXPERTS",
    subtitle: "Equipment, guidance, and support so you can enjoy every moment with confidence."
  },
  {
    title: "MEMORIES THAT<br>STAY WITH YOU",
    subtitle: "Real moments, crystal-clear water, and the thrill of an experience worth repeating."
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


const loader = document.getElementById("loader");
const progress = document.getElementById("loaderProgress");
const percent = document.getElementById("loaderPercent");
const loaderDotsEl = document.querySelector(".loader__text span"); // ✅ nombre nuevo

let value = 0;
let dotCount = 0;

const loaderInterval = setInterval(() => {
  value += Math.floor(Math.random() * 6) + 2;
  if (value >= 100) value = 100;

  progress.style.width = value + "%";
  percent.textContent = value;

  dotCount = (dotCount + 1) % 4;
  if (loaderDotsEl) {
    loaderDotsEl.textContent = ".".repeat(dotCount);
  }

  if (value === 100) {
    clearInterval(loaderInterval);

    setTimeout(() => {
      loader.style.opacity = "0";
      loader.style.pointerEvents = "none";
      loader.style.transition = "opacity 600ms ease";

      setTimeout(() => {
        loader.remove();
      }, 600);
    }, 400);
  }
}, 180);
