from functools import reduce
from operator import add


valores = (19, 15, 11, 23, 28)
print(valores)
print(sorted(valores))
print(min(valores))
print(max(valores))
print(sum(valores))
print(reduce(add, valores))
print(tuple(reversed(valores)))
