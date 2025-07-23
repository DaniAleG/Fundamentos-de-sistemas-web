const prompt = require('prompt-sync')();

console.log("\nEjercicio 4: Elección de pizza");

let tipoPizza = "";
do {
  tipoPizza = prompt("¿Desea una pizza vegetariana? (s/n): ").toLowerCase();
  if (tipoPizza !== "s" && tipoPizza !== "n") {
    console.log("Opción inválida. Ingrese 's' para sí o 'n' para no.");
  }
} while (tipoPizza !== "s" && tipoPizza !== "n");

const esVegetariana = tipoPizza === "s";

const ingredientesVegetarianos = ["Pimiento", "Tofu"];
const ingredientesNoVegetarianos = ["Peperoni", "Jamón", "Salmón"];

let opciones = [];

if (esVegetariana) {
  opciones = ingredientesVegetarianos;
  console.log("\nIngredientes vegetarianos disponibles:");
} else {
  opciones = ingredientesVegetarianos.concat(ingredientesNoVegetarianos);
  console.log("\nIngredientes disponibles:");
}

// Mostrar opciones numeradas
opciones.forEach((ing, i) => {
  console.log(`${i + 1}. ${ing}`);
});

// Validación de elección
let eleccion;
do {
  eleccion = parseInt(prompt("Elija el número del ingrediente: "));
  if (isNaN(eleccion) || eleccion < 1 || eleccion > opciones.length) {
    console.log("Número inválido. Seleccione una opción del 1 al " + opciones.length);
  }
} while (isNaN(eleccion) || eleccion < 1 || eleccion > opciones.length);

const ingredienteElegido = opciones[eleccion - 1];

// Resultado final
console.log(`\nTu pizza ${esVegetariana ? "vegetariana" : "no vegetariana"} lleva:`);
console.log("- Tomate");
console.log("- Mozzarella");
console.log(`- ${ingredienteElegido}`);
