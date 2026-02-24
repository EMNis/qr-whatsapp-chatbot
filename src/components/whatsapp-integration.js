import API_CONFIG from '../../config/api-config.js';

class WhatsAppIntegration {
    constructor() {
        this.botNumber = API_CONFIG.WHATSAPP_NUMBER;
        this.initialMessage = API_CONFIG.INITIAL_MESSAGE;
    }

    generateWhatsAppLink(customMessage = null) {
        const message = customMessage || this.initialMessage;
        const cleanNumber = this.botNumber.replace(/[^0-9]/g, '');
        const encodedMessage = encodeURIComponent(message);
        return `https://api.whatsapp.com/send?phone=${cleanNumber}&text=${encodedMessage}`;
    }

    openWhatsApp(customMessage = null) {
        const link = this.generateWhatsAppLink(customMessage);
        window.open(link, '_blank');
        return link;
    }

    // Método para integración con API de ManyChat
    async sendToManyChat(subscriberId, message) {
        try {
            const response = await fetch(`${API_CONFIG.MANYCHAT_BASE_URL}/sending/sendContent`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${API_CONFIG.MANYCHAT_API_KEY}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    subscriber_id: subscriberId,
                    messages: [{
                        type: 'text',
                        text: message
                    }]
                })
            });
            
            return await response.json();
        } catch (error) {
            console.error('Error enviando mensaje a ManyChat:', error);
            throw error;
        }
    }
}

export default WhatsAppIntegration;