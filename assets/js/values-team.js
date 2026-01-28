document.addEventListener("DOMContentLoaded", () => {
    const valuesSlider = document.getElementById("valuesSlider");
    if (!valuesSlider) return;
  
    const scrollLeftBtn = document.getElementById("scrollLeft");
    const scrollRightBtn = document.getElementById("scrollRight");
  
    /* BUTTON SCROLL */
    scrollRightBtn?.addEventListener("click", () => {
      valuesSlider.scrollBy({ left: valuesSlider.offsetWidth, behavior: "smooth" });
    });
  
    scrollLeftBtn?.addEventListener("click", () => {
      valuesSlider.scrollBy({ left: -valuesSlider.offsetWidth, behavior: "smooth" });
    });
  
    /* DRAG SCROLL */
    let isDown = false;
    let startX;
    let scrollStart;
  
    valuesSlider.addEventListener("mousedown", (e) => {
      isDown = true;
      startX = e.pageX - valuesSlider.offsetLeft;
      scrollStart = valuesSlider.scrollLeft;
    });
  
    valuesSlider.addEventListener("mouseleave", () => isDown = false);
    valuesSlider.addEventListener("mouseup", () => isDown = false);
  
    valuesSlider.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - valuesSlider.offsetLeft;
      const walk = (x - startX) * 1.2;
      valuesSlider.scrollLeft = scrollStart - walk;
    });
  
    /* TOUCH */
    valuesSlider.addEventListener("touchstart", (e) => {
      startX = e.touches[0].pageX - valuesSlider.offsetLeft;
      scrollStart = valuesSlider.scrollLeft;
    });
  
    valuesSlider.addEventListener("touchmove", (e) => {
      const x = e.touches[0].pageX - valuesSlider.offsetLeft;
      const walk = (x - startX) * 1.2;
      valuesSlider.scrollLeft = scrollStart - walk;
    });
  });
  