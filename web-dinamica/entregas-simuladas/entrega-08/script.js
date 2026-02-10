var f = document.getElementById('formulario-tarea');
var i = document.getElementById('input-tarea');
var l = document.getElementById('lista-tareas');
function añadirTarea(t) {
  if (!t || !t.trim()) return;
  var el = document.createElement('li');
  var s = document.createElement('span');
  s.className = 'texto-tarea';
  s.textContent = t.trim();
  var b1 = document.createElement('button');
  b1.type = 'button';
  b1.className = 'boton-marcar';
  b1.textContent = 'Hecha';
  b1.addEventListener('click', function () {
    el.classList.toggle('hecha');
    b1.textContent = el.classList.contains('hecha') ? 'Deshacer' : 'Hecha';
  });
  var b2 = document.createElement('button');
  b2.type = 'button';
  b2.className = 'boton-eliminar';
  b2.textContent = 'Eliminar';
  b2.addEventListener('click', function () {
    el.remove();
  });
  el.appendChild(s);
  el.appendChild(b1);
  el.appendChild(b2);
  l.appendChild(el);
}
f.addEventListener('submit', function (e) {
  e.preventDefault();
  añadirTarea(i.value);
  i.value = '';
  i.focus();
});
