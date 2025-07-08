document.addEventListener("DOMContentLoaded", function () {
  // Swiper
  const aboutSlider = new Swiper(".about-slider", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  });

  // form scripts
  emailjs.init("iIk3Z-iVtbuKOsxYs"); 
  const form = document.getElementById("contact-form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs
      .sendForm("service_tjkx17x", "template_difsjbf", this)
      .then(
        () => {
          alert("¡Mensaje enviado correctamente!");
          form.reset();
        },
        (error) => {
          console.error("Error al enviar:", error);
          alert("Error al enviar el mensaje. Intenta más tarde.");
        }
      );
  });
});
