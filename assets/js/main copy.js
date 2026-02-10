
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
//  old
// slider.addEventListener("mousedown", startDrag);
// window.addEventListener("mouseup", stopDrag);

// slider.addEventListener("touchstart", startDrag);
// window.addEventListener("touchend", stopDrag);

if(slider){

  slider.addEventListener("mousedown", startDrag);
  window.addEventListener("mouseup", stopDrag);

  slider.addEventListener("touchstart", startDrag);
  window.addEventListener("touchend", stopDrag);

}

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


// Project page filter 

// filterSelection("all");

// function filterSelection(c) {

//   const cards = document.querySelectorAll(".project-card");

//   cards.forEach(card => {

//     if (c === "all") {
//       card.classList.add("show");
//     } 
//     else {
//       card.classList.remove("show");

//       if (card.classList.contains(c)) {
//         card.classList.add("show");
//       }
//     }

//   });
// }



// const btnContainer = document.getElementById("projectFilter");
// const btns = btnContainer.getElementsByClassName("filter");

// for (let i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function () {
//     const current = document.querySelector(".filter.active");
//     current.classList.remove("active");
//     this.classList.add("active");
//   });
// }



document.addEventListener("DOMContentLoaded", function(){

  const cards = document.querySelectorAll(".project-card");
  const typeBtns = document.querySelectorAll(".type-btn");
  const filterBtns = document.querySelectorAll(".filter");

  if(!cards.length) return; // stop if section not found

  let activeType = "all";
  let activeCategory = "all";

  /* TYPE FILTER */

  typeBtns.forEach(btn=>{
    btn.addEventListener("click",()=>{

      document.querySelector(".type-btn.active")?.classList.remove("active");
      btn.classList.add("active");

      activeType = btn.dataset.type;
      activeCategory = "all";

      document.querySelector(".filter.active")?.classList.remove("active");
      filterBtns[0]?.classList.add("active");

      applyFilters();
    });
  });

  /* CATEGORY FILTER */

  filterBtns.forEach(btn=>{
    btn.addEventListener("click",()=>{

      document.querySelector(".filter.active")?.classList.remove("active");
      btn.classList.add("active");

      activeCategory = btn.dataset.category;

      applyFilters();
    });
  });

  function applyFilters(){

    cards.forEach(card=>{

      let typeMatch =
        activeType === "all" || card.classList.contains(activeType);

      let catMatch =
        activeCategory === "all" || card.classList.contains(activeCategory);

      card.classList.toggle("show", typeMatch && catMatch);
    });
  }

  applyFilters();

});
