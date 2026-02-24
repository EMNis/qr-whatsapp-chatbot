# QR WhatsApp Mockup

## Descripción
Esta es una aplicación web que genera un código QR que conecta directamente con un chatbot de WhatsApp creado en ManyChat. Los usuarios pueden escanear el código QR para iniciar una conversación con el bot.

## Estructura del Proyecto
```
qr-whatsapp-mockup
├── src
│   ├── index.html                    # Página principal de la aplicación
│   ├── css
│   │   └── styles.css               # Estilos CSS con tema de WhatsApp
│   ├── js
│   │   ├── app.js                   # Script principal de la aplicación
│   │   ├── api.js                   # Funciones para interactuar con ManyChat API
│   │   └── config.js                # Configuración global de la aplicación
│   └── components
│       ├── qr-generator.js          # Generador de códigos QR
│       └── whatsapp-integration.js  # Integración con WhatsApp y ManyChat
├── assets
│   └── images                       # Imágenes utilizadas en la aplicación
├── config
│   └── api-config.js               # Configuración de la API de ManyChat
├── package.json                    # Configuración de dependencias
└── README.md                       # Documentación del proyecto
```

## Configuración Actual
- **Número de WhatsApp**: `+5491131392122`
- **Bot ID de ManyChat**: `4137615`
- **Mensaje inicial**: "Hola, vengo desde el código QR"

## Instrucciones de Instalación

1. **Navega al directorio del proyecto**:
   ```bash
   cd qr-whatsapp-mockup/src
   ```

2. **Inicia un servidor HTTP local**:
   ```bash
   # Usando Python
   python -m http.server 8000
   
   # O usando Node.js (si tienes live-server instalado)
   npx live-server
   ```

3. **Abre la aplicación**:
   - Ve a `http://localhost:8000` en tu navegador
   - La página cargará automáticamente el código QR

## Uso de la Aplicación

### 🎯 Funcionalidades Principales:
- **Generación automática de QR** al cargar la página
- **Enlace directo** para dispositivos móviles
- **Diseño responsive** adaptado a móviles y computadoras
- **Tema de WhatsApp** con colores oficiales

### 📱 Cómo Usar:
1. **En computadora**: Visualiza el código QR generado
2. **En móvil**: Escanea el QR o toca el enlace directo
3. **WhatsApp se abre automáticamente** con el chat del bot

### 🔗 Enlaces Generados:
- **URL de WhatsApp**: `https://api.whatsapp.com/send?phone=5491131392122&text=Hola%2C%20vengo%20desde%20el%20c%C3%B3digo%20QR`

## Configuración de la API

### 📋 Archivo de Configuración
Actualiza `config/api-config.js` con tu información:

```javascript
const API_CONFIG = {
    MANYCHAT_API_KEY: 'tu_api_key_aqui',
    BOT_ID: 'tu_bot_id',
    WHATSAPP_NUMBER: '+tu_numero_whatsapp',
    INITIAL_MESSAGE: 'Tu mensaje personalizado'
};
```

### 🔑 Obtener Configuración de ManyChat:
1. **API Key**: Ve a Settings → API en tu dashboard de ManyChat
2. **Bot ID**: Desde la URL de tu dashboard `https://app.manychat.com/fb[BOT_ID]/dashboard`
3. **Número WhatsApp**: En Settings → Channels → WhatsApp

## Tecnologías Utilizadas

- **HTML5** - Estructura de la página
- **CSS3** - Estilos y diseño responsive
- **JavaScript ES5** - Lógica de la aplicación
- **QR Server API** - Generación de códigos QR
- **ManyChat API** - Integración con el chatbot

## Resolución de Problemas

### ❌ El QR no se genera:
- Verifica que el servidor HTTP esté ejecutándose
- Abre las herramientas de desarrollador (F12) y revisa la consola
- Asegúrate de que los archivos JS se cargan correctamente

### ❌ WhatsApp no abre:
- Verifica que el número en `config.js` sea correcto
- Asegúrate de que el número no tenga espacios ni caracteres especiales

### ❌ Error de CORS:
- Usa un servidor HTTP local, no abras el archivo HTML directamente
- Ejecuta `python -m http.server 8000` desde la carpeta `src`

## Próximos Pasos

- 🔄 Agregar analytics para tracking de QRs escaneados
- 🎨 Personalizar diseño con branding específico
- 📊 Integrar dashboard para estadísticas
- 🔔 Añadir notificaciones push

## Licencia
Este proyecto está bajo la Licencia MIT.
Feel free to submit issues or pull requests for any improvements or bug fixes.

## License
This project is licensed under the MIT License.