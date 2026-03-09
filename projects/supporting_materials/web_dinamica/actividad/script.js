/**
 * Lista de tareas (To-Do) - Completar la lógica.
 * En index.html debes haber añadido los id indicados en los TODO
 * y la etiqueta <script>.
 */

const formulario = document.getElementById('formulario-tarea');
const inputTarea = document.getElementById('input-tarea');
const listaTareas = document.getElementById('lista-tareas');

function añadirTarea(texto) {
  // 3. Si el texto está vacío o solo tiene espacios (usa trim), sal con return.

  // 4. Crea un elemento li en el documento y añádelo a listaTareas.

  // 5. Crea un elemento span; asígnale la clase "texto-tarea" y el texto recortado.
  //    Añádelo al li.

  const botonMarcar = document.createElement('button');
  botonMarcar.type = 'button';
  // 6. Asigna la clase "boton-marcar" al botón y edita el contenido para que muestre el texto "Hecha".

  botonMarcar.addEventListener('click', function () {
    // 7. Alterna la clase "hecha" en el li (usa el método toggle).
    botonMarcar.textContent = li.classList.contains('hecha') ? 'Deshacer' : 'Hecha';
  });

  // 8. Añade el botón al li.

  // 9. Crea un elemento button de tipo button con clase "boton-eliminar".
  //    Asígnale el texto "Eliminar".

  // 10. Añade listener para que al hacer click, elimine el li de la lista
  // (usa el método remove del propio elemento).

  // 11. Añade el botón al li.
}

formulario.addEventListener('submit', function (evento) {
  // 1. Evita que el formulario recargue la página con preventDefault.
  // 2. Invoca la función añadirTarea con el valor del input.
  inputTarea.value = '';
  inputTarea.focus();
});
