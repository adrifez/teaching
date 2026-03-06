/**
 * Ejemplo 03: Eventos - addEventListener('click', ...)
 * Al hacer clic en el botón se ejecuta la función y se actualiza el texto del párrafo.
 */

const boton = document.getElementById('boton');
const mensaje = document.getElementById('mensaje');

boton.addEventListener('click', function () {
  mensaje.textContent = '¡Has pulsado el botón!';
});
