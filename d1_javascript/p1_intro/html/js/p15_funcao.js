// // criacao de funcao
// function Saudacao(nome) {
//     // console.log(`boa tarde ${nome}!`);
//     return `BOM DIA ${nome}!`;
// }

const { get } = require("http");

// // funcao sem valor padrao
// function Soma(x, y) {
//     return x + y;
// }

// // função com parâmetro rest
// function rest(...arg){
//     let total = 0;
//     for (const args of arg){
//         total += args;
//     }

//     return total;
// }

// // funcao com valores padrao
// function Multiplicacao(x = 2, y = 2) {
//     return x * y;
// }

// const raiz = function (n) {
//     return Math.sqrt(n);
// };

// // novos metodos de funcao
// const divisao = (a, b) =>  a/b;
// const potenciacao = a => a**2; 

// const nome = Saudacao('Diogo');
// console.log(nome);

// console.log(Soma(2, 4));
// console.log(Multiplicacao());
// console.log(raiz(4));
// console.log(divisao(8, 2));
// console.log(potenciacao(4));


// // mudando valores passados
// function minhaFuncao(objeto){
//     objeto.marca = "Toyota";
// }


// // criando uma arrow function
// const marcas = (marca1, marca2) =>{
//     return marca1 + ' ' + marca2;
// };


// const marcas1 = marca1 =>{
//     return marca1;
// };


// let meuCarro = {
//     marca: "Honda",
//     modelo: "Accord",
//     ano: "1998"
// };

// console.log(meuCarro.marca);

// console.log( marcas('nike', 'olimpos'));

// console.log( marcas1('adidas'));

// minhaFuncao(meuCarro);

// console.log(meuCarro.marca);

// // acessando parâmetros por argumentos
// function valores(a, b, c){
//     console.log(arguments[0], arguments[1], arguments[2]);
// }

// valores(1, 2, 3);

// // getter e setter
// const obj = {
//     log: ['a', 'b', 'c', 'd'],
//     get latest() {
//         return this.log[this.log.length -1];
//     }
// };

// console.log(obj.latest);

// const language = {
//     set current(name){
//         this.log.push(name);
//     },
//     log: []
// };

// language.current = 'en';
// language.current = 'br';

// console.log(language.log);


// // criando métodos mais simples dentro de objetos
// const nomeCompleto = {
//     nome(){
//         return "Diogo";
//     },
//     sobrenome (){
//         return "Mello";
//     }
// }

// console.log(nomeCompleto.nome(), '', nomeCompleto.sobrenome());

// function minhaFuncao (valor) {
//     valor.idade = 20;
// }

// let pessoa = {
//     nome: 'Diogo',
//     sobrenome: 'Mello',
//     idade: 18
// }

// let x, y;

// x = pessoa.idade;

// console.log(x);

// minhaFuncao(pessoa)

// y = pessoa.idade;

// console.log(y);


// ***Passando um função como argumento de outra***
// function map (f, a){
//     let resultado = []; // crio um array
//     let i; // crio contador

//     for (i = 0; i != a.length; i++){
//         resultado[i] = f(a[i]);
//     }

//     return resultado;
// }

// let a = map(function (x) {return x * x * x}, [0, 1, 2, 5, 10]);

// console.log(a);

// criando uma função recursiva
// function loop(n){
//     if (n > 10) return 1;
//     else return console.log(loop(n+1));
// }

// console.log(loop(1));

// criando um closure

// function contas (a, b){
//     function soma (a){
//         return a + a;
//     }

//     return soma;
// }

// function nome (a){
//     function sobrenome (c){
//         return a + c;
//     }

//     return sobrenome;
// }

// a = contas(2, 4); // 4 + 8 = 12
// b = nome\('Diogo')('Mello')
// console.log(a);
// console.log(b);

// Criando um encadeamento de funções
// function A(){
//     const a = ' Diogo';

//     function B(){
//         const b = 'Eu sou o';

//         function C(){
//             const c = 'Olá, ';
//             return c;
//         }
//         return C() + b;
//     }
//     return B() + a;
// }

// console.log(A());

// criando uma método que manipula a função externa
// let criaPet = function(nome){
//     let sex;

//     return {
//         setNome: function(newNome){
//             nome = newNome;
//         },

//         getNome: function(){
//             return nome;
//         },

//         getSex: function(){
//             return sex;
//         },

//         setSex: function(newSex){
//             if(typeof newSex == "string" && (newSex.toLowerCase() == "macho" || newSex.toLowerCase() == "fêmea")){
//                 sex = newSex;
//             }
//         }
//     }
// }

// let pet = criaPet("Vivie");

// pet.setNome("Oliver");
// console.log(pet.setSex("macho"));
// console.log(pet.getNome());
// pet.getSex();

// criando funções com valores padrões e rest
// let pessoa = (nome="Diogo") =>{
//     return nome;
// }

// console.log(pessoa());

// const multiplicador = (multi, ...args)=> {
//     return args.map(x=> multi * x);
// }

// let conta = multiplicador(2, 1, 3, 4);
// console.log(conta);

// // criando objeto literal dentro de uma arrow function
// let func = () => ({foo: 1});

// console.log(func());

// formas de utilizanção de this
// ***primeira forma
function Pessoa2(){
    this.idade = 0;

    setInterval(function crescer(){
        this.idade++;
    }, 200)
}

// let p = new Pessoa2();

// ***segunda forma
function Pessoa2(){
    self = this;
    self.idade = 0;

    setInterval(function crescer(){
        self.idade++;
    }, 200)
}

let p = new Pessoa2();
console.log(p);