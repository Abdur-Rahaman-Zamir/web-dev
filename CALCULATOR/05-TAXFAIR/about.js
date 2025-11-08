// ===== Sticky Navbar =====
window.addEventListener("scroll", function() {
  const header = document.querySelector(".header");
  if (window.scrollY > 50) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});

// ===== Smooth Scroll Animation =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// ===== Team Section Fade-in Effect =====
const teamMembers = document.querySelectorAll(".member");

function revealOnScroll() {
  const windowHeight = window.innerHeight;
  teamMembers.forEach(member => {
    const revealTop = member.getBoundingClientRect().top;
    if (revealTop < windowHeight - 100) {
      member.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll(); // run once on load

// ===== Small Footer Logo Hover Animation =====
const footerLogo = document.querySelector(".footer-logo img");
footerLogo.addEventListener("mouseenter", () => {
  footerLogo.style.transform = "rotate(10deg) scale(1.1)";
  footerLogo.style.transition = "transform 0.4s ease";
});
footerLogo.addEventListener("mouseleave", () => {
  footerLogo.style.transform = "rotate(0deg) scale(1)";
});