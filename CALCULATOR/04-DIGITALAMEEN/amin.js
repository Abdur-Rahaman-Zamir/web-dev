// ====== Mobile Menu Toggle ======
const navToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('nav ul');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });
}

// ====== Smooth Scrolling for Internal Links ======
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 60,
        behavior: 'smooth'
      });
    }
  });
});

// ====== Contact Form Validation ======
const contactForm = document.querySelector('form');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.querySelector('#name').value.trim();
    const email = document.querySelector('#email').value.trim();
    const message = document.querySelector('#message').value.trim();

    if (name === '' || email === '' || message === '') {
      alert('অনুগ্রহ করে সব ঘর পূরণ করুন।');
      return;
    }

    if (!email.includes('@') || !email.includes('.')) {
      alert('একটি সঠিক ইমেইল ঠিকানা দিন।');
      return;
    }

    alert('ধন্যবাদ! আপনার বার্তা সফলভাবে পাঠানো হয়েছে।');
    contactForm.reset();
  });
}

// ====== Scroll Animation for Elements ======
const revealElements = document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => {
  const windowHeight = window.innerHeight;
  revealElements.forEach(el => {
    const revealTop = el.getBoundingClientRect().top;
    if (revealTop < windowHeight - 100) {
      el.classList.add('active');
    }
  });
});