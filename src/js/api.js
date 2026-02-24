// API para interactuar con ManyChat
import API_CONFIG from '../../config/api-config.js';

class ManyChatAPI {
    constructor() {
        this.apiKey = API_CONFIG.MANYCHAT_API_KEY;
        this.baseURL = API_CONFIG.MANYCHAT_BASE_URL;
        this.botId = API_CONFIG.BOT_ID;
    }

    // Obtener información del bot
    async getBotInfo() {
        try {
            const response = await fetch(`${this.baseURL}/page/getInfo`, {
                headers: {
                    'Authorization': `Bearer ${this.apiKey}`,
                    'Content-Type': 'application/json'
                }
            });
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const data = await response.json();
            console.log('Información del bot:', data);
            return data;
        } catch (error) {
            console.error('Error obteniendo información del bot:', error);
            throw error;
        }
    }

    // Enviar mensaje a un suscriptor
    async sendMessage(subscriberId, messageContent) {
        try {
            const response = await fetch(`${this.baseURL}/sending/sendContent`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${this.apiKey}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    subscriber_id: subscriberId,
                    messages: [
                        {
                            type: 'text',
                            text: messageContent
                        }
                    ]
                })
            });
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const result = await response.json();
            console.log('Mensaje enviado:', result);
            return result;
        } catch (error) {
            console.error('Error enviando mensaje:', error);
            throw error;
        }
    }

    // Función legacy compatible
    async sendMessageToChatbot(message) {
        return await this.sendMessage(null, message);
    }
}

// Instancia global
const manyChatAPI = new ManyChatAPI();

// Exportar tanto la clase como la función legacy
export { ManyChatAPI, manyChatAPI as default };
export { manyChatAPI as sendMessageToChatbot };