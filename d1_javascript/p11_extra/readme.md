# SUMÁRIO

Parte 1: <a href="#expressao-regular">Expressões Regulares</a>

Parte 2: <a href="#google-cloud">Google Cloud: Deploy de Aplicação</a>
- <a href="#acessando-servidor">Acessando o Servidor</a>
- <a href="#enviando-arquivos-servidor">Enviando arquivos para o Servidor</a>
- <a href="#node-pm2-servidor">Node e Pm2 no Servidor</a>

---

# <p id="expressao-regular">Expressões Regulares</p>

Padrões utilizados para selecionar combinações de caracteres em uma string.
- expressões regulares = objetos.

Podem ser usados com métodos de `RegExp`:
1. `exec`.
2. `test`.

Podem ser usados com métodos de `String`:
1. `match`.
2. `replace`.
3. `search`.
4. `split`.

## Criando expressão regular

```javascript
// padrão literal
// --> compiladas quando script carregado
// --> melhor performance se utilizada em constante
const re = /ab+c/


// Objeto RegExp
// --> compilação em tempo de execução
// --> indicado se o padrão for variável
let re = new RegExp("ab+c");
```

## Padrões de Expressão Regular

| PADRÃO SIMPLES |
|----------------|

Utiliza caracteres que se deseja encontrar correspondência direta.

Exemplo: `/abc/` -- corresponde -- abc junto e na ordem específica.
- **"Olá, você conhece o abc"**.
- **"Os mais recentes aviões evoluíram do slabcraft"**.

| CARACTERES ESPECIAIS |
|----------------------|

