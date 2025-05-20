let number1: any;
let number2: unknown;

number1 = 100;
number1 = 'Diogo';

number2 = 100;
number2 = 'Diogo';

const y = 10;

console.log(number1 + y);

console.log(number1 + y);
if (typeof number2 === 'number') console.log(number2 + y);
