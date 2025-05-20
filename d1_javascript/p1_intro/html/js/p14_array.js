// const nome = ['Maria', 'Diogo', 'Tatiana', 'Cristian', 'Joao Lucas', 'Valeria'];
// console.log(nome);

// console.log(nome instanceof Array);

// // acessando pelo indice
// console.log(nome[3]);

// // editando um valor
// nome[0] = 'Robson';
// console.log(nome);

// // adicionando um valor
// nome[7] = 'Raquel';
// nome.push('Dulcila');
// console.log(nome);
// // ** no inicio
// nome.unshift('Eduardo');
// console.log(nome);

// // recebendo o tamanho do array
// console.log(nome.length);

// // fatiamento
// console.log(`fatiamento - ${nome.slice(0, 3)}`);

// let valorInicio = 0;
// let valorFim = 4;
// const outrosNomes = nome.slice(valorInicio, valorFim);
// console.log(outrosNomes);

// // removendo um valor
// // ** final
// nome.pop();
// nome.pop();
// nome.pop();
// // ** inicio
// const primeiroElemento = nome.shift();
// console.log(`elemento removido - ${primeiroElemento}`)
// console.log(nome);
// // ** qualquer lugar
// delete nome[5];
// console.log(nome);

// // interando dentro do array
// const estados = ['Pará', 'Maranhã', 'Piauí', 'Ceara'];
// estados.forEach(function (itemEstado, indice, array){
//     console.log(`itens array: ${itemEstado}, \tindices dos itens: ${indice}, \tarray: ${array}\n`);
// });

// // procurando um valor pelo indice
// const localPara = estados.indexOf('Pará');
// console.log(`indice onde se encontra o Pará: ${localPara}`);

// // removendo itens apartir dos indices
// let inicio = 2;
// let qtdRemovido = 1;
// const estadosRemovidos = estados.splice(inicio, qtdRemovido);
// console.log(estadosRemovidos);


// // acessando somente as chaves do array
// console.log(Object.keys(estados));

// criando uma instancia de array, com array.of
const ar = Array.of(1, 3, 4, 5);
console.log(ar);

// // // ***EXTRA***

// // // *VALORES IMUTAVEIS -
// // // number, string, boolean, undefined, null, symbol e bigint

// // // *VALORES MUTAVEIS - 
// // // arrays e objetos