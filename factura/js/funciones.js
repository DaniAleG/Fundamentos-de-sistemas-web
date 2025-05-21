// Variables globales
let subtotal = 0;
let totalDescuento = 0;

// Agregar producto
function agregarProducto() {
    const codigo = document.getElementById("codigo").value.trim();
    const cantidad = parseInt(document.getElementById("cantidad").value);
    const descripcion = document.getElementById("descripcion").value.trim();
    const precio = parseFloat(document.getElementById("precio").value);
    const descuento = parseFloat(document.getElementById("descuento").value || 0);

    // Validaciones
    if (codigo === "") {
        alert("Por favor ingresa un código");
        return;
    }
    if (isNaN(cantidad) || cantidad <= 0) {
        alert("Por favor ingresa una cantidad válida");
        return;
    }
    if (descripcion === "") {
        alert("Por favor ingresa una descripción");
        return;
    }
    if (isNaN(precio) || precio <= 0) {
        alert("Por favor ingresa un precio válido");
        return;
    }
    if (isNaN(descuento) || descuento < 0) {
        alert("Por favor ingresa un descuento válido");
        return;
    }

    // Cálculos
    const totalProducto = precio * cantidad; // Solo precio * cantidad
    subtotal += totalProducto;
    totalDescuento += descuento;

    // Insertar fila en la tabla
    const tabla = document.getElementById('tabla').getElementsByTagName('tbody')[0];
    const fila = tabla.insertRow();
    fila.innerHTML = `
        <td>${codigo}</td>
        <td>${cantidad}</td>
        <td>${descripcion}</td>
        <td>$${precio.toFixed(2)}</td>
        <td>$${descuento.toFixed(2)}</td>
        <td>$${totalProducto.toFixed(2)}</td>
    `;

    actualizarTotales();
    limpiarCampos();
}

// Actualizar totales en la interfaz
function actualizarTotales() {
    const valorIva = subtotal * 0.15; // IVA fijo 15%
    const totalConIva = subtotal + valorIva;
    const valorTotal = totalConIva - totalDescuento;

    document.getElementById('subtotal').textContent = subtotal.toFixed(2);
    document.getElementById('subtotalIVA').textContent = subtotal.toFixed(2);
    document.getElementById('totalDescuento').textContent = totalDescuento.toFixed(2);
    document.getElementById('valorIva').textContent = valorIva.toFixed(2);
    document.getElementById('valorTotal').textContent = valorTotal.toFixed(2);
}

// Limpiar campos del formulario
function limpiarCampos() {
    document.getElementById('codigo').value = '';
    document.getElementById('cantidad').value = 1;
    document.getElementById('descripcion').value = '';
    document.getElementById('precio').value = '';
    document.getElementById('descuento').value = '';
}

// Generar PDF usando jsPDF
function generarPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("Factura de Compras", 14, 20);

    let y = 30;
    doc.setFontSize(12);
    doc.text("Código", 14, y);
    doc.text("Cantidad", 40, y);
    doc.text("Descripción", 70, y);
    doc.text("P. Unitario", 120, y);
    doc.text("Descuento", 150, y);
    doc.text("Total", 180, y);

    const tablaHTML = document.getElementById('tabla').getElementsByTagName('tbody')[0];
    for (let i = 0; i < tablaHTML.rows.length; i++) {
        const row = tablaHTML.rows[i];
        y += 10;
        doc.text(row.cells[0].innerText, 14, y);
        doc.text(row.cells[1].innerText, 40, y);
        doc.text(row.cells[2].innerText, 70, y);
        doc.text(row.cells[3].innerText, 120, y);
        doc.text(row.cells[4].innerText, 150, y);
        doc.text(row.cells[5].innerText, 180, y);
    }

    y += 20;
    const valorIva = subtotal * 0.15;
    const valorTotal = subtotal + valorIva - totalDescuento;

    doc.setFontSize(13);
    doc.text(`Subtotal sin Impuestos: $${subtotal.toFixed(2)}`, 14, y); y += 10;
    doc.text(`Subtotal IVA 15%: $${subtotal.toFixed(2)}`, 14, y); y += 10;
    doc.text(`Total Descuento: $${totalDescuento.toFixed(2)}`, 14, y); y += 10;
    doc.text(`Valor IVA 15%: $${valorIva.toFixed(2)}`, 14, y); y += 10;
    doc.text(`Valor Total: $${valorTotal.toFixed(2)}`, 14, y);

    doc.save("factura.pdf");
}