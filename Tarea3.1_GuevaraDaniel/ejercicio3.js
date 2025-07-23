const prompt = require('prompt-sync')();

console.log("\nEjercicio 3: Precio de entrada según edad");

// Validación de la edad
let edad;
do {
  const entrada = prompt("Ingrese la edad del cliente: ");
  edad = parseInt(entrada);

  if (isNaN(edad) || edad < 0 || edad > 120) {
    console.log("Edad no válida. Ingrese un número entre 0 y 120.");
  }
} while (isNaN(edad) || edad < 0 || edad > 120);

let precio = 0;

if (edad < 4) {
  precio = 0;
} else if (edad <= 18) {
  precio = 5;
} else {
  precio = 10;
}

console.log(`El precio de la entrada para un cliente de ${edad} años es: ${precio === 0 ? "Gratis" : precio + "€"}`);
