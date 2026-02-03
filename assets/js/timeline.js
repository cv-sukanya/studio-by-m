gsap.registerPlugin(ScrollTrigger);

const timelineSlides = gsap.utils.toArray(".slide");
const slidesPerView = 2;

const yearLabel = document.getElementById("currentYear");
const yearNav = document.querySelectorAll(".year-nav span");

let timelineST = null;

function initTimeline() {

  // 🔥 Kill ALL previous ScrollTriggers
  ScrollTrigger.getAll().forEach(st => st.kill());

  if (window.innerWidth <= 768) return;

  const totalSlides = timelineSlides.length;
  const totalScrollSteps = totalSlides - slidesPerView;

  if (totalScrollSteps <= 0) return;

  timelineST = gsap.to(timelineSlides, {
    xPercent: -(100 / slidesPerView) * totalScrollSteps,
    ease: "none",
    scrollTrigger: {
      trigger: ".overlay-section",
      pin: true,
      scrub: 1,
      snap: 1 / totalScrollSteps,
      end: () => window.innerWidth * (totalScrollSteps + 0.8),

      onUpdate: self => {
        const adjustedProgress = Math.min(
          Math.max(self.progress - 0.1, 0),
          1
        );
      
        const index = Math.round(adjustedProgress * totalScrollSteps);
        const year = timelineSlides[index]?.dataset.year;
      
        if (yearLabel && year) {
          yearLabel.textContent = year;
        }
      
        yearNav.forEach(y => y.classList.remove("active"));
        yearNav[index]?.classList.add("active");
      }
    }
  });
}

function updateActiveSlide() {
  const overlayLeft = document
    .querySelector(".slider-overlay")
    .getBoundingClientRect().left;

  let activeSlide = null;

  timelineSlides.forEach((slide, index) => {
    const rect = slide.getBoundingClientRect();

    // Slide whose LEFT EDGE is inside overlay
    if (rect.left >= overlayLeft - 5) {
      if (!activeSlide || rect.left < activeSlide.rect.left) {
        activeSlide = { slide, index, rect };
      }
    }
  });

  if (!activeSlide) return;

  const year = activeSlide.slide.dataset.year;

  // Update year label
  if (yearLabel) yearLabel.textContent = year;

  // Update nav
  yearNav.forEach(y => y.classList.remove("active"));
  yearNav[activeSlide.index]?.classList.add("active");
}


// INIT
initTimeline();

// RESIZE SAFE
let resizeTimer;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(initTimeline, 300);
});
