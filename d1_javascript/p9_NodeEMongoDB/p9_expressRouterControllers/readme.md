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