# SISTEMA DE MÓDULOS DO NODE - PARTE 1

Objeto exports - exporta qualquer coisa para fora do módulo.

formas de exportações:
- modele.exports.chaveObjeto = variável/função/outros.
- exports.chaveObjeto = variável/função/outros.
    - exports aponto para o objeto modele.exports.
- module.exports = { ... }
    - este modo não pode ser usado somente com exports.

_OBS: chaveObjeto não precisa ter o mesmo nome da chave, ele apenas obtém o valor._

formas de importação:
- const nome_variável = require('caminhoModulo').
- const { nome1, nome2, nome3 } = require('caminhoModulo').
    - técnica de associação via desestruturação.

## informações extras

npm - gerenciador de pacotes do node.

npm i nomePacote - instala um pacote do node.




# SISTEMA DE MÓDULOS DO NODE - PARTE 2

formas de exportações (continuação):
- module.exports = function(){ ... };
    - está forma funciona com outros tipos como variáveis, objetos e outros.

## Navegação de pastas

entrando numa pasta: require('./fileName').
- ./ significa a partir da pasta atual.
saindo de uma pasta: require('../').
- ../ significa saindo da pasta atual.

---

Caminho absoluto:
- __filename - representa o nome do arquivo atual.
- __dirname - representa o nome da pasta atual.

path - usado para a manipulação de caminhos.
- disponível dentro do node.
- path.resolve(caminhoPastaAtual, '..'): cria um caminho.

_OBS: a extensão js pode ou não ser utilizada._




# GERENCIADOR DE PACOTES DO NODE

npm init -y: inicia o npm dentro da pasta do projeto.

npm install / i nomePacote: realiza a instalação de um pacote do node.

npm install / i nomePacote -E: realiza a instalação de um pacote do node na versão exata.
- versão nunca poderá ser atualizada.

npm update: atualiza os pacotes.

npm install pacote --save-dev: move para dev dependeces.
- geram o arquivo final.

npm install pacote --save-prod: move para dependeces.
- geram o arquivo final.

npm install pacote@versao: instala versão específica do pacote.

npm install pacote@versao.x: instala versão específica do pacote na path e minor.

npm uninstall pacote: desinstale um pacote.

npm ls: lista todos os pacotes instalados atualmente.
- npm ls --depth=valorNumerico (0 até x): insere profundidade.

npm outdated: mostra todos os pacotes que estão desatualizado.

## informações extras

package.json:
- main - arquivo de entrada da aplicação.

informação de pacote:
- versão: ^4.17.1.
    - o sinal antes do 4 significa que o pacote pode atualizar dentro da versão atual para qualquer outra (Nota: atualiza somente a minor e a patch).
    - colocando um sinal ~ antes do 4, o pacote não será mais atualizado.
    - ``` 
          4       17      1
        major   minor   patch
     ```
    patch: usada para correção de bugs.
    minor: adição de um novo recurso.
    major: atualizações gerais.




# FILE SYSTEM - PARTE 1

Api do node para trabalhar com arquivos e pastas do sistema.

Exemplo:  lendo caminho absoluto.
```
fs.readdir(path.resolve(__dirname))
     .then(files => console.log(files))
     .catch(e => console.log(e))

```
- readdir(): realiza a leitura de algum arquivo.
- path.resolve: passa o caminho absoluto.

stat():obtem informação dos arquivos.
- retorna uma promessa.

isDirectory(): retorna se um arquivo é ou não um diretório.




# FILE SYSTEM - PARTE 2

Todas as funções presentes dentro do fs que são assincronas e sincronas, tem promises.

writeFile() - escreve um arquivo.

Exemplo:
```
fs.writeFile(caminhoArquivo, dadosParaArquivo, { flag: w, enconding: 'utf-8' });
```
- flag: representa a ação sobre o arquivo, no caso será escrita.
- enconding: codificação de caracteres.

readFile(caminho, codificacaoCaracteres): lê um arquivo.
- retorna uma promise.
- pode ser usado para converter em um objeto.

## Informações extras

JSON.stringfy(arquivo): realiza uma conversão para json.

JSON.parse(arquivo): converte para objeto javascript




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




# NODEMON

