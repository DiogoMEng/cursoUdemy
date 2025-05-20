/*parte que deve ser corrgida

const nome = "diogo dias"

const = "mello"

const idade = 19

const peso = 86.50

const alturaEmM = 1.83 - essa parte*/

let nome = "Diogo";
let sobrenome = "Mello";

let idade = 19;
let peso = 86.5;
let altura = 1.83;
let IMC = peso/(altura * altura)

console.log(nome, sobrenome, 'tem', idade, 'anos', 'pesa', peso, 'kg', 'tem', altura, 'de altura e seu IMC e de', IMC);

// +
console.log(nome + sobrenome + 'tem' + idade + 'anos' + 'pesa' + peso + 'kg' + 'tem' + altura + 'de altura e seu IMC e de' + IMC);

// template string
console.log(`${nome}  ${sobrenome}  tem  ${idade}  anos  pesa  ${peso}  kg  tem  ${altura}  de altura e seu IMC e de  ${IMC}`);