const pessoa = {
    chave: 'valor',
    nome: 'Diogo',
    sobrenome: 'Mello'
};

const pessoa2 = new Object();
pessoa2.nome = 'João';
pessoa2.sobrenome = 'Soares';
pessoa2.idade = 8;
pessoa2.falarNome = function() {
    console.log(`${this.nome} está falando seu nome`)
}
// retornando a data de nascimento
pessoa2.getDataNascimento = function() {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
}

// formas de acessar os valores
console.log(pessoa.nome);
console.log(pessoa['sobrenome']);

console.log(pessoa2.nome);
console.log(pessoa2['sobrenome']);
pessoa2.falarNome();
console.log(pessoa2.getDataNascimento());

// apagando a chave do objeto
delete pessoa.nome;
console.log(pessoa);

// factory function
function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        }
    };
}

const p1 = criaPessoa('Diogo', 'Mello');
console.log(p1.nomeCompleto);

// constructor function
function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}

const p2 = new Pessoa('Maria', 'Eduarda');
// travando o objeto
Object.freeze(p2);
p2.nome = 'Laura';
const p3 = new Pessoa('Tatiana', 'Coelho');
console.log(p2);
console.log(p3);