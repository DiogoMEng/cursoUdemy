export class Stack<T> {
    private counter = 0;
    private elements: { [k: number]: T } = {};

    push(elements: T): void {
        this.elements[this.counter] = elements;
        this.counter++;
    }

    pop(): T | void{
        if(this.isEmpty()) return undefined;

        this.counter--;
        const element = this.elements[this.counter];
        delete this.elements[this.counter];

        return element;
    }

    isEmpty(): boolean {
        return this.counter === 0;
    }
}

const stack = new Stack<number | string>();
