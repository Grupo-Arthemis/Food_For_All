var usuarioLogado = JSON.parse(localStorage.getItem("usuario-validado"));
var nome = document.querySelector('.Nome');
var nomePerfil = document.querySelector('.Nome_User');
var CNPJ = document.querySelector('.CNPJ');
var Email = document.querySelector('.Email');

nome.innerHTML = usuarioLogado.nomeCompleto;
nomePerfil.innerHTML = usuarioLogado.nomeCompleto;
CNPJ.innerHTML = usuarioLogado.cpfCnpj;
Email.innerHTML = usuarioLogado.email;