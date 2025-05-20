/*

REGRAS DA ATIVIDADE

1. UTILIZAR O INQUIRER PARA RECEBER O NOME E A IDADE DO USUÁRIO.
2. RESPOSTA DEVE SER APRESENTADA COM UMA COR DE FUNDO AMARELA E TEXTO PRETO.
3. INSERIR TRATAMENTO DE ERROS COM CATCH.

*/

const chalk = require('chalk');
const inquirer = require('inquirer');

inquirer.prompt([{
    name: 'p1', message: 'Qual o seu nome?'
}, {
    name: 'p2', message: 'Qual a sua idade?'
}])
    .then((answers) => {

        console.log(`\nNome de usuário: ${chalk.bgYellow.black(answers.p1)}\nIdade: ${chalk.bgYellow.black(answers.p2)}`);
    })
    .catch(err => console.log(err));