_OBS: sempre deve ser instalado como uma dependência de desenvolvimento._
- só será usada no computador enquanto a aplicação estiver em desenvolvimento.

## Instalação

npm install nodemon --save-dev: instala nodemon como devdependeces.

## Modo de execução

npx nodemon server.js: irá executar o servidor com o nodemon.

### inserindo no package.json

etapas:
1. no package.json, vá em scripts > se não houver um start, crie: "start": "nodemon servidor.js".
    - start já é um comando reconhecido pelo próprio npm.




# EXPRESS - PARAMS, QUERY E BODY

Params - presentes na rota da url.

Exemplo: parâmetros de url.
```
URL PARAMS
http://facebook.com/profiles/params

QUERY STRING
http://facebook.com/profiles/params?campanha=googleads&videoaula=youtube

```
- ? precede uma query string.
- & usado para adicionar uma nova query string.

Algumas requisições mandadas podem ir direto pelo corpo dela, sem ficar salvo em qualquer url.

Exemplo: sintaxe.
```
app.get('/testes/:nomeParametro?/:parametro?', (requisicao, resposta) =>{
    // parâmetros
    console.log(requisicao.params);
    // queryStrings
    console.log(requisicao.query);
});
```
- nomeParâmetro representa um parâmetro.
- ? após o parâmetro, este sinal informa que o valor é opcional, evitando erros.
- params: retorna um objeto.
- query: retorno um objeto.

Post normalmente serão obtidos pelo body da requisição.

Exemplo: sintaxe.
```
app.post('/', (requisicao, resposta) => {
    console.log(requisicao.body);
});
```

_OBS: o express por padrão não trato valores vindo de uma requisição body._
- urlencoded: requisições são tratadas.
    - importante utilização para post ou put.




# EXPRESS ROUTER E CONTROLLERS

Padrão de organização de pastas: MVC.
- principio básico é a divisão da aplicação em 3 camadas.
- view: camada de interação do usuário.
- model: camada de manipulação de dados.
- controller: camada de controle.

## Routes

Irá possuir todas as rotas presentes do projeto.
- tem como principal objetivo, o roteamente.
- funções não devem ser criadas aqui.

Inicialização: const route = express.Route().

Utilizando as rotas: app.use(Routes).

## Controllers

_Nota: um controller deve ser criado para cada tipo de rota._

Cria todas as funções que serão passadas para uma rota.

## Informações extras

POST - pode ser usuda para criar qualquer coisa dentro da aplicação, como uma nova rota, entrada de dados e outras coisas.




# VIEWS

## ORGANIZAÇÃO DE PASTAS

Exemplo:
```
SRC --> CONTROLLERS
    --> VIEWS
    --> MODELS
ROUTES
```

## Mode de utilização

Para o express poder utilizar a pasta de views e a engine que será usada em views, é importante que se use app.set(ModoUso, CaminhoPasta).
- app.set(engine, Uso): informa a engine de views.

Engine EJS: permite a inserção de uma maior interação dentro do código.
- npm i ejs: instalação do ejs.

Renderizando na página: render('ArquivoRenderiza');

Exemplo:
```
exports.paginaInicial = (requisicao, resposta) => {
    resposta.render('index');
};
```
- não a necessidade de colocar a extensão do arquivo.

## Informações extras

Arquivos estáticos - normalmente é css, img e bundle.
- public: pasta para arquivos estáticos.




# ARQUIVOS ESTÁTICOS

Conteúdo estátivo - arquivo armazenado em um servidor e sempre mostrado ao usuário da mesmo forma.
- Public: pasta que irá armazenar todo o conteúdo estático.

Inicializando: app.use(express.estatic(caminhoPasta)).
- informa ao express para usar o arquivo estático dessa pasta.




# WEBPACK

Empacotador de módulos criado para agrupar arquivos javascript que estão sendo usados no navegador.

## Organização de pastas

SRC: responsável para backend.
Public: arquivos estáticos.
Frontend: arquivos de entrada do frontend.

## Execução

Etapas:
1. em package.json, vá em script e crie: "dev": "webpack  -w".
2. no terminal, digite: npm run dev.

## Informações extras
--ignore: irá fazer com que as pastas que estão após ela, sejam ignoradas.




