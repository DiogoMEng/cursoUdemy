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