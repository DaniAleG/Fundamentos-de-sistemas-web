    // Datos de productos 
    const productos = [
        "Leche", "Cereal", "Gomitas", "Coca-Cola", "Doritos",
        "Harina de maíz", "Mantequilla", "Queso", "Ruffles", "Avena Polaca"
    ];
    let A = []; 

    // Genera la tabla de productos con inputs para existencias y pedidos
    function generarTablaProductos() {
        const tbody = document.querySelector('#tablaProductos tbody');
        tbody.innerHTML = '';
        A = [];
        for (let i = 0; i < 10; i++) {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${productos[i]}</td>
                <td><input type="number" min="0" class="form-control existencia-input" value="" data-index="${i}" autocomplete="off" inputmode="numeric" pattern="\\d*" required></td>
                <td><input type="number" min="0" class="form-control pedido-input" value="" data-index="${i}" autocomplete="off" inputmode="numeric" pattern="\\d*" required></td>
                <td class="compra-td">0</td>
            `;
            tbody.appendChild(row);
        }
    }

    // Calcula las compras necesarias y valida los inputs
    function calcularCompras() {
        const tbody = document.querySelector('#tablaProductos tbody');
        const existenciaInputs = document.querySelectorAll('.existencia-input');
        const pedidoInputs = document.querySelectorAll('.pedido-input');
        let error = false;
        const B = [];
        const C = [];
        A = [];
        existenciaInputs.forEach((input, i) => {
            const existenciaStr = input.value.trim();
            if (existenciaStr === '' || isNaN(existenciaStr) || !/^[0-9]+$/.test(existenciaStr)) {
                error = true;
                A[i] = null;
            } else {
                A[i] = parseInt(existenciaStr);
            }
        });
        pedidoInputs.forEach((input, i) => {
            const pedidoStr = input.value.trim();
            const compraTd = tbody.rows[i].querySelector('.compra-td');
            // Validación: no vacío, solo números, no letras, no negativos, y existencia válida
            if (
                pedidoStr === '' || isNaN(pedidoStr) || !/^[0-9]+$/.test(pedidoStr) ||
                A[i] === null
            ) {
                compraTd.textContent = 'Error';
                compraTd.classList.add('text-danger');
                error = true;
                B[i] = null;
                C[i] = null;
            } else {
                compraTd.classList.remove('text-danger');
                const pedido = parseInt(pedidoStr);
                B[i] = pedido;
                let compra = 0;
                if (pedido > A[i]) {
                    compra = pedido - A[i];
                } else {
                    compra = 0;
                }
                C[i] = compra;
                compraTd.textContent = compra;
            }
        });
        if (error) {
            alert('Por favor, ingresa solo números enteros positivos en existencias y pedidos.');
        }
    }

    // Llama a generarTablaProductos al cargar la página
    document.addEventListener('DOMContentLoaded', generarTablaProductos);