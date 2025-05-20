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