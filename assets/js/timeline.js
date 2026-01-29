gsap.registerPlugin(ScrollTrigger);

const slides = gsap.utils.toArray(".slide");
const yearLabel = document.getElementById("currentYear");
const yearNav = document.querySelectorAll(".year-nav span");

let sliderST = null;
let currentIndex = 0;

function initTimeline() {

  // 🔥 Kill existing triggers first
  ScrollTrigger.getAll().forEach(st => st.kill());

  // ✅ DESKTOP ONLY
  if (window.innerWidth > 768) {

    sliderST = gsap.to(slides, {
      xPercent: -100 * (slides.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".overlay-section",
        pin: true,
        scrub: 1,
        snap: 1 / (slides.length - 1),
        end: () => "+=" + window.innerWidth * (slides.length - 1),

        onUpdate: self => {
          const index = Math.round(self.progress * (slides.length - 1));

          if (index !== currentIndex) {
            currentIndex = index;
        
            const year = slides[index]?.dataset.year;
            if (yearLabel && year) yearLabel.innerText = year;
        
            yearNav.forEach(y => y.classList.remove("active"));
            yearNav[index]?.classList.add("active");
          }
        }
      }
    });

    // ✅ Hover pause (SAFE)
    // slides.forEach(slide => {
    //   slide.addEventListener("mouseenter", () => sliderST.scrollTrigger.disable());
    //   slide.addEventListener("mouseleave", () => sliderST.scrollTrigger.enable());
    // });

  }
}

// init on load
initTimeline();



let resizeTimeout;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(initTimeline, 300);
  });

// LEFT CONTENT ANIMATION (independent, OK)
gsap.from(".quote-wrapper h2", {
  y: 40,
  opacity: 0,
  duration: 1.2,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".overlay-section",
    start: "top 70%"
  }
});
