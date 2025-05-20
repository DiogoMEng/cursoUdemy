const { Writable } = require("stream");

function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque;

    Object.defineProperty(this, 'estoque', {
        // mostrando o estoque
        enumerable: true,
        // informando se a variavel pode ser alterada
        configurable: false,
        // pegando o valor de estoque
        get: function(){
            return estoquePrivado;
        },
        // modificando as variaveis
        set: function(valor){
            if (typeof valor !== 'number'){
                console.log('o valor deve ser um numero');
                return;
            }

            estoquePrivado = valor;
        }
    });
}

const p1 = new Produto('Camiseta', 20, 3);
p1.estoque = 500;
console.log(p1.estoque);