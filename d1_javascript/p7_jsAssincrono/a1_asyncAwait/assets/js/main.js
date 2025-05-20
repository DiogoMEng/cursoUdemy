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
    try{
        const href = el.getAttribute('href');
        const response = await  fetch(href);
    
        if (response.status !== 200) throw new Error('ERRO 404');
    
        const html = await response.text();
    
        carregaResultado(html);
    }catch(e){
        console.log(e);
    }
}


function carregaResultado(response){
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}


fetch('pg1.html').then(response => {
    if (response.status !== 200) throw new Error('ERRO 404');

    return response.text();
}).then(html => console.log(html)).catch(e => console.log(e));