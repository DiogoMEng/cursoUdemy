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