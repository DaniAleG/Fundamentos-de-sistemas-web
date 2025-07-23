const prompt = require('prompt-sync')();

console.log("\nEjercicio 2: Tramo impositivo");

// Validación de la renta
let renta;
do {
  const entrada = prompt("Ingrese su renta anual en euros (€): ").replace(",", ".");
  renta = parseFloat(entrada);
  
  if (isNaN(renta) || renta < 0) {
    console.log("Ingrese un número válido y positivo para la renta.");
  }
} while (isNaN(renta) || renta < 0);

let impuesto = "";

if (renta < 10000) {
  impuesto = "5%";
} else if (renta <= 20000) {
  impuesto = "15%";
} else if (renta <= 35000) {
  impuesto = "20%";
} else if (renta <= 60000) {
  impuesto = "30%";
} else {
  impuesto = "45%";
}

console.log(`A su renta de €${renta.toFixed(2)} le corresponde un tipo impositivo del ${impuesto}.`);
