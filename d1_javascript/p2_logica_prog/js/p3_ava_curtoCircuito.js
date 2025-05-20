/*
*** AND e OR
* and - retorna o valor falso, caso haja
* or - retorna o valor verdadeiro, caso haja

*** valores avaliados em:

** FALSY
- false 
- 0
- '' "" ``
- null / undefined
NaN

OBS: os demais valores sao considerados verdadeiros
*/

console.log('Luiz' && 'Maria'); // retorna maria, ambos os valores sao considerados verdadeiros

function falaoi(){
    return 'oi';
}

const vaiExecutar = false;
console.log(vaiExecutar && falaoi()); // retorna falso

const vaiExecutar2 = 'Diogo';
console.log(vaiExecutar2 && falaoi());

console.log(0 || false || 'Diogo' || true); // retorna o primeiro valor verdadeiro

const corUsuario = 'vermelho';
const corPadrao = corUsuario || 'preto';
console.log(corPadrao);