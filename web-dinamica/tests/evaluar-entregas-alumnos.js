/**
 * Evalúa todas las entregas en web-dinamica/entregas-alumnos/ y escribe
 * los resultados en web-dinamica/resultados-entregas.md
 *
 * Uso: desde web-dinamica/tests → node evaluar-entregas-alumnos.js
 *      o npm run evaluar-entregas
 */

const path = require('path');
const fs = require('fs');
const { evaluarEntrega } = require('./evaluar-rubrica');
const { WEB_DINAMICA } = require('./evaluador');

const CARPETA_ENTREGAS = path.join(WEB_DINAMICA, 'entregas-alumnos');
const ARCHIVO_RESULTADOS = path.join(WEB_DINAMICA, 'resultados-entregas.md');

function main() {
  if (!fs.existsSync(CARPETA_ENTREGAS)) {
    console.error('No existe la carpeta entregas-alumnos en web-dinamica.');
    process.exit(1);
  }

  const entradas = fs.readdirSync(CARPETA_ENTREGAS, { withFileTypes: true });
  const carpetas = entradas
    .filter((d) => d.isDirectory() && !d.name.startsWith('.'))
    .map((d) => d.name)
    .filter((nombre) => {
      const dir = path.join(CARPETA_ENTREGAS, nombre);
      return fs.existsSync(path.join(dir, 'script.js')) && fs.existsSync(path.join(dir, 'index.html'));
    })
    .sort();

  if (carpetas.length === 0) {
    console.log('No hay carpetas con index.html y script.js en entregas-alumnos.');
    fs.writeFileSync(
      ARCHIVO_RESULTADOS,
      '# Resultados de entregas\n\nNo se encontraron entregas en `entregas-alumnos/`.\n',
      'utf8'
    );
    console.log('Creado:', ARCHIVO_RESULTADOS);
    return;
  }

  const resultados = [];
  for (const nombre of carpetas) {
    const carpeta = `entregas-alumnos/${nombre}`;
    try {
      const r = evaluarEntrega(carpeta);
      resultados.push({ nombre, ...r });
    } catch (e) {
      resultados.push({
        nombre,
        dom: 0,
        eventos: 0,
        comportamiento: 0,
        codigo: 0,
        notaFinal: 0,
        error: e.message,
      });
    }
  }

  const lineas = [
    '# Resultados de entregas (lista de tareas)',
    '',
    `Generado: ${new Date().toLocaleString('es-ES')}`,
    '',
    '| Entrega | DOM | Eventos | Comportamiento | Código | Nota final |',
    '|---------|-----|---------|----------------|--------|------------|',
  ];

  for (const r of resultados) {
    const nota = r.error != null ? '—' : r.notaFinal.toFixed(2);
    const extra = r.error ? ` (${r.error})` : '';
    lineas.push(`| ${r.nombre}${extra} | ${r.dom} | ${r.eventos} | ${r.comportamiento} | ${r.codigo} | ${nota} |`);
  }

  lineas.push('');
  lineas.push('---');
  lineas.push('');
  lineas.push('**Criterios (1–4):** DOM, Eventos, Comportamiento, Código. Nota final = media de los cuatro.');
  lineas.push('');

  fs.writeFileSync(ARCHIVO_RESULTADOS, lineas.join('\n'), 'utf8');
  console.log(`Evaluadas ${resultados.length} entregas. Resultados en: ${ARCHIVO_RESULTADOS}`);
}

main();
