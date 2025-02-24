document.addEventListener("DOMContentLoaded", function () {
    const faqItems = document.querySelectorAll(".faq-item");
  
    faqItems.forEach((item) => {
      const toggle = item.querySelector(".faq-toggle");
      const content = item.querySelector(".faq-content");
      const question = item.querySelector("h3");
  
      function toggleFaq() {
        // Cerrar todas las demás respuestas antes de abrir una nueva
        faqItems.forEach((otherItem) => {
          if (otherItem !== item) {
            otherItem.classList.remove("faq-active");
            otherItem.querySelector(".faq-content").style.maxHeight = null;
            otherItem.querySelector(".faq-toggle").classList.replace("bi-chevron-down", "bi-chevron-right");
          }
        });
  
        // Alternar la clase 'faq-active' y aplicar la animación
        item.classList.toggle("faq-active");
  
        if (item.classList.contains("faq-active")) {
          content.style.maxHeight = content.scrollHeight + "px";
          toggle.classList.replace("bi-chevron-right", "bi-chevron-down");
        } else {
          content.style.maxHeight = null;
          toggle.classList.replace("bi-chevron-down", "bi-chevron-right");
        }
      }
  
      // Agregar el evento de click al ícono y a la pregunta
      toggle.addEventListener("click", toggleFaq);
      question.addEventListener("click", toggleFaq);
    });
  });
  