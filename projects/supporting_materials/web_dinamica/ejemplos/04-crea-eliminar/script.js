/**
 * Ejemplo 04: Crear nodos - createElement, appendChild, removeChild
 * El botón «Añadir» crea un <li> y lo añade a la lista.
 * El botón «Eliminar» quita el último <li> de la lista.
 */

const botonAnadir = document.getElementById('anadir');
const botonEliminar = document.getElementById('eliminar');
const lista = document.getElementById('listaTareas');

botonAnadir.addEventListener('click', function () {
  const li = document.createElement('li');
  li.textContent = 'Nueva tarea';
  lista.appendChild(li);
});

botonEliminar.addEventListener('click', function () {
  const ultimo = lista.lastElementChild;
  if (ultimo) lista.removeChild(ultimo);
});
