const inputTarefa = document.querySelector('.input-tarefa')

const btnTarefa = document.querySelector('.btn-tarefa')

const tarefa = document.querySelector('.tarefas')

function criaLi(){
    // criando tag li no html
    const li = document.createElement('li');
    return li;
}

inputTarefa.addEventListener('keypress', function(e){
    if (e.keyCode === 13){
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    }
});

function limpaInput(){
    inputTarefa.value = '';
    inputTarefa.focus();
}

function criaBotao(li) {
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    // setando um atributo
    botaoApagar.setAttribute('class', 'apagar');
    li.appendChild(botaoApagar);
}

function criaTarefa(textoInput){
    const li = criaLi();
    li.innerText = textoInput;
    // adicionando a tag li em tarefa
    tarefa.appendChild(li);
    limpaInput();
    criaBotao(li);
    salvarTarefa();
}

// capturando evento
btnTarefa.addEventListener('click', function(){
    // sem retornos quando não a valor
    if (!inputTarefa.value) return;
    // pegando o valor do bloco inputTarefa
    criaTarefa(inputTarefa.value);
});

document.addEventListener('click', function(e){
    const el = e.target;

    // ocorre se botão apagar for clicado
    if (el.classList.contains('apagar')) {
        el.parentElement.remove();
        salvarTarefa();
    }
});

function salvarTarefa() {
    // selecionando todos os li de tarefas
    const liTarefas = tarefa.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let i of liTarefas){
        let tarefaTexto = i.innerText;
        // substituindo a palavra apagar
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        listaDeTarefas.push(tarefaTexto);
    }

    const tarefasJson = JSON.stringify(listaDeTarefas);
    // salvando as tarefas
    localStorage.setItem('tarefa', tarefasJson);
}

function addTarefasSalvas(){
    const tarefas = localStorage.getItem('tarefas');
    // convertendo para um objeto JS
    const listaDeTarefas = JSON.parse(tarefas);
    console.log(listaDeTarefas);

    // colocando as tarefas salvas
    for (let tarefa of listaDeTarefas){
        criaTarefa(tarefa);
    }
}

addTarefasSalvas();