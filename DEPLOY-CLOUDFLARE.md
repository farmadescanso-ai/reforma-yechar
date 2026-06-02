# Publicar cambios en reforma-yechar.pages.dev

GitHub ya tiene el código nuevo, pero Cloudflare Pages **no estaba actualizando** el sitio (seguía la versión de abril).

## Opción A — GitHub Actions (recomendada)

1. En [Cloudflare Dashboard](https://dash.cloudflare.com) → **My Profile** → **API Tokens** → **Create Token** → plantilla **Edit Cloudflare Workers**.
2. Añade permiso **Account → Cloudflare Pages → Edit**.
3. En el repositorio GitHub **farmadescanso-ai/reforma-yechar** → **Settings** → **Secrets and variables** → **Actions**:
   - `CLOUDFLARE_API_TOKEN` = el token
   - `CLOUDFLARE_ACCOUNT_ID` = `8c30cadaf073c5213635764dc417e60f`
4. En GitHub → **Actions** → **Desplegar en Cloudflare Pages** → **Run workflow**.

## Opción B — Panel Cloudflare

1. **Workers & Pages** → proyecto **reforma-yechar**.
2. **Settings** → comprobar que el repositorio es `farmadescanso-ai/reforma-yechar` y la rama **main**.
3. **Deployments** → **Retry deployment** o **Create deployment**.

## Comprobar que funcionó

Abre https://reforma-yechar.pages.dev/ y en el código fuente (Ctrl+U) busca `joyfa-v2`. Si aparece, el despliegue es correcto.
