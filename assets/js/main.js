
// Hero Section
// Loader
window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  // Let the logo animation finish
  setTimeout(() => {
    loader.classList.add("hide");

    // Optional: remove from DOM after animation
    setTimeout(() => {
      loader.remove();
    }, 700);
  }, 2600); // sync with CSS animation
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

// banner
// const heroSlides = document.querySelectorAll(".hero-slide");
//   let currentSlide = 0;

//   setInterval(() => {
//     heroSlides[currentSlide].classList.remove("active");
//     currentSlide = (currentSlide + 1) % heroSlides.length;
//     heroSlides[currentSlide].classList.add("active");
//   }, 4000);

const heroSlides = document.querySelectorAll(".hero-slide");

if (heroSlides.length) {
  let currentSlide = 0;

  setInterval(() => {
    heroSlides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % heroSlides.length;
    heroSlides[currentSlide].classList.add("active");
  }, 4000);
}

// lets talk 
function toggleTalk() {
    document.getElementById("talkPanel").classList.toggle("active");
  }
  
// ==== let talk form ====
// function validateForm() {
//     const fields = document.querySelectorAll(".field");
//     const formError = document.querySelector(".form-error");
//     let valid = true;
  
//     fields.forEach(field => {
//       const input = field.querySelector("input, textarea, select");
  
//       if (!input || !input.value.trim()) {
//         field.classList.add("error");
//         valid = false;
//       } else {
//         field.classList.remove("error");
//       }
//     });
  
//     if (!valid) {
//       formError.style.display = "block";
//     } else {
//       formError.style.display = "none";
//       // SUCCESS – go to next step / submit
//       console.log("Form valid");
//     }
//   }

function goNext() {
  if (validateForm()) {
    document.getElementById("step1").classList.remove("active");
    document.getElementById("step2").classList.add("active");
  }
}

