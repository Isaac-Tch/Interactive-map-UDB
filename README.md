# 🗺️ Mapa interactivo UDB — versión ampliada

Sitio web interactivo desarrollado para representar un mapa del campus Soyapango de la Universidad Don Bosco (UDB), permitiendo visualizar de forma organizada diferentes espacios y elementos de la institución.

## Tecnologías
- HTML5 y CSS3
- Bootstrap 5.3.8 para la interfaz responsiva
- Vue 3 para renderizar datos y gestionar búsqueda, filtros y selección
- JSON como estructura de datos
- JSON Server como API REST simulada
- `fetch()` como técnica AJAX moderna para solicitar los datos

## Estructura
```text
udb-mapa-interactivo/
├── index.html
├── package.json
├── README.md
├── css/
│   └── estilos.css
├── js/
│   └── app.js
├── data/
│   └── edificios.json
└── img/
    ├── mapa-campus-udb.svg
    └── fotos/
        └── LEEME.txt
```

## Cómo encender JSON Server y probar la API

### 1. Instalar Node.js
Instala la versión LTS desde https://nodejs.org/. Luego cierra y vuelve a abrir la terminal y comprueba:
```bash
node -v
npm -v
```
Si ambos comandos muestran versiones, está listo.

### 2. Abrir la carpeta correcta
Abre en Visual Studio Code la carpeta `udb-mapa-interactivo` que contiene `package.json`.

En VS Code abre **Terminal → New Terminal**. Confirma que la terminal está ubicada en esa carpeta (la ruta debe terminar en `udb-mapa-interactivo`).

### 3. Instalar las dependencias (solo la primera vez)
```bash
npm install
```
Esto instala JSON Server. No instala Node.js: Node.js se instala por separado desde su sitio oficial.

### 4. Encender la API REST simulada
```bash
npm run api
```
Deja esta terminal abierta. JSON Server debe mostrar que está escuchando en el puerto 3000.

### 5. Probar el endpoint
Abre en el navegador:
- http://localhost:3000/edificios — lista de lugares en JSON.
- http://localhost:3000/edificios/1 — un lugar por su ID.

Si se ve un arreglo/objeto JSON, la API está respondiendo.

### 6. Encender la página
Abre una segunda terminal o usa la extensión **Live Server** en VS Code. Haz clic derecho en `index.html` y elige **Open with Live Server**.

Deben quedar abiertos ambos servicios:
- Live Server: sirve el sitio web, por ejemplo `http://127.0.0.1:5500`.
- JSON Server: sirve los datos, en `http://localhost:3000`.

No cierres la terminal de `npm run api` mientras pruebes la página.

## Cómo comprobar el relieve
1. En la página del mapa, pasa el cursor sobre un marcador.
2. El marcador se eleva, aumenta de tamaño y aparece su etiqueta.
3. Haz clic y la ficha inferior muestra el nombre y la descripción.
4. Prueba también con Tab y Enter para comprobar navegación por teclado.
5. Usa los controles + y − para el zoom del mapa.

**Nota:** por ahora los puntos interactivos están superpuestos al plano SVG. El efecto de relieve se aplica a los marcadores. Para que la silueta completa de cada edificio se eleve e ilumine, hay que convertir las formas individuales del SVG en elementos identificables; si el SVG está aplanado o no identifica cada edificio, requiere editarlo o superponer polígonos.

## Cómo agregar un lugar nuevo
Edita `data/edificios.json` y añade otro objeto dentro del arreglo `edificios`. Cada objeto debe tener un `id` único, `nombre`, `categoria`, `categoriaSlug`, `icon`, `descripcion`, `referencia`, `horario`, `accesible`, `x` y `y`.

- `x`: posición horizontal en porcentaje, de 0 a 100.
- `y`: posición vertical en porcentaje, de 0 a 100.
- `foto`: ruta local a una fotografía, por ejemplo `img/fotos/edificio-3.jpg`. Déjala vacía si aún no tienes la imagen.
- `galeriaUrl`: enlace a la galería oficial de la UDB.

Después de guardar, si JSON Server está encendido, vuelve a cargar la página. Si no aparece el nuevo lugar, revisa que el JSON tenga comas y comillas correctas y que no se haya repetido un ID; luego recarga la página. Si JSON Server ya estaba abierto, normalmente detecta cambios automáticamente.

## Cómo agregar fotografías reales
La carpeta `img/fotos/` está preparada para las imágenes. Coloca ahí fotografías reales y autorizadas, por ejemplo:
- `biblioteca.jpg`
- `edificio-3.jpg`
- `edificio-8.jpg`
- `hangar.jpg`
- `owcc.jpg`
- `omm.jpg`

Luego, en el objeto de cada lugar, cambia `"foto": ""` por `"foto": "img/fotos/biblioteca.jpg"` (usa la ruta correspondiente). La ficha mostrará esa foto automáticamente. Si `foto` queda vacío, la ficha ofrece el enlace a la galería oficial UDB 360: https://www.udb.edu.sv/udb360/

Las fotos no están incluidas todavía porque no se deben presentar imágenes inventadas como si fueran fotografías reales de los edificios. Utiliza fotos propias o recursos oficiales con permiso/atribución adecuada.

## Qué significa AJAX en este proyecto
AJAX es la técnica de solicitar datos al servidor sin recargar toda la página. En este código se utiliza `fetch()` dentro de `loadPlaces()` para hacer una petición HTTP GET a `http://localhost:3000/edificios`. La respuesta JSON se convierte con `response.json()` y Vue muestra los datos.

AJAX no es un servidor ni un framework. `fetch()` es una API moderna del navegador que se utiliza para realizar solicitudes asíncronas; históricamente también se usó mucho `XMLHttpRequest`.

## Qué mostrar en la presentación
1. Abre `http://localhost:3000/edificios` para demostrar el endpoint.
2. Muestra la web en Live Server.
3. Busca “biblioteca”, filtra por categorías y selecciona varios marcadores.
4. Pasa el cursor sobre un marcador para mostrar el relieve del marcador.
5. Explica que Vue 3 actualiza la interfaz, `fetch()` hace la solicitud AJAX, JSON contiene los datos y JSON Server simula la API REST.
6. Explica que el plano proviene del SVG exportado de Figma.

## Calidad y precisión de los datos
El catálogo incluye edificios y puntos de interés, además de puntos de servicio para baños y oasis. Los nombres y descripciones se organizaron a partir del mapa y la información compartida por el equipo. Las coordenadas de los marcadores son aproximadas y deben revisarse visualmente. Los horarios quedan como “Por confirmar”; la accesibilidad no debe entenderse como una certificación oficial. Verifica cualquier dato antes de presentar el sistema como una fuente oficial de la universidad.
