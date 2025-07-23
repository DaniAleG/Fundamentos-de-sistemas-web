const prompt = require('prompt-sync')();

console.log("\nEjercicio 10: Precio de venta con ganancia");

// Solicitar costo con validación
let costo;
do {
  costo = parseFloat(prompt("Ingrese el costo del artículo: "));
  if (isNaN(costo) || costo <= 0) {
    console.log("Ingrese un valor numérico válido y mayor a 0.");
  }
} while (isNaN(costo) || costo <= 0);

// Cálculo del precio de venta
const ganancia = 0.15;
const precioVenta = costo * (1 + ganancia);

// Mostrar resultados
console.log(`\nCosto del artículo: $${costo.toFixed(2)}`);
console.log(`Ganancia del 15%: $${(costo * ganancia).toFixed(2)}`);
console.log(`Precio de venta: $${precioVenta.toFixed(2)}`);
