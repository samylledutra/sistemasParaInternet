window.addEventListener("load", function () {
    document.getElementById("btn").addEventListener("click", validarNome);
});

function validarNome() {
    var nomeInput = document.getElementById("nome").value;
    var nomePartes = nomeInput.split(" ");

    if (nomePartes.length >= 2 && nomePartes.length <= 3) {
        var valido = true;

        for (var i = 0; i < nomePartes.length; i++) {
            if (nomePartes[i].length < 4 || nomePartes[i].length > 15) {
                valido = false;
                break;
            }
        }

        if (valido) {
            exibirMensagem(nomeInput);
            document.getElementById("iniciaisNome").style.color = "red";
        } else {
            alert("Nome inválido! Cada parte deve ter entre 4 e 15 letras.");
        }
    } else {
        alert("Nome inválido! Deve conter entre 2 e 3 partes separadas por espaços.");
    }
}

function exibirMensagem(nome) {
    var iniciais = nome.split(" ").map(parte => parte[0].toUpperCase()).join("");
    document.getElementById("iniciaisNome").textContent = iniciais;

    document.getElementById("msg").style.display = "block";

    setTimeout(function () {
        sessionStorage.setItem("iniciaisNome", iniciais);
        window.location.href = "escolherPerfil.html";
    }, 3000);
}


function exibirMensagem(nome) {
    var iniciais = nome.split(" ").map(parte => parte[0].toUpperCase()).join("");
    document.getElementById("iniciaisNome").textContent = iniciais;
    document.getElementById("msg").style.display = "block";
    

    setTimeout(function () {
        sessionStorage.setItem("iniciaisNome", iniciais);
        window.location.href = "escolherPerfil.html";
    }, 3000);
}

window.addEventListener("load", function() {
    var iniciaisNome = sessionStorage.getItem("iniciaisNome");
    document.getElementById("iniciaisNome").textContent = iniciaisNome;

    document.getElementById("visualizarBtn").addEventListener("click", function () {
        var perfilSelecionado = document.getElementById("perfil").value;

        if (perfilSelecionado === "selecione") {
            alert("Selecione um dos perfis: masculino ou feminino");
        } else if (perfilSelecionado === "masculino") {
            window.location.href = "masculino.html";
        } else if (perfilSelecionado === "feminino") {
            window.location.href = "feminino.html";
        }
    });
});
var pontuacao = 0;

window.addEventListener("load", function() {
    var trocarMarioBtn = document.getElementById("trocarMarioBtn");
    var trocarLuigiBtn = document.getElementById("trocarLuigiBtn");
    var imgElemento = document.getElementById("personagemImg");
    var pontuacaoMarioElemento = document.getElementById("pontuacaoMario");
    var pontuacaoLuigiElemento = document.getElementById("pontuacaoLuigi");

    var pontuacaoMario = 0;
    var pontuacaoLuigi = 0;

    trocarMarioBtn.addEventListener("click", function () {
        imgElemento.src = "img/mario.gif";
        pontuacaoMario++;
        pontuacaoMarioElemento.textContent = pontuacaoMario;
    });

    trocarLuigiBtn.addEventListener("click", function () {
        imgElemento.src = "img/luigi.gif";
        pontuacaoLuigi++;
        pontuacaoLuigiElemento.textContent = pontuacaoLuigi;
    });
});
