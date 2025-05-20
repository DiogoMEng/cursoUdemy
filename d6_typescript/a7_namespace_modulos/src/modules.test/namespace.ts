namespace MyNamespace {
    const name = 'Diogo';

    export class NamespacePerson {
        constructor (public nome: string){}
    }

    const pessoa = new NamespacePerson('Luiz');
    console.log(pessoa);
}

const pessoa = new MyNamespace.NamespacePerson('Luiz');
console.log(pessoa);
