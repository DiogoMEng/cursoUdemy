function getDiaSemanaText (diaSemana) {
    let diaSemanaTexto;

    switch(diaSemana) {
        case 0:
            diaSemanaTexto = 'domingo';
            break;
        case 1:
            diaSemanaTexto = 'segunda';
            break;
        case 2:
            diaSemanaTexto = 'terca';
            break;
        case 3:
            diaSemanaTexto = 'quarta';
            break;
        case 4:
            diaSemanaTexto = 'quinta';
            break;
        case 5:
            diaSemanaTexto = 'sexta';
            break;
        case 6:
            diaSemanaTexto = 'sabado';
            break;
        default:
            diaSemanaTexto = '';
    }

    return diaSemanaTexto;
}

const data = new Date('2022-05-04 00:00:00');
let diaSemana = data.getDay();
const diaSemanaTexto = getDiaSemanaText(diaSemana);

console.log(diaSemana, diaSemanaTexto);