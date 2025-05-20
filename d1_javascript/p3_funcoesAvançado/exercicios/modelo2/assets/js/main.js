function Calculadora() {
    this.display = document.querySelector('.display');

    this.capturaCliques = () => {
        document.addEventListener('click', e =>{
            const el = e.target;

            if(el.classList.contains('btn-num')) this.addNumDisplay(el);
            if(el.classList.contains('btn-clear')) this.clear();
            if(el.classList.contains('btn-del')) this.delete();
            if(el.classList.contains('btn-eq')) this.result(el);
        });
    };

    this.addNumDisplay = el => {
        this.display.value += el.innerText;
        this.display.focus();
    };
    this.clear = () => this.display.value = '';
    this.delete = () => this.display.value = this.display.value.slice(0, -1);
    this.result = () => {
        try{
            const conta = eval(this.display.value); 
            
            if(!conta) {
                alert('conta invalida'); 
                return;
            }

            this.display.value = conta;
        }catch(e){
            alert('conta invalida!'); 
            return;
        }
    };

    this.capturaEnter = () => {
        this.display.addEventListener('keypress', e =>{
            if(e.keyCode !== 13) return;
            this.result();
        });
    };
    
    this.inicia = () => {
        this.capturaCliques();
        this.capturaEnter();
    };
}

const calculadora = new Calculadora();
calculadora.inicia();