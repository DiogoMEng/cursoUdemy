// module.exports = function(x, y){
//     return x*y;
// };

module.exports = class Cachorro {
    constructor(nome){
        this.nome = nome;
    }

    latir(){
        console.log(`${this.nome} latindo`);
    }
};

// modulo path - disponivel no Node
const path = require('path');

// paga o caminho da pasta atual
console.log(path.resolve(__dirname));

console.log(__filename); // arquivo atual
console.log(__dirname); // pasta atual