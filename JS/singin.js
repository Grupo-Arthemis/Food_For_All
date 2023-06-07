//Verificando se a lista de usuários existe no localStorage
var listaUser = JSON.parse(localStorage.getItem("listaUser"));
if (listaUser == null) {
    console.log("Lista de usuários não encontrada, criando lista...");
    let listaDeUsuarios = [
        {
            nomeUsuario : "Admin",
            emailUsuario : "Admin",
            senhaUsuario: "123456",
            cpfCnpjUsuario: "12345678901",
            CodPessoa : "Fisica"
            
        },
    ];
    localStorage.setItem("listaUser", JSON.stringify(listaDeUsuarios));
};

var nome = document.getElementById("Nome");
var email = document.getElementById("Email");
var CNPJ = document.getElementById("CNPJ");
var senha = document.getElementById("Senha");
var confirma = document.getElementById("Senha_Confirm");




var listaUser = JSON.parse(localStorage.getItem("listaUser"));

// funcao para limpar os campos depois de cadastrar
function limparCampos() {
    nome.value = '';
    email.value = '';
    CNPJ.value = '';
    senha.value = '';
    confirma.value = '';
};

// Ver e desver a senha

const SenhaVer = document.querySelector(".eye");
const SenhaVerC = document.querySelector(".eyec");

SenhaVerC.addEventListener("click", ()=>{
    const inputPassC = document.querySelector("#Senha_Confirm");

    if(inputPassC.getAttribute("type") == "password"){
        inputPassC.setAttribute("type","text");
        SenhaVerC.setAttribute("class","fa fa-eye eye");
    }else{
        inputPassC.setAttribute("type","password");
        SenhaVerC.setAttribute("class","fa fa-eye-slash eye");
    }

});

SenhaVer.addEventListener("click", ()=>{
    const inputPass = document.querySelector("#Senha");

    if(inputPass.getAttribute("type") == "password"){
        inputPass.setAttribute("type","text");
        SenhaVer.setAttribute("class","fa fa-eye eye");
    }else{
        inputPass.setAttribute("type","password");
        SenhaVer.setAttribute("class","fa fa-eye-slash eye");
    }

});


// verificar se os campos estao vazios, ver se o email é realmente um email, ver se o nome, e email tem mais de 5 digitos
// ver se a senha tem entre 6 e 8 digitos, verificar se a senha esta igual na confirmacao
// e por ultimo limpar os campos se tudo for feito corretamente
var emailRegExp = /\S+@\S+\.\S{2,}/;
function validarFormulario() {
    
    // Verificando se os campos estão preenchidos e corretos
    if (nome.value === "" | CNPJ.value ==="" | email.value === "" || senha.value === "" || confirma.value === "") {
        alert("Por favor, preencha todos os campos (nome, CPF / CNPJ, email, senha e confirmação).");
        return false;
    } else if (!emailRegExp.test(email.value)) {
        alert("Por favor, informe um e-mail válido.");
        return false;
    } else if (nome.value.length < 2 || nome.value.length > 20 || email.value.length < 5) {
        alert("Os campos nome, CPF / CNPJ e email não atingiram o número mínimo de caracteres.");
        return false;
    } else if (CNPJ.value.length !== 14 && CNPJ.value.length !== 11) {
        alert("Voce digitou seu CNPJ/CPF incorretamente, tente novamente.")
        return false;
    } else if (senha.value.length < 6 || senha.value.length > 8) {
        alert("A senha deve ter no minimo 6 digitos e no maximo 8 digitos.")   
        return false;
    } else if (senha.value !== confirma.value) {
        alert("A senha e a confirmação devem ser iguais.");
        return false;
    } else {
        return true;
    }
};
// Verifica se o nome atende aos requisitos----------------------
nome.addEventListener("focus", ()=>{
    if (nome.value.length < 2){
        nome.setAttribute("style","outline-color:#ff0000;")}
});

nome.addEventListener("keyup", ()=>{
    if(nome.value.length < 2 || nome.value.length > 20){
        nome.setAttribute("style","outline-color:#ff0000;")
        
    }else{
        nome.setAttribute("style","outline-color:#00ff00;")
    }
});
// ---------------------------------------------------------------

// Verifica se o email atende aos requisitos----------------------

