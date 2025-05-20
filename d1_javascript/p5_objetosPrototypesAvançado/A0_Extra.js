// const valor = this;

// console.log(valor);

// function pessoa(){
//     "use strict";
//     const valor = this;
//     return valor;
// }

// console.log(pessoa());

// const obj = {
//     nome: 'Diogo',
//     sobrenome: 'Dias',
//     f: function(){
//         return this.nome;
//     }
// }

// console.log(obj.f());

// let a = {f: function(){
//     return this.b + this.c;
// }};

// let d = Object.create(a);

// d.b = 1;
// d.c = 4;

// console.log(d.f());

// function Pessoa (){
//     this.p = 'Diogo Mello';
//     return {p: 'Diogo Dias'}
// }

// let pe = new Pessoa();

// console.log(pe.p);

// function add (c, d){
//     return this.a + this.b + c + d;
// }

// let o = {a: 1, b: 3};

// add.call(o, 5, 7);

// add.apply(o, [10, 20]);

function f(){
    console.log('pssando por aqui');
    return this.a + this.b;
}

let g = f.bind({a:"teste1", b: 'teste2'});
console.log(g());

let h = g.bind({a: 'yoo'}); // bind só funciona uma vez, logo não irá retornar yoo
console.log(h());

let o = {a: 32, f:f, g:g}

console.log(o.a, o.f(), o.g());