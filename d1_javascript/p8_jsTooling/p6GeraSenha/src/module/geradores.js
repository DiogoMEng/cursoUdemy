// gerador de letras
const rand = (min, max) => Math.floor(Math.random() * (max-min) + min);
const geraMaiuscula = () => String.fromCharCode(rand(65, 91));
const geraMinuscula = () => String.fromCharCode(rand(97, 123));
const geraNumero = () => String.fromCharCode(rand(48, 58));
const simbolos = '!@#$*&%^~?';
const geraSimbolo = () => simbolos[rand(0, simbolos.length)];

export default function geraSenha(qtd, maiu, minu, nume, simb){
    const senhaArray = [];
    qtd = Number(qtd);

    for (let i = 0; i < qtd; i++){
        // avaliação de curto circuito
        maiu && senhaArray.push(geraMaiuscula()); // se maiuscula = true, executa o push
        minu && senhaArray.push(geraMinuscula());
        nume && senhaArray.push(geraNumero());
        simb && senhaArray.push(geraSimbolo());
    }

    return senhaArray.join('').slice(0, qtd);
}

