const form = document.getElementById('formulario');

form.onsubmit = function(e) {
    e.preventDefault(); // Evita recarga

    // Obtener valores
    const nombre = form.nombre.value.trim();
    const apellido = form.apellido.value.trim();
    const correo = form.correo.value.trim();
    const pais = form.pais.value;
    const provincia = form.provincia.value;

    // Expresiones regulares
    const soloLetras = /^[A-Za-z]+$/;
    const correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validaciones
    if (nombre.length < 2 || !soloLetras.test(nombre)) {
        alert('Nombre inválido. Debe tener solo letras y al menos 2 caracteres.');
        return;
    }

    if (apellido.length < 2 || !soloLetras.test(apellido)) {
        alert('Apellido inválido. Debe tener solo letras y al menos 2 caracteres.');
        return;
    }

    if (!correoValido.test(correo)) {
        alert('Correo inválido.');
        return;
    }

    if (!pais) {
        alert('Selecciona un país.');
        return;
    }

    if (!provincia) {
        alert('Selecciona una provincia.');
        return;
    }

    alert('Formulario enviado correctamente!');
    form.reset();
};