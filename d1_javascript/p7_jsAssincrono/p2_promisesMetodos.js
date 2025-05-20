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


function baixaPagina(){
    const emCache = false;

    if(emCache){
        return Promise.resolve('Página em cache');
    }else{
        return esperaAi('baixei a página', 3000);
    }
}


baixaPagina().then(dadosPagina => {
    console.log(dadosPagina)
}).catch(e => console.log(e));

const promises = [
    esperaAi('promise 1', rand(1, 4)),
    esperaAi('promise 2', rand(1, 4)),
    esperaAi('promise 3', rand(1, 4))
];

// pegando todas as promises resolvidas
Promise.all(promises).then(function(valor){
    console.log(valor);
}).catch(function(erro){
    console.log(erro);
});

// pegando a primeira promise que for resolvida
Promise.race(promises).then(function(valor){
    console.log(valor);
}).catch(function(erro){
    console.log(erro);
});