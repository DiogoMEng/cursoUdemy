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