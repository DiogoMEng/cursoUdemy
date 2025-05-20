export class Pessoa{
    constructor(
        public nome: string,
        public sobrenome: string,
        private idade: number,
        protected CPF: string,
    ) {}

    getIdade(): number {
        return this.idade;
    }

    getCpf(): string {
        return this.CPF
    }

    getNomeCompleto(): string {
        return this.nome + ' ' + this.sobrenome;
    }
}


// ### CRIANDO SUBCLASSES DE PESSOA ###

export class Aluno extends Pessoa{
    // reutilizando o construtor
    constructor(
        nome: string,
        sobrenome: string,
        idade: number,
        cpf: string,
        public sala: string, // criado apenas dentro da subclasse
    ) {
        super(nome, sobrenome, idade, cpf);
        this.sala = sala;
    }

    // forma de sobreescrever o método
    getNomeCompleto(): string {
        return `Aluno: ${this.nome} ${this.sobrenome}`
    }
}

export class Client extends Pessoa{
    getNomeCompleto(): string {
        const result = super.getNomeCompleto();
        return result;
    }
}


