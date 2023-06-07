const swiper = new Swiper(".swiper-hero", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    effect: "fade",
    autoplay: {
        delay: 5000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
    },

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
      dynamicMainBullets: 2,
    },

    // Navigation arrows
    //navigation: {
    //    nextEl: '.swiper-button-next',
    //    prevEl: '.swiper-button-prev',
    //  },

    // And if we need scrollbar
    //scrollbar: {
    //  el: ".swiper-scrollbar",
    //},
  });
