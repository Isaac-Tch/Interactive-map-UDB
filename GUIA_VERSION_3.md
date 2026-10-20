# Mapa interactivo UDB — versión 3

## Actualizaciones
- Fotografías disponibles y logo incorporados desde los ZIP recibidos.
- Datos del TXT organizados por edificio y nivel, omitiendo entradas duplicadas como A32.
- Biblioteca, Pinacoteca, CDIU y otros edificios muestran sus servicios y salas de estudio en la ficha.
- Los oasis y servicios interiores sin coordenadas confirmadas no se muestran como pines separados. Sus datos permanecen en el JSON y en las fichas de edificios.
- No se etiqueta ninguna sala como con A/C o sin A/C porque el TXT no lo confirma.

## Ejecutar
Abre terminal **en esta carpeta** (donde está package.json). Ejecuta `npm install` y luego `npm run api`. Abre el proyecto con Live Server de VS Code para servir index.html. Se necesita conexión a internet para Vue y Bootstrap CDN.

## Dónde editar
- Fotografías: `img/fotos/` y propiedad `foto` de `data/edificios.json`.
- Logo: `img/logoUDB.jpg`, referenciado en `index.html`.
- Niveles y servicios: propiedad `niveles` de cada objeto de `data/edificios.json`.
- Marcadores: propiedades `x`, `y` y `mostrarPin`. `mostrarPin: false` oculta pines de servicios interiores cuya ubicación no se ha confirmado.
- Estilos: `css/estilos.css`. Interacción: `js/app.js`.

## Limitación importante: iluminación individual
El SVG entregado se carga mediante `<img>` y **no expone cada edificio como una forma interactiva individual**. Por ello, la iluminación amarilla se aplica por ahora al marcador, no a toda la silueta del edificio. Para una iluminación precisa se necesita identificar/segmentar las formas de cada edificio en el SVG (idealmente en Figma) y conectarlas con los ID del JSON. No se han inventado contornos ni ubicaciones.

## Pendientes de validación
- Fotos faltantes para edificios sin imagen, sin reutilizar fotos de lugares distintos.
- Confirmar cuáles salas de estudio tienen A/C.
- Confirmar la posición de Oasis y salas para activar pines independientes.
- Verificar asignaciones de niveles y espacios, especialmente las notas concatenadas del TXT.
