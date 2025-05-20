// const { Writable } = require("stream");

function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        // mostrando o estoque
        enumerable: true,
        // valor do estoque
        value: estoque,
        // fazendo com que o valor de estoque não possa ser alterado
        Writable: false,
        // informando se a variavel pode ser alterada
        configurable: false
    });
}

function Pessoa(nome, sobrenome, idade){
    Object.defineProperties(this, {
        nome: {
            // mostrando o estoque
            enumerable: true,
            // valor do estoque
            value: nome,
            // fazendo com que o valor de estoque não possa ser alterado
            Writable: true,
            // informando se a variavel pode ser alterada
            configurable: true
        },

        sobrenome: {
            // mostrando o estoque
            enumerable: true,
            // valor do estoque
            value: sobrenome,
            // fazendo com que o valor de estoque não possa ser alterado
            Writable: false,
            // informando se a variavel pode ser alterada
            configurable: false
        },

        idade: {
            // mostrando o estoque
            enumerable: true,
            // valor do estoque
            value: idade,
            // fazendo com que o valor de estoque não possa ser alterado
            Writable: false,
            // informando se a variavel pode ser alterada
            configurable: false
        }
    });
}

const person = new Pessoa("Diogo", "Mello", 21);
console.log(person.nome, person.sobrenome, person.idade);

// const p1 = new Produto('Camiseta', 20, 3);
// console.log(p1);
// // mostrando as chaves do objeto
// console.log(Object.keys(p1));

// gender = gênero

// let person1 = function () {
//     this.nome = "Diogo";
//     this.sobrenome = "Mello";
// }

// let person2 = Object.create(person1);

// person1.prototype.idade = 21;
// person1.prototype.email = "diogoeng19@gmail.com";

// console.log(person2.__proto__);
