var formulario = document.getElementById("formLogin"); // getElementById busca un elemento por su id y lo guarda en la variable
var correo = document.getElementById("correo"); // Campo del correo
var clave = document.getElementById("clave"); // Campo de la contraseña
var mensaje = document.getElementById("mensaje"); // Párrafo donde se escribe el aviso de error

formulario.addEventListener("submit", function (evento) { // Cuando se envía el formulario (botón INGRESAR) se ejecuta esta función
  evento.preventDefault(); // Evita que la página se recargue sola
  if (correo.value === "" || clave.value === "") { // Si el correo O la contraseña están vacíos...
    mensaje.textContent = "Complete todos los campos"; // ...escribe el aviso de error en el párrafo
  } else { // Si los dos tienen algo escrito...
    localStorage.setItem("sesion", "activa"); // ...guarda en el navegador que la sesión está activa
    window.location.href = "dashboard.html"; // ...y abre la pantalla de la lista de empleados
  }
});
