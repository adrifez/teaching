/**
 * Lista de tareas (To-Do) - Completar la lógica.
 * En index.html debes haber añadido los id indicados en los TODO
 * y la etiqueta <script>.
 */

const formulario = document.getElementById('formulario-tarea');
const inputTarea = document.getElementById('input-tarea');
const listaTareas = document.getElementById('lista-tareas');

function añadirTarea(texto) {
  // 1. Si el texto está vacío o solo tiene espacios (usa trim), sal con return.

  // 2. Crea un elemento li y un span; al span asígnale la clase "texto-tarea"
  //    y el texto recortado. El span va dentro del li.

  // 3. Crea el botón "Hecha" con clase "boton-marcar". Al hacer click, alterna
  //    la clase "hecha" en el li (classList.toggle) y cambia el texto del botón
  //    a "Deshacer" o "Hecha" según corresponda.

  // 4. Crea el botón "Eliminar" con clase "boton-eliminar". Al hacer click,
  //    quita el li de la lista (método remove del propio elemento).

  // 5. Mete el span y los dos botones dentro del li, y el li dentro de
  //    listaTareas (appendChild).
}

formulario.addEventListener('submit', function (evento) {
  evento.preventDefault();
  añadirTarea(inputTarea.value);
  inputTarea.value = '';
  inputTarea.focus();
});
