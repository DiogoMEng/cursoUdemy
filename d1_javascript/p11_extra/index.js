// # FORMAS BÁSICAS #
const re = /ab+c/
const re2 = /(muito) (cacique) pra \2 \1/.exec("muito cacique pra cacique muito");

console.log(`Re2 = ${re2}`);

// OU

let re3 = new RegExp("ab+c");


// # APLICANDO EXPRESSÕES REGULARES #

var myRe = /d(b+)d/g;
var myArray = myRe.exec("cdbbdbsbz");

console.log("Versão 1", myArray);

var myRe2 = new RegExp("d(b+)d", "g");
var myArray2 = myRe2.exec("cdbbdbsbz");

console.log("Versão 2 ", myArray2);

// # SUBSTRINGS ENTRE PARẼNTESES #

var re4 = /(\w+)\s(\w+)/;
var str = "John Smith";

// realiza substituição indicando a primeira e segunda correspondência
var newStr = str.replace(re4, "$2, $1");

console.log(newStr);