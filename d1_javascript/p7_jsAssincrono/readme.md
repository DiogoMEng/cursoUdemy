# XMLHttpRequest

Utilizado para enviar requisições http ou https diretamente para um servidor web e carregar os dados de resposta do servidor diretamente de volta ao script.

Método GET - busca algum conteúdo de internet.
- requisição http para o servidor.

Exemplo:
```
 xhr.open(verboDesejado, urlHttp, boolean);
```
- verboDesejado: GET.
- boolean: informa se é sincrono ou assincrono.

send() - pode ser usado para envio de dados de um formulário.
- POST.

responseText() - retorna o valor que está sendo buscado.

statusText() - retorna o código de erro gerado.

_OBS: nunca adicione vários eventos em vários elementos ao mesmo tempo._

_Nota: atualmente esta técnica se encontra obsoleta, sendo utilizado mais o axios._
- axios: permite integração de projeto react com qualquer serviço de API disponível.

## Informações extras

target - normalmente usado para pegar algum tipo de elemento, a partir de um evento.

tagName - pega o nome de uma tag.

preventDefault() - previne contra o carregamento de uma página.



# FETCH API

Fornece uma interface javascript para acessar e manipular partes do pepilane http, tais como pedidos e respostas.

_Nota: em promises, sempre quando se encontrar dentro de um then ao lançar um erro, o código irá automaticamente para o catch._

Exemplo:
```
 fetch('pessoas.json').then(response => response.json())
     .then(json => carregaElementosPagina(json));
```
- neste tipo de resposta, os dados ainda não estão completos, ainda a necessidade de conversão.
- response.json(): pega os valores.
- json: os valores obtidos, são passassos para função e carregados na página.



# AXIOS

Diferente do fetch api, quando esta ferramenta entrega os dados não à necessidade de uma nova conversão para pegar o resultado.
- utiliza XmlHttpRequest.

## informação extra

json() - converte para um objeto javascript.