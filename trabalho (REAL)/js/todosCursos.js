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

/*Comércio*/
/*Administração Financeira no Coméricio*/
  const SobreCo = document.querySelector('#curso-Adf');
  function buttonAbrir9(){
    SobreCo.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function buttonFechar9(){
    SobreCo.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
  /*Administração Financeira no Coméricio Fim*/
  
  /*Como Vender na Internet e Redes Socias*/
  const SobreCoa = document.querySelector('#curso-Ven');
  function buttonAbrir10(){
    SobreCoa.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function buttonFechar10(){
    SobreCoa.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
  /*Como Vender na Internet e Redes Socias Fim*/
   
  /*Empreendedorismo Digital*/
  const SobreCob = document.querySelector('#curso-Emp');
  function buttonAbrir11(){
    SobreCob.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function buttonFechar11(){
    SobreCob.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
  /*Empreendedorismo Digital Fim*/
  
  /*Estratégias de Negociação para o Vendedor*/
  const SobreCoc = document.querySelector('#curso-Est');
  function buttonAbrir12(){
    SobreCoc.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function buttonFechar12(){
    SobreCoc.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
  /*Estratégias de Negociação para o Vendedor Fim*/

  /*Ferramentas de Marketing Digital*/
  const SobreCod = document.querySelector('#curso-Mar');
  function buttonAbrir13(){
    SobreCod.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function buttonFechar13(){
    SobreCod.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
  /*Ferramentas de Marketing Digital Fim*/
  
  /*Planejamento de Marketing para Gestores*/
  const SobreCoe = document.querySelector('#curso-Ges');
  function buttonAbrir14(){
    SobreCoe.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function buttonFechar14(){
    SobreCoe.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
  /*Planejamento de Marketing para Gestores Fim*/
  
  /*Planejamento Financeiro para o Comércio*/
  const SobreCof = document.querySelector('#curso-Com');
  function buttonAbrir15(){
    SobreCof.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function buttonFechar15(){
    SobreCof.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
  /*Planejamento Financeiro para o Comércio Fim*/
  
  /*Técnicas Avançandas de Vendas e Atendimento*/
  const SobreCog = document.querySelector('#curso-Ate');
  function buttonAbrir16(){
    SobreCog.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function buttonFechar16(){
    SobreCog.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
  /*Técnicas Avançandas de Vendas e Atendimento Fim*/
  
  /*Saúde*/
  const SobreSa = document.querySelector('#curso-Lim')
  function buttonAbrir17(){
    SobreSa.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function buttonFechar17(){
    SobreSa.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = 'auto';
}

/* Massagem Relaxante */
const SobreSaa = document.querySelector('#curso-ml');
function buttonAbrir18(){
    SobreSaa.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function buttonFechar18(){
    SobreSaa.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = 'auto';
}

/* Primeiros Socorros */
const SobreSab = document.querySelector('#curso-ps');
function buttonAbrir19(){
    SobreSab.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function buttonFechar19(){
    SobreSab.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = 'auto';
}