/**
 * Análisis estático de script.js para puntuación de rúbrica: Uso del DOM y Código.
 */

/**
 * Puntuación 1-4 para "Uso del DOM".
 * Comprueba: getElementById o querySelector; createElement; appendChild.
 */
function puntuacionDOM(scriptContent) {
  if (!scriptContent || typeof scriptContent !== 'string') return 1;
  const s = scriptContent;
  const tieneSelector =
    /getElementById\s*\(/.test(s) || /querySelector\s*\(/.test(s);
  const tieneCreateElement = /createElement\s*\(/.test(s);
  const tieneAppendChild = /appendChild\s*\(/.test(s);

  if (tieneSelector && tieneCreateElement && tieneAppendChild) return 4;
  if (
    (tieneSelector && tieneCreateElement) ||
    (tieneSelector && tieneAppendChild) ||
    (tieneCreateElement && tieneAppendChild)
  )
    return 3;
  if (tieneSelector || tieneCreateElement || tieneAppendChild) return 2;
  return 1;
}

/**
 * Puntuación 1-4 para "Código": comentarios, nombre de función, no minificado.
 */
function puntuacionCodigo(scriptContent) {
  if (!scriptContent || typeof scriptContent !== 'string') return 1;
  const lineas = scriptContent.split(/\r?\n/);
  const tieneComentario =
    /\/\//.test(scriptContent) || /\/\*[\s\S]*\*\//.test(scriptContent);
  const tieneFuncionAñadir = /function\s+añadirTarea\s*\(/.test(scriptContent);
  const lineaMaxLength = Math.max(
    ...lineas.map((l) => l.length),
    0
  );
  const noMinificado = lineaMaxLength < 200;
  const numComentarios = (scriptContent.match(/\/\//g) || []).length +
    (scriptContent.match(/\/\*/g) || []).length;

  if (tieneComentario && tieneFuncionAñadir && noMinificado && numComentarios >= 2)
    return 4;
  if (tieneComentario && tieneFuncionAñadir && noMinificado) return 3;
  if (tieneFuncionAñadir || (tieneComentario && noMinificado)) return 2;
  return 1;
}

module.exports = { puntuacionDOM, puntuacionCodigo };
