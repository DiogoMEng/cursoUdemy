let num1 = 0.7;
let num2 = 0.1;

// definir qtd de casas apos a virgula
console.log('valor de 7 com 3 casas decimais: ',num1.toFixed(3));
num1 += num2;
num1 += num2;
num1 += num2;
// **transformando em valor real - tirando a incerta precisao
// num1 = parseFloat(num1.toFixed(2));
num1 = Number(num1.toFixed(2));
console.log('valor de num1: ',num1);
// teste pra saber se o numero e inteiro
console.log(Number.isInteger(num1));
console.log(Number.isInteger(num2));
// testando se NaN
num3 = 'UM';
temp = num3 * num2;
console.log(Number.isNaN(temp));


let num4 = '115.7'
console.log(Number.NaN);
console.log(typeof(Number.parseFloat(num4)));