var empleado = JSON.parse(localStorage.getItem("empleado")); // Lee el empleado elegido en la lista (JSON.parse convierte el texto en objeto)

var nombre = document.getElementById("nombre"); // Textos de la tarjeta del empleado
var cargo = document.getElementById("cargo");
var hora = document.getElementById("hora");
var formCodigo = document.getElementById("formCodigo"); // Formulario del código
var codigo = document.getElementById("codigo"); // Campo del código
var avisoCodigo = document.getElementById("avisoCodigo"); // Texto del aviso de la izquierda
var lienzo = document.getElementById("lienzo"); // Hoja invisible para dibujar la foto

if (localStorage.getItem("sesion") !== "activa" || empleado === null) { // Si no hay sesión O no se eligió empleado...
  window.location.href = "dashboard.html"; // ...vuelve a la lista (y ahí, si falta la sesión, pasa al login)
} else { // Si todo está bien...
  nombre.textContent = empleado.nombre; // ...escribe el nombre del empleado en la tarjeta
  cargo.textContent = empleado.cargo; // ...y su cargo
}
