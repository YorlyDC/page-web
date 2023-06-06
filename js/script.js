// Script JavaScript para controlar el slider
const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slider-slide");
const navItems = document.querySelectorAll(".slider-nav-item");
const overlay = document.querySelectorAll(".slider-overlay");
let currentIndex = 0;
let autoSlideInterval;
let isAutoSlidePaused = false;
let autoSlideTimeout;

// Función para mostrar la imagen actual
function showSlide(index) {
  slider.style.transform = `translateX(-${index * 100}%)`;
  navItems.forEach((item, i) => {
    item.classList.toggle("active", i === index);
  });

  overlay.forEach((item, i) => {
    item.style.opacity = i === index ? 1 : 0;
    item.style.pointerEvents = i === index ? "auto" : "none";
  });
}

// Función para cambiar a la siguiente imagen
function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

// Función para iniciar el desplazamiento automático
function startAutoSlide() {
  autoSlide();
}

function autoSlide() {
  if (!isAutoSlidePaused) {
    autoSlideTimeout = setTimeout(() => {
      nextSlide();
      autoSlide();
    }, 8000);
  }
}

// Función para detener el desplazamiento automático
function stopAutoSlide() {
  clearTimeout(autoSlideTimeout);
}

// Agregar eventos táctiles para dispositivos móviles
slider.addEventListener("touchstart", (event) => {
  touchstartX = event.touches[0].clientX;
  stopAutoSlide();
});

slider.addEventListener("touchend", (event) => {
  touchendX = event.changedTouches[0].clientX;
  if (touchstartX - touchendX > 50) {
    nextSlide();
  } else if (touchendX - touchstartX > 50) {
    currentIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
    showSlide(currentIndex);
  }
  startAutoSlide();
});

// Agregar eventos para pausar/reanudar el desplazamiento automático
slider.addEventListener("mouseenter", () => {
  isAutoSlidePaused = true;
  stopAutoSlide();
});

slider.addEventListener("mouseleave", () => {
  isAutoSlidePaused = false;
  autoSlide();
});

// Mostrar la primera imagen y empezar el desplazamiento automático
showSlide(currentIndex);
startAutoSlide();
