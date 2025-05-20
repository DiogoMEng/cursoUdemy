/* eslint-disable */

// ### TIPOS BÁSICOS ###
const nome: string = 'Diogo';
let idade: number = 30; // considera todos os tipos de números
let adulto: boolean = true;
let simbolo: symbol = Symbol('qualquer symbol');
// let big: bigint = 10n;


// ### TIPOS PASSADOS POR REFERÊNCIA ###

// array

let arrayNumeros: number[]  = [1, 2, 3];
let arrayString: Array<string>  = ['Diogo', 'Dias', 'Mello'];

// objetos

let pessoa: {
    nome: string,
    idade: number,
    adulto?: boolean
}

// funções

function soma(x: number, y: number): number {
    return x + y;
}

const soma2: (x: number, y: number) => number = (x, y) => x + y;
