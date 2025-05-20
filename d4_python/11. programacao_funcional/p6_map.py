lista_1 = [1, 2, 3, 4]
dobro = map(lambda x: x * 2, lista_1)
print(list(dobro))

lista_2 = [
    {'nome': 'Diogo Dias', 'idade': 19},
    {'nome': 'Carol Coelho', 'idade': 25},
    {'nome': 'Tatiana Coelho', 'idade': 43}
]

so_nomes = map(lambda p: p['nome'], lista_2)
print(list(so_nomes))

so_idades = map(lambda p: p['idade'], lista_2)
print(list(so_idades))

# desafio: usando map retorne frases '<nome> tem <idade>
frases = map(lambda p: f'{p["nome"]} tem {p["idade"]} anos', lista_2)
print(list(frases))
