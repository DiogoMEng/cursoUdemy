# FILE SYSTEM

Todas as funções presentes dentro do fs que são assincronas e sincronas, tem promises.

writeFile() - escreve um arquivo.

Exemplo:
```
fs.writeFile(caminhoArquivo, dadosParaArquivo, { flag: w, enconding: 'utf-8' });
```
- flag: representa a ação sobre o arquivo, no caso será escrita.
- enconding: codificação de caracteres.

readFile(caminho, codificacaoCaracteres): lê um arquivo.
- retorna uma promise.
- pode ser usado para converter em um objeto.

# Informações extras

JSON.stringfy(arquivo): realiza uma conversão para json.

JSON.parse(arquivo): converte para objeto javascript