produto = {'nome': 'caneta chic', 'preco': 14.99,
           'importada': True, 'estoque': 739}
for chave in produto:  # dicionario{chave: valor}
    print(chave)  # acessa as chaves(padrão)

for valor in produto.values():
    print(valor)  # acessa o valor

for chave, valor in produto.items():
    print(chave, ' = ', valor)

# os variaveis mesmo apos ter terminado um laço poderão ser usados
# fora do dele tambem, tendo somente os ultimos valores

# os valores não estão restritos ao laço
