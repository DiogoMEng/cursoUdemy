// function* gerador1(){
//     yield 'valor 1';
//     yield 'valor 2';
//     yield 'valor 3';
// }

// function* gerador2(){
//     let i = 0;

//     while(true){
//         yield i;
//         i++;
//     }
// }

// // delegando funções a outra geradora
// function* gerador3(){
//     yield 1;
//     yield 2;
//     yield 3;
// }

// function* gerador4(){
//     yield* gerador3();
//     yield 4;
//     yield 5;
//     yield 6;
// }

// const g1 = gerador1();
// console.log(g1.next().value); // pegando o primeiro valor
// console.log(g1.next().value); // pegando o segundo valor
// console.log(g1.next().value); // pegando o terceiro valor
// console.log(g1.next());

// // gerador de valores infinitos
// const g2 = gerador2();
// console.log(g2.next().value); // pegando o primeiro valor
// console.log(g2.next().value); // pegando o segundo valor
// console.log(g2.next().value); // pegando o terceiro valor
// console.log(g2.next());

// const g4 = gerador4();
// for (let i of g4) console.log(i);


// function* idMaker(){
//     let index = 3;
//     while(true){
//         return index++;
//     }
// }

// let gen = idMaker();

// console.log(gen.next());
// console.log(gen.next().value);

function* gerador(){
    console.log(yield);
}

let gen = gerador();

gen.next('diogo');
gen.next('diogo');

