/**
 * Ejemplo 06: classList - añadir, quitar y alternar clases CSS
 * Útil para "marcar como hecha" una tarea: la clase "hecha" aplica estilos (tachado, color gris).
 * - classList.add('clase')   → añade la clase
 * - classList.remove('clase') → quita la clase
 * - classList.toggle('clase') → si está la quita, si no está la añade
 */

const tarea1 = document.getElementById('tarea1');
const tarea2 = document.getElementById('tarea2');
const tarea3 = document.getElementById('tarea3');

function alternarHecha(elemento) {
  elemento.classList.toggle('hecha');
}

tarea1.addEventListener('click', function () { alternarHecha(tarea1); });
tarea2.addEventListener('click', function () { alternarHecha(tarea2); });
tarea3.addEventListener('click', function () { alternarHecha(tarea3); });
