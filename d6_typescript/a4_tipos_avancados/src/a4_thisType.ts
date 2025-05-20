export class Calculadora {
    constructor(public numero: string){}

    add(n: number): this {
        this.numero += n;
        return this
    }

    sub(n: number): this {
        this.numero -= n;
        return this
    }

    mul(n: number): this {
        this.numero *= n;
        return this
    }

    div(n: number): this {
        this.numero /= n;
        return this
    }
}

const calculadora = new Calculadora(10);
calculadora.add(5).mul(2).div(2).sub(5)

console.log(calculadora);

// ### PADRÃO DE PROJETO GOF - BUILDER ###

export class RequestBuilder {
    private method: 'get' | 'post' | null = null;
    private url: string | null = null;

    setMethod(method: 'get' | 'post'): this {
        this.method = method;
    }

    setUrl(url: 'get' | 'post'): this {
        this.url = url;
    }
}

const request = new RequestBuilder();
request.setUrl('http://www.google.com').setMethod('post');
