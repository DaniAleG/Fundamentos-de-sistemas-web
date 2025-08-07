// archivo: map-methods.js

const miMapa = new Map();

// Agregar elementos
miMapa.set('nombre', 'Daniel');
miMapa.set('edad', 25);
miMapa.set('activo', true);

// Obtener un valor
console.log(miMapa.get('nombre')); // Daniel

// Verificar existencia
console.log(miMapa.has('edad')); // true

// Eliminar un valor
miMapa.delete('activo');

// Mostrar todo
miMapa.forEach((valor, clave) => {
    console.log(`${clave} => ${valor}`);
});