interface Pessoa {
    nome: string;
}

interface Pessoa {
    sobrenome: string;
}

interface Pessoa {
    readonly endereco: readonly string[];
}

interface Pessoa {
    readonly idade?: readonly string[];
}

const pessoa: Pessoa = {
    nome: 'Diogo',
    sobrenome: 'Mello',
    endereco: ['Tv. We 84']
}
