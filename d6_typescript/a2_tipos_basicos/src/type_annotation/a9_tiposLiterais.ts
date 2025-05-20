// ### TIPO LITERAL ###
let x = 10; // eslint-disable-line
let a: 100 = 100; // eslint-disable-line

const pessoa = {
  nome: 'Diogo' as const,
  sobrenome: 'Mello',
};

pessoa.nome = 'Diogo';

// os tipos para cor são apenas aqueles colocados após os dois pontos.
function escolhaCor(cor: 'vermelho' | 'azul' | 'verde') {
  return cor;
}

escolhaCor('azul');

export default 1;
