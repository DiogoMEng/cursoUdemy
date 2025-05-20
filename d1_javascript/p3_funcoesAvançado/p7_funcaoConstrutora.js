function Pessoa(nome, sobrenome){
    
    // ===privados===
    const id = 12345;

    // ===publicas===
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = e => {
        console.log(this.nome + ': isto é um método')
    };
}

const p1 = new Pessoa ('Diogo', 'Mello');
const p2 = new Pessoa ('Tatiana', 'Coelho');

console.log(p1.nome + ' ' + p1.sobrenome);
console.log(p2.nome + ' ' + p2.sobrenome);
p1.metodo();