// // criando meu laço de repetição
// for (let i = 0; i < 6; i++) {
//     console.log(`valor ${i}`);
// }

// // incrementando i com +10
// for (let i = 0; i < 51; i+=10) {
//     console.log(`valor ${i}`);
// }

// // repetindo inversamente
// for (let i = 6; i > -1; i--) {
//     console.log(`valor ${i}`);
// }

// // teste - verificando se o valor é par
// for (let i = 0; i < 11; i++) {
//     // aplicando o condicional
//     const par = i % 2 == 0;
//     console.log(i, par);
// }

// // outra forma
// for (let i = 0; i < 11; i++) {
//     // aplicando o condicional caso seja true = par ou false = impar
//     const par = i % 2 == 0 ? 'par' : 'impar';
//     console.log(i, par);
// }

// // percorrendo um array
// const frutas = ['maça', 'pera', 'uva'];
// // nota - length: mostra o tamanho de um array
// for (let i = 0; i < frutas.length; i++) {
//     console.log(`nome fruta: ${frutas[i]}`);
// }

// label
const nomes = ['Diogo', 'Geovana', 'Tatiana', 'Cristian', 'Carol'];

ForOne:
for (let i of nomes){
    console.log(i);
    for (let a in nomes){
        if (a = 3){
            break ForOne;
        }
    }
}

