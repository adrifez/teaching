# Actividad: Lista de tareas dinámica (To-Do)

## Título y contexto

Esta es tu **primera práctica de sitio web dinámico** con HTML, CSS y JavaScript. Ya sabes crear páginas estáticas con HTML y CSS; ahora vas a hacer que la página **reaccione** a las acciones del usuario (escribir, pulsar botones) y **cambie** su contenido sin recargar.

Trabajarás sobre la carpeta **actividad/**: el HTML y el CSS están listos; tendrás que **completar el archivo `script.js`** para que la aplicación se comporte como la versión de referencia (carpeta **final/**).

---

## Objetivos de aprendizaje

- Usar JavaScript para **acceder a elementos del DOM** (`getElementById`, etc.).
- **Escuchar eventos** (clic, envío de formulario) con `addEventListener`.
- **Crear nodos** con `createElement` y **añadirlos** a la página con `appendChild`.
- **Modificar** elementos existentes (texto con `textContent`, clases con `classList`) y **eliminar** nodos con `remove`.
- Evitar el envío por defecto del formulario con `preventDefault()`.

Al final, la página debe comportarse exactamente como la versión de referencia.

---

## Descripción del resultado esperado

La aplicación es una **lista de tareas (To-Do)** con las siguientes funciones:

1. **Añadir tarea**: El usuario escribe texto en el campo y pulsa "Añadir" (o Enter). La tarea aparece en la lista como un nuevo elemento, con dos botones: "Hecha" y "Eliminar".
2. **Marcar como hecha**: Al pulsar "Hecha", la tarea se muestra tachada y con estilo diferente (clase `hecha`). El botón pasa a decir "Deshacer"; al pulsar de nuevo, la tarea vuelve a su estado normal.
3. **Eliminar**: Al pulsar "Eliminar", la tarea se quita de la lista.
4. Si el usuario intenta añadir una tarea vacía (o solo espacios), no debe ocurrir nada.

Puedes abrir **final/index.html** en el navegador para ver y probar el comportamiento esperado.

---

## Tareas concretas (qué completar en actividad/)

Completa el archivo **actividad/script.js** siguiendo los comentarios `// TODO:`:

1. **Función `añadirTarea(texto)`**
   - Comprobar si `texto` está vacío o solo tiene espacios; en ese caso, hacer `return` y no añadir nada.
   - Crear un elemento `<li>` con `document.createElement('li')`.
   - Crear un `<span>` con clase `texto-tarea` y el texto de la tarea (usar `texto.trim()`).
   - Crear el botón "Hecha" (clase `boton-marcar`). Al hacer clic, alternar la clase `hecha` en el `<li>` y cambiar el texto del botón entre "Hecha" y "Deshacer".
   - Crear el botón "Eliminar" (clase `boton-eliminar`). Al hacer clic, eliminar el `<li>` de la lista (usar `li.remove()` o `listaTareas.removeChild(li)`).
   - Añadir el `<span>` y ambos botones al `<li>`, y el `<li>` a `listaTareas`.

2. **Formulario**
   - Añadir un listener al `formulario` para el evento `'submit'`.
   - En el listener: llamar a `evento.preventDefault()` para evitar que la página se recargue.
   - Llamar a `añadirTarea(inputTarea.value)`, luego vaciar el campo (`inputTarea.value = ''`) y, si quieres, poner el foco de nuevo en el input (`inputTarea.focus()`).

---

## Entrega

- Entrega la carpeta **actividad/** con los tres archivos:
  - `index.html`
  - `styles.css`
  - `script.js` (completado por ti, sin quitar los comentarios que ayuden a entender el código)

Puedes enviar la carpeta comprimida (ZIP) o el enlace al repositorio si trabajas con Git.

---

## Rúbrica de evaluación

| Criterio | Excelente (4) | Bien (3) | Regular (2) | Insuficiente (1) |
|----------|----------------|----------|-------------|------------------|
| **Uso del DOM** | Usa correctamente `getElementById` y/o `querySelector` para obtener elementos; crea nodos con `createElement` y los añade con `appendChild`. | Igual que Excelente con pequeños fallos (p. ej. un selector incorrecto). | Obtiene algunos elementos bien pero no crea correctamente los nodos o no los enlaza bien. | No usa el DOM de forma correcta o no crea los elementos dinámicamente. |
| **Eventos** | El formulario tiene listener `submit` con `preventDefault`; los botones "Hecha" y "Eliminar" tienen listeners y la página no recarga al enviar. | Falta solo un detalle (p. ej. no hace `preventDefault` o un botón no responde). | Solo parte de los eventos funciona (p. ej. solo añadir, o solo eliminar). | Los eventos no están bien conectados o la página recarga al enviar el formulario. |
| **Comportamiento** | Añadir, marcar como hecha/deshacer y eliminar funcionan como en la referencia; no se añaden tareas vacías. | Comportamiento correcto con un fallo menor (p. ej. se añade una tarea vacía en algún caso). | Faltan una o dos funciones (marcar hecha o eliminar) o hay errores visibles al usar la lista. | La aplicación no cumple los requisitos o hay errores que impiden usarla. |
| **Código** | Código ordenado, con comentarios útiles y nombres de variables/funciones claros. | Código legible con algún comentario o nombre mejorable. | Código confuso o sin comentarios. | Código muy desordenado o incompleto sin justificación. |

**Nota final**: se puede usar la media de los cuatro criterios o una ponderación que indique el profesor (por ejemplo, dar más peso a "Comportamiento" y "Eventos").
