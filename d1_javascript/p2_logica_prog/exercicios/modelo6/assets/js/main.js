function criaHoraDosSegundos(segundos){
    // criando a data
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'
    });
}

// selecionando as classes html
// =======================================
const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
// =====================================
let segundos = 0;
let timer;
function iniciaRelogio(){
    timer = setInterval(function (){
        segundos++;
        relogio.innerHTML = criaHoraDosSegundos(segundos);
    }, 1000)
}

// criando evento ao clicar em um botão
// ====================================
document.addEventListener('click', function(e){
    // informa o elemento que está sendo clicado
    const element = e.target;

    if(element.classList.contains('zerar')){
        clearInterval(timer);
        relogio.innerHTML = '00:00:00';
        segundos = 0;
        relogio.classList.remove('pausado');
    }

    if(element.classList.contains('iniciar')){
         // ao iniciar o estilo colocado em pausado será removido
        relogio.classList.remove('pausado');
        clearInterval(timer);
        iniciaRelogio();
    }

    if(element.classList.contains('pausar')){
        clearInterval(timer);
        relogio.classList.add('pausado');
    }
})
// ====================================