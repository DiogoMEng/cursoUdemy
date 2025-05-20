export class Pessoa{
    constructor(
        public nome: string,
        public sobrenome: string,
        public idade: number,
        public cpf: string,
    ) {}

    static falaOi(): void {
        console.log('OI');
    }

    // outra forma de padrão de projeto - Factory Method
    static criaPessoa(nome: string, sobrenome: string): Pessoa {
        return new Pessoa(nome, sobrenome, 0, '000.000.000-00');
    }
}

const pessoa1 = new Pessoa('Diogo', 'Dias', 21, '123.456.789-00');

// instância de método estático
const pessoa2 = Pessoa.criaPessoa('Diogo', 'Mello');
Pessoa.falaOi()

console.log(`${pessoa1}\n\n${pessoa2}`)
