export class CarrinhoProduto {
    private readonly produtos: Produto[] = [];

    inserirProduto(...produtos: Produto[]): void{
        for(const produto of produtos){
            this.produtos.push(produto)
        }
    }

    quantidadeProdutos(): number {
        return this.produtos.length;
    }

    valorTotal(): number {
        return this.produtos.reduce((soma, produto) => soma + produto.preco, 0);
    }
}

export class Produto{
    constructor(public nome: string, public preco: number) {}
}

const produto1 = new Produto('Camiseta', 49.9)
const produto2 = new Produto('Short jeans', 100.00)
const produto3 = new Produto('controle xbox slim', 300.00)

const carrinhoCompras = new CarrinhoProduto();
carrinhoCompras.inserirProduto(produto1);
carrinhoCompras.inserirProduto(produto2);
carrinhoCompras.inserirProduto(produto3);

console.log(carrinhoCompras)
