// filter + map + reduce

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numerosPares = numeros.filter(v => v % 2 === 0).map(v => v * 2).reduce((ac, v) => ac + v);
console.log(numerosPares);