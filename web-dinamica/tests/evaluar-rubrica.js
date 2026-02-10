/**
 * Evalúa una entrega y devuelve puntuaciones según la rúbrica: dom, eventos, comportamiento, codigo (1-4).
 */

const path = require('path');
const fs = require('fs');
const { cargarEntrega, WEB_DINAMICA } = require('./evaluador');
const { puntuacionDOM, puntuacionCodigo } = require('./analizador-codigo');

/**
 * Evalúa una carpeta de entrega.
 * @param {string} carpetaEntrega - Ruta relativa a web-dinamica (ej: 'entregas-simuladas/entrega-01')
 * @returns {{ dom, eventos, comportamiento, codigo, notaFinal, error?: string }}
 */
function evaluarEntrega(carpetaEntrega) {
  const dir = path.join(WEB_DINAMICA, carpetaEntrega);
  const scriptPath = path.join(dir, 'script.js');
  let scriptContent;
  try {
    scriptContent = fs.readFileSync(scriptPath, 'utf8');
  } catch (e) {
    return {
      dom: 1,
      eventos: 1,
      comportamiento: 1,
      codigo: 1,
      notaFinal: 1,
      error: 'No se pudo leer script.js',
    };
  }

  let api;
  try {
    api = cargarEntrega(carpetaEntrega);
  } catch (e) {
    const dom = puntuacionDOM(scriptContent);
    return {
      dom: dom >= 3 ? 2 : dom,
      eventos: 1,
      comportamiento: 1,
      codigo: puntuacionCodigo(scriptContent),
      notaFinal: 0,
      error: e.message,
    };
  }

  const { setInputValue, submitForm, getListItems, clickHecha, clickEliminar } = api;

  let addOk = false;
  let emptyIgnored = false;
  let hechaOk = false;
  let eliminarOk = false;

  try {
    setInputValue('Tarea uno');
    submitForm();
    const items1 = getListItems();
    addOk = items1.length === 1 && items1[0].texto === 'Tarea uno' && items1[0].botonHecha && items1[0].botonEliminar;
  } catch (_) {}

  try {
    setInputValue('');
    submitForm();
    const itemsAfterEmpty = getListItems();
    emptyIgnored = itemsAfterEmpty.length === 1;
    setInputValue('   ');
    submitForm();
    const itemsAfterSpaces = getListItems();
    emptyIgnored = emptyIgnored && itemsAfterSpaces.length === 1;
  } catch (_) {
    emptyIgnored = false;
  }

  try {
    setInputValue('Segunda');
    submitForm();
    const items2 = getListItems();
    if (items2.length >= 2) {
      clickHecha(0);
      const afterHecha = getListItems();
      hechaOk =
        afterHecha[0].tieneClaseHecha &&
        afterHecha[0].botonHecha &&
        afterHecha[0].botonHecha.textContent.trim() === 'Deshacer';
      clickHecha(0);
      const afterDeshacer = getListItems();
      hechaOk =
        hechaOk &&
        !afterDeshacer[0].tieneClaseHecha &&
        afterDeshacer[0].botonHecha.textContent.trim() === 'Hecha';
    }
  } catch (_) {}

  try {
    const itemsBefore = getListItems();
    if (itemsBefore.length >= 1) {
      clickEliminar(0);
      const itemsAfter = getListItems();
      eliminarOk = itemsAfter.length === itemsBefore.length - 1;
    }
  } catch (_) {}

  let comportamiento = 1;
  if (addOk && emptyIgnored && hechaOk && eliminarOk) comportamiento = 4;
  else if (addOk && hechaOk && eliminarOk && !emptyIgnored) comportamiento = 3;
  else if (addOk && (hechaOk || eliminarOk)) comportamiento = 2;
  else if (addOk) comportamiento = 2;

  let eventos = 1;
  if (addOk && hechaOk && eliminarOk) eventos = 4;
  else if (addOk) eventos = 2;

  // Que se llame a variable.preventDefault() en código, no en comentarios
  const sinComentarios = scriptContent
    .replace(/\/\/[^\n]*/g, '')
    .replace(/\/\*[\s\S]*?\*\//g, '');
  const tienePreventDefault = /\b[a-zA-Z_$][\w$]*\.preventDefault\s*\(\s*\)/.test(sinComentarios);
  if (eventos === 4 && !tienePreventDefault) eventos = 3;

  const dom = puntuacionDOM(scriptContent);
  const codigo = puntuacionCodigo(scriptContent);

  const domFinal = comportamiento === 1 ? Math.min(dom, 2) : dom;

  const notaFinal =
    (domFinal + eventos + comportamiento + codigo) / 4;

  return {
    dom: domFinal,
    eventos,
    comportamiento,
    codigo,
    notaFinal: Math.round(notaFinal * 100) / 100,
  };
}

module.exports = { evaluarEntrega };
