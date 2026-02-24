import API_CONFIG from '../../config/api-config.js';

class QRGenerator {
    constructor() {
        this.qrContainer = document.getElementById('qr-container');
    }

    generateQR() {
        // URL completa para WhatsApp con tu número argentino
        const whatsappURL = `https://api.whatsapp.com/send?phone=5491131392122&text=${encodeURIComponent(API_CONFIG.INITIAL_MESSAGE)}`;
        
        // Generar código QR
        const qrCodeURL = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(whatsappURL)}`;
        
        this.displayQR(qrCodeURL, whatsappURL);
    }

    displayQR(qrURL, directLink) {
        this.qrContainer.innerHTML = `
            <div class="qr-code-wrapper">
                <h2>Chatea con nosotros en WhatsApp</h2>
                <img src="${qrURL}" alt="QR Code para WhatsApp Bot" />
                <p>Escanea para iniciar conversación</p>
                <a href="${directLink}" class="direct-link" target="_blank">
                    O toca aquí desde tu celular
                </a>
            </div>
        `;
    }
}

export default QRGenerator;