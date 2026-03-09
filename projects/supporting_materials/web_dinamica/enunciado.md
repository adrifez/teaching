# Actividad: Lista de tareas dinámica

## Título y contexto

Esta es tu **primera práctica de sitio web dinámico** con HTML, CSS y JavaScript. Ya sabes crear páginas estáticas con HTML y CSS; ahora vas a hacer que la página **reaccione** a las acciones del usuario (escribir, pulsar botones) y **cambie** su contenido sin recargar.

Trabajarás sobre la carpeta **actividad/**: el CSS está listo; tendrás que **completar los archivos `index.html` y `script.js`** para que la aplicación se comporte como la versión de referencia: [https://adrifez.github.io/teaching/](https://adrifez.github.io/teaching/).

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

Puedes abrir [https://adrifez.github.io/teaching/](https://adrifez.github.io/teaching/) en el navegador para ver y probar el comportamiento esperado.

---

## Entrega

- Entrega la carpeta **web_dinamica_Apellidos_Nombre/** con los tres archivos:
  - `index.html`
  - `styles.css`
  - `script.js`

Enviar la carpeta comprimida (ZIP) a través de Educamos.

Ejemplo de archivo de entrega: **web_dinamica_FernandezAmador_Adrian.zip**

---

## Criterios de puntuación

La práctica se valora sobre **10 puntos**:

- **HTML (2 pts).** Enlace a `script.js` y los `id` necesarios en el formulario, input, botón y lista (`formulario-tarea`, `input-tarea`, `boton-añadir`, `lista-tareas`).
- **Formulario y eventos (2 pts).** Listener `submit` con `preventDefault()` y llamada a `añadirTarea` con el valor del input; la página no recarga al enviar.
- **Añadir tarea (2 pts).** No añadir tareas vacías (validar con `trim`); crear `li`, `span` y botones con `createElement`/`appendChild` y mostrarlos en la lista.
- **Marcar hecha / deshacer (2 pts).** Botón "Hecha" con listener que alterne la clase `hecha` en el `li` (`classList.toggle`) y cambie el texto del botón a "Deshacer" o "Hecha".
- **Eliminar tarea (2 pts).** Botón "Eliminar" con listener que quite el `li` de la lista (`remove`).


