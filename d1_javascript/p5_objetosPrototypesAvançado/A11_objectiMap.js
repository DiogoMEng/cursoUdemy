// const pessoas = [
//     {id: 3, nome: 'Diogo'},
//     {id: 2, nome: 'João'},
//     {id: 1, nome: 'Lucas'}
// ];

// const pessoaNova = new Map();
// for (const pessoa of pessoas){
//     const { id } = pessoa;
//     pessoaNova.set(id, { ...pessoa });
// }

// console.log(pessoaNova);
// // obtendo a pessoa 2
// console.log(pessoaNova.get(2))

// console.log();

// // obtendo a pessoa 1
// console.log(pessoaNova.get(1))

const map1 = new Map();

map1.set('nome', 'Diogo');
map1.set('sobrenome', 'Mello');
map1.set('idade', 21);
map1.set('hobbys', ['treinar', 'jogar']);

const iterator = map1.entries();

console.log(iterator);