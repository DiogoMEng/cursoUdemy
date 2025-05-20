const nome = prompt("digite seu nome completo: ");

document.body.innerHTML += `o seu nome e: ${nome} <br />`;
document.body.innerHTML += `o seu nome tem letrar ${nome.length} <br />`;
document.body.innerHTML += `a segunda letra do seu nome e ${nome.charAt[1]} <br />`;
document.body.innerHTML += `qual o primeiro indice da letra d no seu nome ${nome.indexOf('d')} <br />`;
document.body.innerHTML += `qual o ultimo indice da letrar d no seu nome ${nome.lastIndexOf('a')} <br />`;
document.body.innerHTML += `as ultimas 3 letras do seu nome sao ${nome.slice(-3)} <br />`;
document.body.innerHTML += `as palavras do seu nome sao ${nome.split(' ')} <br />`;
document.body.innerHTML += `seu nome com as letrar maiusculas ${nome.toUpperCase()} <br />`;
document.body.innerHTML += `seu nome com as letras minusculas ${nome.toLowerCase()} <br />`;
// forma de colocar um texto
// document.write("um texto")
// document.body.innerHTML = "qualquer outra coisa";
// // forma de incrementar
// document.body.innerHTML += " mais alguma coisa";
