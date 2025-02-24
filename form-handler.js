document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form"); // Detecta cualquier formulario en la página
    const submitBtn = document.getElementById("submit-btn");
    const loadingSpinner = document.getElementById("loading-spinner");
    const confirmationMessage = document.getElementById("confirmation-message");
    const backToHome = document.getElementById("back-to-home");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault(); // Evita el envío estándar del formulario

            // Ocultar el botón de envío y mostrar el indicador de carga
            if (submitBtn) submitBtn.classList.add("d-none");
            if (loadingSpinner) loadingSpinner.classList.remove("d-none");

            // Simulación de envío con un retraso de 3 segundos
            setTimeout(function () {
                if (loadingSpinner) loadingSpinner.classList.add("d-none"); // Ocultar carga
                if (confirmationMessage) confirmationMessage.classList.remove("d-none"); // Mostrar mensaje de éxito
                form.reset(); // Limpiar formulario

                // Mostrar el botón fijo de "Volver al Inicio"
                if (backToHome) backToHome.classList.remove("d-none");

                // Volver a mostrar el botón de envío después de 5 segundos
                setTimeout(function () {
                    if (submitBtn) submitBtn.classList.remove("d-none");
                    if (confirmationMessage) confirmationMessage.classList.add("d-none");
                }, 5000);
            }, 3000);
        });
    }
});
