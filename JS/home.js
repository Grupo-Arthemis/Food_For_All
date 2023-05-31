const Abrirlista = document.querySelector('.Menu_Esquerda_Simbulo');

Abrirlista.addEventListener('click', () => {
    console.log('Clicou');
    if (document.querySelector('.Menu_Esquerda_Aberto ul').style.display != 'block') {
        document.querySelector('.Menu_Esquerda_Aberto ul').style.display = 'block';
        return;
    }else{
        document.querySelector('.Menu_Esquerda_Aberto ul').style.display = 'none';
        return;
    }
});