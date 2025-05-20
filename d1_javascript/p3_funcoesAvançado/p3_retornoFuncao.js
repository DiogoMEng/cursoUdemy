// retornando um valor normal
function soma (a, b){
    return a + b;
}
const valor = soma(2, 2);
console.log(valor);

// retornando um objeto
function nomePessoa(nome, sobrenome){
    return {nome, sobrenome};
}

const p1 = nomePessoa('Diogo', 'Mello');
console.log(p1);

// função dentro de outra
function fala(comeco) {
    function resto(resto){
        return comeco + ' ' + resto;
    }

    return resto;
}
// ou
function criaMultiplicado(multiplicador){
    return function(n){
        return n * multiplicador;
    };
}

const falar = fala('OI');
const sobraFala = falar('mano');
console.log(sobraFala);

const duplica = criaMultiplicado(2);
const triplica = criaMultiplicado(3);
const quadriplica = criaMultiplicado(4);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));
