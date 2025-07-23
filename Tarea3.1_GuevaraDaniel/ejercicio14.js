const prompt = require('prompt-sync')();

console.log("\nEjercicio 14: Frutería - Descuento por cantidad de manzanas");

let precioKilo, kilos;

do {
  precioKilo = parseFloat(prompt("Ingrese el precio por kilo de manzana ($): "));
  if (isNaN(precioKilo) || precioKilo <= 0) {
    console.log("Ingrese un precio válido (> 0).");
  }
} while (isNaN(precioKilo) || precioKilo <= 0);

do {
  kilos = parseFloat(prompt("Ingrese los kilos de manzana comprados: "));
  if (isNaN(kilos) || kilos <= 0) {
    console.log("Ingrese un peso válido (> 0).");
  }
} while (isNaN(kilos) || kilos <= 0);

let subtotal = precioKilo * kilos;
let descuento = 0;

if (kilos > 2 && kilos <= 5) {
  descuento = subtotal * 0.10;
} else if (kilos > 5 && kilos <= 10) {
  descuento = subtotal * 0.15;
} else if (kilos > 10) {
  descuento = subtotal * 0.20;
}

let total = subtotal - descuento;

console.log(`\nSubtotal: $${subtotal.toFixed(2)}`);
console.log(`Descuento aplicado: $${descuento.toFixed(2)}`);
console.log(`Total a pagar: $${total.toFixed(2)}`);
