// selecionando a classe
const paragrafos = document.querySelector('.paragrafos');
// selecionando todos os paragrafos dentro da div
const p = paragrafos.querySelectorAll('p');

// pegando todos os estilos colocados na pagina
const estiloBody = getComputedStyle(document.body);

// selecionando a cor de background do body
const backgroundColorBody = estiloBody.backgroundColor;

for (let i of p){
    // jogando o background do body nos paragrafos
    i.style.backgroundColor = backgroundColorBody;
    i.style.color = '#ffffff'
}