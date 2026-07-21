gsap.registerPlugin(ScrollTrigger);

const slides = gsap.utils.toArray(".slide");
const wrapper = document.querySelector(".horizontal-wrapper");

const slidesPerView = 1;
const yearLabel = document.getElementById("currentYear");
const yearNav = document.querySelectorAll(".year-nav span");

function initTimeline() {
  ScrollTrigger.getAll().forEach(st => st.kill());

  if (window.innerWidth <= 768) return;

  const totalSlides = slides.length;
  const maxIndex = totalSlides - slidesPerView;

  if (maxIndex <= 0) return;

  const slideWidth = slides[0].offsetWidth;
  const totalMove = slideWidth * maxIndex;

  gsap.to(wrapper, {
    x: -totalMove,
    ease: "none",
    scrollTrigger: {
      trigger: ".overlay-section",
      pin: true,
      scrub: 1,
      snap: 1 / maxIndex,
      end: () => `+=${window.innerWidth * (maxIndex + 1)}`,

      onUpdate: self => {
        const index = Math.min(
          Math.round(self.progress * maxIndex),
          maxIndex
        );

        const year = slides[index]?.dataset.year;
        if (yearLabel && year) yearLabel.textContent = year;

        yearNav.forEach(y => y.classList.remove("active"));
        yearNav[index]?.classList.add("active");

        slides.forEach(slide => slide.classList.remove("active-slide"));
        slides[index]?.classList.add("active-slide");
      }
    }
  });
}

initTimeline();

let resizeTimer;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(initTimeline, 300);
});
