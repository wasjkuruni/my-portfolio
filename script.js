// Wk Raaj Portfolio interactions
const menuToggle = document.getElementById("menuToggle");
const navigation = document.getElementById("navigation");
const navLinks = document.querySelectorAll(".nav-link");
const announcement = document.getElementById("announcement");
const closeAnnouncement = document.getElementById("closeAnnouncement");

// Mobile navigation
menuToggle.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navigation.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    navLinks.forEach((item) => item.classList.remove("active"));
    link.classList.add("active");
  });
});

// Close the small welcome bar
closeAnnouncement.addEventListener("click", () => {
  announcement.hidden = true;
  document.querySelector(".site-header").style.top = "0";
});

// Keep the copyright year current
document.getElementById("year").textContent = new Date().getFullYear();

// Highlight the section currently visible on screen
const sections = document.querySelectorAll("main section[id]");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    navLinks.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
    });
  });
}, { rootMargin: "-35% 0px -55% 0px" });

sections.forEach((section) => observer.observe(section));
