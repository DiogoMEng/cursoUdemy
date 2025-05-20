// ### TIPANDO O THIS ###
export function funcao(this: Date, argumento: string): void{
    console.log(this);
}

funcao.call(new Date(), 'Diogo');
