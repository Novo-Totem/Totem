
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

/*Programação para Robótica*/
const Sobreb = document.querySelector('#curso-rob');
function buttonAbrir3(){
    Sobreb.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function buttonFechar3(){
    Sobreb.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = 'auto';
}
/*Programação para Robótica FIM*/ 

/*Power BI*/
const Sobrec = document.querySelector('#curso-BI');
function buttonAbrir4(){
    Sobrec.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function buttonFechar4(){
    Sobrec.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = 'auto';
}
/*Power BI FIM*/ 

/*Programação de Sistemas*/
const Sobred = document.querySelector('#curso-Sys');
function buttonAbrir5(){
    Sobred.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function buttonFechar5(){
    Sobred.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = 'auto';
}
/*Programação de Sistemas FIM*/ 

/*4.0 - Técnico em Manutenção e Suporte em Informática*/
const Sobree = document.querySelector('#curso-Sup');
function buttonAbrir6(){
    Sobree.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function buttonFechar6(){
    Sobree.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = 'auto';
}
/*4.0 - Técnico em Manutenção e Suporte em Informática FIM*/ 

/*Excel Básico*/
const Sobref = document.querySelector('#curso-Exb');
function buttonAbrir7(){
    Sobref.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function buttonFechar7(){
    Sobref.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = 'auto';
}
/*Excel Básico FIM*/ 

/*Excel Básico*/
const Sobreg = document.querySelector('#curso-Exa');
function buttonAbrir8(){
    Sobreg.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function buttonFechar8(){
    Sobreg.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = 'auto';
}
/*Excel Básico FIM*/ 



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