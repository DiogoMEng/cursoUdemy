const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Qual a sua linguagem de programa?", (language) => {

    console.log(`A minha linguagem é ${language}`);
    readline.close(); // obrigatório para fechamento

});