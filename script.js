
// Navbar toggle for mobile
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");


menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Simple slider for home page
const sliderImg = document.getElementById("slider-img");
const images = [
  "images/Slideshow/SilverscreenApp.png",
  "images/Slideshow/dinosdinoshop.png",
  "images/Slideshow/Sonic.png",
  "images/Slideshow/Chrome Dev Tools.png",
  "images/Slideshow/Postman 1.png",
  "images/Slideshow/Postman 2.png",
  "images/Slideshow/Selenium 1.png",
  "images/Slideshow/Selenium 2.png",
  "images/Slideshow/Selenium 3.png",
  "images/Slideshow/SQL 1.png",
  "images/Slideshow/SQL 2.png",
  "images/Slideshow/SQL 3.png",
  "images/Slideshow/Test Cases 1.png",
  "images/Slideshow/Test Cases 2.png",
  "images/Slideshow/Bug Tracker.png"
];

let index = 0;

function changeImage() {
  index = (index + 1) % images.length;
  sliderImg.src = images[index];
}

setInterval(changeImage, 3000); // change every 3s

const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const captionText = document.getElementById("caption");
const certImages = document.querySelectorAll(".cert-img");
const closeBtn = document.querySelector(".close");

certImages.forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});