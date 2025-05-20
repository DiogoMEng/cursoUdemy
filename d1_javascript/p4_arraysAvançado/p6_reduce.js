// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // tirando os valores pares
// const total = numeros.reduce((acumulador, valor) => {
//     if(valor % 2 !== 0) acumulador.push(valor);
//     return acumulador;
// }, []);

// // retornando o array com o dobro dos valores
// const dobroValor = numeros.reduce((acumulador, valor) => {
//     acumulador.push(valor * 2);
//     return acumulador;
// }, []);

// // somando os valores pares
// const somaPares = numeros.reduce((acumulador, valor) => {
//     if (valor % 2 === 0) acumulador += valor;
//     return acumulador;
// });

// console.log(total);
// console.log(dobroValor);
// console.log(somaPares);

// const pessoa = [
//     {nome: 'Diogo', idade: 20},
//     {nome: 'Eduarda', idade: 16},
//     {nome: 'Raquel', idade: 14},
//     {nome: 'Tatiana', idade: 44},
//     {nome: 'Cristian', idade: 48},
//     {nome: 'João Lucas', idade: 8}
// ]

// // tirando a pessoa mais velha do objeto
// const velho = pessoa.reduce((acumulador, valor) => {
//     if (acumulador.idade > valor.idade) return acumulador;
//     return valor;
// });
// console.log(velho);

// const array = ['Diogo', ' ama muito', ' a Geovana', ' e a familia dele'];

// const soma = array.reduce((acumulador, valor, indice, array) =>{
//     return (acumulador += valor);
// }, 'obs: ');

// console.log(soma);