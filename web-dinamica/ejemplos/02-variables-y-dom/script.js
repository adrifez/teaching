/**
 * Ejemplo 02: Variables y acceso al DOM
 * - Variables con let y const
 * - getElementById para obtener un elemento
 * - textContent para leer y escribir el contenido de texto
 */

// Variables: const para valores que no cambian de referencia
const elemento = document.getElementById('salida');

// Leer el contenido actual
const textoActual = elemento.textContent;
console.log('Texto actual:', textoActual);

// Escribir nuevo contenido
elemento.textContent = 'Nuevo texto escrito desde JavaScript.';

// Podemos usar variables para construir el mensaje
const nombre = 'Alumno';
const mensaje = 'Hola, ' + nombre + '. Bienvenido al ejemplo.';
elemento.textContent = mensaje;
