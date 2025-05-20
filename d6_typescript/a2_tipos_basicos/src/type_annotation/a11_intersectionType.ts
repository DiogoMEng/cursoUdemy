type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };
type Pessoa = TemNome & TemSobrenome & TemIdade;

const pessoa: Pessoa = {
  nome: 'Diogo',
  sobrenome: 'Mello',
  idade: 30,
};

console.log(pessoa);

export { pessoa };
