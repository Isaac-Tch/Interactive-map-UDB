# Corrección del brillo — versión 3

Se eliminó el filtro `drop-shadow` aplicado al botón `.map-hotspot`, porque iluminaba también la etiqueta y una zona demasiado grande. El brillo se limita ahora a `.hotspot-symbol`.

**Pendiente:** la imagen `img/mapa-campus-udb.svg` se muestra como `<img>`, por lo que los edificios no se pueden iluminar individualmente desde el CSS de la página. Para iluminar la silueta exacta de cada edificio, se necesita editar el SVG, identificar o dibujar cada contorno por separado y asociarlo al ID del edificio. No se han inventado polígonos ni posiciones.

Para ejecutar: abrir la subcarpeta `udb-mapa-interactivo`, ejecutar `npm install` y `npm run api`, y abrir `index.html` con Live Server. Si ya instalaste las dependencias, solo hace falta `npm run api`. Refrescar con Ctrl+F5.
