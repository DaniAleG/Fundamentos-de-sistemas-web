document.addEventListener("DOMContentLoaded", () => {
  // --- Menú desplegable (si existe en otra página) ---
  const toggle = document.getElementById("menu-toggle");
  const primaryLinks = document.querySelector(".primary.nav-links");
  const secondaryLinks = document.querySelector(".secondary.nav-links");
  if (toggle && primaryLinks && secondaryLinks) {
    toggle.addEventListener("click", () => {
      primaryLinks.classList.toggle("active");
      secondaryLinks.classList.toggle("active");
    });
  }

  // --- Validación del formulario de login ---
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const username = document.getElementById("username").value.trim();
      const password = document.getElementById("password").value.trim();

      if (username.length >= 3 && password.length >= 4) {
        window.location.href = "perfil.html";
      } else {
        alert("Por favor, ingresa un usuario y contraseña válidos.");
      }
    });
  }

  // --- Funcionalidad "Olvidé mi password" ---
  const olvideLink = document.querySelector('a[href="#"]');
  if (olvideLink) {
    olvideLink.addEventListener("click", (e) => {
      e.preventDefault();
      window.location.href = "recuperar.html";
    });
  }

  // --- Login con proveedores (simulado) ---
  const providers = {
    google: document.querySelector(".google-provider"),
    facebook: document.querySelector(".facebook-provider"),
    twitter: document.querySelector(".twitter-provider"),
  };

  Object.entries(providers).forEach(([name, button]) => {
    if (button) {
      button.addEventListener("click", (e) => {
        e.preventDefault();
        alert(`Iniciando sesión con ${name.toUpperCase()}...`);
        // Simulación de éxito
        window.location.href = "perfil.html";
      });
    }
  });

  // --- Filtro de tarjetas (solo en index.html) ---
  const input = document.querySelector(".search-bar input");
  const cards = document.querySelectorAll(".card");
  if (input && cards.length > 0) {
    input.addEventListener("input", () => {
      const query = input.value.toLowerCase();
      cards.forEach((card) => {
        const title = card.querySelector(".title").textContent.toLowerCase();
        const description = card.querySelector("p").textContent.toLowerCase();
        const matches = title.includes(query) || description.includes(query);
        card.style.display = matches ? "block" : "none";
      });
    });
  }
});
