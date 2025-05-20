const produto = {nome: 'Produto', preco: 1.80};
// copiando os valores de produto
const caneca = Object.assign({}, produto);
// // copiando os valores com spreed
// const produto2 = { ...produto };

// caneca.nome = 'Outro nome';
// caneca.preco = 2.5;
// console.log(produto);
// console.log(caneca);
// console.log(produto2);

// // decreve um objeto
// console.log('getOwnPropertyDescriptor: ', Object.getOwnPropertyDescriptor(produto, 'nome'));
// // pegando os valores da chave
// console.log(Object.values(produto));
// // pegando chave e valor
// console.log(Object.entries(produto));

