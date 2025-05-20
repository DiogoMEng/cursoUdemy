const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
// 1º forma
const a3 = a1.concat(a2, [7, 8, 9], 'Luiz');
// 2º forma
const a4 = [...a1, 'Diogo', ...a2]
console.log(a3);
console.log(a4);