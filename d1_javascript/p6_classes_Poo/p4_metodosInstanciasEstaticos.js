class controloRemoto{
    constructor(tv){
        this.tv = tv;
        this.volume = 0;
    }

    // métodos de instância
    aumentarV(){
        this.volume+=2;
    }

    diminuirV(){
        this.volume-=2;
    }

    // métodos estáticos
    static trocaPilha(){
        console.log('testanto');
    }
}

const controle1 = new controloRemoto('LG');
controle1.aumentarV();
controle1.aumentarV();
controle1.aumentarV();
controle1.diminuirV();
console.log(controle1);
controloRemoto.trocaPilha();