function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function(quantia){
    this.preco += quantia;
};

Produto.prototype.desconto = function(quantia){
    this.preco -= quantia;
};

function Camiseta(nome, preco, cor){
    // camiseta herda de produto
    Produto.call(this, nome, preco);
    this.cor = cor;
}

function Caneca(nome, preco, material, estoque){
    // camiseta herda de produto
    Produto.call(this, nome, preco);
    this.material = material;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,

        get: function() {
            return estoque;
        },

        set: function(valor){
            if(typeof valor !== "number") return;
            estoque = valor;
        }
    });
}

// fazendo camiseta herdar o prototype de produto
Camiseta.prototype = Object.create(Produto.prototype);
// colocando um construtor em camiseta
Camiseta.prototype.constructor = Camiseta; // corrigindo problema do construtor

// sobreescrevendo aumento
Camiseta.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco * (percentual / 100));
}

// fazendo camiseta herdar o prototype de produto
Caneca.prototype = Object.create(Produto.prototype);
// colocando um construtor em camiseta
Caneca.prototype.constructor = Caneca; // corrigindo problema do construtor

// sobreescrevendo aumento
Caneca.prototype.desconto = function(percentual){
    this.preco = this.preco - (this.preco * (percentual / 100));
}

const camiseta = new Camiseta('Regata', 7.5, 'Preta');
const caneca = new Caneca('Star Wars', 20, 'porcelana', 6);
const produto = new Produto('Generico', 100);
caneca.estoque = 100;
console.log(camiseta);
console.log(caneca);
console.log(produto);