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