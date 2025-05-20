const { type } = require("os");

// gerando valores aleatórios
function rand (min, max){
    min *= 1000;
    max *= 1000;

    return Math.floor(Math.random() * (max - min) + min);
}

// mandando mensagem de acordo com o tempo
// criando uma promise
function esperaAi(msg, tempo){
    return new Promise((resolve, rejects) => {
        // verificando erros
        if (typeof msg !== 'string') rejects('BAD VALUE');
        
        setTimeout(() => {
            // colocando parâmetro unico
            resolve(msg);
        }, tempo);
    });
}

// exemplo de uma promise
esperaAi('conectando com o BD', rand(1, 3)).then(resposta => {
    console.log(resposta);
    return esperaAi('buscando os dados da base', rand(1, 3));
}).then(resposta => {
    console.log(resposta);
    return esperaAi(18022002, rand(1, 3));
}).then(resposta => {
    console.log(resposta);
}).catch(e => {
    console.log('ERRO', e);
});

console.log('executando em paralelo as promises');