# MIDDLEWARE

Normalmente são funções que se encontram entre as rotas para a realização de alguma tarefa, como a checagem ou validação.
- recebem requisição, resposta e next.
    - next(): passa para próxima função que será executada.

Exemplo:
```
                    next-->
route.get('/', middleware, homeController.paginaInicial);
```
- uma outra forma de utilizar um middleware, é colocando ele diretamente no servidor. Assim, todas as rotas teriam de passar por ele antes de ser executadas.

Exemplo:
```
app.use(MyMiddleware);
```
- coloque sempre antes de routes.

## Organização de pasta

Exemplo:
```
FRONTEND
PUBLIC
SRC --> CONTROLLERS
    --> MIDDLEWARE
    --> VIEWS
    --> MODELS
```

# Informações extras

Cokies e sessões: usados para salva os dados de um usuário.

requisicao.session: pega dados do usuário a partir de uma sessão.




# MONGODB ATLAS

_OBS: este tipo de serviodr abstrai bastante a criação de um banco de dados._

Etapas: criando banco.
1. provedor: aws > região: padrão grátis.
2. cluster name: nomeCluter > create cluster.

_OBS: opções acima estão disponíveis na hora de criação da conta._

3. quando criado o servidor, vá em database Acess > adicionar novo usuário.
4. marque a opção atlas admin em user privileges > name: nome, password: senha > add user.
5. em network acess > adicionar novo IP > whitelist entry: 0.0.0.0/0 > confirmar.
6. cluster > clique em connect > conect you aplication > copie a url de conexão.

_OBS: não se esqueça de alterar a senha._

cluster - servidor que será criado.

Colletions - guarda todas as bases de dados.



# MODELS

Para criação dos models, é importante realizar a conexão com a base de dados e utilizar o moogose para modelar a base de dados.
- Mongoose: cria conexão entre o mongoDB e o ambiente de tempo de execução javascript node.js.
    - validação dos dados e conexão com a base de dados.

_Nota: geralmente os models serão feitos com classe, logo é necessário que os nomes dos scripts iniciem com letra maiusculas para melhor organização._

_OBS: o model que tem o objetivo de criar e validar os dados que serão passados para o controller._

## Mongoose

Instalação: npm i mongoose.

Exemplo: emitindo sinal de conexão com a base de dados.
```
mongoose.connect(dadosConexão);
```
- dessa forma pode ocasionar erros na aplicação, visto que o servidor primeiro começou a responder e depois teve a conexão com a base de dados.

Exemplo: correção de erros de conexão.
```
mongoose.connect(dadosConexao, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    app.emit('pronto');
}).catch(e => console.log(e));
```
- as chaves dentro do objeto servem para corrigir o erro de conexão.
- then(): mensagem para informar ao servidor quando ocorreu a conexão.
- app.emit(): emite um sinal ao servidor, como um alerta.
    - este sinal é recebido por app.on(): executa função ao receber o sinal.

Schema({ ... }): responsável pela configuração dos dados usados no sistema.

_Nota: o mongoDB é um noSQL._

model('nomeModel', Schema): model que será utilizado.

create: insere dados na base de dados.
- retorna uma promessa.

find(): retorna todos os dados dentro da base de dados.

## Dotenv

Responsável pela criação de variáveis de ambiente.

_OBS: nunca deve ser mandado ao repositório._

Instalação: npm i dotenv.

Link de conexão com base de dados:
CONECTIONSTRING = mongodb+srv://nameUser:passwordUser@cluster0.neplpdy.mongodb.net/nameDataBase?retryWrites=true&w=majority.

Configuração: require('dotenv').config().
- faz com que as variáveis de ambiente sejam utilizadas.

arquivo .env: formado por chave e valor.
- deve está na raiz do projeto.




# EXPRESS SESSION E FLASH MESSAGES

Sessions - salva os dados.
- exemplo: cadastro de usuário.
- salva os dados do navegador no servidor.
- cokies são necessários para verificação na base de dados (IDENTIFICADOR).

Sessão é o modo de identificar o navegador de um usuário.

Problemas de salvar sessões em memória - o servidor pode ficar rapidamente lotado, outro problema é a perda de sessão ao reiniciar o servidor.
- para resolver esse problema, as sessões devem ser salvas na base de dados.

