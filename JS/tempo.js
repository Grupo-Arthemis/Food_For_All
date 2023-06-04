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