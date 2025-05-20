// ### FUNÇÃO ANY ###
function pessoa(nome: any) {
  return nome;
}

console.log(pessoa('Diogo'));

// ### FUNÇÃO VOID ###
function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}

semRetorno('Diogo');
