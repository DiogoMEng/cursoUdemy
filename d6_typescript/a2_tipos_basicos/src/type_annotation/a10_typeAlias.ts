type Idade = number;

type Pessoa = {
  nome: string;
  idade: Idade;
  salario: number;
  corPreferida?: string;
};

type CorRGB = 'Vermelho' | 'Verde' | 'Azul';
type CorCMYC = 'Ciana' | 'Magenta' | 'Amarelo' | 'Preto';
type CorPreferida = CorRGB | CorCMYC;

const pessoa: Pessoa = {
  idade: 30,
  nome: 'Diogo',
  salario: 10.0,
};

export function setCorPreferida(pessoa: Pessoa, cor: CorPreferida): Pessoa {
  return { ...pessoa, corPreferida: cor };
}

console.log(setCorPreferida(pessoa, 'Azul'));
