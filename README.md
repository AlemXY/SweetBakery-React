# SweetBakery — React + TypeScript

Reinterpretación de [AlemXY/SweetBakery](https://github.com/AlemXY/SweetBakery), conservando sus tres postres originales. Es un **proyecto conceptual de portafolio**, no una tienda activa.

## Ejecutar

```bash
npm install
npm run dev
npm run build
npm run preview
```

Node.js >= 20.19. En Netlify: rama `main`, build `npm run build`, directorio `dist`.

## Funcionalidad

- Catálogo con categorías y fotografías originales.
- Selección en memoria: suma/resta productos, cuenta total, comparte o copia la consulta.
- **Sin precios, pagos, dirección, stock o confirmación de pedidos.** El enlace de WhatsApp es genérico: el visitante escoge destinatario. Solo sirve como demostración.

## Mantenimiento

- Edita productos en `src/data/catalog.ts`.
- El CSS responsive se mantiene en `src/styles.css`.
- Las fotografías cargan desde `raw.githubusercontent.com/AlemXY/SweetBakery` y **no están duplicadas en el ZIP**. Para uso comercial confirma derechos y descarga/optimiza las imágenes autorizadas en `public/assets`, actualizando las rutas.
- Reemplaza la comunicación de demostración solo cuando exista un negocio real con políticas, horarios, precios y canales autorizados.
