// ### SINTAXE ###
export const dadosClient1: readonly [number, string] = [1, 'Diogo'];

// ultimo valor é opcional
export const dadosClient2: [number, string, string?] = [1, 'Diogo'];

export const dadosClient3: [number, string, ...string[]] = [1, 'Diogo'];

// dadosClient1.pop();

console.log(dadosClient1);
