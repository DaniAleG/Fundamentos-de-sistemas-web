const prompt = require('prompt-sync')();

console.log("\nEjercicio 1: Clasificación por grupo A o B");

// Validación del nombre
let nombre = "";
do {
  nombre = prompt("Ingrese su nombre: ").trim();
  if (!/^[a-zA-Z]+$/.test(nombre)) {
    console.log("El nombre debe contener solo letras.");
  }
} while (!/^[a-zA-Z]+$/.test(nombre));

// Validación del sexo
let sexo = "";
do {
  sexo = prompt("Ingrese su sexo (M/F): ").toUpperCase();
  if (sexo !== "M" && sexo !== "F") {
    console.log("Sexo no válido. Ingrese 'M' o 'F'.");
  }
} while (sexo !== "M" && sexo !== "F");

const inicial = nombre[0].toUpperCase();
let grupo = "";

// Corrección de condiciones:
if ((sexo === "F" && inicial < "M") || 
    (sexo === "M" && inicial > "N")) {
  grupo = "Grupo A";
} else {
  grupo = "Grupo B";
}

console.log(`Hola ${nombre}, perteneces al ${grupo}.`);
