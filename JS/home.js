// Função para o darkmode
var darkModeInd = JSON.parse(localStorage.getItem("darkModeInd"));

if (darkModeInd == null) {
    console.log("Darkmode setada para false");
    window.alert("Seja bem vindo ao Food For All!");
    let darkModeInd = false;
    localStorage.setItem("darkModeInd", JSON.stringify(darkModeInd));
} else if (darkModeInd == true) {
    console.log("Darkmode setada para true");
    darkModeTrue();
    document.querySelector('#darkModeButton').checked = true;
} else {
    console.log("Darkmode setada para false");
    darkModeFalse();
    document.querySelector('#darkModeButton').checked = false;
};

function darkModeTrue() {
    var root = document.documentElement;
    var LogoFechado = document.querySelector('.Menu_Esquerda_Fechado .Menu_Esquerda_Logo');
    var LogoAberto = document.querySelector('.Menu_Esquerda_Aberto .Menu_Esquerda_Logo');

    console.log('Darkmode ativado');
    root.style.setProperty("--Cor-Bege", "#3C3C3B");
    root.style.setProperty("--Cor-Cinza", "#F4EFE3");
    document.querySelector('footer').style.backgroundColor = '#3C3C3B';
    document.querySelector('body').style.backgroundColor = '#3C3C3B';
    let darkModeInd = true;
    localStorage.setItem("darkModeInd", JSON.stringify(darkModeInd));
    if (document.querySelector('title').innerHTML == 'Home') {
        LogoFechado.setAttribute('src', './Assets/LogoDarkMode.png');
        LogoAberto.setAttribute('src', './Assets/LogoDarkMode.png');
    } else {
        LogoFechado.setAttribute('src', '../Assets/LogoDarkMode.png');
        LogoAberto.setAttribute('src', '../Assets/LogoDarkMode.png');
    };
};

function darkModeFalse() {
    var root = document.documentElement;
    var LogoFechado = document.querySelector('.Menu_Esquerda_Fechado .Menu_Esquerda_Logo');
    var LogoAberto = document.querySelector('.Menu_Esquerda_Aberto .Menu_Esquerda_Logo');

    console.log('Darkmode desativado');
    root.style.setProperty("--Cor-Bege", "#F4EFE3");
    root.style.setProperty("--Cor-Cinza", "#3C3C3B");
    document.querySelector('body').style.backgroundColor = '#F4EFE3';
    let darkModeInd = false;
    localStorage.setItem("darkModeInd", JSON.stringify(darkModeInd));
    if (document.querySelector('title').innerHTML == 'Home') {
        LogoFechado.setAttribute('src', './Assets/Logo.png');
        LogoAberto.setAttribute('src', './Assets/Logo.png');
    } else {
        LogoFechado.setAttribute('src', '../Assets/Logo.png');
        LogoAberto.setAttribute('src', '../Assets/Logo.png');
    };
};

const DarkMode = document.getElementById('darkModeButton');
DarkMode.addEventListener('click', () => {
    if (DarkMode.checked == true) {
        darkModeTrue();
    } else {
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
    } else {
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

// Função para detectar usuário logado e apresentar dados do usuario Logado
var usuarioLogado = JSON.parse(localStorage.getItem("usuario-validado"));

if (usuarioLogado != null) {
    console.log("Usuário logado");
    console.log(usuarioLogado);
    var usuarioLogadoNome = usuarioLogado.nomeCompleto;
    var menuDireita1 = document.querySelectorAll('.Menu_Direita a');
    var menuDireita2 = document.querySelectorAll('.Menu_Direita li');

    menuDireita2[0].setAttribute('href', '#');

    if (document.querySelector('title').innerHTML == 'Home') {
        menuDireita2[0].innerHTML = ('<img src="./Assets/logout.png" alt="" width=30px></img>');
    } else {
        menuDireita2[0].innerHTML = ('<img src="../Assets/logout.png" alt="" width=30px></img>');
    };

    menuDireita1[1].setAttribute('href', '#');
    menuDireita1[1].innerText = usuarioLogadoNome;

    if (document.querySelector('title').innerHTML == 'Perfil') {
        var novoElemento = '<li><a href="./perfil.html" id="Ativo">Perfil</a></li>';
    } else if (document.querySelector('title').innerHTML == 'Home') {
        var novoElemento = '<li><a href="./Pages/perfil.html">Perfil</a></li>';
    } else {
        var novoElemento = '<li><a href="./perfil.html">Perfil</a></li>';
    };

    document.querySelector('.Menu_Esquerda_Aberto ul').insertAdjacentHTML('beforeend', novoElemento);
    document.querySelector('.Menu_Esquerda_Fechado ul').insertAdjacentHTML('beforeend', novoElemento);

    var menuEsquerda = document.querySelectorAll('.Menu_Esquerda_Aberto ul li');
    menuEsquerda.forEach(element => {
        console.log(element.innerHTML);
    });

    document.querySelector('.Menu_Direita li img').addEventListener('click', () => {
        console.log('Clicou');
        var confirmacao = confirm("Deseja mesmo sair?");

        if (confirmacao) {
            usuarioLogado = null;
            localStorage.setItem("usuario-validado", JSON.stringify(usuarioLogado));
            window.location.reload();
        }
    });
};