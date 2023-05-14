// Selecciona todas las imágenes con el atributo data-src
const lazyImages = document.querySelectorAll('img[data-src]');

// Crea una instancia del Intersection Observer
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const img = entry.target;
            const src = img.getAttribute('data-src');

            // Crea una nueva imagen
            const newImg = new Image();
            newImg.src = src;

            // Reemplaza la imagen existente con la nueva imagen cargada
            newImg.onload = () => {
                img.src = newImg.src;
                img.removeAttribute('data-src');
            };

            // Deja de observar la imagen una vez que se haya cargado
            observer.unobserve(img);
        }
    });
});

// Observa cada imagen
lazyImages.forEach((img) => {
    observer.observe(img);
});
