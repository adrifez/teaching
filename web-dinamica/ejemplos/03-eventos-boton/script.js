/**
 * Ejemplo 03: Eventos - addEventListener y click
 * En lugar de poner onclick en el HTML, usamos addEventListener en JavaScript.
 * Así separamos estructura (HTML) y comportamiento (JS).
 */

const parrafo = document.getElementById('texto');
const boton = document.getElementById('boton-cambiar');

// Añadir un "escuchador" al evento 'click' del botón
boton.addEventListener('click', function () {
  parrafo.textContent = '¡Has pulsado el botón! El texto ha cambiado.';
});
