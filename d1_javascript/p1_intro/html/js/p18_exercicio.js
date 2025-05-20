function meuEscopo () {
    // seleciona os elementos como selecionaria classes CSS
    const form = document.querySelector('.form');

    const resultado = document.querySelector('.resultado');

    // form.onsubmit = function(evento) {
    //     // previne que a pagina seja reniciada ao enviar o formulario
    //     evento.preventDefault();
    //     alert(1);
    //     console.log('Foi Enviado. ');
    // };

    const pessoas = [];

    function recebeEventoForm (evento) {
        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');
        
        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        })

        console.log(pessoas);

        resultado.innerHTML += `<p>${nome.value}${sobrenome.value}${peso.value}${altura.value}</p>`
    }

    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();