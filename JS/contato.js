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

//---------------------------Tentativa do luan fazer o mapa funcionar
// var apiKey = "70578fd8fde040d1a4ed1b6a52d743a7";

// var cepe = document.getElementById("cep");
// var cep = "01311200";

// cepe.addEventListener("input", function() {
//   if (cepe.value.length === 8) {
//     cep = cepe.value;
//     atualizarMapa();
//   }
// });

// const url = `https://api.opencagedata.com/geocode/v1/json?q=${cep}&key=${apiKey}`;

// let long;
// let lati;

// function CEP() {
//   return fetch(url)
//     .then(response => response.json())
//     .then(data => {
//       // Verifique se a resposta foi bem-sucedida
//       if (data.status.code === 200) {
//         const results = data.results;
//         if (results.length > 0) {
//           // Obtendo as coordenadas geográficas
//           let latitude = results[0].geometry.lat;
//           let longitude = results[0].geometry.lng;

//           lati = latitude;
//           long = longitude;

//         } else {
//           console.log('Nenhum resultado encontrado para o CEP fornecido.');
//         }
//       } else {
//         console.log('Erro na requisição:', data.status.message);
//       }
//     })
//     .catch(error => {
//       console.log('Erro na requisição:', error);
//     });
// };

// function atualizarMapa() {
//   CEP().then(() => {
//     console.log(lati);
//     console.log(long);
//     var mapa = L.map('mapa').setView([lati, long], 16);

//     // MAPA INTERATIVO
  
//   // explicacao dos numeros: 2 primeiros sao as cordenadas e o ultimo nivel do zoom, coloquei 16 pra ficar perto
  
//   // Adicione um provedor de mapeamento (como OpenStreetMap) como camada base
//   L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
//     maxZoom: 20,
//   }).addTo(mapa);
  
//   // Adicione um marcador ao mapa
//   var marcador = L.marker([-23.5614, -46.6552]).addTo(mapa);
//   var marcador2 = L.marker([-23.5349055, -46.767825]).addTo(mapa);
  
//   // Adicione um polígono ao mapa
//   var poligono = L.polygon([
//     [51.509, -0.08],
//     [51.503, -0.06],
//     [51.51, -0.047],
//   ]).addTo(mapa);
  
//   // Adicione uma linha ao mapa
//   var linha = L.polyline([
//     [51.51, -0.12],
//     [51.53, -0.08],
//   ]).addTo(mapa);

//   });
// }

// atualizarMapa();


//---------------------------Tentativa do luan fazer o mapa funcionar



// ------------------------Tentativa do azul de fazer o mapa funcionar

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



// ------------------------Tentativa do azul de fazer o mapa funcionar - fim