const toggle = document.getElementById("themeToggle");

if(localStorage.getItem("theme") === "light"){
  document.body.classList.add("light");
}

toggle.addEventListener("click", () => {
  document.body.classList.toggle("light");

  if(document.body.classList.contains("light")){
    localStorage.setItem("theme", "light");
    toggle.textContent = "☀️";
  } else {
    localStorage.setItem("theme", "dark");
    toggle.textContent = "🌙";
  }
});

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;

    if(top < windowHeight - 100) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);

// Typing Effect
const text = "Crafting modern web experiences with clean UI and strong UX.";
const typingElement = document.querySelector(".typing");

if (typingElement) {
  let index = 0;

  function type() {
    if (index < text.length) {
      typingElement.textContent += text.charAt(index);
      index++;
      setTimeout(type, 40);
    }
  }

  type();
}
// Active Navbar Link
const links = document.querySelectorAll(".navbar nav a");

links.forEach(link => {
  if (link.href === window.location.href) {
    link.style.color = "var(--gold)";
  }
});

// Navbar scroll effect
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});

// Mobile Menu Toggle
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if(menuToggle){
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}





// Initialize EmailJS
emailjs.init("hUuWyJI7uMDXxN5L6");

const form = document.getElementById("contactForm");
const btnText = document.getElementById("btnText");
const btnSpinner = document.getElementById("btnSpinner");
const toast = document.getElementById("toast");
const toastIcon = document.getElementById("toastIcon");
const toastMessage = document.getElementById("toastMessage");

if (form) {
  form.addEventListener("submit", function(e){
    e.preventDefault();

    // Show spinner
    btnSpinner.style.display = "inline-block";
    btnText.textContent = "Sending...";

    const params = {
      from_name: document.getElementById("fullName").value,
      from_email: document.getElementById("email").value,
      message: document.getElementById("message").value
    };

    emailjs.send("service_t22mit8","template_vbc3gnp", params)
      .then(function(response) {
        // Reset form
        form.reset();

        // Hide spinner
        btnSpinner.style.display = "none";
        btnText.textContent = "Send Message";

        // Show success toast
        toast.style.background = "#16a34a";
        toastIcon.textContent = "✔";
        toastMessage.textContent = "Message sent successfully!";
        toast.classList.add("show");

        setTimeout(() => {
          toast.classList.remove("show");
        }, 4000);

      }, function(error) {
        // Hide spinner
        btnSpinner.style.display = "none";
        btnText.textContent = "Send Message";

        // Show error toast
        toast.style.background = "#dc2626"; // red
        toastIcon.textContent = "✖";
        toastMessage.textContent = "Failed to send message. Try again.";
        toast.classList.add("show");

        setTimeout(() => {
          toast.classList.remove("show");
        }, 4000);
      });

  });
}