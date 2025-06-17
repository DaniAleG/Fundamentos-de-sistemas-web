
// Ejercicio 1
function calcularSalario() {
  let salario = 1500;
  const incremento = 0.10;
  let resultado = "<h3>Salario por año:</h3><ul>";
  for (let i = 1; i <= 6; i++) {
    resultado += `<li>Año ${i}: $${salario.toFixed(2)}</li>`;
    salario *= 1 + incremento;
  }
  resultado += "</ul>";
  resultado += `<strong>Salario al finalizar 6 años: $${(salario / (1 + incremento)).toFixed(2)}</strong>`;
  document.getElementById("resultado").innerHTML = resultado;
}
  // EJ2 - Hamburguesas
  const f2 = document.getElementById("form2");
  if (f2) f2.addEventListener("submit", e => {
    e.preventDefault();
    const tipo = f2.tipo.value;
    const n = parseInt(f2.cantidad.value);
    let precio = { S: 20, D: 25, T: 28 }[tipo];
    if (!precio || n <= 0) return alert("Datos inválidos.");
    let total = precio * n;
    if (f2.tarjeta.checked) total *= 1.05;
    resultado2.innerHTML = `<p>Total a pagar: $${total.toFixed(2)}</p>`;
  });

  // EJ3 - Contador de números
  const f3 = document.getElementById("form3");
  if (f3) f3.addEventListener("submit", e => {
    e.preventDefault();
    const nums = f3.numeros.value.split(",").map(n => parseFloat(n.trim()));
    if (nums.some(isNaN)) return alert("Números inválidos.");
    let pos = 0, neg = 0, cero = 0;
    nums.forEach(n => n > 0 ? pos++ : n < 0 ? neg++ : cero++);
    resultado3.innerHTML = `<p>Positivos: ${pos}, Negativos: ${neg}, Ceros: ${cero}</p>`;
  });

// EJ4 - Focos
const f4 = document.getElementById("form4");
if (f4) {
  f4.addEventListener("submit", e => {
    e.preventDefault();
    const colores = f4.colores.value.toUpperCase().split(",").map(c => c.trim());
    let v = 0, b = 0, r = 0;
    let invalidos = [];

    colores.forEach(c => {
      if (c === "V") v++;
      else if (c === "B") b++;
      else if (c === "R") r++;
      else if (c !== "") invalidos.push(c); 
    });

    if (invalidos.length > 0) {
      resultado4.innerHTML = `<p style="color:red;">Entrada inválida: ${invalidos.join(", ")}</p>`;
    } else {
      resultado4.innerHTML = `<p>Verdes: ${v}, Blancos: ${b}, Rojos: ${r}</p>`;
    }
  });
}

// Ejercicio 5
function calcularAhorro() {
  const dias = 365;
  let total = 0;
  let diario = 0.03;
  let lista = "<ol>";
  for (let i = 1; i <= dias; i++) {
    lista += `<li>Día ${i}: $${diario.toFixed(2)}</li>`;
    total += diario;
    diario *= 3;
  }
  lista += "</ol>";
  lista += `<strong>Total ahorrado en ${dias} días: $${total.toFixed(2)}</strong>`;
  document.getElementById("resultado").innerHTML = lista;
}
