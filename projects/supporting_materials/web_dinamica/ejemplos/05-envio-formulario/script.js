/**
 * Ejemplo 05: Formulario y preventDefault
 * Al enviar el form se evita la recarga con preventDefault().
 * Se lee el valor del input, se crea un <li>, se añade a la lista y se vacía el campo.
 * El botón «Eliminar última» quita el último <li> con removeChild.
 */

const form = document.getElementById('formTarea');
const inputTarea = document.getElementById('textoTarea');
const lista = document.getElementById('listaTareas');
const botonEliminar = document.getElementById('eliminar');

form.addEventListener('submit', function (evento) {
  evento.preventDefault();
  const texto = inputTarea.value.trim();
  if (!texto) return;
  const li = document.createElement('li');
  li.textContent = texto;
  lista.appendChild(li);
  inputTarea.value = '';
});

botonEliminar.addEventListener('click', function () {
  const ultimo = lista.lastElementChild;
  if (ultimo) lista.removeChild(ultimo);
});
