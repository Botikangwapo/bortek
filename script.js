  const header = document.querySelector(".header");
  const mainImage = document.getElementById("mainImage");
  const thumbnails = document.querySelectorAll(".thumb");
  const darktoggle = document.getElementById("darktoggle");
  const toggle = document.getElementById('darktoggle');
  const container = document.querySelector('.darkmode');
  const body = document.body;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  container.addEventListener('click', () => {
    toggle.classList.toggle('move-right');
      body.classList.toggle('dark-mode');
  });

// Store original image (Mark.jpg)
const originalSrc = mainImage.getAttribute("src");

thumbnails.forEach(thumb => {
  thumb.addEventListener("click", () => {
    const outfitImage = thumb.getAttribute("data-outfit");

    // If already showing that image, reset to original
    if (mainImage.getAttribute("src") === outfitImage) {
      mainImage.style.opacity = 0;
      setTimeout(() => {
        mainImage.src = originalSrc;
        mainImage.style.opacity = 1;
      }, 300);
    } else {
      mainImage.style.opacity = 0;
      setTimeout(() => {
        mainImage.src = outfitImage;
        mainImage.style.opacity = 1;
      }, 300);
    }
  });
});




