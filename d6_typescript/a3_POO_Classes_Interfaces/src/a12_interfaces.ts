// ### INTERFACES ###
interface TipoPessoa  {
    nome: Nome;
    sobrenome: string;
}

// Extendendo interfaces
interface NomeCompleto extends TipoPessoa{
    nomeCompleto(): string;
}

// ### TYPE ALIAS ###
type Nome = string;

export class Pessoa implements NomeCompleto {
    constructor(public nome: string, public sobrenome: string){}

    nomeCompleto(): string {
        return this.nome + ' ' + this.sobrenome;
    }
}


