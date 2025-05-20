/*
*** Operadores Logicos

** && - and - E -> todos as afirmacoes devem ser verdadeiras
** || - or - OU -> somente uma delas precisa ser verdadeira
** ! - not - NAO -> inverte o valor logico
*/

const expressaoAnd = true && false && true;
console.log(expressaoAnd);

const expressaoOr = true || false;
console.log(expressaoOr);

const expressaoNot = !expressaoAnd;
console.log(expressaoNot);