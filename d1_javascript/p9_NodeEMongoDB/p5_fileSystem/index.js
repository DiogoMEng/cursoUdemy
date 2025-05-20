const { variableDeclarator } = require('@babel/types');
const path = require('path');
const escreve = require('./module/escreve');
const ler = require('./module/ler');
const caminhoArquivo = path.resolve(__dirname, 'teste..json');

// cria arquivo json
// const pessoas = [
//     {nome: 'Diogo'},
//     {nome: 'Tatiana'},
//     {nome: 'Cristian'},
//     {nome: 'Geovana'}
// ]

// const json = JSON.stringify(pessoas);
// escreve(caminhoArquivo, json);

async function leArquivo(caminho){
    const dados = await ler(caminho);
    renderiza(dados);
}

function renderiza(dados){
    dados = JSON.parse(dados);

    dados.forEach(val => console.log(val));
}

leArquivo(caminhoArquivo);