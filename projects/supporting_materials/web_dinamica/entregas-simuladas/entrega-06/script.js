// Botón Eliminar no hace nada (sin listener que llame a remove)
const formulario = document.getElementById('formulario-tarea');
const inputTarea = document.getElementById('input-tarea');
const listaTareas = document.getElementById('lista-tareas');

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
  // botonEliminar sin addEventListener -> no elimina
  li.appendChild(span);
  li.appendChild(botonMarcar);
  li.appendChild(botonEliminar);
  listaTareas.appendChild(li);
}

formulario.addEventListener('submit', function (evento) {
  evento.preventDefault();
  añadirTarea(inputTarea.value);
  inputTarea.value = '';
  inputTarea.focus();
});
