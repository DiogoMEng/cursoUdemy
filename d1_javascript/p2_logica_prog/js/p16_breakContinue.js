const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let numero of numeros){
    
    // se condição for igual a 2, o codigo irá voltar para o inicio
    if (numero === 2){
        continue
    }

    // se condição for verdadeira, o codigo irá parar
    if (numero === 7){
        break;
    }

    console.log(numero);
}

console.log('=====================================')

for (let i in numeros){
    let numero = numeros[i];
    // se condição for igual a 2, o codigo irá voltar para o inicio
    if (numero === 2){
        continue
    }

    // se condição for verdadeira, o codigo irá parar
    if (numero === 7){
        break;
    }

    console.log(numero);
}

console.log('=====================================')

for (let i = 0; i < numeros.length; i++){
    let numero = numeros[i];
    // se condição for igual a 2, o codigo irá voltar para o inicio
    if (numero === 2){
        continue
    }

    // se condição for verdadeira, o codigo irá parar
    if (numero === 7){
        break;
    }

    console.log(numero);
}

console.log('=====================================')

let i = 0;
while (i < numeros.length){
    let numero = numeros[i];
    // se condição for igual a 2, o codigo irá voltar para o inicio
    if (numero === 2){
        // pra não entrar em loop infinito
        i++;
        continue
    }

    console.log(numero);

    // se condição for verdadeira, o codigo irá parar
    if (numero === 7){
        i++;
        break;
    }
    i++;
}

