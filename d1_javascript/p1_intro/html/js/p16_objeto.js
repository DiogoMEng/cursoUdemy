// criacao de objeto
const pessoaA = {
    nome: 'Diogo',
    sobrenome: 'Mello',
    idade: 20,

    falar() {
        console.log(`${this.nome} ${this.sobrenome} esta falando oi....`);
    }
};

const pessoa3 = {
    falar () {
        console.log('ola mundo');
    }
};

// function CriaPessoa (nome, sobrenome, idade) {
//     return {
//         nome: nome,
//         sobrenome: sobrenome,
//         idade: idade
//     }
// }

function CriaPessoa (nome, sobrenome, idade) {
    return {nome, sobrenome, idade};
}

const pessoa1 = CriaPessoa('Diogo', 'Mello', 20);
const pessoa2 = CriaPessoa('Tatiana', 'Coelho', 45);


console.log(pessoa.nome, pessoa.sobrenome);
console.log(pessoa1.nome, pessoa2.nome)

pessoa3.falar();
pessoa.falar();

// ***PARTE 2***
let pessoaB = {
    nome: {
        primeiroNome: 'Diogo',
        segundoNome: 'Dias'
    },
    idade: 20,
    sexo: 'masculino',
    interesses: ['musica', 'treinar'],
    bio: function(){
        alert(this.nome.primeiroNome + ' ' + this.nome.segundoNome + ' tem ' + this.idade + ' anos de idade. Ele gosta de ' + this.interesses[0] + ' e ' + this.interesses[1] + '.');
    },
    saudacoes: function(){
        alert('Oi! Eu sou ' + this.nome[0] + '.');
    }
};

pessoa.terceiroNome = 'Mello';

let pessoa4 = {
    nome:'Diogo',
    saudacoes: function(){
            alert('Oi! Eu sou ' + this.nome + '.');
        }
};

let pessoa5 = {
    nome: 'Geovana',
    saudacoes: function(){
        alert('Oi! Eu sou ' + this.nome + '.');
    }
};