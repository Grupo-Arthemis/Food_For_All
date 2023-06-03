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



// // TRANSFORMAR ENDERECO EM CORDENADAS

// // Defina o endereço que você deseja geocodificar
// var endereco = "ISSO AQUI AINDA NAO TA FUNCIONANDO, FICA DANDO AS CORDENADAS DA ALEMANHA";

// // Defina sua chave de API do OpenCage Geocoder
// var apiKey = "https://api.opencagedata.com/geocode/v1/json?q=URI-ENCODED-PLACENAME&key=bb94a48df98f4f949466eb9b4e1a4907";

// // Codifique o endereço para ser usado em uma URL
// var enderecoCodificado = encodeURIComponent(endereco);

// // Crie a URL da requisição para a API do OpenCage Geocoder
// var url = "https://api.opencagedata.com/geocode/v1/json?key=bb94a48df98f4f949466eb9b4e1a4907&q=Frauenplan+1%2C+99423+Weimar%2C+Germany&pretty=1" + enderecoCodificado + "&key=" + apiKey;

// // Faça a requisição HTTP para a API do OpenCage Geocoder
// fetch(url)
//   .then(response => response.json())
//   .then(data => {
//     // Obtenha as coordenadas geográficas do resultado da resposta
//     var latitude = data.results[0].geometry.lat;
//     var longitude = data.results[0].geometry.lng;

//     // Faça o que desejar com as coordenadas (latitude e longitude)
//     console.log("Latitude: " + latitude);
//     console.log("Longitude: " + longitude);
//   })
//   .catch(error => {
//     console.error("Erro ao geocodificar o endereço:", error);
//   });

// ------------------------Tentativa do azul de fazer o mapa funcionar

const apiKey = '70578fd8fde040d1a4ed1b6a52d743a7';
const cep = '06010170';

// Fazendo uma requisição HTTP para a API
const url = `https://api.opencagedata.com/geocode/v1/json?q=${cep}&key=${apiKey}`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    // Verifique se a resposta foi bem-sucedida
    if (data.status.code === 200) {
      const results = data.results;
      if (results.length > 0) {
        // Obtendo as coordenadas geográficas
        const latitude = results[0].geometry.lat;
        const longitude = results[0].geometry.lng;
        
        console.log(`Latitude: ${latitude}`);
        console.log(`Longitude: ${longitude}`);
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

// ------------------------Tentativa do azul de fazer o mapa funcionar - fim

// MAPA INTERATIVO

// explicacao dos numeros: 2 primeiros sao as cordenadas e o ultimo nivel do zoom, coloquei 16 pra ficar perto
var mapa = L.map('mapa').setView([-23.5614, -46.6552], 16);

// Adicione um provedor de mapeamento (como OpenStreetMap) como camada base
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
  maxZoom: 18,
}).addTo(mapa);

// Adicione um marcador ao mapa
var marcador = L.marker([-23.5614, -46.6552]).addTo(mapa);
var marcador2 = L.marker([-23.53466330, -46.76771490]).addTo(mapa);

// Adicione um polígono ao mapa
var poligono = L.polygon([
  [51.509, -0.08],
  [51.503, -0.06],
  [51.51, -0.047],
]).addTo(mapa);

// Adicione uma linha ao mapa
var linha = L.polyline([
  [51.51, -0.12],
  [51.53, -0.08],
]).addTo(mapa);