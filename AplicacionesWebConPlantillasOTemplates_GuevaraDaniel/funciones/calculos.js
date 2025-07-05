function calcularBtn(){
    // Obtener el valor del input id="arrayInput"
    const input = document.getElementById('arrayInput').value;
    
    // Convertir el texto en un arreglo de números
    // -split(",") separa por comas el string
    // -trim() elimina los espacios
    // parse convertir a numero
    // -map() aplica una función a cada elemento del arreglo
    const numero = input.split(",").map(x => parseFloat(x.trim()));

    //presentar el resultado en el div id="resultado"
    const resultado = document.getElementById('resultado');

    //logica
    //verificar si son exactamente 10 numeros
    //verificar si algun elemento no es un numero
    if (numero.length !== 10 || numero.some(isNaN)) {
        resultado.textContent = "Por favor, ingresa exactamente 10 números válidos separados por comas.";
        //cambiar el div alerta
        resultado.className = "alert alert-danger";
    }
    else {
        // Calcular la suma de los números
        //const suma = numero.reduce((acc, curr) => acc + curr, 0);

        //calculo utilizando un for
        let suma = 0;
        for (let i = 0; i < numero.length; i++) {
            suma += numero[i];
        }
        // Mostrar el resultado
        resultado.textContent = `La suma de los números es: ${suma}`;
        resultado.className = "alert alert-success";
    }
}

function generarInputsVectores() {
    const n = parseInt(document.getElementById('n1').value, 10);
    const contenedor = document.getElementById('vectoresInputs');
    contenedor.innerHTML = '';

    if (isNaN(n) || n < 1) {
        contenedor.innerHTML = '<div class="alert alert-danger">Por favor, ingresa un número válido mayor a 0.</div>';
        return;
    }

    // Crear inputs para dos vectores de tamaño n
    let html = '<div class="mb-2"><strong>Vector A:</strong><br>';
    for (let i = 0; i < n; i++) {
        html += `<input type="number" id="a${i}" class="form-control d-inline-block mb-1" style="width:80px;" /> `;
    }
    html += '</div><div class="mb-2"><strong>Vector B:</strong><br>';
    for (let i = 0; i < n; i++) {
        html += `<input type="number" id="b${i}" class="form-control d-inline-block mb-1" style="width:80px;" /> `;
    }
    html += '</div>';
    contenedor.innerHTML = html;

    // Ocultar resultado anterior
    const resultadoDiv = document.getElementById('resultadoSuma');
    resultadoDiv.style.display = 'none';
    resultadoDiv.textContent = '';
    resultadoDiv.className = 'mt-3 alert alert-info';
}

function calcularSumaVectores() {
    const n = parseInt(document.getElementById('n1').value, 10);
    let vectorA = [];
    let vectorB = [];
    let resultado = [];

    const resultadoDiv = document.getElementById('resultadoSuma');

    // Obtener valores de los inputs
    for (let i = 0; i < n; i++) {
        const aInput = document.getElementById(`a${i}`);
        const bInput = document.getElementById(`b${i}`);
        const aVal = aInput ? parseFloat(aInput.value) : NaN;
        const bVal = bInput ? parseFloat(bInput.value) : NaN;
        if (isNaN(aVal) || isNaN(bVal)) {
            resultadoDiv.textContent = "Por favor, ingresa todos los valores de ambos vectores.";
            resultadoDiv.className = "mt-3 alert alert-danger";
            resultadoDiv.style.display = 'block';
            return;
        }
        vectorA.push(aVal);
        vectorB.push(bVal);
        resultado.push(aVal + bVal);
    }

    // Mostrar el resultado
    resultadoDiv.textContent = `Suma de vectores: [${resultado.join(', ')}]`;
    resultadoDiv.className = "mt-3 alert alert-success";
    resultadoDiv.style.display = 'block';
}
//Ejercicio 2
const nombres = [];
const promedios = [];

const form = document.getElementById('alumnosForm');
const tabla = document.getElementById('tablaAlumnos').getElementsByTagName('tbody')[0];
const ordenarBtn = document.getElementById('ordenarBtn');

function actualizarTabla() {
    tabla.innerHTML = '';
    for (let i = 0; i < nombres.length; i++) {
        const row = tabla.insertRow();
        row.insertCell(0).textContent = nombres[i];
        row.insertCell(1).textContent = promedios[i];
    }
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value.trim();
    const promedio = parseFloat(document.getElementById('promedio').value);

    // Validar que el nombre no contenga números
    if (!nombre || /\d/.test(nombre)) {
        alert("El nombre no debe estar vacío ni contener números.");
        return;
    }
    if (isNaN(promedio)) {
        alert("Por favor, ingresa un promedio válido.");
        return;
    }

    nombres.push(nombre);
    promedios.push(promedio);
    actualizarTabla();
    form.reset();
});

ordenarBtn.addEventListener('click', function() {
    // Ordenar ambos arreglos por promedio descendente
    const combinado = nombres.map((nombre, i) => ({ nombre, promedio: promedios[i] }));
    combinado.sort((a, b) => b.promedio - a.promedio);
    for (let i = 0; i < combinado.length; i++) {
        nombres[i] = combinado[i].nombre;
        promedios[i] = combinado[i].promedio;
    }
    actualizarTabla();
});

// Ejercicio 3

    document.getElementById('stockForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const a = document.getElementById('vectorA').value.split(',').map(Number);
        const b = document.getElementById('vectorB').value.split(',').map(Number);
        if (a.length !== 10 || b.length !== 10 || a.some(isNaN) || b.some(isNaN)) {
            document.getElementById('resultado').innerHTML = '<div class="alert alert-danger">Por favor, ingrese exactamente 10 números en cada campo.</div>';
            return;
        }
        const c = a.map((ai, i) => {
            const bi = b[i];
            if (ai === bi) return ai;
            if (bi > ai) return 2 * (bi - ai);
            return bi;
        });
        document.getElementById('resultado').innerHTML = `
            <h5>Resultado (C):</h5>
            <p>${c.join(', ')}</p>
        `;
    });


    function calcularReposicion() {
        for (let i = 0; i < 10; i++) {
        let existencia = parseInt(document.getElementById("existencia" + i).value) || 0;
        let pedido = parseInt(document.getElementById("pedido" + i).value) || 0;
        let resultado;

        if (existencia === pedido) {
            resultado = existencia;
        } else if (pedido > existencia) {
          resultado = 2 * (pedido - existencia);
        } else {
            resultado = pedido;
        }

        document.getElementById("reponer" + i).textContent = resultado;
        }

        document.getElementById("resumenFinal").style.display = "block";
    }
