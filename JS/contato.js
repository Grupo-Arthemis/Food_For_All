var Nome = document.getElementById("Nome");
var Email = document.getElementById("Email");
var Telefone = document.getElementById("Telefone");
var Mensagem = document.getElementById("Mensagem");

var EmailRegExp = /\S+@\S+\.\S{2,}/;

function validarFormulario() {
    
    // Verificando se os campos estão preenchidos e corretos
    if (Nome.value === "" | Email.value === "" || Telefone.value === "" || Mensagem.value === "") {
        alert("Por favor, preencha todos os campos (nome, CPF / CNPJ, email, senha e confirmação).");
        return false;
    } else if (!EmailRegExp.test(Email.value)) {
        alert("Por favor, informe um e-mail válido.");
        return false;
    } else if (Telefone.value.length < 2) {
        alert("Por favor, informe um e-mail válido.");
        return false;
    } else if (Nome.value.length < 2 || Email.value.lenght < 5) {
        alert("Os campos nome, CPF / CNPJ e email não atingiram o número mínimo de caracteres.");
        return false;
    } else {
        return true;
    }
};

function limparCampos() {
    document.getElementById("Nome").value = '';
    document.getElementById("Email").value = '';
    document.getElementById("Telefone").value = '';
    document.getElementById("Mensagem").value = '';
}

// clique do botao
document.getElementById("Botao").addEventListener("click", function(event) {
    event.preventDefault();
    if (validarFormulario()) {
        var confirmacao = confirm("Tem certeza de que deseja enviar o formulário?");
        if (confirmacao) {
            limparCampos();
            alert("Obrigado por nos contatar!");
        }
        return false;
    }
});

function mascaraTelefone() {
    var telefoneInput = document.getElementById("Telefone");
    var telefone = telefoneInput.value.replace(/\D/g, ""); // Remover todos os caracteres não numéricos

    if (telefone.length > 11) {
        telefone = telefone.slice(0, 11); // Limitar o número de dígitos a 11
    }

    // Formatar o telefone com a máscara desejada
    if (telefone.length >= 7 && telefone.length <= 11) {
        telefone = telefone.replace(/^(\d{2})(\d{4,5})(\d{4})$/, "($1) $2-$3");
    }

    telefoneInput.value = telefone;
}