const nome = 'Diogo';
const sobrenome = 'Mello';

const falaNome = () =>{
    console.log(nome, sobrenome);
};

// importando modulos por exports
module.exports.nome = nome;
exports.sobrenome = sobrenome;

// Atrelando função a chave do objeto
module.exports.fNome = falaNome;

class Pessoa{
    constructor(nome){
        this.nome = nome;
    }
}

const nome2 = 'Luiz';
const sobrenome2 = 'Miranda';

module.exports = {
    nome, sobrenome, Pessoa
};

console.log(exports);