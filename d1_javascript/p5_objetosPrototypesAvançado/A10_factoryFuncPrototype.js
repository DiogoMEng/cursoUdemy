const falar = {
    falar(){
        console.log(`${this.nome} está falando`)
    }
};


const comer = {
    falar(){
        console.log(`${this.nome} está comendo`)
    }
};


const beber = {
    falar(){
        console.log(`${this.nome} está bebendo`)
    }
};


const pessoaPrototype = { ...falar, ...comer, ...beber };
// outra forma de criar
// const pessoaPrototype = Object.assign({}, falar, comer, beber);


function criaPessoa(nome, sobrenome) {
    // colando objetos no proto juntamente com os chaves
    return Object.create(pessoaPrototype, {
        nome: {value: nome},
        sobrenome: {value: sobrenome}
    })
}

const p1 = criaPessoa('Diogo', 'Mello');
const p2 = criaPessoa('João', 'Mello');
console.log(p1);
console.log(p2);