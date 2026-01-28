document.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector(".leaders-slider");
    const prev = document.querySelector(".arrow-prev");
    const next = document.querySelector(".arrow-next");
  
    if (!slider || !prev || !next) return;
  
    const getScrollAmount = () => {
      const card = slider.querySelector(".leader-card");
      const styles = window.getComputedStyle(slider);
      const gap = parseInt(styles.columnGap || styles.gap || 0);
      return card.offsetWidth + gap;
    };
  
    /* ARROW CONTROLS */
    next.addEventListener("click", () => {
      slider.scrollBy({
        left: getScrollAmount(),
        behavior: "smooth",
      });
    });
  
    prev.addEventListener("click", () => {
      slider.scrollBy({
        left: -getScrollAmount(),
        behavior: "smooth",
      });
    });
  
    /* DRAG TO SCROLL */
    let isDown = false;
    let startX;
    let scrollLeft;
  
    slider.addEventListener("mousedown", (e) => {
      isDown = true;
      slider.classList.add("dragging");
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });
  
    slider.addEventListener("mouseleave", () => {
      isDown = false;
      slider.classList.remove("dragging");
    });
  
    slider.addEventListener("mouseup", () => {
      isDown = false;
      slider.classList.remove("dragging");
    });
  
    slider.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 1.6;
      slider.scrollLeft = scrollLeft - walk;
    });
  
    /* TOUCH SUPPORT */
    slider.addEventListener("touchstart", (e) => {
      startX = e.touches[0].pageX;
      scrollLeft = slider.scrollLeft;
    });
  
    slider.addEventListener("touchmove", (e) => {
      const x = e.touches[0].pageX;
      const walk = (x - startX) * 1.6;
      slider.scrollLeft = scrollLeft - walk;
    });
  });

//   pop-up card
document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("leaderModal");
    const closeBtn = document.getElementById("closeModal");
  
    const modalImage = document.getElementById("modalImage");
    const modalName = document.getElementById("modalName");
    const modalRole = document.getElementById("modalRole");
    const modalBio = document.getElementById("modalBio");
  
    document.querySelectorAll(".leader-card .open-modal").forEach(btn => {
      btn.addEventListener("click", () => {
        const card = btn.closest(".leader-card");
  
        modalImage.src = card.dataset.image;
        modalName.textContent = card.dataset.name.toUpperCase();
        modalRole.textContent = card.dataset.role;
        modalBio.textContent = card.dataset.bio;
  
        modal.classList.add("active");
        document.body.style.overflow = "hidden";
      });
    });
  
    closeBtn.addEventListener("click", () => {
      modal.classList.remove("active");
      document.body.style.overflow = "";
    });
  });