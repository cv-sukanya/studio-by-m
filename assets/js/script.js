AOS.init({
    duration: 1000,
    once: true,
    easing: 'ease-in-out'
  });

// Navbar background change on scroll
const navbar = document.querySelector('.custom-nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 80) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// AOS init
AOS.init({
  duration: 1000,
  once: true,
  easing: 'ease-in-out'
});


// image over text
gsap.registerPlugin(ScrollTrigger);

const images = gsap.utils.toArray(".style-img");

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".style-text",
    start: "top top",
    end: "+=" + (images.length * 120) + "%",
    scrub: true,
    pin: true,
    pinSpacing: true,   // keep spacing controlled
    anticipatePin: 1
  }
});

images.forEach((img, i) => {

  tl.to(img, {
    x: "0%",
    opacity: 1,
    duration: 1,
    ease: "power2.out"
  });

  tl.to(img, {
    opacity: 1,
    duration: 0.5
  });

  if (i !== images.length - 1) {
    tl.to(img, {
      x: "100%",
      opacity: 0,
      duration: 1,
      ease: "power2.in"
    });
  }
});

tl.to(".style-heading", {
  opacity: 0.15
}, 0);



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
