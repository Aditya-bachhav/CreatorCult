/* ============================================
   CREATORCULT MEDIA — JAVASCRIPT
   ============================================ */

(function () {
  "use strict";

  /* ---------- NAVBAR SCROLL EFFECT ---------- */
  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  /* ---------- MOBILE MENU ---------- */
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");
  const closeBtn = document.getElementById("closeMenu");

  hamburger.addEventListener("click", () => {
    mobileMenu.classList.add("open");
    document.body.style.overflow = "hidden";
  });

  closeBtn.addEventListener("click", closeMobileMenu);

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMobileMenu);
  });

  function closeMobileMenu() {
    mobileMenu.classList.remove("open");
    document.body.style.overflow = "";
  }

  /* ---------- HERO SLIDER ---------- */
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".slider-dots button");
  let current = 0;
  let sliderTimer;

  function goToSlide(idx) {
    slides[current].classList.remove("active");
    dots[current].classList.remove("active");
    current = (idx + slides.length) % slides.length;
    slides[current].classList.add("active");
    dots[current].classList.add("active");
  }

  function nextSlide() {
    goToSlide(current + 1);
  }

  function startAutoplay() {
    sliderTimer = setInterval(nextSlide, 5000);
  }

  function resetAutoplay() {
    clearInterval(sliderTimer);
    startAutoplay();
  }

  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      goToSlide(i);
      resetAutoplay();
    });
  });

  // Initialize first slide
  slides[0].classList.add("active");
  dots[0].classList.add("active");
  startAutoplay();

  /* ---------- SCROLL REVEAL ---------- */
  const revealEls = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealEls.forEach((el) => observer.observe(el));

  /* ---------- SMOOTH ANCHOR SCROLL (offset for fixed nav) ---------- */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        e.preventDefault();
        const offset = navbar.offsetHeight + 8;
        const top =
          target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: "smooth" });
      }
    });
  });

  /* ---------- TEAM TICKER DUPLICATE (infinite scroll) ---------- */
  // The ticker items are already duplicated in HTML; this just ensures
  // the animation looks seamless by confirming the duplicate set is present.
  const ticker = document.querySelector(".team-ticker");
  if (ticker) {
    // Pause on hover
    ticker.addEventListener("mouseenter", () => {
      ticker.style.animationPlayState = "paused";
    });
    ticker.addEventListener("mouseleave", () => {
      ticker.style.animationPlayState = "running";
    });
  }
})();