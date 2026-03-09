# Web dinámica: lista de tareas (To-Do)

Proyecto educativo para introducir sitios web dinámicos con **HTML, CSS y JavaScript**. Los alumnos completan una lista de tareas (To-Do) a partir de un esqueleto de código y aprenden DOM, eventos y creación de nodos.

---

## Estructura del proyecto

| Carpeta / archivo | Descripción |
|-------------------|-------------|
| **final/** | Aplicación de referencia que funciona al 100 %. Úsala para ver el resultado esperado. |
| **actividad/** | Esqueleto para que los alumnos completen el `script.js` (y añadan ids/script en el HTML según los TODO). |
| **ejemplos/** | Ejemplos mínimos ejecutables por concepto (script en HTML, variables, eventos, crear nodos, formulario, classList). |
| **entregas-alumnos/** | Aquí se colocan las carpetas de entrega de los alumnos (una carpeta por alumno con `index.html`, `styles.css`, `script.js`). |
| **entregas-simuladas/** | Diez entregas de ejemplo usadas por la batería de tests automáticos. |
| **enunciado-y-rubrica.md** | Enunciado de la actividad y rúbrica de evaluación (DOM, Eventos, Comportamiento, Código). |
| **guia-javascript.md** | Guía de conceptos de JavaScript y referencias a los ejemplos; sin código largo (el código está en `ejemplos/`). |
| **resultados-entregas.md** | Informe generado al ejecutar la evaluación automática de `entregas-alumnos/`. |
| **tests/** | Batería de tests (Jest + JSDOM): evaluación por rúbrica y script para evaluar entregas de alumnos. |

---

## Cómo usar (alumnado)

1. **Leer** el [enunciado y rúbrica](enunciado-y-rubrica.md) y la [guía de JavaScript](guia-javascript.md).
2. **Probar** cada ejemplo en `ejemplos/` abriendo el `index.html` de cada subcarpeta en el navegador (01-script-en-html, 02-variables-y-dom, etc.).
3. **Completar** la carpeta **actividad/**: añadir en el HTML los `id` y la etiqueta `<script>` indicados en los comentarios TODO, y completar el `script.js` según las pistas.
4. **Probar** la lista de tareas abriendo `actividad/index.html` en el navegador.
5. **Entregar** la carpeta `actividad/` (con `index.html`, `styles.css` y `script.js` completados).

---

## Cómo usar (profesor)

### Ver la aplicación de referencia

Abre en el navegador:

- `final/index.html` — lista de tareas completa.

Si el repositorio tiene GitHub Pages configurado, la versión de **final** se publica automáticamente en cada push. La URL será `https://<owner>.github.io/<repo>/` (sustituye `<owner>` y `<repo>` por el usuario/org y el nombre del repositorio). En el repo, Settings → Pages → Source debe estar en **GitHub Actions**.

### Evaluar entregas de alumnos de forma automática

1. Coloca cada entrega en una **subcarpeta** dentro de `entregas-alumnos/`, por ejemplo:
   - `entregas-alumnos/2025-maria/`
   - `entregas-alumnos/2025-pedro/`
   Cada carpeta debe contener `index.html`, `styles.css` y `script.js` (misma estructura que `final/` o `actividad/` completada).

2. Desde la carpeta **tests** ejecuta:

   ```bash
   cd tests
   npm run evaluar-entregas
   ```

3. Se generará o actualizará **resultados-entregas.md** en la raíz del proyecto (`web-dinamica/`) con una tabla: nombre de entrega, puntuación en DOM, Eventos, Comportamiento, Código y nota final (media de 1 a 4).

### Ejecutar la batería de tests (entregas simuladas)

Para comprobar que la rúbrica automática se comporta como se espera sobre las 10 entregas simuladas:

```bash
cd tests
npm test
```

Si el comando `jest` no se encuentra, usa:

```bash
cd tests
node node_modules/jest/bin/jest.js --runInBand --watchAll=false
```

---

## Requisitos

- **Navegador** para abrir los HTML (final, actividad, ejemplos).
- **Node.js** (v18 o superior recomendado) para ejecutar los tests y la evaluación de entregas. En la carpeta `tests/`:

  ```bash
  npm install
  ```

  solo la primera vez (o cuando cambien las dependencias).

---

## Resumen de comandos

| Comando | Dónde ejecutarlo | Qué hace |
|---------|------------------|----------|
| `npm run evaluar-entregas` | Dentro de `tests/` | Evalúa todas las carpetas en `entregas-alumnos/` y escribe `resultados-entregas.md`. |
| `npm test` | Dentro de `tests/` | Ejecuta la batería de tests sobre las 10 entregas en `entregas-simuladas/` y comprueba que las puntuaciones coinciden con la rúbrica definida. |

Para abrir la aplicación o los ejemplos, basta con abrir el archivo `index.html` correspondiente en el navegador (doble clic o arrastrar al navegador).
