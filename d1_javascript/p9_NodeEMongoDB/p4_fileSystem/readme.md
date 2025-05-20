# File System

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