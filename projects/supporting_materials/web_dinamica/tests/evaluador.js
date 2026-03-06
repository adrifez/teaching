/**
 * Carga una entrega (HTML + script.js) en JSDOM y expone API para tests.
 * Rutas relativas a la carpeta web-dinamica/ (raíz del proyecto tests está en web-dinamica/tests/).
 */

const path = require('path');
const fs = require('fs');
const { JSDOM, VirtualConsole } = require('jsdom');

const WEB_DINAMICA = path.resolve(__dirname, '..');

/** VirtualConsole que no reenvía errores a la consola real (evita "Uncaught" cuando el script de la entrega lanza). */
function crearVirtualConsoleSinErrores() {
  const vc = new VirtualConsole();
  vc.on('error', () => {});
  vc.on('jsdomError', () => {});
  return vc;
}

/**
 * Carga la entrega desde una carpeta (p. ej. entregas-simuladas/entrega-01).
 * @param {string} carpetaEntrega - Ruta relativa a web-dinamica (ej: 'entregas-simuladas/entrega-01') o absoluta
 * @returns {{ document, window, setInputValue, submitForm, getListItems, clickHecha, clickEliminar, getList, getForm, getInput, scriptContent }} - API para tests
 */
function cargarEntrega(carpetaEntrega) {
  const dir = path.isAbsolute(carpetaEntrega)
    ? carpetaEntrega
    : path.join(WEB_DINAMICA, carpetaEntrega);

  const htmlPath = path.join(dir, 'index.html');
  const scriptPath = path.join(dir, 'script.js');

  let html = fs.readFileSync(htmlPath, 'utf8');
  const scriptContent = fs.readFileSync(scriptPath, 'utf8');

  // Inyectar script inline para que se ejecute en JSDOM (no hay file:// para src)
  html = html.replace(
    /<script\s+src=["']script\.js["']\s*><\/script>/i,
    `<script>${scriptContent}</script>`
  );

  const dom = new JSDOM(html, {
    runScripts: 'dangerously',
    pretendToBeVisual: false,
    virtualConsole: crearVirtualConsoleSinErrores(),
  });

  const { document, window } = dom.window;

  function getForm() {
    return document.getElementById('formulario-tarea');
  }

  function getInput() {
    return document.getElementById('input-tarea');
  }

  function getList() {
    return document.getElementById('lista-tareas');
  }

  function setInputValue(texto) {
    const input = getInput();
    if (input) input.value = texto;
  }

  function submitForm() {
    const form = getForm();
    if (!form) return;
    form.dispatchEvent(new window.Event('submit', { bubbles: true, cancelable: true }));
  }

  /**
   * Devuelve los <li> de la lista como array. Cada elemento tiene .texto (span.texto-tarea), .hecha (botón), .eliminar (botón).
   */
  function getListItems() {
    const list = getList();
    if (!list) return [];
    const items = [];
    const lis = list.querySelectorAll(':scope > li');
    lis.forEach((li) => {
      const span = li.querySelector('.texto-tarea');
      const botones = li.querySelectorAll('button');
      let botonHecha = null;
      let botonEliminar = null;
      botones.forEach((b) => {
        if (b.classList.contains('boton-marcar')) botonHecha = b;
        if (b.classList.contains('boton-eliminar')) botonEliminar = b;
      });
      items.push({
        li,
        texto: span ? span.textContent.trim() : '',
        tieneClaseHecha: li.classList.contains('hecha'),
        botonHecha,
        botonEliminar,
      });
    });
    return items;
  }

  function clickHecha(index) {
    const items = getListItems();
    const item = items[index];
    if (item && item.botonHecha) item.botonHecha.click();
  }

  function clickEliminar(index) {
    const items = getListItems();
    const item = items[index];
    if (item && item.botonEliminar) item.botonEliminar.click();
  }

  return {
    document,
    window,
    setInputValue,
    submitForm,
    getListItems,
    clickHecha,
    clickEliminar,
    getList,
    getForm,
    getInput,
    scriptContent,
  };
}

module.exports = { cargarEntrega, WEB_DINAMICA };
