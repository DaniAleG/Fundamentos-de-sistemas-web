document.getElementById('calcular-calorias').addEventListener('click', function() {
        let total = 0;
        const filas = document.querySelectorAll('#tabla-ingredientes tbody tr');
        filas.forEach(fila => {
            const calorias = parseInt(fila.children[2].textContent) || 0;
            total += calorias;
        });
        const resultado = document.getElementById('resultado-calorias');
        resultado.textContent = 'Calorías totales: ' + total;
        resultado.classList.remove('d-none');
    });

function confirmarEnvio() {
    return confirm('¿Estás seguro de que deseas enviar la receta?');
}

