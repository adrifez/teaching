/**
 * Lista de tareas (To-Do) - Entrega excelente con comentarios detallados.
 * Uso de getElementById, createElement, appendChild y addEventListener.
 */

// Obtenemos referencias a los elementos del DOM que vamos a usar
const formulario = document.getElementById('formulario-tarea');
const inputTarea = document.getElementById('input-tarea');
const listaTareas = document.getElementById('lista-tareas');

/**
 * Añade una nueva tarea a la lista.
 * - Comprueba que el texto no esté vacío (trim).
 * - Crea li, span (texto-tarea), botón Hecha y botón Eliminar.
 * - Añade listeners a los botones y enlaza todo con appendChild.
 */
function añadirTarea(texto) {
  if (!texto || !texto.trim()) return;

  const li = document.createElement('li');
  const span = document.createElement('span');
  span.className = 'texto-tarea';
  span.textContent = texto.trim();

  const botonMarcar = document.createElement('button');
  botonMarcar.type = 'button';
  botonMarcar.className = 'boton-marcar';
  botonMarcar.textContent = 'Hecha';

  const botonEliminar = document.createElement('button');
  botonEliminar.type = 'button';
  botonEliminar.className = 'boton-eliminar';
  botonEliminar.textContent = 'Eliminar';

  botonMarcar.addEventListener('click', function () {
    li.classList.toggle('hecha');
    botonMarcar.textContent = li.classList.contains('hecha') ? 'Deshacer' : 'Hecha';
  });

  botonEliminar.addEventListener('click', function () {
    li.remove();
  });

  li.appendChild(span);
  li.appendChild(botonMarcar);
  li.appendChild(botonEliminar);
  listaTareas.appendChild(li);
}

// Listener del formulario: preventDefault para no recargar y añadir tarea
formulario.addEventListener('submit', function (evento) {
  evento.preventDefault();
  añadirTarea(inputTarea.value);
  inputTarea.value = '';
  inputTarea.focus();
});
