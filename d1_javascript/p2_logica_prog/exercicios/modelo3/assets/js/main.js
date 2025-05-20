const h1 = document.querySelector('.container h1')
const data = new Date();
h1.innerHTML = data.toString(); 

// ***PRIMEIRA FORMA***

function getDiaSemanaText(diaSemana){
    let diaSemanaTexto;

    switch(diaSemana) {
        case 0:
            diaSemanaTexto = 'domingo';
            return diaSemanaTexto;
        case 1:
            diaSemanaTexto = 'segunda';
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = 'terca';
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = 'quarta';
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto = 'quinta';
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = 'sexta';
            return diaSemanaTexto;
        case 6:
            diaSemanaTexto = 'sabado';
            return diaSemanaTexto;
        default:
            diaSemanaTexto = '';
        
    }
}

function getNomeMes(numeroMes){
    let nomeMes;

    switch(numeroMes) {
        case 0:
            nomeMes = 'janeiro';
            return nomeMes;
        case 1:
            nomeMes = 'fevereiro';
            return nomeMes;
        case 2:
            nomeMes = 'março';
            return nomeMes;
        case 3:
            nomeMes = 'abril';
            return nomeMes;
        case 4:
            nomeMes = 'maio';
            return nomeMes;
        case 5:
            nomeMes = 'junho';
            return nomeMes;
        case 6:
            nomeMes = 'julho';
            return nomeMes;
        case 7:
            nomeMes = 'agosto';
            return nomeMes;
        case 8:
            nomeMes = 'setembro';
            return nomeMes;
        case 9:
            nomeMes = 'outubro';
            return nomeMes;
        case 10:
            nomeMes = 'novembro';
            return nomeMes;
        case 11:
            nomeMes = 'dezembro';
            return nomeMes;
        default:
            nomeMes = '';
        
    }
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

// ***SEGUNDA FORMA***

// const h1 = document.querySelector('.container h1');
// const data = new Date();

// // ** MÉTODO 1
// h1.innerHTML = data.toLocaleString('pt-BR', {dateStyle: 'full', timeStyle: 'short'});

// // ** MÉTODO 2
// // h1.innerHTML = Intl.DateTimeFormat('pt-BR', { dateStyle: "full", timeStyle: "medium" }).format(new Date())