// acessando a chave do objeto A pelo objeto B
const objA = {
    chaveA: 'A'
    // __proto__: Object.prototype
};

const objB = {
    chaveB: 'B'
    // __proto__: objA
};

const objC = new Object();
objC.chaveC = 'C';

// funcão
Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objB);
console.log(objB.chaveA);
console.log(objC.chaveB);

function Produto (nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(percentual){
    this.preco = this.preco - (this.preco * (percentual / 100));
};

Produto.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco * (percentual / 100));
};

const p1 = new Produto('Camiseta', 50);
const p2 = {
    nome: 'caneca',
    preco: 15
};

Object.setPrototypeOf(p2, Produto.prototype);

p2.aumento(10);
console.log(p1);
console.log(p2);

// criando um objeto e setando o prototype
const p3 = Object.create(Produto.prototype);
p3.preco = 113;
p3.aumento(20);
console.log(p3);