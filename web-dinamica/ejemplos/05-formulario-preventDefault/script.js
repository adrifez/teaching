/**
 * Ejemplo 05: Formulario y preventDefault
 * Al enviar un <form>, el navegador por defecto recarga la página o navega.
 * Si queremos procesar el envío con JavaScript sin recargar, usamos evento.preventDefault().
 */

const formulario = document.getElementById('formulario');
const resultado = document.getElementById('resultado');

formulario.addEventListener('submit', function (evento) {
  // Impedir el comportamiento por defecto (recargar/navegar)
  evento.preventDefault();

  const nombre = document.getElementById('nombre').value;
  resultado.textContent = 'Hola, ' + nombre + '. El formulario se ha procesado sin recargar la página.';
});
