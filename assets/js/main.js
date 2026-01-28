
// Hero Section
// Loader
window.addEventListener("load", () => {
    document.querySelector(".loader").style.display = "none";
  });
  
  // Mobile Menu
  // function toggleMenu() {
  //   const menu = document.getElementById("mobileMenu");
  //   menu.style.transform =
  //     menu.style.transform === "translateY(0%)"
  //       ? "translateY(-100%)"
  //       : "translateY(0%)";
  // }

  function toggleMenu() {
    const menu = document.getElementById("mobileMenu");
    const btn = document.getElementById("menuBtn");
  
    const isOpen = menu.style.transform === "translateY(0%)";
  
    if (isOpen) {
      menu.style.transform = "translateY(-100%)";
      btn.innerHTML = "☰";
    } else {
      menu.style.transform = "translateY(0%)";
      btn.innerHTML = "✕";
    }
  }

  
// header (navbar)
let prevScrollPos = window.pageYOffset;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  const currentScrollPos = window.pageYOffset;

  // Show navbar on scroll up
  if (prevScrollPos > currentScrollPos) {
    navbar.style.top = "0";

    // Add background ONLY when not at top
    if (currentScrollPos > 50) {
      navbar.classList.add("nav-scrolled");
    } else {
      navbar.classList.remove("nav-scrolled");
    }

  } else {
    // Hide navbar on scroll down
    navbar.style.top = "-120px";
    navbar.classList.remove("nav-scrolled");
  }

  prevScrollPos = currentScrollPos;
});

// lets talk 
function toggleTalk() {
    document.getElementById("talkPanel").classList.toggle("active");
  }
  
//let talk form
function validateForm() {
    const fields = document.querySelectorAll(".field");
    const formError = document.querySelector(".form-error");
    let valid = true;
  
    fields.forEach(field => {
      const input = field.querySelector("input");
  
      if (!input.value.trim()) {
        field.classList.add("error");
        valid = false;
      } else {
        field.classList.remove("error");
      }
    });
  
    if (!valid) {
      formError.style.display = "block";
    } else {
      formError.style.display = "none";
      // SUCCESS – go to next step / submit
      console.log("Form valid");
    }
  }
  
  // about toggle button
  function toggleMobileAbout() {
    const menu = document.getElementById("mobileAboutMenu");
    const arrow = document.getElementById("mobArrow");
  
    if (menu.style.display === "flex") {
      menu.style.display = "none";
      arrow.innerText = "+";
    } else {
      menu.style.display = "flex";
      arrow.innerText = "−";
    }
  }
  
  

  // project section
gsap.registerPlugin(ScrollTrigger);

/* PROJECT TITLE SCROLL */
gsap.to(".projects-title", {
  x: "-95vw",
  color: "#c7a17a",
  ease: "none",
  scrollTrigger: {
    trigger: ".projects",
    start: "top center",
    end: "top top",
    scrub: true
  }
});

// PROJECT IMAGE MODAL
const modal = document.getElementById("imageModal");
const modalImg = modal.querySelector(".modal-img");
const closeBtn = modal.querySelector(".modal-close");

document.querySelectorAll(".project-open").forEach(btn => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    const img = btn.parentElement.querySelector("img");
    modalImg.src = img.src;
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  });
});

closeBtn.addEventListener("click", closeModal);
modal.addEventListener("click", closeModal);

function closeModal() {
  modal.classList.remove("active");
  document.body.style.overflow = "";
}

// Close on ESC
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});


// Process
const slider = document.querySelector(".img-wrapper");
const beforeImg = document.querySelector(".before-img");
const sliderLine = document.querySelector(".slider-line");
const sliderHandle = document.querySelector(".slider-handle");

let isDragging = false;

/* =========================
   DRAG STATE
========================= */
function startDrag() {
  isDragging = true;
  slider.classList.add("is-dragging");
}

function stopDrag() {
  isDragging = false;
  slider.classList.remove("is-dragging");
}

slider.addEventListener("mousedown", startDrag);
window.addEventListener("mouseup", stopDrag);

slider.addEventListener("touchstart", startDrag);
window.addEventListener("touchend", stopDrag);

/* =========================
   SLIDER UPDATE (CORE)
========================= */
function updateSlider(percentage) {
  // Clamp
  percentage = Math.max(0, Math.min(100, percentage));

  // Move visuals
  beforeImg.style.width = percentage + "%";
  sliderLine.style.left = percentage + "%";
  sliderHandle.style.left = percentage + "%";

  // LABEL LOGIC
  if (percentage > 45) {
    slider.classList.add("show-before");
    slider.classList.remove("show-after");
  } else if (percentage < 55) {
    slider.classList.add("show-after");
    slider.classList.remove("show-before");
  } else {
    slider.classList.remove("show-before", "show-after");
  }
}

