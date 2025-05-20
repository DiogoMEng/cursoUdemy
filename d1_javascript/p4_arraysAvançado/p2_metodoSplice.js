const nome = ['Diogo', 'Raquel', 'Eduarda', 'Tatiana'];

// nome.splice(indiceInicio, elementoDelete, elementoAdicionar);
// exemplo do splice
const removido = nome.splice(0, 2); // começa do indice 0 e deleta 2 elementos
const nomeNovo = nome.splice(2, 0, 'Haroldo');
console.log(nome, removido);