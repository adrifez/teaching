/**
 * Ejemplo 06: classList - toggle('hecha')
 * Se escucha el click en la lista; si el clic fue sobre un <li>, se alterna la clase 'hecha'.
 * El CSS define el aspecto de .hecha (tachado, opacidad).
 */

const lista = document.getElementById('listaTareas');

lista.addEventListener('click', function (evento) {
  const li = evento.target.closest('li');
  if (li) li.classList.toggle('hecha');
});
