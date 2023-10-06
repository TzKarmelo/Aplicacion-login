document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("login-form");
  const errorMessage = document.getElementById("error-message");

  loginForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;

      // Aquí deberías implementar la lógica de validación del lado del cliente.
      // Puedes comparar las credenciales con valores predefinidos o enviar una solicitud
      // al servidor para verificar las credenciales.

      if (username === "1" && password === "1") {
          // Aquí redirige al usuario a la página de inicio o realiza otras acciones.
          alert("Inicio de sesión exitoso");
      } else {
          errorMessage.textContent = "Credenciales incorrectas. Por favor, inténtalo de nuevo.";
      }
  });
});
