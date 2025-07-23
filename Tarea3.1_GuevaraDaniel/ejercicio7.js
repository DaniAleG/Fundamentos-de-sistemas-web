const prompt = require('prompt-sync')();

console.log("\nEjercicio 7: Número palíndromo de 3 cifras");

let numero;

do {
  numero = prompt("Ingrese un número entero de 3 cifras: ").trim();

  if (!/^\d{3}$/.test(numero)) {
    console.log("Error: Debe ingresar exactamente 3 cifras (de 100 a 999).");
  }
} while (!/^\d{3}$/.test(numero));

const invertido = numero.split('').reverse().join('');

if (numero === invertido) {
  console.log("El número es igual al reverso: es un palíndromo.");
} else {
  console.log("El número NO es igual al reverso.");
}
