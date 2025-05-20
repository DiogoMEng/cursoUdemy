// ### FORMAS DE CRIAR UM ARRAY ###

// primeira forma
export function multiplicaArgs(...args: Array<number>): number {
  return args.reduce((acc, valor) => acc * valor, 1);
}

export function concatenaStrings(...args: string[]): string {
  return args.reduce((acc, valor) => acc + valor);
}

export function toUpperCase(...args: string[]): string[] {
  return args.map((valor) => valor.toUpperCase());
}

const result = multiplicaArgs(1, 2, 3);
const concatenacao = concatenaStrings('a', 'b', 'c');
const toUpper_Case = toUpperCase('a', 'b', 'c');

console.log(result, concatenacao, toUpper_Case);
