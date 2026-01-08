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

// scroll button
const scrollTopBtn = document.querySelector(".scroll-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    scrollTopBtn.classList.add("show");
  } else {
    scrollTopBtn.classList.remove("show");
  }
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});



// Expertise
const rows = document.querySelectorAll(".accordion-row");

rows.forEach(row => {
  const btn = row.querySelector(".accordion-btn");
  const icon = row.querySelector(".icon");
  const content = row.querySelector(".accordion-content");
  const color = row.dataset.color;

  btn.addEventListener("click", () => {

    // Close all others
    rows.forEach(r => {
      if (r !== row) {
        r.classList.remove("active");
        r.style.setProperty("--line-color", "transparent");
        r.querySelector(".icon").textContent = "+";
        r.querySelector(".accordion-content").style.maxHeight = null;
      }
    });

    // Toggle current
    const isOpen = row.classList.contains("active");

    if (isOpen) {
      row.classList.remove("active");
      row.style.setProperty("--line-color", "transparent");
      icon.textContent = "+";
      content.style.maxHeight = null;
    } else {
      row.classList.add("active");
      row.style.setProperty("--line-color", color);
      icon.textContent = "−";
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});


// bottom image 
// gsap.registerPlugin(ScrollTrigger);

// gsap.to(".b-img", {
//   y: 20,                 // parallax amount
//   ease: "none",
//   scrollTrigger: {
//     trigger: ".bottom-img",
//     start: "top bottom",
//     end: "bottom top",
//     scrub: true
//   }
// });


// video button
const videoBtn = document.querySelector(".video-btn");
const videoModal = document.getElementById("videoModal");
const videoIframe = document.getElementById("videoIframe");
const videoClose = document.querySelector(".video-close");

// Replace with your YouTube video ID
const YOUTUBE_ID = "YOUR_VIDEO_ID";

videoBtn.addEventListener("click", () => {
  videoIframe.src = `https://www.youtube.com/embed/uySn1BZiWWs?si=g70RfLKqB-_3_Thr?autoplay=1&rel=0`;
  videoModal.classList.add("active");
  document.body.style.overflow = "hidden";
});

function closeVideo() {
  videoModal.classList.remove("active");
  videoIframe.src = "";
  document.body.style.overflow = "";
}

videoClose.addEventListener("click", closeVideo);
videoModal.addEventListener("click", closeVideo);
