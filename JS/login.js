"use strict";

//Verificando se a lista de usuários existe no localStorage
var listaUser = JSON.parse(localStorage.getItem("listaUser"));
if (listaUser == null) {
    console.log("Lista de usuários não encontrada, criando lista...");
    let listaDeUsuarios = [
        {
            nomeUsuario : "Admin",
            emailUsuario : "Admin",
            senhaUsuario: "123456",
            cpfCnpjUsuario: "12345678901"
        },
    ];
    localStorage.setItem("listaUser", JSON.stringify(listaDeUsuarios));
};

const botao = document.querySelector("#Botao");

console.log(botao)

botao.addEventListener("click", ()=>{
        let listaUser = JSON.parse(localStorage.getItem("listaUser"));
        const msgError = document.querySelector("#msgError");

        let usuarioValidado = {
            usuarioInput : document.querySelector("#Email").value,
            senhaInput : document.querySelector("#Senha").value,
        }

        try{
            listaUser.forEach((usuario)=>{
                if(usuarioValidado.usuarioInput == usuario.emailUsuario && usuarioValidado.senhaInput == usuario.senhaUsuario){
                    usuarioValidado["nomeCompleto"] = usuario.nomeUsuario;
                    usuarioValidado["cpfCnpj"] = usuario.cpfCnpjUsuario;
                    throw "VALIDADO!";
                }
            });

            throw "Usuário ou senha inválidos!";
        }catch(msg){

            if(msg == "VALIDADO!"){
                
                localStorage.setItem("usuario-validado", JSON.stringify(usuarioValidado))

                msgError.setAttribute("style","color:#F4EFE3;background-color:#618985;display:block;")
                msgError.innerHTML = "<strong>Usuário validado!</strong>"

                setTimeout(function () {
                    window.location.href = "../index.html";
                }, 3000 );
            }else{
                msgError.innerHTML = "<strong>Login invalido!</strong>";
                msgError.setAttribute("style","color:#F4EFE3;display:block;");
            }

        }
    }
);

// Função para data e hora no rodapé

function exibirHoraAtual() {
    var campoHora = document.getElementById("horaAtual");
    var campoData = document.getElementById("dataAtual");
    var dataAtual = new Date();
    var hora = formatarNumero(dataAtual.getHours());
    var minutos = formatarNumero(dataAtual.getMinutes());
    var segundos = formatarNumero(dataAtual.getSeconds());
    var horaAtual = hora + ":" + minutos + ":" + segundos;
    campoHora.innerText = horaAtual;

    var dia = formatarNumero(dataAtual.getDate());
    var mes = formatarNumero(dataAtual.getMonth() + 1);
    var ano = dataAtual.getFullYear();
    var dataAtualFormatada = dia + "/" + mes + "/" + ano;
    campoData.innerText = dataAtualFormatada;
}

function formatarNumero(numero) {
    return numero < 10 ? "0" + numero : numero;
}

// Atualizar a hora atual a cada segundo
setInterval(exibirHoraAtual, 1000);