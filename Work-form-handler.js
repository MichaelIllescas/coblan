document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("work-form").addEventListener("submit", function (event) {
      event.preventDefault(); // Evita la recarga de la página

      let submitButton = document.getElementById("submit-btn");
      let loadingSpinner = document.getElementById("loading-spinner");
      let confirmationMessage = document.getElementById("confirmation-message");
      let backToHome = document.getElementById("back-to-home");

      console.log("Formulario enviado, mostrando cargando...");

      // 🔹 Validar que el usuario haya resuelto el reCAPTCHA
      let recaptchaResponse = document.querySelector("[name='g-recaptcha-response']").value;
      if (!recaptchaResponse) {
          alert("Por favor, completa el captcha antes de enviar el formulario.");
          return;
      }

      // Ocultar botón de envío y mostrar el spinner
      submitButton.style.display = "none";
      loadingSpinner.classList.remove("d-none");

      // Obtener los datos del formulario
      let formData = new FormData(this); // Captura automáticamente todos los campos del formulario

      // 🔹 Enviar los datos a Getform con Fetch
      fetch("https://getform.io/f/azywnlwb", { // Reemplaza con tu URL de Getform
          method: "POST",
          body: formData,
          headers: {
              "Accept": "application/json"
          }
      })
      .then(response => response.json())
      .then(data => {
          console.log("Correo enviado con éxito.", data);

          // Ocultar el spinner y mostrar mensaje de confirmación
          loadingSpinner.classList.add("d-none");
          confirmationMessage.classList.remove("d-none");
          confirmationMessage.style.display = "block";
          backToHome.classList.remove("d-none"); // Mostrar botón "Volver al Inicio"

          // Limpiar el formulario después de enviarlo
          document.getElementById("work-form").reset();

          // Resetear el reCAPTCHA si está presente
          if (typeof grecaptcha !== "undefined") {
              grecaptcha.reset();
          }

          // Ocultar el mensaje de confirmación después de 5 segundos
          setTimeout(() => {
              confirmationMessage.classList.add("d-none");
              confirmationMessage.style.display = "none";
              submitButton.style.display = "block";
          }, 5000);
      })
      .catch(error => {
          console.error("Error al enviar el formulario:", error);
          alert("Hubo un error al enviar el mensaje. Inténtalo nuevamente.");
      })
      .finally(() => {
          // Volver a mostrar el botón si hubo un error
          setTimeout(() => {
              submitButton.style.display = "block";
          }, 3000);
      });
  });
});
