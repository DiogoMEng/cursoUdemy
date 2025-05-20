import gS from "./geradores";

const senhaGerado = document.querySelector('.senha-gerada');
const qtdCaracteres = document.querySelector('.qtd-caracteres');
const chkMaiusculas = document.querySelector('.chk-maiusculas');
const chkMinusculas = document.querySelector('.chk-minusculas');
const chkNumeros = document.querySelector('.chk-numeros');
const chkSimbolos = document.querySelector('.chk-simbolos');

const geraSenha = document.querySelector('.gera-senha');

export default () => {
    geraSenha.addEventListener('click', () =>{
        senhaGerado.innerHTML = gera();
    });
};

function gera(){
    const senha = gS(
        qtdCaracteres.value,
        chkMaiusculas.checked,
        chkMinusculas.checked,
        chkNumeros.checked,
        chkSimbolos.checked  
    );

    return senha || 'Nada selecionado.';
}

// temp 33:07