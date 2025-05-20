// ***PARTE 1***

// funcao data - func construtora
// new - mostra que esta falando com uma funcao construtora
// funcao construtora deve comecar com letra maiuscula
const data = new Date(2019, 3, 20, 15, 14, 27); // new Date(ano, mes, dia, hora, min, seg)
const data2 = new Date('2022-04-21 20:20:59');
console.log(data.toString()); // exibe data e hora
console.log(data2.toString());
console.log('Dia', data.getDate()); // obtem o numero do dia
console.log('Mes', data.getMonth()); // obtem o mes
console.log('Ano', data.getFullYear()); // obtem o ano
console.log('Hora', data.getHours()); // obtem hora
console.log('Min', data.getMinutes()); // obtem min
console.log('Seg', data.getSeconds()); // obtem segundos
console.log('dia da semana', data.getDay()); // obtem o dia da semana

function zeroAEsquerda (num) {
    return num >= 10 ? num : `a${num}`;
}

function formataData(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const minutos = zeroAEsquerda(data.getMinutes());
    const segundos = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${minutos}:${segundos}`
}

const data1 = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);


// ***PARTE 2***

const todoDia = new Date(98, 1);
console.log(todoDia);