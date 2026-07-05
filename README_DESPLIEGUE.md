# 🐾 PATITAS — Guía de despliegue en Vercel

Tu app lista para publicar. Aquí va el paso a paso (sin tecnicismos).

## Qué incluye
- `index.html` — toda la app (bienvenida, dashboard, chat con tu Guía, urgencia, biblioteca, recordatorios, primeros auxilios, tienda, planes, perfil, cumpleaños, ajustes)
- `api/guia.js` — el "cerebro" de tu Guía (mantiene tu llave secreta, segura)
- `manifest.webmanifest` + `sw.js` + iconos — para que se instale como app (PWA)

## Antes de empezar necesitas 3 cosas
1. Una cuenta gratis en **GitHub** (github.com)
2. Una cuenta gratis en **Vercel** (vercel.com) — entra con tu GitHub
3. Tu **llave de API de Anthropic** (console.anthropic.com → API Keys)

## Pasos

### 1) Sube el proyecto a GitHub
- Crea un repositorio nuevo (ej. `patitas`)
- Sube TODOS estos archivos (puedes arrastrarlos en la web de GitHub: "Add file → Upload files")

### 2) Conéctalo a Vercel
- En vercel.com → "Add New… → Project"
- Elige tu repositorio `patitas` → "Import"
- Framework Preset: **Other** (es un sitio estático + funciones)
- Click **Deploy**

### 3) Agrega tu llave secreta (para que la Guía responda)
- En Vercel → tu proyecto → **Settings → Environment Variables**
- Name: `ANTHROPIC_API_KEY`
- Value: (pega tu llave de Anthropic)
- Guarda y haz **Redeploy** (Deployments → … → Redeploy)

### 4) ¡Listo!
- Vercel te da un enlace tipo `patitas.vercel.app`
- Ábrelo en el teléfono → menú del navegador → "Agregar a pantalla de inicio" = se instala como app 📱

## Notas honestas
- El **audio** y los **pagos** (Premium) se conectan después (reusando lo de Atrapa Sueños).
- La **tienda** ya lleva tu enlace de afiliada real.
- Si la Guía da "error de modelo", abre `api/guia.js` y cambia el nombre del modelo (línea marcada) por el actual de docs.claude.com.
