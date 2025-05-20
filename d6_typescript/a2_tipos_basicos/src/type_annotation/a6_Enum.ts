enum Cores {
  VERMELHO = 10, // 0
  AZUL = 20, // 1
  AMARELO = 30, // 2
  ROXO = 'ROXO',
}

// ### CRIANDO UM MERGE DO ENUM ###
// os enum com mesmo nome dentro do código serão unidos
enum Cores {
  CIANO = 201,
  LARANJA,
}

function escolhaCor(cor: Cores): void {
  console.log(Cores[cor]);
}

console.log(Cores);
console.log(Cores.VERMELHO);
console.log(Cores[10]);
escolhaCor('ROXO');
