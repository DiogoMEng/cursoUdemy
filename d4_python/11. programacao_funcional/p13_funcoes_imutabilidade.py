from functools import reduce
from operator import add


valores = [19, 15, 11, 23, 28]  # mutavel
print(valores)
print(sorted(valores))

# valores.sort()
# print(valores)

# retorna menor valor
print(min(valores))

# maior valor
print(max(valores))

print(sum(valores))

print(reduce(add, valores))

# reverte os itens da lista
print(list(reversed(valores)))
# valores.reverse()
# print(valores)
