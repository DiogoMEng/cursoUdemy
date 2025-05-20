@decorator('valor1', 'valor2')
export class Animal {
    constructor(public name: string, public color: string) {}
}

function decorator(param1: string, param2: string){
    return function <T extends new (...args: any[]) => any>(target: T): T {
        return class extends target {
            color: string;

            constructor (...args: any[]) {
                super(...args)
                this.color = 'Qualquer coisa';
            }
        }
    }
}


const animal = new Animal('Luiz', 'roxo');
console.log(animal)
