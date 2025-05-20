// primitivos (imutaveis) - string, number, boolean, undefined, null (bigint, symbol)

let a = 'A';
let b = a; // copia do valor de a

console.log(a, b);

a = 'Outra coisa';
console.log(a, b);

// referencia (mutavel) - Array, object, function

let c = [1, 2, 3];
let d = c; // aponta para o mesmo local da mmemoria que c

let e = [...c]; // valor de c foi totalmente copiado para e

const c2 = {
    nome: 'Luiz',
    sobrenome: 'Otavio'
}
const d2 = c2;

const e2 = {...c2};

c.push(4);
console.log(c, d);

d.pop();
console.log(c, d);
console.log('valor de E', e);

d2.nome = 'Diogo';
console.log(c2);
console.log('valor de e2', e2);