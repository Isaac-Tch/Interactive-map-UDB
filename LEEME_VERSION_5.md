# Mapa interactivo UDB — versión 5

## Cambios solicitados
1. Se sustituyó la captura PNG de V4 por el SVG vectorial actualizado recibido en `datos-mapaUDB.txt`. Está en `img/mapa-campus-udb.svg`.
2. La barra lateral izquierda completa (introducción, buscador, filtros, listado y aviso) tiene desplazamiento vertical independiente en escritorio.
3. Se eliminó el halo amarillo circular que aparecía sobre los marcadores.
4. Se mantuvo la ventana flotante V4, sus fotografías sin recortar, datos JSON, logo y API.

## Pendiente técnico
El SVG entregado contiene muchos grupos genéricos y paths sin identificadores por edificio. La imagen se ve nítida y muestra sus pines, pero NO se puede garantizar la iluminación exacta de la silueta ni la correspondencia de todos los pines nuevos hasta identificar las capas/paths y coordenadas correctas. Los botones invisibles existentes conservan las posiciones aproximadas previas.

## Ejecutar
Abre la carpeta **interna** `udb-mapa-interactivo` (la que contiene `package.json`) y ejecuta `npm install` y `npm run api`. Abre `index.html` con Live Server.
