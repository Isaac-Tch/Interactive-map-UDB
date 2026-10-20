# Mapa UDB — versión 4

## Cambios
- Barra de desplazamiento independiente para el listado izquierdo (escritorio).
- Ficha de cada edificio como ventana superpuesta, no debajo del mapa.
- Fotografía completa con `object-fit: contain` dentro de un marco de altura uniforme.
- Captura del mapa actualizado con pines (Oasis y salas) como imagen base `img/mapa-campus-actualizado.png`.
- Se conserva el SVG original `img/mapa-campus-udb.svg` para futuras ediciones.
- Los hotspots de la versión anterior permanecen para clic, pero se ocultan sus iconos duplicados.

## IMPORTANTE
La imagen actualizada fue recibida como **captura PNG**, no como SVG editable. Por eso los pines que aparecen en ella son gráficos, no elementos independientes. Los puntos clicables conservan coordenadas aproximadas de la versión anterior: **se deben revisar y ajustar** a los pines de la captura. Para iluminación precisa de la silueta de cada edificio y pines Oasis/salas realmente interactivos, se requiere el SVG actualizado exportado de Figma con los elementos separados. No se han inventado ubicaciones ni categorías de aire acondicionado.

## Ejecutar
En la carpeta que contiene `package.json`: `npm install` y `npm run api`. Dejar la terminal abierta y abrir `index.html` con Live Server.

## Editar
Fotografías: `img/fotos/`; referencias y datos: `data/edificios.json`; estilos: `css/estilos.css`; ventana y mapa: `index.html`; interacciones: `js/app.js`.
