// ***importando apenas alguns valores
// import {nome, sobrenome, idade, soma} from './modulo1';

// console.log(nome, sobrenome, idade);

// // ***importando tudo
// import * as modulo from './modulo1';

// console.log(soma(4,87));

// // ***renomeando um modulo
// // ** a renomeação de modulos tambem pode ser feita dentro do modulo
// import {nome as nome2, sobrenome2, Pessoa} from './modulo1';

// const p1 = new Pessoa('Diogo', 'Mello');

// const nome = 'Geovana';

// console.log(nome2, sobrenome2,nome, p1);

// // ***importando um modulo padrão
// import modulo from './modulo1';

// console.log(modulo(1, 2));

// console.log(modulo);

// import { documentos as doc} from "./modulo1";


// import ('./modulo1').then((module) => {
    //     return module;
    // })
    
import { documentos } from "./moduloPai";

console.log(documentos.name);