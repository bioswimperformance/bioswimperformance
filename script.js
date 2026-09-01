// =========================
// WHATSAPP — BIOSWIM
// =========================

// Coloque aqui o número do seu WhatsApp
// Formato: código do país + DDD + número
// Exemplo: 5541999999999
const whatsappNumber = "5541997571763";

// Mensagem que será preenchida automaticamente no WhatsApp
const whatsappMessage =
    "Olá! Vi a página da BioSwim e tenho interesse em fazer o acompanhamento biomecânico do meu nado. Gostaria de saber mais informações.";


// Cria o link do WhatsApp
const whatsappLink =
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;


// Encontra todos os botões que levam para o WhatsApp
const whatsappButtons = document.querySelectorAll(".whatsapp-button");


// Adiciona o link aos botões
whatsappButtons.forEach((button) => {

    button.href = whatsappLink;

});