const { objectExpression } = require("@babel/types");

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numerosDobro = numeros.map(valor => valor * 2);

console.log(numerosDobro);

const pessoa = [
    {nome: 'Diogo', idade: 20},
    {nome: 'Eduarda', idade: 16},
    {nome: 'Raquel', idade: 14},
    {nome: 'Tatiana', idade: 44},
    {nome: 'Cristian', idade: 48},
    {nome: 'João Lucas', idade: 8}
]

const nomes = pessoa.map(nome => nome.nome);
// retornando apenas as idades
const idades = pessoa.map(obj => ({idade: obj.idade}));

// colocando id no objeto
const comIds = pessoa.map((obj, indice) => {
    obj.id = indice + 1; 
    return obj;
});

// criando um novo objeto
const comIds2 = pessoa.map((obj, indice) => {
    const newObj = {...obj};
    newObj.id = indice + 1; 
    return newObj;
});

console.log(nomes);
console.log(idades);
console.log(comIds);
console.log(comIds2);

const array = ['Diogo', 'Carol', 'Tatiana', 'Cristian', 'Geovana', 'João Lucas', 'Silmara', 'Dulcila', 'Claudio', 'Valério'];

// let newArray = numArray.map(Math.sqrt);
// newArray = array.map((value, indice, array) =>{
//     return value + ' ' + (indice + 1);
// })

let map = Array.prototype.map;

let a = map.call('hello world', function(x) {return x.charCodeAt(0)})

console.log(a);