let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

console.log(varA, varB, varC);
// primeiro teste
const a = varA;
varA = varB;
varB = varC;
varC = a;
console.log(varA, varB, varC);

// segundo teste
[varA, varB, varC] = [varB, varC, varA];