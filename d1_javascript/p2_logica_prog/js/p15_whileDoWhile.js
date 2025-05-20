// let i = 0;

// // criando o laço
// while (i <= 10) {
//     console.log(i);
//     i++;
//     // o laço termina quando 'i' for igual a 10
// }

// console.log('fim do laço');

// gerando valores aleatorios
function random(min, max){
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

min = 1;
max = 50;
let rand = random(min, max);

// checando a condição para executar o laço
while(rand !== 10) {
    // executando o codico
    rand = random(min, max);
    console.log(rand);
}

console.log('==========================')

do {
    // executando o codigo
    rand = random(min, max);
    console.log(rand);
//   chacando a condição
} while (rand !== 10)
