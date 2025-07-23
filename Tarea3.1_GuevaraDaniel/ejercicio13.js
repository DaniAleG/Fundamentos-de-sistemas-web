const prompt = require('prompt-sync')();

console.log("\nEjercicio 13: Descuento según cantidad de artículos");

let precioUnitario, cantidad;

do {
  precioUnitario = parseFloat(prompt("Ingrese el precio unitario del artículo: "));
  if (isNaN(precioUnitario) || precioUnitario <= 0) {
    console.log("Ingrese un precio unitario válido (> 0).");
  }
} while (isNaN(precioUnitario) || precioUnitario <= 0);

do {
  cantidad = parseInt(prompt("Ingrese la cantidad de artículos adquiridos: "));
  if (isNaN(cantidad) || cantidad <= 0) {
    console.log("Ingrese una cantidad válida (> 0).");
  }
} while (isNaN(cantidad) || cantidad <= 0);

let subtotal = precioUnitario * cantidad;
let descuento = 0;

if (cantidad > 20) {
  descuento = subtotal * 0.10; // 10% descuento
} else if (cantidad > 10) {
  descuento = subtotal * 0.05; // 5% descuento
}

let totalPagar = subtotal - descuento;

console.log(`\nSubtotal: $${subtotal.toFixed(2)}`);
console.log(`Descuento aplicado: $${descuento.toFixed(2)}`);
console.log(`Total a pagar: $${totalPagar.toFixed(2)}`);
