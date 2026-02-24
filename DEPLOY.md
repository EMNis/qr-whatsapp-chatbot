# Deploy a Vercel

## Instrucciones Rápidas

### 1. Instalar Vercel CLI
```bash
npm i -g vercel
```

### 2. Deploy desde la terminal
```bash
# Ir al directorio del proyecto
cd "c:\Users\Usuario\Desktop\app\qr-whatsapp-mockup"

# Login en Vercel (primera vez)
vercel login

# Deploy del proyecto
vercel --prod
```

### 3. Configuración Automática
- Vercel detectará automáticamente que es un sitio estático
- Los archivos de `src/` se servirán correctamente
- El QR funcionará con la nueva URL de producción

### 4. URL Final
Después del deploy tendrás una URL como:
```
https://qr-whatsapp-chatbot-xxx.vercel.app
```

## Deploy via GitHub (Alternativo)

### 1. Subir a GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/TU_USUARIO/qr-whatsapp-chatbot.git
git push -u origin main
```

### 2. Conectar Vercel con GitHub
- Ir a https://vercel.com
- Conectar con GitHub
- Seleccionar el repositorio
- Deploy automático activado

## Verificación
✅ QR se genera correctamente  
✅ Al escanear abre WhatsApp  
✅ Lleva al número: +5491131392122  
✅ Mensaje: "Hola, vengo desde el código QR"  

## Configuración Post-Deploy
- URL personalizada (opcional): Configurar dominio propio
- Analytics: Habilitar métricas de Vercel
- Performance: Optimización automática de imágenes