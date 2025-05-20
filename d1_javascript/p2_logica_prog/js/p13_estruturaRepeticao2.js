const frutas = ['Banana', 'Maçã', 'Abacate', 'Inga'];
const person = {fname: "Diogo", Lname: "Mello", age: 18};
// for in - correndo por dentro de um array
// ler indices ou chaves do objeto

// for (let i in frutas){
//     console.log(`for in: ${i}`);
// }


let text = "";
for (let i of person){
    console.log(i);
}


// for (let i of frutas){
//     console.log(`for of: ${i}`);
// }
// // criando um objeto
// const pessoa = {
//     nome: 'Diogo',
//     sobrenome: 'Dias',
//     idade: 20
// }

// // percorrendo o objeto
// for (let chave in pessoa){
//     console.log(chave, pessoa[chave]);
// }