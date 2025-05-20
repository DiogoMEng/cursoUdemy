const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// filtrando os valores maior que 5
const numeros2 = numeros.filter(valor => valor > 5);
console.log(numeros2);

const pessoa = [
    {nome: 'Diogo', idade: 20},
    {nome: 'Eduarda', idade: 16},
    {nome: 'Raquel', idade: 14},
    {nome: 'Tatiana', idade: 44},
    {nome: 'Cristian', idade: 48},
    {nome: 'João Lucas', idade: 8}
]

const pessoaNomeGrande = pessoa.filter(obj => obj.nome.length <= 5);
const pessoaAdolecente = pessoa.filter(obj => obj.idade <= 20 && obj.idade >= 9);

// pegando os nomes que terminam com A
const pessoaA = pessoa.filter(obj => obj.nome.toLowerCase().endsWith('a'));

console.log(pessoaNomeGrande);
console.log(pessoaAdolecente);
console.log(pessoaA);


const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function nPrimos(valor){
    for(let i = 2; valor > i; i++){
        if(valor % i === 0){
            return false;
        }
    }

    return valor > 1;
}

console.log(array.filter(nPrimos)); // [2, 3, 5, 7, 11, 13]