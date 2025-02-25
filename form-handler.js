document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("budget-form").addEventListener("submit", function (event) {
      event.preventDefault(); // Evita la recarga de la página
  
      let form = this;
      let submitButton = document.getElementById("submit-btn");
      let loadingSpinner = document.getElementById("loading-spinner");
      let confirmationMessage = document.getElementById("confirmation-message");
      let backToHome = document.getElementById("back-to-home");
  
      console.log("Formulario enviado, mostrando cargando...");
  
      // Ocultar botón de envío y mostrar el spinner
      submitButton.style.display = "none";
      loadingSpinner.classList.remove("d-none");
  
      let formData = new FormData(form);
  
      fetch("https://formsubmit.co/ajax/info@coblan.org", {
        method: "POST",
        body: formData
      })
      .then(response => response.json()) // Convertimos la respuesta a JSON
      .then(data => {
        if (data.success === "true") {
         
  
          // Ocultar el spinner y mostrar mensaje de confirmación
          loadingSpinner.classList.add("d-none");
          confirmationMessage.classList.remove("d-none"); // Mostrar mensaje
          confirmationMessage.style.display = "block"; // Asegurar visibilidad
          backToHome.classList.remove("d-none"); // Mostrar botón "Volver al Inicio"
  
          // Limpiar el formulario después de enviarlo
          form.reset();
  
          // Ocultar el mensaje de confirmación después de 5 segundos
          setTimeout(() => {
            confirmationMessage.classList.add("d-none");
            confirmationMessage.style.display = "none";
            submitButton.style.display = "block"; // Volver a mostrar el botón de enviar
           
          }, 5000);
        } else {
          alert("Hubo un error al enviar el mensaje. Inténtalo nuevamente.");
        }
      })
      .catch(error => {
        alert("Error de conexión. Inténtalo más tarde.");
      })
      .finally(() => {
        // Volver a mostrar el botón si hubo un error
        setTimeout(() => {
          submitButton.style.display = "block";
        }, 3000);
      });
    });
  });
  