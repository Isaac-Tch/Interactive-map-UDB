# Barra lateral con desplazamiento independiente

En pantallas de escritorio (992 px o más), la lista de lugares tiene su propia barra de desplazamiento. El buscador, los filtros y la nota inferior quedan visibles. El mapa no se mueve al desplazar la lista con el cursor sobre ella.

Archivos modificados: `index.html` (contenedor `.places-scroll`) y `css/estilos.css` (reglas responsive de scroll).

Para probar: ejecutar `npm install` y `npm run api` desde la carpeta que contiene `package.json`; abrir `index.html` con Live Server y recargar con Ctrl+F5. En pantallas pequeñas se mantiene el desplazamiento normal de la página.
