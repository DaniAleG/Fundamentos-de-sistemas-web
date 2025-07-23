const prompt = require('prompt-sync')();

console.log("\nEjercicio 11: Calificación final");

// Función para validar nota dentro de un rango
function pedirNota(mensaje, min, max) {
  let nota;
  do {
    nota = parseFloat(prompt(mensaje));
    if (isNaN(nota) || nota < min || nota > max) {
      console.log(`Ingrese una nota válida entre ${min} y ${max}.`);
    }
  } while (isNaN(nota) || nota < min || nota > max);
  return nota;
}

// Pedir notas con validación
const examen = pedirNota("Ingrese nota del examen escrito (0 a 100): ", 0, 100);
const lecciones = pedirNota("Ingrese nota de lecciones (0 a 10): ", 0, 10);
const tareas = pedirNota("Ingrese nota de tareas (0 a 10): ", 0, 10);
const practicas = pedirNota("Ingrese nota de prácticas (0 a 10): ", 0, 10);

// Cálculo de la nota final
// Examen se pondera 60%, pero está sobre 100, así que se escala a 20 puntos dividiendo entre 5
// Los otros componentes ya están sobre 10, se ponderan y suman directamente
const notaFinal = 
  (examen * 0.6) / 5 +  // escala examen a 12 puntos
  (lecciones * 0.2) +   // 2 puntos máximo
  (tareas * 0.15) +     // 1.5 puntos máximo
  (practicas * 0.05);   // 0.5 puntos máximo

console.log(`\nLa calificación final es: ${notaFinal.toFixed(2)} / 20`);
