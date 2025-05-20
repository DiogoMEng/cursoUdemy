export abstract class Personagem {
    constructor(
        protected nome: string,
        protected ataque: number,
        protected vida: number,
    ){}

    atacar(personagem: Personagem): void {
        console.log(`${this.nome} está atacando...`)
        personagem.perderVida(this.ataque);
    }

    perderVida(forcaAtaque: number): void {
        this.vida -= forcaAtaque;
        console.log(`${this.nome} agora tem ${this.vida} vida`)
    }

    abstract bordao(): void
}

export class Guerreira extends Personagem{
    bordao(): void {
        console.log('Guerreira aoooo ataquee!')
    }
}

export class Monstro extends Personagem{
    bordao(): void {
        console.log('UuuuuuuuAAAA!')
    }
}

const guerreira = new Guerreira('Guerreira', 100, 1000);
const monstro = new Monstro('Monstro', 87, 1000);
