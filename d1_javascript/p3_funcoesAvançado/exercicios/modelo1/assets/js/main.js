function criaCalculadora() {
    return {
        
        // selecionando a class display
        display: document.querySelector('.display'),

        inicia(){
            alert('Iniciado');
            this.cliqueBotao();
            this.pressionaEnter();
        },

        clearDisplay(){
            this.display.value = '';
        },

        apagaUm(){
            // pegando o tamanho da string e tirando menos um
            this.display.value = this.display.value.slice(0, -1);
        },

        realizaConta(){
            let conta = this.display.value;

            try{
                conta = eval(conta);

                if(!conta){
                    alert('conta invalida!');
                    return;
                }

                this.display.value = conta;
            }catch(e){
                alert('conta invalida!');
                return;
            }
        },
    
        cliqueBotao(){
            // capturando evento de clique
            document.addEventListener('click', e => {
                // local onde esta sendo clicado
                const el = e.target;

                // verificando qual botao esta sendo clicado
                if(el.classList.contains('btn-num')) {
                    // referencia a chave dentro do objeto cliqueBotao
                    this.btnParaDisplay(el.innerText);
                }

                if(el.classList.contains('btn-clear')) {
                    // referencia a chave dentro do objeto cliqueBotao
                    this.clearDisplay();
                }

                if(el.classList.contains('btn-del')) {
                    // referencia a chave dentro do objeto cliqueBotao
                    this.apagaUm();
                }

                if(el.classList.contains('btn-eq')) {
                    // referencia a chave dentro do objeto cliqueBotao
                    this.realizaConta();
                }
            });
        },

        pressionaEnter(){
            this.display.addEventListener('keyup', e =>{
                if (e.keyCode === 13){
                    this.realizaConta();
                }
            });
        },

        btnParaDisplay(valor){
            this.display.value += valor;
        }
    };
}

const calculadora = criaCalculadora();
calculadora.inicia();