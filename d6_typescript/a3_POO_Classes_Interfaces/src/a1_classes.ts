// ### MÉTODO DE CRIAÇÃO MAIS LONGO ###
export class Empresa{
    public readonly nome: string;
    private readonly colaboradores: Colaboradores[] = [];
    protected readonly cnpj: string;

    constructor(nome: string, cnpj:string){
        this.nome = nome;
        this.cnpj = cnpj;
    }

    adicionaColaborador(colaborador: Colaboradores): void {
        this.colaboradores.push(colaborador);
    }
}

// ### MÉTODO DE CRIAÇÃO MAIS CURTO ###
export class Colaboradores{
    constructor(
        public readonly nome: string,
        public readonly sobrenome: string
    ){}
}


const empresa = new Empresa('Udemy', '11.111.111/0001-11');
const colaboradores = new Colaboradores('Diogo', 'Mello');
const colaboradores2 = new Colaboradores('Tatiana', 'Dias');
const colaboradores3 = new Colaboradores('Carol', 'Coelho');

empresa.adicionaColaborador(colaboradores);
empresa.adicionaColaborador(colaboradores2);
empresa.adicionaColaborador(colaboradores3);

console.log(empresa);
