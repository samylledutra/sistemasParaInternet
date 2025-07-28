document.addEventListener("DOMContentLoaded", function () {
    if (window.location.pathname.includes("index.html")) {
        alert("Olá, seja bem-vindo!");
    }
    
    const entrarButton = document.getElementById("entrarButton");

    entrarButton.addEventListener("click", function () {
        const nomeCompletoInput = document.getElementById("nomeCompleto");
        const nomeCompleto = nomeCompletoInput.value.trim();

        if (nomeCompleto.length === 0 || nomeCompleto.split(" ").length < 2) {
            alert("Por favor, insira um nome completo válido (Nome e Sobrenome).");
        } else {
            localStorage.setItem("nomeCompleto", nomeCompleto);
            window.location.href = "menu.html";
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const gato01 = document.getElementById("gato01");
    const gato02 = document.getElementById("gato02");
    const gato03 = document.getElementById("gato03");
    const gato04 = document.getElementById("gato04");
    const gato05 = document.getElementById("gato05");
    const gerarNumeroButton = document.getElementById("gerarNumeroButton");
    const numeroSorteInput = document.getElementById("numeroSorte");

    gato01.addEventListener("click", function () {
        const nomeCompleto = localStorage.getItem("nomeCompleto").split(" ")[0];
        exibirMensagemEmbaixo(gato01, `Oi ${nomeCompleto}, tudo bem com você?`, 'textoGato01');
    });

    let carinhos = 0;
    gato02.addEventListener("click", function () {
        carinhos++;
        exibirMensagemEmbaixo(gato02, `Carinhos: ${carinhos}`, 'textoGato02');
    });

    gato03.addEventListener("mouseover", function () {
        gato03.src = "imagens/gato06.gif";
    });

    gato03.addEventListener("mouseout", function () {
        gato03.src = "imagens/gato03.gif";
        exibirMensagemEmbaixo(gato03, '', 'textoGato03');
    });

    gato04.addEventListener("mouseover", function () {
        exibirMensagemEmbaixo(gato04, "Ai, pare de fazer cócegas!", 'textoGato04');
    });

    gato04.addEventListener("mouseout", function () {
        exibirMensagemEmbaixo(gato04, "lá lá ...", 'textoGato04');
    });

    gerarNumeroButton.addEventListener("click", function () {
        const numeroSorte = Math.floor(Math.random() * 101) + 1;
        numeroSorteInput.value = numeroSorte;
    });

    function exibirMensagemEmbaixo(imagem, mensagem, id) {
        const mensagemElement = document.getElementById(id);
        mensagemElement.textContent = mensagem;
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const mensagemBemVindo = document.getElementById("mensagemBemVindo");
    const convidadoButton = document.getElementById("convidadoButton");

    const nomeCompleto = localStorage.getItem("nomeCompleto");

    if (nomeCompleto) {
        mensagemBemVindo.textContent = `${nomeCompleto}, seja bem-vindo ao jogo dos Felinos!`;
    } else {
        mensagemBemVindo.textContent = "Bem-vindo ao jogo dos Felinos!";
    }

    convidadoButton.addEventListener("click", function () {
        window.location.href = "felino.html";
    });
});
