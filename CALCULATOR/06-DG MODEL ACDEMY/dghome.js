// ===== DG Model Academy Mission — dg.js =====

// Wait until DOM is ready
document.addEventListener("DOMContentLoaded", function () {

  // Mobile navigation toggle (for small screens)
  const navToggle = document.createElement("button");
  navToggle.classList.add("nav-toggle");
  navToggle.innerHTML = "☰"; // menu icon

  // Insert toggle button before the main navigation
  const header = document.querySelector(".site-header .container");
  const mainNav = document.querySelector(".main-nav");
  header.insertBefore(navToggle, mainNav);

  // Toggle show/hide menu on click
  navToggle.addEventListener("click", () => {
    mainNav.classList.toggle("show");
  });

  // Optional: Smooth scroll to sections
  const navLinks = document.querySelectorAll(".main-nav a, .footer-right a");
  navLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      if (this.hash !== "") {
        e.preventDefault();
        const target = document.querySelector(this.hash);
        if (target) {
          window.scrollTo({
            top: target.offsetTop - 100,
            behavior: "smooth"
          });
        }
        mainNav.classList.remove("show"); // hide menu after click
      }
    });
  });

  // Optional: Change header shadow on scroll
  window.addEventListener("scroll", () => {
    const header = document.querySelector(".site-header");
    if (window.scrollY > 50) {
      header.style.boxShadow = "0 4px 10px rgba(0,0,0,0.25)";
    } else {
      header.style.boxShadow = "0 3px 8px rgba(0,0,0,0.15)";
    }
  });
});
