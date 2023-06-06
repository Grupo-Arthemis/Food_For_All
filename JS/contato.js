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

function mascaraCep() {
    var cepInput = document.getElementById("cep");
    var cep = cepInput.value.replace(/\D/g, ""); // Remover todos os caracteres não numéricos

    if (cep.length > 8) {
      cep = cep.slice(0, 8); // Limitar o número de dígitos a 8
    }

    // Formatar o cep com a máscara desejada
    if (cep.length === 8) {
      cep = cep.replace(/^(\d{5})(\d{3})$/, "$1-$2");
    }

    cepInput.value = cep;
  }

const apiKey = '70578fd8fde040d1a4ed1b6a52d743a7';
let mapa; // Variável global para o mapa

const enviarCep = document.getElementById("Botao2");
const cepe = document.getElementById("cep");

enviarCep.addEventListener("click", function() {
    const cep = cepe.value;
    if (cep.length > 1) {
        console.log(cep);
        CEP(cep).then((result) => {
            console.log(result);
            const { latitude, longitude } = result;
            if (mapa) {
                changeMapView(latitude, longitude);
            } else {
                initMap(latitude, longitude);
            }
        });
    } else {
        console.log('CEP inválido');
    }
});

function CEP(cep) {
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${cep}&key=${apiKey}`;
    return fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.status.code === 200) {
                const results = data.results;
                if (results.length > 0) {
                    const { lat, lng } = results[0].geometry;
                    return { latitude: lat, longitude: lng };
                } else {
                    console.log('Nenhum resultado encontrado para o CEP fornecido.');
                }
            } else {
                console.log('Erro na requisição:', data.status.message);
            }
        })
        .catch(error => {
            console.log('Erro na requisição:', error);
        });
};

function initMap(latitude, longitude) {
    mapa = L.map('mapa').setView([latitude, longitude], 16);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
        maxZoom: 20,
    }).addTo(mapa);

    var marcador = L.marker([latitude, longitude]).addTo(mapa);
}

function changeMapView(latitude, longitude) {
    if (mapa) {
        mapa.setView([latitude, longitude]);
    }
}
