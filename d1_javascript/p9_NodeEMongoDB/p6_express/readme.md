# Express - Introdução

Utiliza para criação de servidores web.
- microframework que permite trabalhar com a web.

_Nota: o node apresenta um módulo http que pode ser utilizado para criações web_

## Instalação

npm install express: instala o pacote do express.


## Inicializando

Sintaxe: const app = express();
- carrega o express.

## Rotas da aplicação

Exemplo:
```
    http://meusite.com/ <- GET: faz um pedido ao navegador (Entregar).

    http://meusite.com/login <- GET: faz um pedido ao navegador (Entregar).

    Operações CRUD - CREATE, READ, UPDATE, DELETE.
                      POST    GET    PUT   DELETE
```
- Operações na internet: Criar, ler, Atualizar e Deletar respectivamente.

Exemplo: criando uma rota.
```
app.get(rota, callback(request, response) => {
    response.send('hello world')
});
```
- request: se refere ao que está sendo pedido ao servidor.
- response: informação que será mandada ao servidor.
    - send(): envia uma resposta.

Cada um dos métodos pode ser aplicado para a mesma rota.

## Portas

_OBS: uma porta é referente a um processo que está sendo executado dentro do servidor._

app.listen(3000, callback): informa em qual porta o seguidor deve escutar/responder para cada nova requisição.

_Nota: localhost se refere a própria máquina._

## Execuntando servidor

node server.js: irá executar o servidor criado.
- deve ser feito pelo terminal.
- ctrl+c: para o servidor.

Nodemon - a cada modificação realizado dentro do servidor, ele irá reiniciar o servidor automáticamente.