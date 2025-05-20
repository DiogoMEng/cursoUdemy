const fs = require('fs').promises;

module.exports = (caminho, dados) =>{
    // escreve arquivo
    // w - apaga frase a cada criação do arquivo
    // a - acrescenta frase a cada criação do arquivo
    fs.writeFile(caminho, dados, { flag: 'w' })
};