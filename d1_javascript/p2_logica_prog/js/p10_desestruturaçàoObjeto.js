// criando em objeto
const pessoa = {
    nome: 'Diogo',
    sobrenome: 'Dias',
    idade: 20,
    endereco: {
        rua: 'WE 84',
        numero: 881
    }
};

const hobbies = ['jogar videogame', 'exercicios', 'desenhar'];

const [a, , b] = hobbies;
console.log(a, '/', b); 

// atribuição via desestruturação
const {nome, sobrenome} = pessoa;
// outra forma
const {nome: n} = pessoa;

// extraindo valores de endereço
const {endereco: {rua, numero}} = pessoa;

// pegando todo o resto de valores
const {...sobras} = pessoa;

console.log(n, sobrenome);
console.log(rua, numero);
console.log(sobras);