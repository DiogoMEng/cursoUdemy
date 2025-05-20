// ### EXEMPLO DE TYPE GUARD ###
export function add(a: unknown, b: unknown): number | string {
    return typeof a === 'number' && typeof b === 'number' ? a + b : `${a}${b}`;
}

// ### APLICANDO COM CLASSES ###
type Pessoa = {nome: string};
type Animal = {cor: string};
type PessoaOuAnimal = Pessoa | Animal;

export class Aluno implements Pessoa {
    constructor(public nome: string) {}
}

function nome(obj: PessoaOuAnimal): void {
    // type guard
    if('nome' in obj) console.log(obj.nome);
}
