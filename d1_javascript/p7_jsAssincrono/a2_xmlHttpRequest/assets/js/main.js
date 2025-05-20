// função que busca as paginas
const request = obj => {
    return new Promise((resolve, rejects) => {
        const xhr = new XMLHttpRequest();

        // abrindo um site
        xhr.open(obj.method, obj.url, true);

        // sem entrada de dados
        xhr.send();

        xhr.addEventListener('load', () =>{
            // verificação de código http
            if (xhr.status >= 200 && xhr.status <= 300){
                // retorna um valor caso haja sucesso
                resolve(xhr.responseText);
            } else {
                rejects(xhr.statusText);
            }
        });
    });
};


// pegando os clicks
document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if (tag === 'a') {
        // prevenir de entrar no link
        e.preventDefault();
        carregaPagina(el);
    }
});


async function carregaPagina(el){
    // pega atributo
    const href = el.getAttribute('href');
    console.log(href);

    const objConfig = {
        method: 'GET',
        url: href
    };


    try{
        const response = await request(objConfig);
        carregaResultado(response);
    }catch(e){
        console.log(e);
    }
}


function carregaResultado(response){
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}

