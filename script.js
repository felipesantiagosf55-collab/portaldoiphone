document.addEventListener("DOMContentLoaded", function () {
    // Número do seu WhatsApp (apenas números com DDD)
    const numeroWhatsapp = "5543999301558";

    // Seleciona todos os botões de compra da página
    const botoesComprar = document.querySelectorAll(".btn-comprar");

    botoesComprar.forEach(botao => {
        botao.addEventListener("click", function (event) {
            // Evita o comportamento padrão caso seja um link <a>
            event.preventDefault();

            // Encontra o cartão (card) onde o botão foi clicado
            const card = botao.closest(".card");

            // Pega as informações de texto de dentro desse cartão específico
            const modelo = card.querySelector("h1").innerText;
            const semiNovo = card.querySelector("p:nth-of-type(1)").innerText; // Pega o primeiro paragrafo (se é novo ou seminovo)
            const detalhes = card.querySelector("p:nth-of-type(2)").innerText; // Pega o segundo parágrafo (Cor e GB)

            // Cria a mensagem personalizada
            const mensagem = `Olá! Gostaria de mais informações sobre o ${modelo} ${semiNovo} (${detalhes}).`;

            // Codifica a mensagem para o formato de URL do WhatsApp
            const mensagemCodificada = encodeURIComponent(mensagem);

            // Monta o link final da API do WhatsApp
            const linkWhatsApp = `https://wa.me/${numeroWhatsapp}?text=${mensagemCodificada}`;

            // Abre o WhatsApp em uma nova aba do navegador
            window.open(linkWhatsApp, "_blank");
        });
    });
});

function reservar() {
    const numeroWhatsapp = "5543999301558";
    const reservar = document.getElementById('reservar')
    const msg = "Olá! Gostaria de reservar um IPhone!"
    const mensagemCodi = encodeURIComponent(msg);

    const linkWhatsApp = `https://wa.me/${numeroWhatsapp}?text=${mensagemCodi}`;
    window.open(linkWhatsApp, "_blank");
}