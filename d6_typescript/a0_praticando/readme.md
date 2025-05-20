# ANOTAÇÕES

# <p id="sumario">SUMÁRIO</p>

1. <a href="#char-code-at">charCodeAt</a>
2. <a href="#expressao-regular">Expressão Regular</a>

---

# <p id="char-code-at">charCodeAt</p>

Método de string que retorna valores inteiros entre 0 e 65535, representando a unidade de código UTF-16 no índice fornecido.

```javascript
// SINTAXE
charCodeAt(index);
```

```javascript
const setence = "Diogo gosta de comer pizza";

const index = 4;

console.log(`O código do caractere ${setence.charCodeAt(index)} é igual ${setence.charAt(index)}`)

// retorna uma valor inteiro representando uma unidade de código UTF-16 no especificado index.
```

<a href="#sumario">Retornar ao Sumário</a>

---

# <p id="expressao-regular">Expressão Regular</p>

Padrões utilizados para selecionar combinações de caracteres em uma string.

_Nota: no javascript as expressões regulares também são objetos._

Maneiras de Construir uma **Expressão Regular**:

**Expressão Literal**:
- compiladas quando o script é carregado.
- melhor performance se utilizado em constantes.

```javascript
const re = /ab+c/
```

**Construtor RegExp**:
- realizada em tempo de execução.
- útil se o padrão da expressão for modificável.

```javascript
let re = new RegExp("ab+c");
```

Um padrão de expressão pode ser feita por um conjunto de caracteres `/abc/` ou combinação de caracteres simples e especiais `/capitulo (\d+)\. \d*/`.
- parênteses: mecanismos de armazenamento.

## Padrões Simples

Construido utilizando os caracteres que se deseja encontrar correspondências diretas.

Exemplo:
```javascript
const exp = /abc/;

// O padrão acima pode ser encontrado na cadeia "Olá, você conhece a abc" ou "Os mais recentes aviões evoluiram do slabcraft"
```

## Caracteres Especiais

Realiza uma busca além da correspondência direta, como por exemplo, encontrar uma ou mais ocorrências da letra 'b'.

Exemplo:
```javascript
// Procura uma correspondência de a, seguido de nenhum ou mais b's, seguido de c.
// --> o caractere " * " seleciona zero ou mais ocorrências de item que o procede.
const exp = /ab*c/;

// A expressão corresponde com o resultado: cbb**abbbbc**debc
// -- identificação do subconjunto.
```

## Principais Caracteres Especiais

| Caractere | Descrição |
|-----------|-----------|
|    `\`    | Quando precedida de um caracter não especial, informa que o próximo caractere será especial e não deve ser lido de forma literal. |
|           | **Exemplo de caracter especial**: `\b` - fronteira do caracter. |
|           | Se precedido um caractere especial com a barra invertida, significa que o mesmo deve ser interpretado de forma literal |
|           | **Exemplo**: `/a\*/` - o asteristico será lido de forma literal. |
|    `^`    | Corresponde ao início do texto. |
|           | **Exemplo**: `/^A/` - corresponde a "Alvo encontrado" |
|    `$`    | Corresponde ao final de um texto. |
|           | **Exemplo**: `/r$/` - corresponde a "Correr". |
|    `*`    | Corresponde a uma expressão repetida nenhuma vez ou várias vezes |
|           | **Exemplo**: `/bo*/` - corresponde "boo" ou "A bird warbled" |
|    `+`    | Corresponde a uma expressão que o precede 1 vez ou mais vezes |
|           | **Exemplo**: `/a+/` - corresponde a "candy" ou "caaandy". |
|    `?`    | Corresponde a uma expressão que o precede nenhuma ou 1 vez. |
|           | **Exemplo**: `/e?le?/` - corresponde a "angel" ou "angle". |
|    `.`    | Corresponde com qualquer caracter, exceto o de quebra de linha. |
|           | **Exemplo**: `/.n/` - corresponde a "an" ou "on". |
|   `(x)`   | Pesquisa correspondência com o caractere x e memoriza.
|           | **Exemplo**: `/(foo) (bar) \1 \2/` - corresponde a "foo bar foo bar" |
|  `x(?=y)` | Pesquisa a correspondência em x apenas se x é seguido por y (**lookahead**) |
|           | **Exemplo**: `/Jack(?=Sprat)/` - corresponde a "Capitão Jack Sprat" |
|           | O inverso pode ser aplicado com `x(?!y)`, ou seja, x não deve ser seguido de y |
|   `x\|y`  | Pesquisa correspondência de x ou y |
|           | **Exemplo**: `/verde\|vermelho/` - corresponde a "maçã verde" ou "maçã vermelha" |
|   `{n}`   | Pesquisa n correspondências ao caracter procedido |
|           | **Exemplo**: `/a{2}/` - corresponde a "caandy" |
|  `{n, m}` | Pesquisa a n menor correspondência e a m maior correspondência do caractere precedido |
|           | Exemplo: `/a{1, 3}/` - corresponde a "candy", "caandy" e "caaaandy" |
|           | Os valores encontrados devem está entre o intervalo |
|  `[xyz]`  | Pesquisa correspondência para qualquer um dos caracteres entre colchetes |
|           | Permite especificar o intervalo de caracteres usando hífen |
|           | _Nota: não vale a pena utilizar `. ou *`_ |
|           | **Exemplo**: `[abcd]` ou `[a-d]` - corresponde a "beijo", "anjo", "cavalo" e "dragão" |
|           | O contrário pode ser aplicado utilizando `^`, assim tudo dentro dos colchetes não deve ser considerado |
|           | **Exemplo**: `[^xyz]` ou `[^x-z]` |
|  `[\b]`   | Pesquisa por espaços em branco |
|           | **Exemplo**: `/Diogo\sMello/` - corresponde a "Diogo Mello" |
|           | _Nota: o `\s` também pode ser utilizado para encontrar espaços em branco._ |
<a href="#sumario">Retornar ao Sumário</a>