/* =========================
   MOUSE MOVE
========================= */
slider.addEventListener("mousemove", (e) => {
  if (!isDragging) return;

  const rect = slider.getBoundingClientRect();
  const offsetX = e.clientX - rect.left;
  const percentage = (offsetX / rect.width) * 100;

  updateSlider(percentage);
});

slider.addEventListener("touchmove", (e) => {
  if (!isDragging) return;

  const rect = slider.getBoundingClientRect();
  const offsetX = e.touches[0].clientX - rect.left;
  const percentage = (offsetX / rect.width) * 100;

  updateSlider(percentage);
});


// Press, Award, Publication
function initCarousel(sliderSelector, dotsSelector, cardsPerViewFn) {
  const slider = document.querySelector(sliderSelector);
  const dotsContainer = document.querySelector(dotsSelector);

  if (!slider || !dotsContainer) return;

  let autoScrollInterval;
  let index = 0;

  // Store original cards
  const originalCards = Array.from(slider.children);

  function getCardsPerView() {
    return cardsPerViewFn();
  }

  let perView = getCardsPerView();

  function createDots() {
    dotsContainer.innerHTML = "";

    originalCards.forEach((_, i) => {
      const dot = document.createElement("button");
      dot.classList.add(dotsSelector.includes("m-pap") ? "m-pap-dot" : "pap-dot");

      dot.addEventListener("click", () => {
        stopAutoScroll();
        index = perView + i;
        updateCarousel(true);
        setTimeout(resetIfNeeded, 650);
        startAutoScroll();
      });

      dotsContainer.appendChild(dot);
    });
  }

  function updateActiveDot() {
    const dots = dotsContainer.querySelectorAll("button");
    dots.forEach((d) => d.classList.remove("active"));

    const realIndex = (index - perView) % originalCards.length;
    if (dots[realIndex]) dots[realIndex].classList.add("active");
  }

  function buildCarousel() {
    perView = getCardsPerView();
    slider.innerHTML = "";

    // Add original cards
    originalCards.forEach((card) => slider.appendChild(card.cloneNode(true)));

    const cards = Array.from(slider.children);

    // Clone last cards to start
    cards.slice(-perView).forEach((card) => {
      slider.insertBefore(card.cloneNode(true), slider.firstChild);
    });

    // Clone first cards to end
    cards.slice(0, perView).forEach((card) => {
      slider.appendChild(card.cloneNode(true));
    });

    index = perView;

    createDots();
    updateCarousel(false);
  }

  function updateCarousel(animate = true) {
    const cardWidth = slider.children[0].offsetWidth;
    const gap = 30;
    const moveX = (cardWidth + gap) * index;

    slider.style.transition = animate ? "transform 0.6s ease" : "none";
    slider.style.transform = `translateX(-${moveX}px)`;

    updateActiveDot();
  }

  function resetIfNeeded() {
    const total = slider.children.length;

    if (index >= total - perView) {
      index = perView;
      updateCarousel(false);
    }

    if (index < perView) {
      index = total - perView * 2;
      updateCarousel(false);
    }
  }

  function startAutoScroll() {
    stopAutoScroll();
    autoScrollInterval = setInterval(() => {
      index++;
      updateCarousel(true);
      setTimeout(resetIfNeeded, 650);
    }, 3000);
  }

  function stopAutoScroll() {
    clearInterval(autoScrollInterval);
  }

  slider.addEventListener("mouseenter", stopAutoScroll);
  slider.addEventListener("mouseleave", startAutoScroll);

  let currentView = getCardsPerView();
  window.addEventListener("resize", () => {
    const newView = getCardsPerView();
    if (newView !== currentView) {
      currentView = newView;
      buildCarousel();
      startAutoScroll();
    }
  });

  buildCarousel();
  startAutoScroll();
}

/* ===== INIT BOTH CAROUSELS ===== */

// Video Features (3 / 2 / 1)
initCarousel(".video-slider", ".pap-dots", () => {
  if (window.innerWidth <= 600) return 1;
  if (window.innerWidth <= 991) return 2;
  return 3;
});

// Magazine Covers (5 / 3 / 1)
initCarousel(".magazine-slider", ".m-pap-dots", () => {
  if (window.innerWidth <= 600) return 1;
  if (window.innerWidth <= 991) return 3;
  return 5;
});



