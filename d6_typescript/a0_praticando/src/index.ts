@decorator("valor1", "valor2");
class Animal {

  constructor(
    public name: string,
    public color: string
  ){}

  function decorator<T extends new (...args: any[]) => any>

}