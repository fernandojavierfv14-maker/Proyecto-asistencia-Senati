if (localStorage.getItem("sesion") !== "activa") { // Si NO hay sesión activa (no pasó por el login)...
  window.location.href = "login.html"; // ...lo mandamos al login
}

var empleados = [ // Lista de empleados de ejemplo: cada uno tiene nombre, cargo y código
  { nombre: "Juan Perez", cargo: "Operario", codigo: "1001" },
  { nombre: "Luis Guevardo", cargo: "Supervisor", codigo: "1002" },
  { nombre: "Carla Rodriguez", cargo: "Tecnico", codigo: "1003" },
  { nombre: "Jose Macedo", cargo: "Caja", codigo: "1004" },
  { nombre: "Pepe Ruiz", cargo: "Administrativa", codigo: "1005" },
  { nombre: "Yasuo Reyes", cargo: "Operario", codigo: "1006" }
];
var lista = document.getElementById("lista"); // La etiqueta <ul> donde irán las filas

function agregarEmpleado(empleado) { // Crea la fila de UN empleado (recibe el empleado)
  var fila = document.createElement("li"); // Crea un <li> vacío
  fila.innerHTML = '<img src="assets/image/usuario-azul.png" alt="">' + // Escribe dentro del <li>: el ícono,
    "<p><b>" + empleado.nombre + "</b><span>" + empleado.cargo + "</span></p>" + // el nombre y el cargo,
    '<img src="assets/image/flecha.svg" alt="">'; // y la flecha
  fila.addEventListener("click", function () { // Cuando se hace clic en la fila...
    localStorage.setItem("empleado", JSON.stringify(empleado)); // ...guarda el empleado elegido (JSON.stringify lo convierte en texto)
    window.location.href = "asistencia.html"; // ...y abre la pantalla de asistencia
  });
  lista.appendChild(fila); // Agrega la fila a la lista
}

for (var i = 0; i < empleados.length; i++) { // Repite 6 veces (una por empleado): i va de 0 a 5
  agregarEmpleado(empleados[i]); // Crea la fila del empleado número i
}
