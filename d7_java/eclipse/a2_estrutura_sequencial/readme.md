# DECLARAÇÃO DE VARIÁVEIS

"tipo" "nome" = "valor inicial";

## Tipos primitivos em Java - Principais

1. byte - usada quando se deseja um número inteiro que não passara de -128 ou 127.
	- geralmente o mais utilizado entre os tipos inteiros é o "int".
	
2. double - usado para representa valores quebrados.
	- equivale a 64bits.
	- possui maior precisão em relação ao float.
	
3. boolean - armazena valores verdadeiros ou falsos.

4. String - representa uma cadeia de caracteres.

<br /><br />

# SAÍDA DE DADOS EM JAVA

- %f: ponto flutuante.
- %d: inteiro.
- %s: texto.
- %n: quebra de linha.

<br /><br />

# PROCESSAMENTO DE DADOS EM JAVA

casting - conversão explícita de tipos de dados.

## Boa Prática

Sempre indicar o tipo do dado:
- double: ".0".
- float: "f".

<br /><br />

# ENTRADA DE DADOS

Tipo Scanner - variável especial do java para realizar entrada de dados.

new Scanner(System.in) - forma de associar a variável com a entrada de dados padrão.
- requisitos:
	1. importar java.util.Scanner.
	2. fazer sc.close quando não precisar mais do objeto.
	
_Nota: valores double também se encaixam como números inteiros._

Se um comando de leitura diferente de nextLine() for utilizado, uma quebra de linha pode ficar
pendente na entrada padrão.

## Informações Extras

println - independente da localidade, println sempre irá considerar o formato Americano.

auto-identação - pode ser aplicada automáticamente apertando as teclas ctrl+f.

<br /><br />

# FUNÇÕES MATEMÁTICAS EM JAVA

1. Math.sqrt - raiz quadrada.
2. Math.pow - potenciação.
3. Math.abs - valor absoluto.

