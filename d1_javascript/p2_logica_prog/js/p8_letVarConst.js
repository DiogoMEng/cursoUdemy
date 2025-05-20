// exibi como var e let se comportam em variados escopos

const verdadeira = true;

// let tem escopo de bloco
// var tem escopo de função

// a variável var pode ser redeclarada em qualquer escopo

let nome = 'Luiz';
var nome2 = 'Luiz';

if (verdadeira) {
    let nome = 'Otávio';
    console.log(nome, nome2);

    if (verdadeira) {
        let nome = 'outra coisa';
        console.log(nome, nome2);
    }
}

function helloWorld(){
    if (verdadeira){
        let nome = 'Luiz';
        var sobrenome = 'Miranda';
    }

    console.log(sobrenome);
}