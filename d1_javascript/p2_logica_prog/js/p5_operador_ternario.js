// (?) (:) - ambos sao operadores ternarios

// varificando usuarios vips e normais

const pontuacaoUsuario = 999;

// primeiro modo condicional
// if (pontuacaoUsuario >= 1000) {
//     console.log('user vip');
// } else {
//     console.log('user normal');
// }

// segundo modo condicional - condicao ? valor para verdadeiro : valor para falso
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'usuario vip' : 'usuario normal'; // se a condicao for determinada verdadeira (primeira condicao), caso seja falsa segunda condicao
console.log(nivelUsuario);

const idade = 20;

console.log(idade >= 20 ? 'pode entrar' : 'não pode entrar');
