const form = document.querySelector('#form')

form.addEventListener('submit', function (e) {
    // e - evento
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value)
    const altura = Number(inputAltura.value)

    if (!peso){
        setResultado('peso invalido', false) // caso nao seja peso valido
        return;
    }

    if (!altura){
        setResultado('altura invalido', false) // caso nao seja altura valido
        return;
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);

    const msg = `Seu IMC e ${imc} (${nivelImc}).`;
    setResultado(msg, true);
});

function getImc(peso, altura){
    const imc = peso / altura**2;
    return imc.toFixed(2);
}

function getNivelImc(imc){
    const nivel  = ['abaixo do peso', 'peso normal', 'sobrepeso', 'obesidade grau 1', 'obesidade grau 2', 'obesidade grau 3'];

    if (imc >= 39.9) {
        return nivel[5];
    }else if (imc >= 34.9){
        return nivel[4];
    }else if (imc >= 29.9){
        return nivel[3];
    }else if (imc >= 24.9){
        return nivel[2];
    }else if (imc >= 18.5){
        return nivel[1];
    }else if (imc < 18.5) {
        return nivel[0];
    }
}

function criaP() {
    const p = document.createElement('p'); // cria um paragrafo
    return p; // adiciona classe resultado em p
}

function setResultado (msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = ''; // zera o resultado

    const p = criaP();
    if (isValid){
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad');
    }

    p.innerHTML = msg;
    resultado.appendChild(p);
}