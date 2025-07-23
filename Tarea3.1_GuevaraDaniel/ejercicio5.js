const prompt = require('prompt-sync')();

console.log("\nEjercicio 5: Estacionamiento");

let horas, minutos;

// Validación de horas
do {
  const entradaHoras = prompt("Ingrese las horas de estacionamiento: ");
  horas = parseInt(entradaHoras);
  if (isNaN(horas) || horas < 0) {
    console.log("Ingrese un número válido de horas (≥ 0).");
  }
} while (isNaN(horas) || horas < 0);

// Validación de minutos
do {
  const entradaMin = prompt("Ingrese los minutos adicionales (0-59): ");
  minutos = parseInt(entradaMin);
  if (isNaN(minutos) || minutos < 0 || minutos >= 60) {
    console.log("Ingrese minutos válidos (entre 0 y 59).");
  }
} while (isNaN(minutos) || minutos < 0 || minutos >= 60);

// Calcular tiempo total en minutos
const totalMinutos = horas * 60 + minutos;

// Redondear hacia arriba cada fracción de hora
const horasFacturadas = Math.ceil(totalMinutos / 60);
const tarifa = 1500;
const total = horasFacturadas * tarifa;

// Mostrar resultado
console.log(`\nTiempo total: ${horas}h ${minutos}min`);
console.log(`Se facturan ${horasFacturadas} hora(s).`);
console.log(`Total a pagar: $${total}`);
