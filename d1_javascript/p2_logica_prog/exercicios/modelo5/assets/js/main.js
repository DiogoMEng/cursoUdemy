const elementos = [
    {tag: 'p', texto: 'frase 1'},
    {tag: 'div', texto: 'frase 2'},
    {tag: 'footer', texto: 'frase 3'},
    {tag: 'section', texto: 'frase 4'}
]

// selecionando uma classe no hmtl
const container = document.querySelector('.container')

// criando um elemento html
const div = document.createElement('div');

// percorrendo o array
for (let i = 0; i < elementos.length; i++){
    // obtendo os valores por desestruturação
    let {tag, texto} = elementos[i];
    // criando os valores e medida que o array é percorrido
    let tagCriada = document.createElement(tag);
    // inserindo os texto dentro da tag criada
    // ==========================================
    // tagCriada.innerHTML = texto;
    // ou
    // tagCriada.innerText = texto;
    // ou
    let textoCriado = document.createTextNode(texto);
    tagCriada.appendChild(textoCriado);
    // =============================================
    // inserindo os elementos dentro da div
    div.appendChild(tagCriada);
}

// adicionando a  div dentro do container
container.appendChild(div);