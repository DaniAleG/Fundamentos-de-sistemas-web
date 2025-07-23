const prompt = require('prompt-sync')();

console.log("\nEjercicio 6: Descuento por docenas");

let precioPorDocena, docenasCompradas;

// Validación del precio por docena
do {
  const entradaPrecio = prompt("Ingrese el precio por docena: ").replace(",", ".");
  precioPorDocena = parseFloat(entradaPrecio);
  if (isNaN(precioPorDocena) || precioPorDocena <= 0) {
    console.log("Ingrese un precio válido (mayor que 0).");
  }
} while (isNaN(precioPorDocena) || precioPorDocena <= 0);

// Validación de cantidad de docenas
do {
  const entradaCantidad = prompt("Ingrese la cantidad de docenas compradas: ");
  docenasCompradas = parseInt(entradaCantidad);
  if (isNaN(docenasCompradas) || docenasCompradas <= 0) {
    console.log("Ingrese una cantidad válida (entero mayor que 0).");
  }
} while (isNaN(docenasCompradas) || docenasCompradas <= 0);

// Cálculo del subtotal
const subtotal = precioPorDocena * docenasCompradas;

let descuento = 0;
let unidadesGratis = 0;

if (docenasCompradas > 3) {
  descuento = subtotal * 0.15;
  unidadesGratis = docenasCompradas - 3;
} else {
  descuento = subtotal * 0.10;
}

const totalPagar = subtotal - descuento;

// Mostrar resultados
console.log("\n🛒 RESUMEN DE COMPRA");
console.log(`Monto total antes del descuento: $${subtotal.toFixed(2)}`);
console.log(`Descuento aplicado: $${descuento.toFixed(2)}`);
console.log(`Total a pagar: $${totalPagar.toFixed(2)}`);
console.log(`Unidades de obsequio: ${unidadesGratis}`);
