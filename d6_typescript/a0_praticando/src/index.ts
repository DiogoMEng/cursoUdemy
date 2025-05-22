@decorator("valor1", "valor2")
class Animal {

  constructor(
    public name: string,
    public color: string
  ){}

}

function decorator(param1: string, param2: string) {
  return function <T extends new (...args: any[]) => any>(target: T): T {
    return class extends target {
      color: string;

      constructor(...args: any[]) {
        super(...args);
        this.color = "qualquer coisa";
        // Você pode usar param1 e param2 aqui se quiser
      }
    };
  };
}

const animal = new Animal("Luiz", "Roxo");

console.log(animal);