# operador membro: descobre se determinado elemento faz parte da lista
lista = [1, 2, 'ana', 'carla']
# in = dentro
print(2 in lista)
print('ana' not in lista)

# operador de identidade
x = 3 
y = x
z = 3

print(x is y)
print(x is not z)

lista_a = [1, 2, 3]
lista_b = lista_a
lista_c = [1, 2, 3]

print(lista_a is lista_b)
print(lista_b is lista_c)
print(lista_a is not lista_c)
