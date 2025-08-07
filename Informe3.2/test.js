
const colores = new Map();
colores.set('rojo', '#FF0000');
colores.set('verde', '#00FF00');
colores.set('azul', '#0000FF');

// Recorrer claves
for (let clave of colores.keys()) {
    console.log('Clave:', clave);
}

// Recorrer valores
for (let valor of colores.values()) {
    console.log('Valor:', valor);
}

// Recorrer entradas (clave, valor)
for (let [clave, valor] of colores.entries()) {
    console.log(`${clave} => ${valor}`);
}