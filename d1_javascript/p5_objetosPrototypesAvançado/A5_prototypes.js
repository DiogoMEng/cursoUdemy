// Construtora -> molde (classe)
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa.prototype.nomeCompleto = function() {
    return this.nome + " " + this.sobrenome;
}

// instancia
const pessoa1 = new Pessoa('Diogo', 'D.');
const pessoa2 = new Pessoa('Tatiana', 'C.');
const data = new Date();

console.dir(pessoa1);
console.dir(pessoa2);
console.dir(pessoa2.nomeCompleto());
console.dir(data);