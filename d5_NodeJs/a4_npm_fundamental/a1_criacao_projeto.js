const _ = require("lodash");
const chalk = require("chalk");

const a = [1, 2, 3, 4, 5, 6];
const b = [2, 4, 5, 6, 7, 2];

const diff = _.difference(a, b); // retorna a diferença entre dois arrays.

console.log(chalk.bgRed.bold(diff));