flash messages - mensagens que são salvas na sessão, assim que utilizadas, logo irão sumir.

## Instalação

npm install express-session connect-mongo conect-flash.

## Configurações

Exemplo:
```
const sessionOptions = session({
    secret: 'ccpvrtebcwgfe',
    store: MongoStore.create({ mongoUrl: process.env.CONECTIONSTRING }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    }
});

app.use(flash())
```
- secret: pode ser qualquer coisa.
- store: recebe o cliente de conexão.
    - MongoStore: salva sessão na base de dados.
- cookies: tempo que a sessão deve durar.
    - maxAge: tempo em milessimos de segundos.
- flash(): ativa as flash messages.

_OBS: deve ser informado ao express que está configuração deve ser usada._

_Nota: após a configuração da session, um novo a recurso foi atribuído a requisição. Exemplo: req.session({ ... })_

Exemplo: enviando flash messages.
```
requisicao.flash('error')
requisicao.flash('success')
requisicao.flash('info')
```
- a mensagens são enviadas e no próximo envio a mensaegm não irá mais ser exibida.

## Informações extras

CSRF - recurso de segurança que não permite que outros sites postem formulários para dentro do nosso site.




# INJETANDO CONTEÚDO NO VIEWS

rende('templateRenderizado', { dadosEntrada }): insere dados dentro do view.

Exemplo:
```
Primeira forma -->
exports.paginaInicial = (requisicao, resposta) => {
    resposta.render('index', {
        titulo: 'titulo página',
        numeros: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    });
};

Segunda forma -->
module.exports = (requi, respo, next) => {
    respo.locals.VariavalLocal = 'Valor variável local';
    next();
};
```
- locals: injeta conteúdo dentro do view.
- aplicado em middleware que aponta para todas as rotas.

## Tags EJS

<%= ... %>: escape de caracteres.
- mais seguro para não quebrar o template.

<%- ... %>: sem escape de caracteres.
- usado para fazer includes.

<%  %>: controle de fluxo do EJS.
- pode colocar algumas formas de tratamento e iteração.
- inserção de condicionais, laços de repetição e outros.

<%# ...  %>: comentário.

includes - trechos html separados por documentos menores.

<%- include('arquivo') %>




# HELMET E CSRF

Helmet - melhores práticas de segurança para projetos em produção.
- protege aplicativo contra vulnerabilidades da web bastantes conhecidades configurando os cabeçalhos http adequadamente.

CSRF - evita contra ataques por meio de posts.
- tipo exploit malicioso de um website, no qual comando não autorizados são transmitidos a partir de um usuário em quem a aplicação web confia.

## Instalação

npm i helmet: instala o helmet.

npm i csuf: instala o CSRF.

## Execução

app.use(helmet()): express irá utilizar o helmet em seu servidor.

A cada formulário criado na aplicação, será injetado um token (tipo um password) para que seja checado pelo CSRF.

app.use(csrf()): express irá realizar verificações com CSRF em seu servidor.

_OBS: os erros da aplicação nunca devem ser expostos para fora._

Exemplo: realizando verificação CSRF.
```
exports.checkCsrfError = (erro, requisicao, resposta, next) => {
    if(erro && 'EBADCSRFTOKEN' === erro.code){
        return res.render('E404');
    }
};
```
- erro.code: mostra o código do erro.
- este middleware deve ser inserido no servidor, para ser lido em todas as rotas.

Exemplo: criando um csrf token.
```
exports.csrfMiddleware = (requisicao, resposta, next) => {
    resposta.locals.csrfToken = requisicao.csrfToken();
    next();
};

<input type="hidden" name="_csrf" value="<%= csrfToken %>">
```
- csrfToken: cria um token para cada sessão.
- input: está inserindo token ao formulário.

Após a inserção do CSRF token aumenta a segurança pois a cada envio de formulário, um novo token é gerado.

## Informações extras

Se o sistema ainda estiver em desenvolvimento, em localhost (127.0.0.1) ou até servidor com IP externo, sem usar SSL (https), é recomendável desativar o helmet.
- pode bloquear importações de scripts e arquivos CSS.