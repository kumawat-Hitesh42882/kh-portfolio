/* =========================================================
   KH PORTFOLIO
   INTERACTIONS & ANIMATIONS
========================================================= */


/* =========================
   CUSTOM CURSOR
========================= */

const cursor = document.querySelector(".cursor");
const follower = document.querySelector(".cursor-follower");

if (cursor && follower && window.innerWidth > 900) {

  let mouseX = 0;
  let mouseY = 0;

  let followerX = 0;
  let followerY = 0;

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    cursor.style.left = mouseX + "px";
    cursor.style.top = mouseY + "px";
  });

  function animateCursor() {

    followerX += (mouseX - followerX) * 0.12;
    followerY += (mouseY - followerY) * 0.12;

    follower.style.left = followerX + "px";
    follower.style.top = followerY + "px";

    requestAnimationFrame(animateCursor);
  }

  animateCursor();


  const clickableElements = document.querySelectorAll(
    "a, button, .skill-card, .project-card"
  );

  clickableElements.forEach((element) => {

    element.addEventListener("mouseenter", () => {
      follower.style.width = "48px";
      follower.style.height = "48px";
      follower.style.borderColor = "#00ff88";
    });

    element.addEventListener("mouseleave", () => {
      follower.style.width = "32px";
      follower.style.height = "32px";
      follower.style.borderColor = "rgba(0,255,136,.45)";
    });

  });
}


/* =========================
   SCROLL REVEAL
========================= */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {

        entry.target.classList.add("active");

        revealObserver.unobserve(entry.target);

      }

    });

  },
  {
    threshold: 0.12
  }
);

revealElements.forEach((element) => {
  revealObserver.observe(element);
});


/* =========================
   COUNTER ANIMATION
========================= */

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver(
  (entries) => {

    entries.forEach((entry) => {

      if (!entry.isIntersecting) return;

      const counter = entry.target;
      const target = Number(counter.dataset.target);

      let current = 0;

      const duration = 1200;
      const stepTime = 25;
      const steps = duration / stepTime;
      const increment = target / steps;

      const updateCounter = () => {

        current += increment;

        if (current >= target) {
          counter.textContent = target;
          return;
        }

        counter.textContent = Math.floor(current);

        setTimeout(updateCounter, stepTime);
      };

      updateCounter();

      counterObserver.unobserve(counter);
    });

  },
  {
    threshold: 0.5
  }
);

counters.forEach((counter) => {
  counterObserver.observe(counter);
});


/* =========================
   MOBILE MENU
========================= */

const menuButton = document.querySelector(".menu-btn");
const nav = document.querySelector(".navbar nav");

if (menuButton && nav) {

  menuButton.addEventListener("click", () => {

    nav.classList.toggle("mobile-open");

  });

}


/* =========================
   TERMINAL TYPING EFFECT
========================= */

const terminalLines = [
  "Scanning attack surface...",
  "Analyzing security posture...",
  "Threat intelligence synchronized...",
  "Security protocols active.",
  "SYSTEM READY."
];

let lineIndex = 0;


/* =========================
   RANDOM SECURITY STATUS
========================= */

const threatStatus = document.querySelector(".card-one strong");

if (threatStatus) {

  const statuses = [
    "LOW",
    "MONITORED",
    "SECURE",
    "STABLE"
  ];

  let index = 0;

  setInterval(() => {

    index = (index + 1) % statuses.length;

    threatStatus.style.opacity = "0";

    setTimeout(() => {

      threatStatus.textContent = statuses[index];
      threatStatus.style.opacity = "1";

    }, 200);

  }, 3000);

}


/* =========================
   SMOOTH NAVIGATION
========================= */

document.querySelectorAll('a[href^="#"]').forEach((link) => {

  link.addEventListener("click", function(e) {

    const targetId = this.getAttribute("href");

    if (targetId === "#") return;

    const target = document.querySelector(targetId);

    if (!target) return;

    e.preventDefault();

    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

  });

});


/* =========================
   PROJECT CARD GLOW
========================= */

document.querySelectorAll(".project-card").forEach((card) => {

  card.addEventListener("mousemove", (e) => {

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.background = `
      radial-gradient(
        400px circle at ${x}px ${y}px,
        rgba(0,255,136,.035),
        transparent 45%
      )
    `;

  });

  card.addEventListener("mouseleave", () => {

    card.style.background = "";

  });

});


/* =========================
   CONSOLE MESSAGE
========================= */

console.log(
  "%c KH PORTFOLIO ",
  "background:#00ff88;color:#000;font-weight:bold;padding:8px;"
);

console.log(
  "%c THINK. SECURE. CREATE. ",
  "color:#00ff88;font-weight:bold;"
);

console.log(
  "%c Welcome to the system.",
  "color:#89929a;"
);