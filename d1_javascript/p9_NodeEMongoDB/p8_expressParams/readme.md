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