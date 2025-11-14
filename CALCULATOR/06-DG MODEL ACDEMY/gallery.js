// Lightbox Elements
const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const closeBtn = document.querySelector(".close");

// Select all gallery images
const galleryImages = document.querySelectorAll(".grid img");

// When an image is clicked → show in lightbox
galleryImages.forEach(img => {
    img.addEventListener("click", () => {
        lightbox.style.display = "flex";
        lightboxImg.src = img.src;
    });
});

// Close lightbox button
closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
});

// Close when clicking outside the image
lightbox.addEventListener("click", (e) => {
    if (e.target !== lightboxImg) {
        lightbox.style.display = "none";
    }
});