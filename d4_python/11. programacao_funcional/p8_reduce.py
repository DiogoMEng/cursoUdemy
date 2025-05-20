from functools import reduce

pessoa = [
    {'nome': 'Diogo', 'idade': 19},
    {'nome': 'Carol', 'idade': 25},
    {'nome': 'Tatiana', 'idade': 43},
    {'nome': 'Cristian', 'idade': 46},
    {'nome': 'João', 'idade': 7}
]

# aparti de uma lista pode ser gerada outra lista,
# dicionário, entre outros

# idades - acomulador, com  valor inicial 0
# p - itens
so_idades = map(lambda p: p['idade'], pessoa)
print(list(so_idades))

menores_idade = filter(lambda idade: idade < 18, so_idades)


soma_idade = reduce(lambda idades, idade: idades + idade, menores_idade, 0)
print(soma_idade)
