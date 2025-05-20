// função sera chamada imediatamente
(function(){
    const nome = 'Diogo';
    console.log(nome);
})();

(function(){
    const sobrenome = 'Mello';
    function criaNome(nome){
        return nome + ' ' + sobrenome;
    }

    function falanome() {
        console.log(criaNome('Diogo'))
    }

    falanome();
})();

const nome = 'Mello';
console.log(nome);