gsap.registerPlugin(ScrollTrigger);

const slides = gsap.utils.toArray(".slide");
const totalSlides = slides.length;

// gsap.to(slides, {
//   xPercent: -100 * (totalSlides - 1),
//   ease: "none",
//   scrollTrigger: {
//     trigger: ".overlay-section",
//     pin: true,
//     scrub: 1,
//     snap: 1 / (totalSlides - 1),
//     end: () =>
//       "+=" + document.querySelector(".horizontal-wrapper").offsetWidth
//   }
// });

gsap.registerPlugin(ScrollTrigger);

// const slides = gsap.utils.toArray(".slide");
const yearLabel = document.getElementById("currentYear");
const yearNav = document.querySelectorAll(".year-nav span");

gsap.to(slides, {
  xPercent: -100 * (slides.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".overlay-section",
    pin: true,
    scrub: 1,
    snap: 1 / (slides.length - 1),
    end: () => "+=" + window.innerWidth * slides.length,
    onUpdate: self => {
      const index = Math.round(self.progress * (slides.length - 1));
      const year = slides[index].dataset.year;

      yearLabel.innerText = year;

      yearNav.forEach(y => y.classList.remove("active"));
      yearNav[index]?.classList.add("active");
    }
  }
});
slides.forEach(slide => {
    slide.addEventListener("mouseenter", () => ScrollTrigger.getAll()[0].disable());
    slide.addEventListener("mouseleave", () => ScrollTrigger.getAll()[0].enable());
  });
  

// left content
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
  