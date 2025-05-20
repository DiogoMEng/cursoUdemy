// export const nome = 'Diogo';
// const sobrenome = 'Mello';
// const idade = 20;


export default function soma(x, y){
    return x + y;
}

const documentos = {
    name: "Diogo",
    sobrenome: "Dias",
    dados: {
        idade: 21,
        peso: 91.5
    }
}

export { documentos }

export class Pessoa {
    constructor (nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}


// // exportando um valor
// export {sobrenome as sobrenome2, idade}; // somente nome pode ser importado do modulo