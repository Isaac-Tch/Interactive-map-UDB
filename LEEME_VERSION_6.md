# Mapa UDB — Versión 6

- Se conserva el SVG vectorial de la versión 5.
- Se conserva el scroll de toda la barra izquierda.
- Se conserva la ventana emergente, las fotos, el logo y la API.
- Se restaura la iluminación amarilla de los marcadores al pasar el mouse o usar teclado, ahora con forma de pin y sin halo circular.
- Las coordenadas de los botones son las de `data/edificios.json`: si un botón no coincide exactamente con un pin dibujado en el SVG, debe ajustarse `x` e `y` de ese lugar.
- El brillo de la silueta real de cada edificio requiere identificar sus paths en el SVG; no está implementado.

## Iniciar

Abra ESTA carpeta, donde están `index.html` y `package.json`, en VS Code.

```powershell
npm install
npm run api
```

Abra `index.html` con Live Server.
