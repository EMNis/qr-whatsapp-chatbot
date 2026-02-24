// App principal - versión simplificada sin módulos
document.addEventListener('DOMContentLoaded', function() {
    console.log('App iniciada');
    
    // Generar QR automáticamente cuando se carga la página
    generateQR();
    
    // Log para debug
    console.log('Bot configurado con número:', API_CONFIG.WHATSAPP_NUMBER);
});

// Función adicional para abrir WhatsApp directamente
function openWhatsAppDirect() {
    const whatsappURL = generateWhatsAppLink();
    window.open(whatsappURL, '_blank');
}