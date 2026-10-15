var menu = document.querySelector("nav"); // querySelector busca la primera etiqueta <nav> (el menú)
var fondo = document.getElementById("fondo"); // El fondo oscuro detrás del menú
var botonAbrir = document.getElementById("abrirMenu"); // El botón hamburguesa

function alternarMenu() { // Muestra el menú si está oculto y lo oculta si está visible
  menu.classList.toggle("oculto"); // toggle: si tiene la clase "oculto" la quita; si no la tiene, la pone
  fondo.classList.toggle("oculto"); // Lo mismo con el fondo oscuro
}

botonAbrir.addEventListener("click", alternarMenu); // Al presionar la hamburguesa se abre o cierra el menú
fondo.addEventListener("click", alternarMenu); // Al presionar el fondo oscuro, el menú se cierra

document.getElementById("salir").addEventListener("click", function () { // Al presionar "Cerrar sesion"
  localStorage.removeItem("sesion"); // Borra la sesión guardada (el enlace luego abre login.html)
});

document.getElementById("reporte").addEventListener("click", function () { // Al presionar "Reporte de asistencias"
  var registros = JSON.parse(localStorage.getItem("registros")); // Lee las asistencias guardadas (JSON.parse convierte el texto en lista)
  if (registros === null) { // Si todavía no hay ninguna...
    alert("Todavia no hay asistencias registradas"); // ...avisa
    return; // ...y termina la función
  }
  var texto = "Asistencias registradas: " + registros.length; // Empieza el texto con la cantidad
  for (var i = 0; i < registros.length; i++) { // Recorre cada asistencia
    texto = texto + "\n" + registros[i].nombre + " - " + registros[i].fecha + " " + registros[i].hora; // Agrega una línea por asistencia (\n = salto de línea)
  }
  alert(texto); // Muestra la ventana con el reporte
});