| Caractere | Descrição |
|-----------|-----------|
| `\` | Uma barra invertida que preceda um caractere não especial significa que o caractere seguinte é especial e não deve ser interpretado de forma literal. |
|     | **Exemplo**: '\b' ele passará a significar a ocorrência do caractere especial  |
|     | Quando a barra invertida preceder um caractere especial isso significará que o próximo caractere deve ser interpretado de forma literal |
|     | **Exemplo**: `/a*/` - selecionará a ocorrência de zero ou mais caracteres 'a'; `/a\*/` - '\' de escape fará com que o '*' seja interpretado de forma literal |
| `^` | Corresponde ao início do texto |
|     | **Exemplo**: `/^A/` - corresponde ao 'A' em "Alvo Encontrado" |
| `$` | Corresponde ao final do texto |
|     | **Exemplo**: `/r$/` - correspondência em "correr" |
| `*` | Corresponde a expressão que o precede repetida 0 ou mais vezes |
|     | **Exemplo**: `/bo*/` - correspondência para 'boo' em "boolean" e 'b' em "A bird warbled" |
| `+` | Corresponde a expressão que o precede repetida 1 ou mais vezes |
| `?` | Corresponde a expressão que o precede repetido 0 ou 1 vez |
| `.` | corresponde com qualquer caracter, exceto o caracter de nova linha |
|     | **Exemplo**: `/.n/` - correspondência para o 'an' e 'on' em "nove dias restantes para onze de agosto." |
| `(x)` | Pesquisa correspondência com o caractere 'x' e memoriza-o (Parênteses de captura) |
|       | **Exemplo**: `/(foo) (bar) \1 \2/` - encontra e memoriza a primeira das duas palavras na string "foo bar foo bar" |
| `(?:x)` | mesmo processo de cima sem memorização |
|         | **Exemplo**: `/(?:foo) {1, 2}/` - os parênteses de não-captura, fazem que {1,2} seja aplicado para toda a palavra 'foo' |
| `x(?=y)` | Pesquisa correspondência em 'x' apenas se 'x' é seguido por 'y' (lookahead) |
|          | **Exemplo**: `/Jack(?=sprat)/` - busca 'Jack' apenas se é seguido por 'Sprat' |
|          | **Exemplo**: `/Jack(?=sprat\|Frost)/` - busca 'Jack' apenas se ele é seguido por 'Sprat' ou 'Frost' |
| `x(?!y)` | Pesquisa correspondência em 'x' apenas se 'x' não é seguido por 'y' |
| `x\|y` | Pesquisa correspondência em 'x' ou 'y'. |
| `{n}` | Pesquisa n ocorrências correspondentes ao caracter precedido (**Obs: n deve ser inteiro**) |
|       | **Exemplo**: `/a {2}/` - não encontra o 'a' em "candy," mas encontra-o se houver a quantidade de a's informarda em "caandy," e os dois primeiros a's em "caaandy." |
| `{n, m}` | Pesquisa a n menor correspondência e a m maior correspondência do caractere precedido (**Obs: n deve ser inteiro**) |
|          | **Exemplo**: `/a {1, 3}/` - encontra o 'a' em "candy", encontra os dois primeiros a's em "caandy," e encontra os três primeiros a's em "caaaaaaandy" |
| `[xyz]` | Pesquisa correspondência para qualquer um dos caracteres entre colchetes (Nota: um intervalo pode ser definido com hífen) |
|         | **Exemplo**: `[abcd]` / `[a-d]` - Com a expressão será encontrado o 'b' em "beijo" e o 'c' em "chop" |
| `[^xyz]` | Um conjunto de caracteres negados ou complementados (Válido para qualquer coisa que não esteja listado entre colchetes) |
| `[\b]` | Pesquisa correspondência com espaço em branco |
| `\b` | Pesquisa correspondência em uma **fronteira de caractere** (posição onde um caractere/palavra não é seguido ou antecedido por outro caractere/palavra) |
|      | **Exemplo**: `/\bmoo/` - encontra a substring 'moo' em "moon"; `/oo\b/` - não encontra o 'oo' em "moon", devido o 'oo' ser seguido por 'n' que é um caractere |
| `\B` | Pesquisa correspondência que não seja em uma fronteira de caractere |
| `\d` | Encontra correspondência com um número. Equivalente a [0-9] |
|      | **Exemplo**: `/\d/` - encontra correspondente '8' em "Dróide BB8" |
|      | Utilize `\D` para encontrar correspondência em um caracter que não seja número |
| `\s` | Encontra correspondência com um único caractere de espaço em branco, espaço, tabulação, avanço de página, quebra de linha |
|      | **Exemplo**: `/\s\w*/` - encontra correspondente ' bar' em "foo bar." |
|      | Utilize `\S` para encontrar correspondência em um caracter que não seja espaço em branco |
| `\w` | Encontra correspondência de qualquer caractere alfanumérico incluindo underline. Equivalente a [A-Za-z0-9_] |
|      | **Exemplo**: `/\w/` - correspondente 'a' em "apple," '5' em "$5.28," e '3' em "3D." |
|      | `\W` encontra correspondência em um não caractere |
| `\num` | Faz referência a substring pertencente à um grupo, um grupo é definido entre parênteses (Nota: Grupos são numerados de 1 até 9.) |
|        | **Exemplo**: `/(muito) (cacique) pra \2 \1/` - muito cacique pra cacique muito |

_Nota: o uso de parênteses em qualquer parte da expressão regular faz com que essa parte seja lembrada para ser usada depois._

## Aplicando Expressões Regulares

<a href="./index.js">visualizar script</a>

Se for necessário acessar as propriedades de uma expressão regular criada com inicializador de objeto,
é importante primeiro atribui-la à uma variável.

| **Pesquisa Avançada com Flags** |
|---------------------------------|

Tipos de Pesquisas:
1. **Global**: realiza uma pesquisa global utilizando a tag `g`.
2. **Case Sensitive**: pesquisa sem diferenciar maiúsculas de minúsculas com a tag `i`.
3. **Multi-linhas**: pesquisa em várias linhas com a tag `m`.

---

# <p id="google-cloud">Google Cloud: Deploy de Aplicação</p>

**Etapa de Criação de Servidor**:
1. Buscas por **Compute Engine**, e acessar instâncias de VM.
2. Clique em **criar**. Preencha os seguintes campos:
  - Nome: <nome_da_vm>.
  - Região: <selecionar_mais_proxima>.
  - Zona: southamerica-east1-b.
  - Tipo de Máquina: n1-standard-1
  - Disco de Inicialização: Ubunto 18.04 LTS.
  - Disco permanente: 10GB.
  - Firewall: marcar caixas de acesso HTTP e HTTPS.
3. Crie a máquina virtual.

> OBS: marque o ip externo como estático.
- Etapas:
  1. buscar **ver detalhes da rede** > endereços IP externos.
  2. mudar o estado de ip de temporário para estático.

## <p id="acessando-servidor">Acessando o Servidor</p>

> OBS: para acessar o servidor é necessários chaves SSH, sendo necessário ter uma chave pública e privada.

**Criando a chave SSH**:
1. **No terminal local**, digite: `ssh-keygen -f ~/.ssh/cursojs -t rsa -b 4096`
  - `~/.ssh/cursojs` - caminho da chave ssh.
2. Para capturar a chave, acessa a localidade da chave: `ls ~/.ssh/`.
3. Copie o caminho da chave pública, e digite: `cat <caminho_chave>`.
4. Depois copie copie a chave.
5. **No servidor**, busque por metadados em `compute engine` e adicione a nova chave criada.
6. Verifique se funcionou copiando o IP externo do servidor, e no terminal, digite: ssh <nome_usuario>@<ip_externo_servidor>.

## <p id="enviando-arquivos-servidor">Enviando arquivos para o Servidor</p>

```bash
# configure o git no computador
git config --global user.email "diogoeng19@gmail.com"
git config --global user.name "Diogo Mello"
git init # Na pasta do projeto

# Definindo documentos para .gitignore
nano .gitignore
```

```bash
# Criando diretório no servidor

# repositório da agenda
mkdir repo-toughts

# diretório da agenda - arquivos do projeto
mkdir toughts

# Criando repositório do git em repo-toughts
git init --bare

# Criando conexão de toughts com repo-toughts
# --> deve estar no diretório toughts
git init

# <caminho_repositorio> = /home/diogomello/repo-toughts
git remote add origin <caminho_repositorio>

# Criando conexão de máquina local com repositório no servidor
git remote add origin <ip_externo>:<nome_repositorio>
```

## <p id="node-pm2-servidor">Node e Pm2 no Servidor</p>

```bash
# INSTALA O NODE NO SERVIDOR

# Download and install nvm:
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash

# in lieu of restarting the shell
\. "$HOME/.nvm/nvm.sh"

# Download and install Node.js:
nvm install 22

# Verify the Node.js version:
node -v # Should print "v22.15.0".
nvm current # Should print "v22.15.0".

# Verify npm version:
npm -v # Should print "10.9.2".
```

**PM2** - Gerencia as aplicações que estarão no servidor.

```bash
# INSTALA O PM2 NO SERVIDOR

sudo npm i -g pm2

# Subindo processo do projeto
# --> Projeto = toughts
# --> Ponto de Entrada da aplicação = server.js
pm2 start /home/diogomello/<projeto>/<ponto_entrada_aplicacao> --name Toughts
```