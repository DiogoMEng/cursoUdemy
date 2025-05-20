const fs = require('fs');

console.log("inicio");

// fs.writeFileSync('arquivo.txt', 'oi'); // síncrono
fs.writeFile('arquivo.txt', 'oi', function (err) {
    setTimeout(() => {
        console.log('Arquivo Criado');
    }, 1000);
}); // assíncrono

console.log('Fim');