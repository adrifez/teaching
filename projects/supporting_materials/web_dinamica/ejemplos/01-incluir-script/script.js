/**
 * Ejemplo 01: Incluir JavaScript en HTML
 * Se enlaza con <script src="script.js"></script> al final del body.
 * El código se ejecuta cuando el navegador carga esa etiqueta (DOM ya disponible).
 */

const mensaje = document.getElementById('mensaje');
mensaje.textContent = 'El script ha cambiado este mensaje.';
