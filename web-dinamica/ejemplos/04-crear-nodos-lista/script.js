/**
 * Ejemplo 04: Crear nodos - createElement, appendChild, removeChild
 * Creamos un <li> por cada elemento que el usuario quiera añadir.
 * Cada <li> tiene un botón para eliminarlo.
 */

const inputItem = document.getElementById('input-item');
const botonAñadir = document.getElementById('boton-añadir');
const lista = document.getElementById('lista');

function añadirElemento() {
  const texto = inputItem.value.trim();
  if (!texto) return;

  // Crear el elemento <li>
  const li = document.createElement('li');

  // Crear un span con el texto
  const span = document.createElement('span');
  span.textContent = texto;
  span.style.marginRight = '0.5rem';

  // Crear botón para eliminar
  const botonEliminar = document.createElement('button');
  botonEliminar.type = 'button';
  botonEliminar.textContent = 'Eliminar';
  botonEliminar.addEventListener('click', function () {
    lista.removeChild(li);  // Quitar el li de la lista
  });

  // Montar el li: primero el span, luego el botón
  li.appendChild(span);
  li.appendChild(botonEliminar);
  lista.appendChild(li);

  inputItem.value = '';
  inputItem.focus();
}

botonAñadir.addEventListener('click', añadirElemento);
