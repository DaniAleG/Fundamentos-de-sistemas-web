document.addEventListener('DOMContentLoaded', function () {
    // Formulario: mostrar alerta con los datos y limpiar campos
    const form = document.querySelector('.contact-form form');
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name && email && message) {
            alert(`Nombre: ${name}\nCorreo: ${email}\nMensaje: ${message}`);
            form.reset();
        }
    });

   const circle = document.querySelector("circle.progress");
    const radius = 80;
    const circumference = 2 * Math.PI * radius;
    const percent = 75;
    circle.style.strokeDasharray = `${circumference}`;
    circle.style.strokeDashoffset = `${circumference - (percent / 100) * circumference}`;

});