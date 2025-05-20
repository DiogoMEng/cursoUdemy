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