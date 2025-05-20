const numero = Number(prompt('informe um numero: '));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

// document.body.innerHTML += `<h1>SEU NUMERO E ${numero}</h1> <br />`;
numeroTitulo.innerHTML = numero;
texto.innerHTML += `<p>raiz quadrada = ${Math.sqrt(numero)}</p> <br />`;
texto.innerHTML += `<p>${numero} e inteiro = ${Number.isInteger(numero)}</p> <br />`;
texto.innerHTML += `<p>E NaN = ${Number.isNaN(numero)}</p> <br />`;
texto.innerHTML += `<p>Arredondando pra baixo = ${Math.floor(numero)}</p> <br />`;
texto.innerHTML += `<p>Arredondando pra cima = ${Math.ceil(numero)}</p> <br />`;
texto.innerHTML += `<p>Com duas casas decimais = ${parseFloat(numero).toFixed(2)}</p> <br />`;