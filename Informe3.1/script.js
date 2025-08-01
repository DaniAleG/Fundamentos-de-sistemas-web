
let productos = ["Arroz", "Leche", "Pan"];
let tareas = ["Estudiar", "Lavar ropa", "Pagar cuentas"];

function mostrarArreglo(id, arreglo) {
  document.getElementById(id).innerHTML = arreglo.length ? arreglo.join(", ") : "<em>Lista terminada!</em>";
}

function agregarProducto() {
  const input = document.getElementById("nuevoProducto");
  const nuevo = input.value.trim();
  // Solo letras y espacios, sin números ni símbolos
  if (nuevo && /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/.test(nuevo)) {
    productos.unshift(nuevo); 
    mostrarArreglo("productos", productos);
    input.value = "";
    document.getElementById("mensajeProducto").innerHTML = "";
  } else {
    document.getElementById("mensajeProducto").innerHTML = "<em>Solo se permiten letras y espacios.</em>";
  }
}

function eliminarTarea() {
  if (tareas.length) {
    const eliminado = tareas.shift(); 
    mostrarArreglo("tareas", tareas);
    document.getElementById("mensajeTarea").innerHTML = `Tarea eliminada: ${eliminado}`;
  } else {
    document.getElementById("mensajeTarea").innerHTML = "<em>No hay tareas por hacer.</em>";
  }
}


mostrarArreglo("productos", productos);
mostrarArreglo("tareas", tareas);
