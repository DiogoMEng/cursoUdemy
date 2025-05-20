export class OnePerson {
    @propertyDecorator
    name: string;
    surname: string;
    age: number;

    constructor(name: string, surname: string, age: number){
        this.name = name;
        this.surname = surname;
        this.age = age
    }

    @decorator
    method(msg: string): string {
        return `${this.name} ${this.surname}: ${msg}`;
    }

    get completeName(): string {
        return this.name + ' ' + this.surname;
    }

    set completeName(value: string) {
        const words = value.split(/\s+/g);
        const firstName = words.shift();

        if(!firstName) return;

        this.name = firstName;
        this.surname = words.join(' ');
    }
}

function decorator(classPrototype: any, nameMethod: string, descriptor: PropertyDescriptor): any{
    console.log(classPrototype);
    console.log(nameMethod);
    console.log(descriptor);

    return {
        value: function(...args: string[]) {
            return 1
        },
    }
}

function propertyDecorator(classPrototype: any, name: string | symbol): any {
    console.log(classPrototype);
    console.log(name);

    let propertyValue: any;

    return {
        get: () => propertyValue,
        set: (value: any) => {
            propertyValue = value
        }
    }
}
