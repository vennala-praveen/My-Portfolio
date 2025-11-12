const progressBars = document.querySelectorAll(".circular");
// const slides = document.querySelectorAll('.slide');
//   let current = 0;

//   document.querySelector('.next').addEventListener('click', () => {
//     slides[current].classList.remove('active');
//     current = (current + 1) % slides.length;
//     slides[current].classList.add('active');
//   });

//   document.querySelector('.prev').addEventListener('click', () => {
//     slides[current].classList.remove('active');
//     current = (current - 1 + slides.length) % slides.length;
//     slides[current].classList.add('active');
//   });

const animateProgress = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const progress = entry.target;
      const targetWidth = progress.getAttribute("data-progress");
      progress.style.width = targetWidth + "%";
    } else {
      const progress = entry.target;
      progress.style.width = "0%";
    }
  });
};

const observer = new IntersectionObserver(animateProgress, {
  threshold: 0.5,
});

progressBars.forEach((progressBar) => {
  observer.observe(progressBar);
});

var typed = new Typed("#element", {
  strings: ["Web Developer", "Gamer",],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true,
  showCursor: false,
});

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || subject === "" || message === "") {
      alert("Please fill in all fields.");
      return;
    }

    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    alert("Message sent successfully!");
    this.reset(); // Clear the form after submission
  });

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}


// script.js

(function () {
  const btn = document.getElementById('backToTop');
  const showAfter = 200; // px scrolled before showing

  // Toggle visibility on scroll
  const toggleButton = () => {
    const scrolled = window.scrollY || document.documentElement.scrollTop;
    if (scrolled > showAfter) {
      btn.style.display = 'inline-flex';
      btn.style.opacity = '1';
    } else {
      btn.style.opacity = '0';
      btn.style.display = 'none';
    }
  };

  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  window.addEventListener('scroll', toggleButton, { passive: true });
  btn.addEventListener('click', scrollToTop);

  // Initial check
  toggleButton();
})();
