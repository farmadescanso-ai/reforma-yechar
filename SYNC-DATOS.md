# Cómo ver JOYFA y el seguimiento actual en reforma-yechar.pages.dev

## El problema

Si en **Ver código fuente** (Ctrl+U) el HTML **no** contiene `joyfa-v2` ni `presu-8`, Cloudflare sigue publicando una versión **antigua de abril**. Los cambios en GitHub no llegan solos a la web.

## Solución inmediata (2 minutos)

1. Abre https://reforma-yechar.pages.dev/
2. **F12** → pestaña **Consola**
3. Pega **una sola línea** y pulsa Enter:

```javascript
var s=document.createElement('script');s.src='https://raw.githubusercontent.com/farmadescanso-ai/reforma-yechar/main/tools/cargar-datos-actuales.js';document.head.appendChild(s);
```

4. Acepta el aviso y espera la recarga.
5. Busca **[JOYF] JOYFA MOBILIARIO** → *Casa padres - Fran Lara (mobiliario)* (17.787 €).

## Arreglar el despliegue (para no depender del script)

### En Cloudflare

1. [dash.cloudflare.com](https://dash.cloudflare.com) → **Workers & Pages** → **reforma-yechar**
2. **Settings** → **Builds & deployments**: repositorio `farmadescanso-ai/reforma-yechar`, rama **main**
3. **Deployments** → **Retry deployment** o **Create deployment**

### Comprobar

Ctrl+U en la web y busca `joyfa-v2`. Si aparece, el despliegue es correcto.

### GitHub Actions (opcional)

Secrets en el repo: `CLOUDFLARE_API_TOKEN` y `CLOUDFLARE_ACCOUNT_ID` = `8c30cadaf073c5213635764dc417e60f`.  
Luego **Actions** → **Desplegar en Cloudflare Pages** → **Run workflow**.
