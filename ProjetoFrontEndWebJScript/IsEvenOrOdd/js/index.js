window.addEventListener("load", function(){
    document.getElementById("btnEntrar").addEventListener("click",verificarLogin);

    function verificarLogin(){
        var user = document.getElementById("txtUser").value;
        var pwd = document.getElementById("txtPwd").value;
        var vetUsuarios;

        if(user == "" || pwd == "")
        alertWifi("Preencha todas as informações", false, 0, "", 30, "");
    else {
        vetUsuarios = localStorage.getItem("vetUsuarios");

        if(!vetUsuarios) alertWifi("Usuário não encontrado", false, 0, "", 30, "");
        else {
            vetUsuarios = JSON.parse(vetUsuarios);
            var userFind = false;
            for(i=0;i<vetUsuarios.length;i++){
                if(vetUsuarios[i].nome == user && vetUsuarios[i].senha == pwd){
                    userFind = true;
                    break;
                }
            }
            if(userFind == true) window.open("jogo.html","_self");
            else alertWifi("Usuário não encontrado",false,0,"",30,"");
        }
    }
    }
});