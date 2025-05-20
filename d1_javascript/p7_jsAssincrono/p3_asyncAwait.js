// gerando valores aleatórios
function rand (min=1, max=3){
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

async function executa(){
    try{
        const fase1 = await esperaAi('fase 1', rand());
    console.log(fase1);

    const fase2 = await esperaAi(1, rand());
    console.log(fase2);
    
    const fase3 = await esperaAi('fase 3', rand());
    console.log(fase3);

    console.log('terminamos a fase: ', fase3);
    }catch(e){console.log(e);}
}

executa();