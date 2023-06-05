// Função para o darkmode

var darkModeInd = JSON.parse(localStorage.getItem("darkModeInd"));
if (darkModeInd == null) {
    console.log("Darkmode setada para false");
    let darkModeInd = false
    localStorage.setItem("darkModeInd", JSON.stringify(darkModeInd));
}else if(darkModeInd == true){
    console.log("Darkmode setada para true");
    darkModeTrue();
    document.querySelector('#darkModeButton').checked = true;
}else{
    console.log("Darkmode setada para false");
    darkModeFalse();
    document.querySelector('#darkModeButton').checked = false;
};

function darkModeTrue() {
    var root = document.documentElement;
    console.log('Darkmode ativado');
    root.style.setProperty("--Cor-Bege", "#3C3C3B");
    root.style.setProperty("--Cor-Cinza", "#F4EFE3");
    document.querySelector('footer').style.backgroundColor = '#3C3C3B';
    document.querySelector('body').style.backgroundColor = '#3C3C3B';
    let darkModeInd = true
    localStorage.setItem("darkModeInd", JSON.stringify(darkModeInd));
};

function darkModeFalse(){
    var root = document.documentElement;
    console.log('Darkmode desativado');
    root.style.setProperty("--Cor-Bege", "#F4EFE3");
    root.style.setProperty("--Cor-Cinza", "#3C3C3B");
    document.querySelector('body').style.backgroundColor = '#F4EFE3';
    let darkModeInd = false
    localStorage.setItem("darkModeInd", JSON.stringify(darkModeInd));
};

const DarkMode = document.getElementById('darkModeButton');
DarkMode.addEventListener('click', () => {
    if (DarkMode.checked == true) {
        darkModeTrue();
    }else{
        darkModeFalse();
    }
});

// Função para o menu lateral

const Abrirlista = document.querySelector('.Menu_Esquerda_Aberto .Menu_Esquerda_Simbulo');
Abrirlista.addEventListener('click', () => {
    console.log('Clicou');
    if (document.querySelector('.Menu_Esquerda_Aberto ul').style.display != 'flex') {
        document.querySelector('.Menu_Esquerda_Aberto ul').style.display = 'flex';
        return;
    }else{
        document.querySelector('.Menu_Esquerda_Aberto ul').style.display = 'none';
        return;
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


