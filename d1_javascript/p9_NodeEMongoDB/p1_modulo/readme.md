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