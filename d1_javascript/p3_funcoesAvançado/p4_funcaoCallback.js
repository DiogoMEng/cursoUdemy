// // funcao que gera valor aleatorio
// function rand (min = 1000, max = 3000) {
//     const num = Math.random() * (max - min) + min;
//     return Math.floor(num);
// }

// function f1(callback){
//     // contagem para o retorna da funcao
//     setTimeout(function(){
//         console.log('f1');
//         // se existir uma função de callback, então f1 será executada
//         if(callback) callback();
//     }, rand());
// }

// function f2(callback){
//     // contagem para o retorna da funcao
//     setTimeout(function(){
//         console.log('f2');
//         // se existir uma função de callback, então f1 será executada
//         if(callback) callback();
//     }, rand());
// }

// function f3(callback){
//     // contagem para o retorna da funcao
//     setTimeout(function(){
//         console.log('f3');
//         // se existir uma função de callback, então f1 será executada
//         if(callback) callback();
//     }, rand());
// }

// f1(f1callback);

// function f1callback(){
//     f2(f2callback);
// }

// function f2callback(){
//     f3(f3callback);
// }

// function f3callback(){
//     console.log('Olá mundo');
// }

function greeting(name){

    alert('Olá' + name)

}


function processUserInput(callback){

    let name = prompt("Por favor insira o seu nome: ");
    callback(name);

}

processUserInput(greeting);
