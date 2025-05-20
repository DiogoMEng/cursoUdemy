// ### TIPANDO O RETORNO DE UMA FUNÇÃO ###
export function createPerson(
  firstName: string,
  lastName?: string,
): {
  firstName: string;
  lastName?: string;
} {
  return {
    firstName,
    lastName,
  };
}

export function squareOF(x: any) {
  if (typeof x === 'number') return x * x;

  return null;
}

const squereOfTwoNumber = squareOF(2);
const squereOfTwoString = squareOF('2');

console.log(squereOfTwoNumber, squereOfTwoString);

export function criaErro(): never {
  throw new Error('Erro qualquer');
}

console.log(criaErro);
