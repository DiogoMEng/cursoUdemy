// <<<CLASSE>>>
// -------------------------------------------
// class Animal {
//     constructor(nome) {
//         this.nome = nome;
//     }


//     falar() {
//         console.log(this.nome + ' emite um barulho');
//     }
// }
// -------------------------------------------


// <<<FUNCTION>>>
// -------------------------------------------
// function Animal (nome) {
//     this.nome = nome;
// }

// Animal.prototype.falar = function() {
//     console.log(this.nome + 'faça barulho');
// }
// -------------------------------------------


// <<<OBJETO>>>
// -------------------------------------------
// let Animal = {
//     falar() {
//         console.log(this.nome + ' faça barulho');
//     }
// }

// class Cachorro {
//     constructor(nome) {
//         this.nome = nome;
//     }
// }

// Object.setPrototypeOf(Cachorro.prototype, Animal);

// class Cachorro extends Animal {
//     falar () {
//         console.log(this.nome + ' latidos');
//     }
// }

// let cachorro = new Cachorro('Mat');
// cachorro.falar();

// let quadrado = class {
//     constructor (lado){
//         this.lado = lado;
//     }
// }
// -------------------------------------------


// <<<Retornando objeto Array>>>
// -------------------------------------------
// class MinhaArray extends Array {
//     static get [Symbol.species]() {return Array;}
// }

// let a = new MinhaArray(1, 2, 3);
// let mapped = a.map(x => x * x);

// console.log(mapped instanceof MinhaArray);
// console.log(mapped instanceof Array);
// -------------------------------------------


// <<< SUPER >>>
// -------------------------------------------
// class Gato {
//     constructor(nome) {
//         this.nome = nome;
//     }

//     falar() {
//         console.log(this.nome + ' faça barulho');
//     }
// }

// class Leao extends Gato {
//     falar() {
//         super.falar();
//         console.log(this.nome + " roars");
//     }
// }

// let leao = new Leao('Fuzzy');
// leao.falar();
// -------------------------------------------


// <<< MIX-INS >>>
// -------------------------------------------
// class Humano {
//     constructor(nome){
//         this.nome = nome;
//     }

//     andar() {
//         return this.nome + ' andou um passo';
//     }
// }

// const HumanoFalante = Base => class extends Base {
//     falar() {
//         return this.nome + ' dis: hola';
//     }
// }

// const HumanoFalanteMixado = Base => class extends Base {}

// const HumanoFinal = HumanoFalanteMixado(HumanoFalante(Humano));


// const humano = new HumanoFinal('Bill Gates');

// console.log(humano.andar());
// console.log(humano.falar());
// -------------------------------------------


// <<< GETTER >>>
// -------------------------------------------
// let log = ['test'];

// let nomePerson = 'Person';

// const obj = {
//     get latest () {
//         if (log.length == 0) return undefined;

//         return log[log.length - 1];
//     },

//     get [nomePerson](){
//         return nomePerson; 
//     }
// }

// delete obj.latest;

// console.log(obj.latest, obj.Person);

// <<<DEFINE PROPERTY>>>
// let obj2 = { number: 1 };

// Object.defineProperty(obj2, "Propriedade", { get: function () { return this.number + 1 } });

// console.log(obj2.Propriedade);
// -------------------------------------------


// <<<SETTER>>>
// -------------------------------------------
class Pessoa{
    constructor(nome, sobrenome, idade, ano){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
        this.ano = ano
    }

    set AnoNascimento(value){
        let anoAtual = value;

        this.ano = anoAtual - this.idade;
    }

    get AnoNascimento(){
        return this.ano;
    }

    get Nome(){
        return `Meu nome é ${this.nome} ${this.sobrenome} e eu tenho ${this.idade} de idade. Nasci no ano ${this.AnoNascimento}`;
    }

}

const pessoa = new Pessoa('Diogo', 'Mello', 21);

const date = new Date();

pessoa.AnoNascimento = date.getFullYear();
console.log(pessoa.Nome);
