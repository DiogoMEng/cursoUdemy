// const { clearInterval } = require("timers");

// function mostraHora() {
//     let data = new Date();

//     // retorna a hora
//     return data.toLocaleTimeString('pt-BR', {
//         hour12: false
//     })
// }

// // executado dentro do setInterval por referência
// // function doIntervalo(){
// //     console.log(mostraHora());
// // }

// // função executada de tempos em tempos
// const time = setInterval(function () {
//     console.log(mostraHora());
// }, 1000); // (referência de função, tempo em milisegundos)

// // executa apenas uma vez
// setTimeout(function () {
//     clearInterval(time);
// }, 3000); // para o setInterval

// // executa apenas uma vez
// setTimeout(function () {
//     console.log('fim da execução');
// }, 5000); // manda mensagem em 5s


// let intervalID = setInterval(function(){
//     console.log('bom dia');
// },500);

setTimeout(() => {
    console.log('primeira contagem');
}, 5000);

setTimeout(() => {
    console.log('segunda contagem');
}, 8000);

setTimeout(() => {
    console.log('terceira contagem');
}, 1000);

setTimeout(() => {
    console.log('quarta contagem');
}, 3000);