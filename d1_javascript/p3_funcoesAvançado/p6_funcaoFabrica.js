function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,
        get nomeCompleto(){ // transformando em um tipo de atributo usando o get
            return `${this.nome} ${this.sobrenome}`
        },

        set nomeCompleto(valor){
            // pegando os valores apos cada espaço
            valor = valor.split(' ');
            // retirando o valor de inicio do array
            this.nome = valor.shift();
            // juntando os valores em strings apos cada espaço
            this.sobrenome = valor.join(' ');
            console.log(valor);
        },

        fala: function(assunto) { // criando método
            return `${this.nome} está ${assunto}`; // utilizando o this para se referir a um objeto
        },

        altura: altura,

        peso: peso,

        imc (){ // outra forma de escrever o método fala
            const indice = this.peso / (this.altura ** 2)
            return indice.toFixed(2) // colocando duas casas decimais apos a virgula
        }
    }
}

const p1 = criaPessoa('Diogo', 'Mello', 1.83, 89);
// console.log('imc = ', p1.imc());
// console.log('nome completo:', p1.nomeCompleto)
// console.log(p1.nome);
// console.log(p1.sobrenome);
p1.nomeCompleto = 'Tatiana Dias Coelho';
console.log(p1.nomeCompleto);