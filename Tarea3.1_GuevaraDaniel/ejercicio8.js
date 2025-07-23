const prompt = require('prompt-sync')();

console.log("\nEjercicio 8: Alquiler de vehículo");

// Validación de entrada
let km;
do {
  const entrada = prompt("Ingrese los km recorridos: ").replace(",", ".");
  km = parseFloat(entrada);

  if (isNaN(km) || km < 0) {
    console.log("Ingrese un valor válido (km ≥ 0).");
  }
} while (isNaN(km) || km < 0);

// Cálculo del total con IVA incluido
let total = 300000;

if (km > 300 && km <= 1000) {
  total += (km - 300) * 15000;
} else if (km > 1000) {
  total += (700 * 15000) + ((km - 1000) * 10000);
}

// Cálculo del IVA incluido en el total
const iva = total * (20 / 120); // 20% de un total que ya incluye el IVA
const baseSinIVA = total - iva;

// Mostrar resultados
console.log(`\nTotal a pagar (IVA incluido): $${total.toFixed(2)}`);
console.log(`Monto sin IVA: $${baseSinIVA.toFixed(2)}`);
console.log(`IVA (20%): $${iva.toFixed(2)}`);
