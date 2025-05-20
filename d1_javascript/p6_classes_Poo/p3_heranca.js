class DispositivoEletronico{
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    }

    ligar(){
        if (this.ligado) {
            console.log(this.nome + ' já ligado');
            return;
        }

        this.ligado = true;
    }

    desligar(){
        if (!this.ligado) {
            console.log(this.nome + ' já desligado');
            return;
        }

        this.ligado = false;
    }
}


// classe herdando de outra classe
class Smartphone extends DispositivoEletronico{
    constructor(nome, cor, modelo){
        // herdando da classe pai
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }
}

const p1 = new DispositivoEletronico('Smartphone');
p1.ligar();
p1.ligar();
console.log(p1);

const p2 = new Smartphone('Galaxy', 'preto', 's10');
console.log(p2);