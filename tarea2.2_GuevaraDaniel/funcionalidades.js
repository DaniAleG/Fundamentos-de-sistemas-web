document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("menu-toggle");
  const primaryLinks = document.querySelector('.primary.nav-links');
  const secondaryLinks = document.querySelector('.secondary.nav-links');
  if (toggle && primaryLinks && secondaryLinks) {
    toggle.addEventListener("click", () => {
      primaryLinks.classList.toggle("active");
      secondaryLinks.classList.toggle("active");
    });
  }

  const form = document.getElementById("paqueteForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const dinero = parseFloat(document.getElementById("dinero").value);
      const resultado = document.getElementById("resultado");

      if (isNaN(dinero) || dinero < 0) {
        resultado.textContent = "Por favor ingresa una cantidad válida.";
        return;
      }

      let mensaje = "";

      if (dinero >= 50000) {
        mensaje = "Paquete A: Televisión, un modular, tres pares de zapatos, cinco camisas y cinco pantalones.";
      } else if (dinero >= 20000) {
        mensaje = "Paquete B: Grabadora, tres pares de zapatos, cinco camisas y cinco pantalones.";
      } else if (dinero >= 10000) {
        mensaje = "Paquete C: Dos pares de zapatos, tres camisas y tres pantalones.";
      } else {
        mensaje = "Paquete D: Un par de zapatos, dos camisas y dos pantalones.";
      }

      resultado.textContent = mensaje;
    });
  }

  
});

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  toggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });

  // Lógica del formulario ya incluida...
});
