/**
 * Lista de tareas (To-Do) - Código de referencia completo.
 * Comentarios en español para uso educativo.
 */

// Referencias a elementos del DOM que no cambian
const formulario = document.getElementById('formulario-tarea');
const inputTarea = document.getElementById('input-tarea');
const listaTareas = document.getElementById('lista-tareas');

/**
 * Añade una nueva tarea a la lista.
 * Crea un <li> con el texto, botón "Hecha" y botón "Eliminar", y lo inserta en la lista.
 */
function añadirTarea(texto) {
  if (!texto || !texto.trim()) return;

  const li = document.createElement('li');
  li.setAttribute('data-tarea', texto.trim());

  const span = document.createElement('span');
  span.className = 'texto-tarea';
  span.textContent = texto.trim();

  const botonMarcar = document.createElement('button');
  botonMarcar.type = 'button';
  botonMarcar.className = 'boton-marcar';
  botonMarcar.textContent = 'Hecha';
  botonMarcar.setAttribute('aria-label', 'Marcar como hecha');

  const botonEliminar = document.createElement('button');
  botonEliminar.type = 'button';
  botonEliminar.className = 'boton-eliminar';
  botonEliminar.textContent = 'Eliminar';
  botonEliminar.setAttribute('aria-label', 'Eliminar tarea');

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

// Evitar que el formulario recargue la página y añadir la tarea al enviar
formulario.addEventListener('submit', function (evento) {
  evento.preventDefault();
  añadirTarea(inputTarea.value);
  inputTarea.value = '';
  inputTarea.focus();
});
