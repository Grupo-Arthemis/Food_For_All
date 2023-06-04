

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

