const prompt = require('prompt-sync')();

console.log("\nEjercicio 15: Interruptores eléctricos");

let interruptor1, interruptor2, interruptor3;

function leerEstado(numero) {
  let estado;
  do {
    estado = parseInt(prompt(`Ingrese estado del interruptor ${numero} (0 = abierto, 1 = cerrado): `));
    if (![0, 1].includes(estado)) {
      console.log("Estado inválido. Debe ser 0 o 1.");
    }
  } while (![0, 1].includes(estado));
  return estado;
}

interruptor1 = leerEstado(1);
interruptor2 = leerEstado(2);
interruptor3 = leerEstado(3);

const cantidadCerrados = interruptor1 + interruptor2 + interruptor3;

if (cantidadCerrados >= 2) {
  console.log("\nEl equipo funcionará (al menos dos interruptores están cerrados).");
} else {
  console.log("\nEl equipo NO funcionará (menos de dos interruptores cerrados).");
}
