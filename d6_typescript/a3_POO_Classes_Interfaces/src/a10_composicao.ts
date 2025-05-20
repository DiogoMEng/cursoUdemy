export class Carro {
    private readonly motor = new Motor();

    ligar(): void {
        this.motor.ligar();
    }

    desligar(): void {
        this.motor.desligar();
    }

    parar(): void {
        this.motor.parar();
    }
}

export class Motor{
    ligar(): void {
        console.log('motor está ligado...');
    }

    desligar(): void {
        console.log('motor está desligar...');
    }

    parar(): void {
        console.log('motor está parado...');
    }
}

const carro = new Carro();