function validateForm() {
  const fields = document.querySelectorAll("#step1 .field");
  let valid = true;

  fields.forEach(field => {
    const input = field.querySelector("input, textarea");

    if (!input || !input.value.trim()) {
      field.classList.add("error");
      valid = false;
    } else {
      field.classList.remove("error");
    }
  });

  return valid;
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
// gsap.registerPlugin(ScrollTrigger);

/* PROJECT TITLE SCROLL */
// gsap.to(".projects-title", {
//   x: "-95vw",
//   color: "#c7a17a",
//   ease: "none",
//   scrollTrigger: {
//     trigger: ".projects",
//     start: "top center",
//     end: "top top",
//     scrub: true
//   }
// });

if (document.querySelector(".projects")) {
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
}

// PROJECT IMAGE MODAL
// const modal = document.getElementById("imageModal");
// const modalImg = modal.querySelector(".modal-img");
// const closeBtn = modal.querySelector(".modal-close");

// document.querySelectorAll(".project-open").forEach(btn => {
//   btn.addEventListener("click", (e) => {
//     e.stopPropagation();
//     const img = btn.parentElement.querySelector("img");
//     modalImg.src = img.src;
//     modal.classList.add("active");
//     document.body.style.overflow = "hidden";
//   });
// });

// closeBtn.addEventListener("click", closeModal);
// modal.addEventListener("click", closeModal);

// function closeModal() {
//   modal.classList.remove("active");
//   document.body.style.overflow = "";
// }

const modal = document.getElementById("imageModal");

if (modal) {

  const modalImg = modal.querySelector(".modal-img");
  const closeBtn = modal.querySelector(".modal-close");

  document.querySelectorAll(".project-open").forEach(btn => {
    btn.addEventListener("click", e => {
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

}

// Close on ESC
// document.addEventListener("keydown", (e) => {
//   if (e.key === "Escape") closeModal();
// });
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
});


// Process
// const slider = document.querySelector(".img-wrapper");
// const beforeImg = document.querySelector(".before-img");
// const sliderLine = document.querySelector(".slider-line");
// const sliderHandle = document.querySelector(".slider-handle");

// let isDragging = false;

const slider = document.querySelector(".img-wrapper");

if (slider) {

  const beforeImg = document.querySelector(".before-img");
  const sliderLine = document.querySelector(".slider-line");
  const sliderHandle = document.querySelector(".slider-handle");

  let isDragging = false;

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

  function updateSlider(percentage) {
    percentage = Math.max(0, Math.min(100, percentage));

    beforeImg.style.width = percentage + "%";
    sliderLine.style.left = percentage + "%";
    sliderHandle.style.left = percentage + "%";

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

  slider.addEventListener("mousemove", (e) => {
    if (!isDragging) return;

    const rect = slider.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    updateSlider((offsetX / rect.width) * 100);
  });

  slider.addEventListener("touchmove", (e) => {
    if (!isDragging) return;

    const rect = slider.getBoundingClientRect();
    const offsetX = e.touches[0].clientX - rect.left;
    updateSlider((offsetX / rect.width) * 100);
  });

}
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


// International Awards
function initCarousel(sliderSelector, dotsSelector, cardsPerViewFn) {

  const slider = document.querySelector(sliderSelector);
  const dotsContainer = document.querySelector(dotsSelector);

  if (!slider || !dotsContainer) return;

  let index = 0;
  let interval;

  const originals = [...slider.children];

  function getPerView() {
    return cardsPerViewFn();
  }

  let perView = getPerView();

  /* ---------------- BUILD ---------------- */

  function build() {

    perView = getPerView();
    slider.innerHTML = "";

    // DOUBLE content (true infinite)
    originals.forEach(c => slider.appendChild(c.cloneNode(true)));
    originals.forEach(c => slider.appendChild(c.cloneNode(true)));

    index = 0;

    createDots();
    move(false);
  }

  /* ---------------- DOTS ---------------- */

  function createDots() {

    dotsContainer.innerHTML = "";

    originals.forEach((_, i) => {

      const dot = document.createElement("button");
      dot.className = dotsSelector.includes("m-pap") ? "m-pap-dot" : "pap-dot";

      dot.onclick = () => {
        stop();
        index = i;
        move(true);
        start();
      };

      dotsContainer.appendChild(dot);
    });
  }

  function updateDots() {

    const dots = dotsContainer.querySelectorAll("button");
    dots.forEach(d => d.classList.remove("active"));

    const real = index % originals.length;
    dots[real]?.classList.add("active");
  }

  /* ---------------- MOVE ---------------- */

  function move(anim = true) {

    const slide = slider.children[0].getBoundingClientRect().width + 30;

    slider.style.transition = anim ? "transform .6s linear" : "none";
    slider.style.transform = `translateX(-${slide * index}px)`;

    updateDots();
  }

  /* ---------------- AUTO ---------------- */

  function start() {

    stop();

    interval = setInterval(() => {

      index++;
      move(true);

      // seamless wrap
      if (index >= originals.length) {

        setTimeout(() => {
          slider.style.transition = "none";
          index = 0;
          move(false);
        }, 600);

      }

    }, 2500);
  }

  function stop() {
    clearInterval(interval);
  }

  slider.addEventListener("mouseenter", stop);
  slider.addEventListener("mouseleave", start);

  /* ---------------- RESIZE ---------------- */

  let current = getPerView();

  window.addEventListener("resize", () => {

    const next = getPerView();

    if (next !== current) {
      current = next;
      build();
      start();
    }
  });

  build();
  start();
}

/* INIT */

initCarousel(".video-slider", ".pap-dots", () => {
  if (innerWidth <= 600) return 1;
  if (innerWidth <= 991) return 2;
  return 3;
});

initCarousel(".magazine-slider", ".m-pap-dots", () => {
  if (innerWidth <= 600) return 1;
  if (innerWidth <= 991) return 3;
  return 5;
});


/* ===== INIT BOTH CAROUSELS ===== */

// initCarousel(".video-slider", ".pap-dots", () => {
//   if (window.innerWidth <= 600) return 1;
//   if (window.innerWidth <= 991) return 2;
//   return 3;
// });

// initCarousel(".magazine-slider", ".m-pap-dots", () => {
//   if (window.innerWidth <= 600) return 1;
//   if (window.innerWidth <= 991) return 3;
//   return 5;
// });


// Press & publications
document.addEventListener("DOMContentLoaded", () => {

  const slider = document.querySelector(".press-slider");
  const cards = Array.from(document.querySelectorAll(".press-card"));
  const dotsContainer = document.querySelector(".press-dots");

  let index = 0;
  let interval;
  let cardsPerView = getCardsPerView();

  /* ===== Clone cards for infinite loop ===== */
  cards.forEach(card => {
    slider.appendChild(card.cloneNode(true));
  });

  const totalCards = slider.children.length;

  /* ===== Responsive cards per view ===== */
  function getCardsPerView() {
    if (window.innerWidth < 600) return 1;
    if (window.innerWidth < 991) return 2;
    return 3;
  }

  function updateCardsPerView() {
    cardsPerView = getCardsPerView();
    moveSlider();
  }

  window.addEventListener("resize", updateCardsPerView);

  /* ===== Create dots (based on ORIGINAL cards only) ===== */
  cards.forEach((_, i) => {
    const dot = document.createElement("button");
    dot.classList.add("press-dot");

    if (i === 0) dot.classList.add("active");

    dot.addEventListener("click", () => {
      index = i;
      moveSlider(true);
      restartAuto();
    });

    dotsContainer.appendChild(dot);
  });

  const dots = document.querySelectorAll(".press-dot");

  function updateDots() {
    dots.forEach(dot => dot.classList.remove("active"));
    dots[index % cards.length].classList.add("active");
  }

  /* ===== Move Slider ===== */
  function moveSlider(manual = false) {
    const cardWidth = slider.children[0].offsetWidth + 30;
    slider.style.transition = "transform 0.6s ease";
    slider.style.transform = `translateX(-${index * cardWidth}px)`;

    updateDots();

    /* Seamless loop */
    if (index >= totalCards - cardsPerView) {
      setTimeout(() => {
        slider.style.transition = "none";
        index = 0;
        slider.style.transform = "translateX(0)";
      }, 650);
    }
  }

  /* ===== Auto Scroll ===== */
  function startAuto() {
    interval = setInterval(() => {
      index++;
      moveSlider();
    }, 3000);
  }

  function restartAuto() {
    clearInterval(interval);
    startAuto();
  }

  startAuto();

});



// one liner about 
const texts = [
  "Designing Spaces That Inspire",
  "Crafting Experiences That Last",
  "Where Ideas Become Reality"
];

const textEl = document.getElementById("scroll-text");
let currentIndex = -1;

function splitText(text) {
  textEl.innerHTML = "";
  text.split("").forEach(char => {
    const span = document.createElement("span");
    span.className = "char";
    span.innerHTML = char === " " ? "&nbsp;" : char;
    span.style.opacity = 0;
    textEl.appendChild(span);
  });
}

function animateText(index) {
  if (index === currentIndex || index >= texts.length) return;
  currentIndex = index;

  splitText(texts[index]);

  gsap.to(".char", {
    opacity: 1,
    duration: 0.2,
    stagger: {
      each: 0.02,
      from: "random"
    },
    ease: "power2.out"
  });
}

// INITIAL TEXT (VERY IMPORTANT)
animateText(0);

// SCROLL CONTROL
ScrollTrigger.create({
  trigger: ".one-about",
  start: "top top",
  end: `+=${texts.length * 120}%`,
  pin: true,
  scrub: true,
  onUpdate(self) {
    const index = Math.min(
      texts.length - 1,
      Math.floor(self.progress * texts.length)
    );
    animateText(index);
  }
});


// Award section
// -- old 
// gsap.registerPlugin(ScrollTrigger);

// const container = document.querySelector(".awards-container");

// gsap.fromTo(
//   container,
//   {
//     x: "-100vw",
//     y: "20vh",
//     scale: 1.05
//   },
//   {
//     x: "0vw",
//     y: "0vh",
//     scale: 1,
//     ease: "power1.out",
//     scrollTrigger: {
//       trigger: ".awards-section",
//       start: "top top",
//       end: "+=100%",
//       scrub: true,
//       pin: true,
//       anticipatePin: 1,
//     }
//   }
// );

// ----new
// const container = document.querySelector(".awards-container");

// if (container) {
//   gsap.fromTo(container, {
//     x: "-100vw",
//     y: "20vh",
//     scale: 1.05
//   }, {
//     x: "0vw",
//     y: "0vh",
//     scale: 1,
//     ease: "power1.out",
//     scrollTrigger: {
//       trigger: ".awards-section",
//       start: "top top",
//       end: "+=100%",
//       scrub: true,
//       pin: true,
//       anticipatePin: 1,
//     }
//   });
// }


// New 7-2-26
// const container = document.querySelector(".awards-container");

// if (container) {
//   gsap.fromTo(
//     container,
//     {
//       x: "-100vw"
//     },
//     {
//       x: "-25vw",   // STOP when content reaches ~75% screen
//       ease: "none",
//       scrollTrigger: {
//         trigger: ".awards-section",
//         start: "top top",
//         end: "+=120%",
//         scrub: true,
//         pin: true,
//         anticipatePin: 1
//       }
//     }
//   );
// }


// ----->
// const container = document.querySelector(".awards-container");
// const content = document.querySelector(".awards-content");

// if (container && content) {


//   const stopX = window.innerWidth - content.offsetLeft;

//   gsap.fromTo(container,
//     {
//       x: "-100vw",
//       y: "20vh"
//     },
//     {
//       x: "0",
//       y: "0",
//       ease: "none",
//       scrollTrigger: {
//         trigger: ".awards-section",
//         start: "top top",
//         end: "+=120%",
//         scrub: true,
//         pin: true,
//         anticipatePin: 1
//       }
//     }
//   );
// }



const container = document.querySelector(".awards-container");
const image = document.querySelector(".awards-image-wrap");
const content = document.querySelector(".awards-content");

if (window.innerWidth > 991 && container && image && content) {

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".awards-section",
      start: "top top",
      end: "+=150%",
      scrub: true,
      pin: true,
      anticipatePin: 1
    }
  });

  // IMAGE COMES FIRST
  tl.from(container, {
    x: "-100vw",
    y: "20vh",
    ease: "none"
  });

  // TEXT STARTS WHEN IMAGE IS ~10% IN
  tl.from(content, {
    x: "0",
    y: "30vh",
    opacity: 0,
    ease: "none"
  }, 0.15); // 👈 delay = ~10% scroll

  // BOTH MOVE TOGETHER
  tl.to(container, {
    x: "0",
    y: "0",
    ease: "none"
  });
}


// Project Page filter 

// DEFAULT LOAD
// DEFAULT
filterSelection("all");

function filterSelection(c) {
  const items = document.querySelectorAll(".project-link");
  const filters = document.querySelectorAll(".filter");

  filters.forEach(btn => btn.classList.remove("active"));
  if (event) event.target.classList.add("active");

  items.forEach(item => {
    if (c === "all" || item.classList.contains(c)) {
      item.classList.add("show");
    } else {
      item.classList.remove("show");
    }
  });
}


// TYPE FILTER (Architecture / Interior / All)
function filterType(type) {
  const items = document.querySelectorAll(".project-link");
  const typeBtns = document.querySelectorAll(".type-btn");
  const filters = document.querySelectorAll(".filter");

  typeBtns.forEach(btn => btn.classList.remove("active"));
  event.target.classList.add("active");

  items.forEach(item => {
    if (type === "all") {
      item.classList.add("show");
    } else {
      item.classList.toggle("show", item.classList.contains(type));
    }
  });

  // Enable/disable category filters
  filters.forEach(filter => {
    const category = filter.dataset.category;
    let hasMatch = false;

    items.forEach(item => {
      if (
        item.classList.contains(category) &&
        (type === "all" || item.classList.contains(type))
      ) {
        hasMatch = true;
      }
    });

    filter.classList.toggle("disabled", !hasMatch && type !== "all");
  });
}

