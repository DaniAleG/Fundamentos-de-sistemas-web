const prompt = require('prompt-sync')();

console.log("\nEjercicio 9: Contemporáneos");

let juan, mario, pedro;

// Función de validación
function pedirAnio(nombre) {
  let anio;
  do {
    const entrada = prompt(`Año de nacimiento de ${nombre}: `);
    anio = parseInt(entrada);
    if (isNaN(anio) || anio < 1900 || anio > new Date().getFullYear()) {
      console.log("Año no válido. Ingrese un año entre 1900 y el actual.");
    }
  } while (isNaN(anio) || anio < 1900 || anio > new Date().getFullYear());
  return anio;
}

// Entrada con validación
juan = pedirAnio("Juan");
mario = pedirAnio("Mario");
pedro = pedirAnio("Pedro");

// Determinar contemporaneidad
let hayContemporaneos = false;

console.log("\nResultados:");

if (Math.abs(juan - mario) <= 5) {
  console.log("Juan y Mario son contemporáneos");
  hayContemporaneos = true;
}
if (Math.abs(juan - pedro) <= 5) {
  console.log("Juan y Pedro son contemporáneos");
  hayContemporaneos = true;
}
if (Math.abs(mario - pedro) <= 5) {
  console.log("Mario y Pedro son contemporáneos");
  hayContemporaneos = true;
}

if (!hayContemporaneos) {
  console.log("Ninguno de los tres es contemporáneo con otro.");
}
