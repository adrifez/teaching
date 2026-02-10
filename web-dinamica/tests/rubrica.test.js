const path = require('path');
const { evaluarEntrega } = require('./evaluar-rubrica');
const { PUNTUACIONES_ESPERADAS } = require('./entradas-simuladas');
const { WEB_DINAMICA } = require('./evaluador');
const fs = require('fs');

describe('Rúbrica - evaluar una entrega', () => {
  it('evaluarEntrega devuelve objeto con dom, eventos, comportamiento, codigo, notaFinal', () => {
    const r = evaluarEntrega('entregas-simuladas/entrega-01');
    expect(r).toHaveProperty('dom');
    expect(r).toHaveProperty('eventos');
    expect(r).toHaveProperty('comportamiento');
    expect(r).toHaveProperty('codigo');
    expect(r).toHaveProperty('notaFinal');
    expect([1, 2, 3, 4]).toContain(r.dom);
    expect([1, 2, 3, 4]).toContain(r.eventos);
    expect([1, 2, 3, 4]).toContain(r.comportamiento);
    expect([1, 2, 3, 4]).toContain(r.codigo);
  });
});

describe('Batería de tests - 10 entregas simuladas', () => {
  const entregas = Object.keys(PUNTUACIONES_ESPERADAS);

  entregas.forEach((carpeta) => {
    const esperado = PUNTUACIONES_ESPERADAS[carpeta];
    const nombre = path.basename(carpeta);

    it(`${nombre}: puntuación coherente con rúbrica esperada [${esperado.join(',')}]`, () => {
      const dir = path.join(WEB_DINAMICA, carpeta);
      expect(fs.existsSync(path.join(dir, 'index.html'))).toBe(true);
      expect(fs.existsSync(path.join(dir, 'script.js'))).toBe(true);

      const resultado = evaluarEntrega(carpeta);

      expect(resultado.dom).toBe(esperado[0]);
      expect(resultado.eventos).toBe(esperado[1]);
      expect(resultado.comportamiento).toBe(esperado[2]);
      expect(resultado.codigo).toBeGreaterThanOrEqual(esperado[3] - 1);
      expect(resultado.codigo).toBeLessThanOrEqual(esperado[3] + 1);
    });
  });
});
