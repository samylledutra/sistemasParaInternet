boy = document.getElementById("personagem");
paragrafro = document.getElementById("mensagem");

trocarPersonagem('pensativo', 'zzzzz!');

//boy.src = "img/pensativo.png";
//paragrafro.innerHTML = "zzzzz!";

boy.addEventListener("mouseover", function() {trocarPersonagem('assustado', 'O que você quer?')});
boy.addEventListener("mouseout", function() {trocarPersonagem('pensativo', 'zzzzz!')});
boy.addEventListener('click', pedirNome)

function trocarPersonagem(tipo, msg){
    boy.src=`${tipo}.png`;
    paragrafro.innerHTML = msg;
}

function pedirNome(){
    nome = prompt("Qual é o seu nome?");
    if(!nome){
        trocarPersonagem('nervoso', 'Não me faça perder meu tempo');

    }else{
        trocarPersonagem('alegre', `${nome} seja bem vindo(a)!`);
        boy.classList.add('alegre');
    }
}
