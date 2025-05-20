class Pessoa{
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    // o método automáticamente já esta atrelada ao prototype
    falar(){
        console.log(`${this.nome} esta falando`)
    }
}

const p1 = new Pessoa('Diogo', 'Dias');
const p2 = new Pessoa('Cristian', 'Mello');
const p3 = new Pessoa('Tatiana', 'Coelho');

console.log(p1);
console.log(p2);
console.log(p3);