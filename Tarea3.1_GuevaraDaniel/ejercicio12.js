const prompt = require('prompt-sync')();

console.log("\nEjercicio 12: Descuento del 20% si valor > $200");

let precio;

do {
  precio = parseFloat(prompt("Ingrese el precio total: "));
  if (isNaN(precio) || precio < 0) {
    console.log("Ingrese un precio válido (mayor o igual a 0).");
  }
} while (isNaN(precio) || precio < 0);

let totalPagar = precio;

if (precio > 200) {
  totalPagar = precio * 0.8; // 20% de descuento
}

console.log(`\nEl cliente debe pagar: $${totalPagar.toFixed(2)}`);
