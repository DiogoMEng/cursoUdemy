# metodo de filtragem de dados

pessoa = [
    {'nome': 'Diogo', 'idade': 19},
    {'nome': 'Carol', 'idade': 25},
    {'nome': 'Tatiana', 'idade': 43},
    {'nome': 'Cristian', 'idade': 46},
    {'nome': 'João', 'idade': 7}
]

menores_idade = filter(lambda p: p['idade'] < 18, pessoa)
print(list(menores_idade))

nome_menor = filter(lambda p: len(p['nome']) > 6, pessoa)
print(list(nome_menor))
