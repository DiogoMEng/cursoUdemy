// let umaString = "um \"texto\"";
//               01234567
let umaString = "um texto"; // primitiva 
let outraString = new String(umaString); //objeto string
let contaString = '1+1';

console.log(umaString);
console.log('acessando palavras dentro da string: ',umaString[4], umaString[5]);
console.log(umaString.charAt(1));
console.log(umaString.concat(' ', 'em um lindo dia'));
// mostrar o indice de inicio
console.log('testando o index: ',umaString.indexOf('texto'));
// faz a mesma coisa do anterior so que comeca do final
console.log('testando o lastIndexOf: ',umaString.lastIndexOf('texto'));

// para expressao regular - sempre colocar a flag g
console.log('match: ', umaString.match(/[a-z]/g));
console.log('search: ', umaString.search(/[a-z]/g));
// substitui uma palavra
console.log('utilizando o replace: ',umaString.replace('um', 'outro'));
// tamanho da string
console.log(umaString.length);
// pega uma palavra especifica
console.log('slice: ', umaString.slice(3, 8));
console.log('utilizando o subString: ',umaString.substring(umaString.length -5, umaString.length -1));

// dividindo a string
console.log(umaString.split(' '));

// retornando um valor de uma conta
contaString = eval(contaString);
console.log(contaString);