/**
 * Lista de tareas (To-Do) - Código de referencia completo.
 * Comentarios en español para uso educativo.
 */

// Referencias a elementos del DOM que no cambian
const formulario = document.getElementById('formulario-tarea');
const inputTarea = document.getElementById('input-tarea');
const listaTareas = document.getElementById('lista-tareas');
const contadorTareas = document.getElementById('contador-tareas');

/**
 * Actualiza el texto del contador de tareas.
 * Cuenta cuántas tareas hay en total, cuántas están hechas y cuántas pendientes.
 */
function actualizarContador() {
  const total = listaTareas.children.length;
  const hechas = listaTareas.querySelectorAll('li.hecha').length;
  const pendientes = total - hechas;

  if (!contadorTareas) return;

  if (total === 0) {
    contadorTareas.textContent = '0 tareas';
    return;
  }

  contadorTareas.innerHTML =
    '<strong>' +
    total +
    '</strong> tareas — <strong>' +
    pendientes +
    '</strong> pendientes, <strong>' +
    hechas +
    '</strong> hechas';
}

/**
 * Añade una nueva tarea a la lista.
 * Crea un <li> con el texto, botón "Hecha" y botón "Eliminar", y lo inserta en la lista.
 */
function añadirTarea(texto) {
  if (!texto || !texto.trim()) return;

  const li = document.createElement('li');
  listaTareas.appendChild(li);

  const span = document.createElement('span');
  span.className = 'texto-tarea';
  span.textContent = texto.trim();
  li.appendChild(span);

  const botonMarcar = document.createElement('button');
  botonMarcar.type = 'button';
  botonMarcar.className = 'boton-marcar';
  botonMarcar.textContent = 'Hecha';

  botonMarcar.addEventListener('click', function () {
    li.classList.toggle('hecha');
    botonMarcar.textContent = li.classList.contains('hecha') ? 'Deshacer' : 'Hecha';
    actualizarContador();
  });

  li.appendChild(botonMarcar);

  const botonEliminar = document.createElement('button');
  botonEliminar.type = 'button';
  botonEliminar.className = 'boton-eliminar';
  botonEliminar.textContent = 'Eliminar';

  botonEliminar.addEventListener('click', function () {
    listaTareas.removeChild(li);
    actualizarContador();
  });

  li.appendChild(botonEliminar);

  actualizarContador();
}

// Evitar que el formulario recargue la página y añadir la tarea al enviar
formulario.addEventListener('submit', function (evento) {
  evento.preventDefault();
  añadirTarea(inputTarea.value);
  inputTarea.value = '';
  inputTarea.focus();
});

// Estado inicial del contador (por si hubiese tareas renderizadas en HTML)
actualizarContador();
