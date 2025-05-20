'''
conceitos:
    - diferentes dos dicionarios, os conjuntos são estruturas apenas de
    valores
    - não garante ordem de sessão
    - ñ indexada
    - ñ aceita repetição
'''

a = {1, 2, 3}
# a = [1, 2, 3] - lista
# a = (1, 2, 3) - tupla

print(type(a))

a = set('code3')
print('3' in a, 5 not in a)

# operações 

c1 = {1, 2}
c2 = {2, 4}
print(c1.union(c2))
print(c1.intersection(c2))

c1.update(c2)
print(c1)

print({1, 2, 3} - {1})
print(c1 - c2)

print(c1 <= c2)
print(c1 >= c2)
