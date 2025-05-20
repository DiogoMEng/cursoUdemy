const fs = require('fs');

// verifica se o diretório existe de forma síncrono.
if(!fs.existsSync('./minhaPasta')){

    console.log('Não existe');

}

// cria um diretório de forma síncrona.
fs.mkdirSync("minhaPasta");

if(fs.existsSync('./minhaPasta')){

    console.log('Existe');

}