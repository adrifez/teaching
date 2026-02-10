/**
 * Ejemplo 01: Incluir JavaScript en HTML
 * Este archivo se enlaza con <script src="script.js"></script> en el HTML.
 * El código se ejecuta cuando el navegador llega a esa etiqueta.
 */

// Escribir en la consola del navegador (F12 > Consola)
console.log('¡Hola! El script se ha cargado correctamente.');

// Modificar el contenido del párrafo con id="mensaje"
const parrafo = document.getElementById('mensaje');
parrafo.textContent = '¡El script ha cambiado este texto!';
