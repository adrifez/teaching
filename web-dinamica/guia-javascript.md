# Guía de JavaScript para webs dinámicas

## Introducción

En una página web, **HTML** define la estructura y **CSS** el aspecto. Para que la página **reaccione** al usuario (clics, escribir en un campo, enviar un formulario) y **cambie** su contenido sin recargar, necesitamos **JavaScript**.

JavaScript se ejecuta en el navegador y puede:
- Leer y modificar el contenido de la página (el **DOM**).
- Responder a **eventos** (clic, tecla, envío de formulario).
- Crear y eliminar elementos dinámicamente.

En esta guía se resumen los conceptos necesarios para la actividad de la lista de tareas. Cada concepto tiene un **ejemplo ejecutable** en la carpeta **ejemplos/**: abre el `index.html` correspondiente en tu navegador para verlo en marcha.

---

## 1. Incluir JavaScript en HTML

Para ejecutar JavaScript en una página, se enlaza un archivo `.js` con la etiqueta `<script>`:

```html
<script src="script.js"></script>
```

Suele colocarse al final del `<body>` para que el DOM esté cargado cuando se ejecute el script.

**Ejemplo completo:** `ejemplos/01-script-en-html/`

---

## 2. Variables y tipos básicos

- **Variables:** `let` (valor que puede cambiar) y `const` (referencia que no se reasigna).
- **Tipos:** números, cadenas de texto (strings), booleanos (`true`/`false`).

Para la actividad te bastará con strings (el texto de la tarea) y referencias a elementos del DOM con `const`.

---

## 3. Acceso al DOM

El **DOM** (Document Object Model) es la representación de la página que JavaScript puede usar.

- **Por id:** `document.getElementById('id-del-elemento')` devuelve el elemento con ese `id`.
- **Por selector CSS:** `document.querySelector('selector')` devuelve el primer elemento que coincida; `querySelectorAll('selector')` devuelve una lista.

Ejemplo: si tienes `<p id="mensaje">...</p>`, con `document.getElementById('mensaje')` obtienes ese párrafo.

**Ejemplo completo:** `ejemplos/02-variables-y-dom/`

---

## 4. Leer y escribir contenido

- **Solo texto:** `elemento.textContent` permite leer o asignar el texto que se muestra (sin etiquetas HTML).
- **HTML:** `elemento.innerHTML` permite leer o escribir HTML (úsalo con cuidado para no introducir contenido no deseado).

Para la actividad, `textContent` es suficiente para el texto de cada tarea.

---

## 5. Eventos: addEventListener

Para que algo ocurra cuando el usuario hace una acción, **escuchamos** un evento:

```javascript
elemento.addEventListener('tipoDeEvento', function () {
  // código que se ejecuta cuando ocurre el evento
});
```

Tipos útiles:
- **`click`**: el usuario hace clic en el elemento.
- **`submit`**: se envía un formulario (útil en el `<form>` de añadir tarea).

**Ejemplo completo:** `ejemplos/03-eventos-boton/`

---

## 6. Crear nodos y añadirlos al DOM

- **Crear:** `document.createElement('etiqueta')` — por ejemplo `document.createElement('li')`.
- **Añadir hijo:** `padre.appendChild(nodo)` — añade `nodo` como último hijo de `padre`.
- **Quitar:** `nodo.remove()` o `padre.removeChild(nodo)`.

Para una tarea, crearás un `<li>`, dentro un `<span>` y dos `<button>`, y luego harás `listaTareas.appendChild(li)`.

**Ejemplo completo:** `ejemplos/04-crear-nodos-lista/`

---

## 7. Formularios y preventDefault

Cuando el usuario envía un `<form>`, el navegador **recarga la página** por defecto. Para procesar el envío con JavaScript y **evitar** la recarga:

```javascript
formulario.addEventListener('submit', function (evento) {
  evento.preventDefault();
  // aquí tu código: leer el input, añadir la tarea, etc.
});
```

**Ejemplo completo:** `ejemplos/05-formulario-preventDefault/`

---

## 8. Atributos y clases: classList

- **Añadir clase:** `elemento.classList.add('nombre-clase')`
- **Quitar clase:** `elemento.classList.remove('nombre-clase')`
- **Alternar:** `elemento.classList.toggle('nombre-clase')` — si tiene la clase la quita; si no la tiene la añade.

Para "marcar como hecha" una tarea, puedes hacer `li.classList.toggle('hecha')`; el CSS ya define cómo se ve la clase `.hecha`.

**Ejemplo completo:** `ejemplos/06-classList/`

---

## 9. Condicionales

Para comprobar si el texto de la tarea está vacío:

```javascript
if (!texto || !texto.trim()) {
  return;  // no hacer nada
}
```

`trim()` quita espacios al inicio y al final; si después de eso la cadena está vacía, no añadimos la tarea.

---

## Recursos externos

- **MDN en español – JavaScript:** [https://developer.mozilla.org/es/docs/Web/JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript)
- **MDN – DOM:** [https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model](https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model)
- **MDN – addEventListener:** [https://developer.mozilla.org/es/docs/Web/API/EventTarget/addEventListener](https://developer.mozilla.org/es/docs/Web/API/EventTarget/addEventListener)
- **MDN – createElement:** [https://developer.mozilla.org/es/docs/Web/API/Document/createElement](https://developer.mozilla.org/es/docs/Web/API/Document/createElement)

### Recordatorio HTML y CSS

- **HTML:** [https://developer.mozilla.org/es/docs/Web/HTML](https://developer.mozilla.org/es/docs/Web/HTML)
- **CSS:** [https://developer.mozilla.org/es/docs/Web/CSS](https://developer.mozilla.org/es/docs/Web/CSS)

---

## Cómo usar los ejemplos

En la carpeta **ejemplos/** hay una subcarpeta por concepto:

| Carpeta | Concepto |
|---------|----------|
| `01-script-en-html` | Incluir JavaScript en la página |
| `02-variables-y-dom` | Variables, getElementById, textContent |
| `03-eventos-boton` | addEventListener('click', ...) |
| `04-crear-nodos-lista` | createElement, appendChild, removeChild |
| `05-formulario-preventDefault` | Evitar recarga al enviar un form |
| `06-classList` | Añadir/quitar/toggle clases CSS |

Abre en tu navegador el archivo **index.html** de cada carpeta (doble clic o arrastrar al navegador) y abre el **script.js** en el editor para leer el código. Así puedes probar cada concepto en tu ordenador antes de completar la actividad.
