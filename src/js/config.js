// Configuración global
const API_CONFIG = {
    MANYCHAT_API_KEY: '4137615:bc1d1a8d5e70277030a15c9866e4a13e',
    BOT_ID: '4137615',
    MANYCHAT_BASE_URL: 'https://api.manychat.com/fb',
    
    // Número de WhatsApp de tu bot
    WHATSAPP_NUMBER: '+5491131392122',
    WHATSAPP_BOT_URL: 'https://api.whatsapp.com/send?phone=5491131392122&text=Hola',
    
    // Mensaje inicial cuando alguien escanee el QR
    INITIAL_MESSAGE: 'Hola, vengo desde el código QR'
};

// Función para generar enlace de WhatsApp
function generateWhatsAppLink() {
    const cleanNumber = API_CONFIG.WHATSAPP_NUMBER.replace(/[^0-9]/g, '');
    const encodedMessage = encodeURIComponent(API_CONFIG.INITIAL_MESSAGE);
    return `https://api.whatsapp.com/send?phone=${cleanNumber}&text=${encodedMessage}`;
}

// Función para generar QR Code
function generateQR() {
    const qrContainer = document.getElementById('qr-container');
    const whatsappURL = generateWhatsAppLink();
    
    // Usar API gratuita para generar QR
    const qrCodeURL = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(whatsappURL)}`;
    
    qrContainer.innerHTML = `
        <div class="qr-code-wrapper">
            <h2>Chatea con nosotros en WhatsApp</h2>
            <img src="${qrCodeURL}" alt="QR Code para WhatsApp Bot" />
            <p>Escanea para iniciar conversación</p>
            <a href="${whatsappURL}" class="direct-link" target="_blank">
                O toca aquí desde tu celular
            </a>
        </div>
    `;
    
    console.log('QR generado para:', whatsappURL);
}