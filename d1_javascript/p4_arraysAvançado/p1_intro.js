const nome = ['Diogo', 'Raquel', 'Eduarda', 'Tatiana'];
const novo = [...nome];
const nome2 = ['Geovana', 'Gecilene', 'Pai Geovana']

nome[2] = 'João';
// delete nome[2];
novo.pop(); // apaga um nome no final do array
nome.shift(); // apaga um nome do inicio do array

// adicionando elementos no começo do array
nome.unshift('Ducila');
nome.unshift('Claudio');

// adicionando elementos no final do array
nome.push('Cristian');

// unindo valores do array
const nomeNovo = nome2.join(' ');

console.log(nome);
console.log(novo);
console.log(nomeNovo);
