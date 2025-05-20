type GetFnKey = <O, K extends keyof O>(object: O, key: K) => O[K];

const getKey: GetFnKey = (object, key) => object[key];

const animal = {
  color: "pink",
  vaccines: ["vaccine 1", "vaccine 2"],
  age: 10
}

const vaccines = getKey(animal, "vaccines");

console.log(vaccines);