email.addEventListener("focus", ()=>{
    if (email.value.length < 5){
        email.setAttribute("style","outline-color:#ff0000;")}
});

email.addEventListener("keyup", ()=>{
    if((email.value.length < 5)||(!emailRegExp.test(email.value))) {
        email.setAttribute("style","outline-color:#ff0000;")
        
    }else{
        email.setAttribute("style","outline-color:#00ff00;")
    }
});
// ---------------------------------------------------------------

// Verifica se o CNPJ | CPF atende aos requisitos----------------------

CNPJ.addEventListener("focus", ()=>{
    if (CNPJ.value.length < 11){
        CNPJ.setAttribute("style","outline-color:#ff0000;")}
});

CNPJ.addEventListener("keyup", ()=>{
    if((CNPJ.value.length !== 11)&&(CNPJ.value.length !== 14)) {
        CNPJ.setAttribute("style","outline-color:#ff0000;")

    }else{
        CNPJ.setAttribute("style","outline-color:#00ff00;")
    }
    
});
// ---------------------------------------------------------------
// Verifica se o senha atende aos requisitos----------------------

senha.addEventListener("focus", ()=>{
    if (senha.value.length < 5){
        senha.setAttribute("style","outline-color:#ff0000;")}
});

senha.addEventListener("keyup", ()=>{
    if((senha.value.length < 6)||(senha.value.length > 8)) {
        senha.setAttribute("style","outline-color:#ff0000;")

    }else{
        senha.setAttribute("style","outline-color:#00ff00;")
    }
    
});
// ---------------------------------------------------------------
// Verifica se o senha foi confirmada-----------------------------

confirma.addEventListener("focus", ()=>{
    if((confirma.value != senha.value)||(confirma.value.length < 6)){
        confirma.setAttribute("style","outline-color:#ff0000;")}
});

confirma.addEventListener("keyup", ()=>{
    if((confirma.value != senha.value)) {
        confirma.setAttribute("style","outline-color:#ff0000;")

    }else{
        confirma.setAttribute("style","outline-color:#00ff00;")
    }
    
});
// ---------------------------------------------------------------


//clique do botao onde faz a verificação, pergunta se deseja salvar e limpa os campos
document.getElementById("Botao").addEventListener("click", function(event) {
    
    event.preventDefault();
    if (validarFormulario()) {
        var confirmacao = confirm("Está certo das suas informações?");
        if (confirmacao) {
            var tipoPessoa = "";
            if (CNPJ.value.length === 14) {
                tipoPessoa = "Juridica";
            } else if (CNPJ.value.length === 11) {
                tipoPessoa = "Fisica";
            }
            document.getElementsByClassName("formulario_itens");
            console.log("Nome: " + nome.value);
            console.log("Email: " + email.value);
            console.log("Senha: " + senha.value);
            console.log("Tipo de Pessoa: " + tipoPessoa);
            console.log("-----------------------");

            var listaUser = JSON.parse(localStorage.getItem("listaUser"));
            newUser = {
                nomeUsuario : nome.value,
                emailUsuario : email.value,
                senhaUsuario : senha.value,
                cpfCnpjUsuario: CNPJ.value,
                CodPessoa : tipoPessoa
            };

            try{
                listaUser.forEach((usuario) => {
                    console.log(usuario.emailUsuario);
                    console.log(usuario.emailUsuario, newUser.emailUsuario);
                    if (usuario.emailUsuario == newUser.emailUsuario) {
                        msgError.innerHTML = "<strong>Esse email já existe</strong>";
                        msgError.setAttribute("style","color:#F4EFE3;display:block;");
                        console.log("Esse email já existe");
                        throw "Esse email já existe!!!";
                    }
                }),   
                console.log("Novo usuario!!!");
                throw "Novo usuario!!!";
                

            }catch(error){
                if (error == "Novo usuario!!!"){
                    listaUser.push(newUser);
                    console.log(listaUser);
                    localStorage.setItem("listaUser", JSON.stringify(listaUser));
                    
                    msgError.setAttribute("style","color:#F4EFE3;background-color:#618985;display:block;")
                    msgError.innerHTML = "<strong>Usuário Cadastrado!</strong>"

                    setTimeout(function () {
                        window.location.href = "./login.html";
                    }, 3000 );
                }
            }
        } 
    }
});

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