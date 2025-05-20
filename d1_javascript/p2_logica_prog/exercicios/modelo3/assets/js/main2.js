const h1 = document.querySelector('.container h1')
const data = new Date();
h1.innerHTML = data.toString(); 

// ***PRIMEIRA FORMA***
function getDiaSemanaText(diaSemana){
    const dia = ['segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado', 'domingo']

    return dia(diaSemana)
}

function getNumeroMes(numeroMes){
    const meses = ['janeiro', 'fevereiro', 'março', 'abril',    'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']

    return meses(numeroMes)
}


function zeroAEsquerda(){
    return num >= 10 ? num : `0${num}`;
}

function crieDate(data) {
    const diaSemana = data.getDay();
    const numMes = data.getMonth();

    const nomeDia = getDiaSemanaText(diaSemana);
    const nomeMes = getNomeMes(numMes);

    return (
        `${nomeDia}, ${data.getDate()} de ${nomeMes}` + `${data.getFullYear()}` + `${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`
    );
}

h1.innerHTML = crieDate(data);