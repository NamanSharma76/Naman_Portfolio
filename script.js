// Get theme from localStorage
function getStoredTheme() {
  return localStorage.getItem("theme");
}

// Save selected theme to localStorage
function saveTheme(theme) {
  localStorage.setItem("theme", theme);
}

// Apply theme to body + icon
function applyTheme(theme) {
  document.body.setAttribute("data-theme", theme);
  const icon = document.querySelector("#themeToggle i");
  if (!icon) return;

  if (theme === "dark") {
    icon.classList.remove("uil-moon");
    icon.classList.add("uil-sun");
  } else {
    icon.classList.remove("uil-sun");
    icon.classList.add("uil-moon");
  }
}

// Toggle theme on click
function toggleTheme() {
  const current = document.body.getAttribute("data-theme") === "dark" ? "dark" : "light";
  const next = current === "dark" ? "light" : "dark";
  applyTheme(next);
  saveTheme(next);
}

// Init theme when page loads
document.addEventListener("DOMContentLoaded", () => {
  const stored = getStoredTheme();
  applyTheme(stored === "dark" || stored === "light" ? stored : "light");
});

// Theme switcher button click
document.addEventListener("click", (e) => {
  const btn = e.target.closest("#themeToggle");
  if (!btn) return;
  toggleTheme();
});

// Mobile nav toggle
function toggleMenu() {
  const menu = document.querySelector(".nav-menu");
  const icon = document.querySelector(".menu-toggle i");
  const toggleBtn = document.querySelector(".menu-toggle");

  if (!menu || !icon || !toggleBtn) return;

  const isOpen = menu.classList.toggle("open");
  icon.classList.toggle("uil-bars", !isOpen);
  icon.classList.toggle("uil-times", isOpen);
  toggleBtn.setAttribute("aria-expanded", String(isOpen));
}

// Handle mobile nav icon click
document.addEventListener("click", (e) => {
  const btn = e.target.closest(".menu-toggle");
  if (!btn) return;
  toggleMenu();
});

// Smooth scroll for nav links
document.addEventListener("click", (e) => {
  const link = e.target.closest('a[href^="#"]');
  if (!link) return;

  const href = link.getAttribute("href");
  if (!href || href === "#") return;

  const section = document.querySelector(href);
  if (!section) return;

  e.preventDefault();
  section.scrollIntoView({ behavior: "smooth", block: "start" });

  // Close nav if open (mobile)
  const menu = document.querySelector(".nav-menu");
  if (menu && menu.classList.contains("open")) {
    toggleMenu();
  }
});

// Highlight nav link on scroll
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section[id]");
  const scrollY = window.scrollY;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 110;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");

    const inView = scrollY >= sectionTop && scrollY < sectionTop + sectionHeight;
    const links = document.querySelectorAll('.nav-menu a[href="#' + sectionId + '"]');
    links.forEach((link) => {
      link.classList.toggle("active", inView);
    });
  });
});

// Typing effect for roles (Typed.js)
window.addEventListener("DOMContentLoaded", () => {
  if (typeof Typed !== "undefined") {
    new Typed(".typedText", {
      strings: [
        "Frontend Developer 💻",
        "JavaScript Enthusiast 🚀",
        "UI/UX Designer 🎨"
      ],
      typeSpeed: 80,
      backSpeed: 50,
      backDelay: 2000,
      loop: true
    });
  }
});
