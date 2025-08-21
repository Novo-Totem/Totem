
/*Introdução à Informática - Windows e Office*/ 
const body = document.body;
const Sobre = document.querySelector('.pags-sobre');
const overlay = document.getElementById('overlay');
const butaoAbrir = document.getElementById('butaoAbrido');
const botaoFechar = document.getElementById('butaoFechar');

function buttonAbrir(){
    Sobre.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function buttonFechar(){
    Sobre.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = 'auto';
}

butaoAbrir.addEventListener('click', butaoAbrido);
botaoFechar.addEventListener('click', butaoFechar);
overlay.addEventListener('click', butaoFechar);



/*Montagem e Manutenção de Computadores / Notebooks*/
const Sobrea = document.querySelector('#curso-mon');
function buttonAbrir2(){
    Sobrea.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function buttonFechar2(){
    Sobrea.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = 'auto';
}

/*Montagem e Manutenção de Computadores / NotebooksFIM*/ 



/*function buttonAbrir(){
    const Sobre = document.querySelector('.pags-sobre');
    Sobre.hidden = false;
    Sobre.removeAttribute('hidden');
    body.style.backdropFilter = "blur(5px)";
    body.style.backgroundColor = "rgba(255,255,255,0.5)";
}

function buttonFechar(){
    const Sobre = document.querySelector('.pags-sobre')
    Sobre.hidden = true;
    Sobre.setAttribute('hidden', '');

}*/