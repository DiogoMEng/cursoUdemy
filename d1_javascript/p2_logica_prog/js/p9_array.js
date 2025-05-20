let a = 'A';
let b = 'B';
let c = 'C';

const numeros  = [1, 2, 3];
[a, b, c] = numeros; //atribuição por desestruturação

const numeros2 = [1000, 2000, 3000, 4000, 5000];

// o 3 pontos presentes antes da variavel 'resto' servem para pegar todos os valores que sobrarem dentro do array
const [primeiroValor, segundoValor, terceiroValor, ...resto] = numeros2;

// forma de pular valores - acrescentasse ',' e um espaço em branco
const [um, , dois, , tres] = numeros2;

// forma de lista dentro de outra lista
const numeros3 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// pegando o valor '6' por desestruturação
const [,[,,seis]] = numeros3


console.log(primeiroValor, segundoValor, terceiroValor, resto);
console.log(um, dois, tres);
console.log(a, b, c);

// forma de matriz
// acessando o valor 6
// sem desestruturação
console.log(numeros3[1][2])

// com desestruturação
console.log(seis)