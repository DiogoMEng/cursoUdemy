// funções podem ser chamadas ao antes ou apos sua criação
// funções podem ser executadas como se fossem um tipo de dado

// primeira forma
function falaOI(){
    console.log('OI');
}

// segunda forma
const tipoDado = function(){
    console.log('tipo de dado em formato de função');
};

// terceira forma (mais nova)
const funcaoArrow = () => {
    console.log('forma mais usada');
};

// dentro de um objeto
const obj = {
    falar: function() {
        console.log('meu oovo');
    }
}

falaOI();
tipoDado();
funcaoArrow();
obj.falar();