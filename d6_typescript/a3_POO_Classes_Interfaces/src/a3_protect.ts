// ### MÉTODO DE CRIAÇÃO MAIS LONGO ###
export class Empresa{
    public readonly nome: string;
    protected readonly colaboradores: Colaboradores[] = [];
    private readonly cnpj: string;

    constructor(nome: string, cnpj:string){
        this.nome = nome;
        this.cnpj = cnpj;
    }

    adicionaColaborador(colaborador: Colaboradores): void {
        this.colaboradores.push(colaborador);
    }
}

export class Udemy extends Empresa{
    constructor(){
        super('Udemy', '11.111.111/0001-11');
    }

    // pop() pode retornar algum valor ou null, 
    // crie uma forma de verificação para corrigir a ambiguidade.
    popColaborador(): Colaboradores | null{
        const colaborador = this.colaboradores.pop();
        if (colaborador) return colaborador;
        return null;
    }
}

// ### MÉTODO DE CRIAÇÃO MAIS CURTO ###
export class Colaboradores{
    constructor(
        public readonly nome: string,
        public readonly sobrenome: string
    ){}
}
