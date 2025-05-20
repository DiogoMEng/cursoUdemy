'''
- sequencia mutavel: pode ser adicionado e removido elementos da lista
- array (C/C++) = lista
- append: adiciona elementos a lista
'''

lista = []

lista.append(1)
lista.append(4)

print(lista)

nova_lista = [2, 3, 'diogo', 'cristian']
print(nova_lista)

nova_lista.remove('diogo')
print(nova_lista)

nova_lista.reverse()
print(nova_lista)

nova_lista.append(['diogo', 'tatiana', 'joão'])
print(nova_lista)

# parte 2

'''
    - index: informa a posição 
    - lista: elemento indexada
'''

lista = [1, 5, 'Rebeca', 'Guilherme', 3.1415]
print(lista.index('Guilherme'))

print(lista[2])
print(1 in lista)
print('Rebeca' in lista)
print('Pedro' not in lista)

# parte 3

lista = ['Ana', 'Lia', 'Rui', 'Paulo', 'Dani']
print(lista[1:3])  # conta de lia até rui
print(lista[1:-1])  # conta lia até paulo
print(lista[1:])  # conta lia até o final
print(lista[::2])  # conta de 2 em 2
print(lista[::-1])  # inverte a lista 

'''
    - del: elimina um elemento
'''
del lista[3]
print(lista)
