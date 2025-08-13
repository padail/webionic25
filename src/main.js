const humb = document.getElementById("humb");
const navLinks = document.getElementById("nav-links");
const car1 = document.querySelector(".carousel1");
const car2 = document.querySelector(".carousel2");
const car3 = document.querySelector(".carousel3");

const buttonRight1 = document.getElementById("buttonRight1");
const buttonRight2 = document.getElementById("buttonRight2");
const buttonLeft1 = document.getElementById("buttonLeft1");
const buttonLeft2 = document.getElementById("buttonLeft2");

// footer
document.getElementById("y").textContent = new Date().getFullYear();

// HUMB menu
humb.addEventListener("click", () => {
  navLinks.classList.toggle("right-0");
  navLinks.classList.toggle("right-[-400px]");
});

// CAROUSEL
//  buttonRight1
buttonRight1.addEventListener("click", () => {
  car1.classList.add("hidden");
  car3.classList.add("hidden");
  car2.classList.remove("hidden");
  car2.classList.add("transition-all", "duration-300", "ease-in-out");
});

// buttonRight2
buttonRight2.addEventListener("click", () => {
  car1.classList.add("hidden");
  car2.classList.add("hidden");
  car3.classList.remove("hidden");
});

// buttonLeft1
buttonLeft1.addEventListener("click", () => {
  car2.classList.add("hidden");
  car3.classList.add("hidden");
  car1.classList.remove("hidden");
});

// buttonLeft2
buttonLeft2.addEventListener("click", () => {
  car1.classList.add("hidden");
  car3.classList.add("hidden");
  car2.classList.remove("hidden");
});

// scroll
// Menambahkan gambar yang sama lagi untuk membuat efek infinite scroll
const scrollContainer1 = document.querySelector(".scroll-images");
const images1 = document.querySelectorAll(".scroll-images .relative");

// Menyalin gambar yang ada dan menambahkannya ke dalam container
images1.forEach((img1) => {
  const clone1 = img1.cloneNode(true);
  scrollContainer1.appendChild(clone1);
});

const scrollContainer = document.querySelector(".scroll-spons");
const images = document.querySelectorAll(".scroll-spons .relative");

// Menyalin gambar yang ada dan menambahkannya ke dalam container
images.forEach((img) => {
  const clone = img.cloneNode(true);
  scrollContainer.appendChild(clone);
});

// AOS
function addAOSAttributes() {
  const sections = document.querySelectorAll(".anim-section");

  sections.forEach((section) => {
    section.setAttribute("data-aos", "fade-up");
    section.setAttribute("data-aos-duration", "1000");
  });
}

function removeAOSAttributes() {
  const sections = document.querySelectorAll(".anim-section");

  sections.forEach((section) => {
    section.removeAttribute("data-aos");
    section.removeAttribute("data-aos-duration");
  });
}

function handleResize() {
  if (window.innerWidth >= 768) {
    //mode desktop
    addAOSAttributes();
  } else {
    removeAOSAttributes();
  }
}

handleResize();

window.addEventListener("resize", handleResize);

AOS.init();
