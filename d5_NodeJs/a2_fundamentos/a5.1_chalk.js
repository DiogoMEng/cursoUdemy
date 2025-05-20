const chalk = require("chalk");

const nota = 8;

if (nota >= 9) {
    console.log(chalk.green('Parabéns! Você está aprovado'));
} else console.log(chalk.bgRed.bold('Parabéns! Você é um animal'));