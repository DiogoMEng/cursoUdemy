function funcao(){
    let total = 0;
    console.log('oi');
    // pegando os argumentos passados sem parametro (obs: so funciona com function)
    // console.log(arguments)
    for (let argumento of arguments) {
        total += argumento;
    }
    console.log(total);
}

// adicionando um valor padrão a um parametro
function funcao2(a, b = 2){
    console.log(a + b);
}

// parametros utilizando desestruturação
// nota: a mesma ideia pode servi como desestruturação de array funcao3([nome, sobrenome, idade])
function funcao3({nome, sobrenome, idade}) {
    console.log(nome, sobrenome, idade);
}

// rest operator - sempre deve ser o ultimo parametro
function funcao4(operador, acumulador, ...numerador) {
    for (let numero of numerador){
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
    }

    console.log(acumulador);
}

funcao(1, 2, 3, 4, 5);
// a = 2 e b = 0, portanto o parametro b será igual 2
funcao2(5)

let obj = {nome: 'Diogo', sobrenome: 'Dias', idade: 20};
funcao3(obj);
funcao4('-', 30, 1, 2, 3, 4, 5);