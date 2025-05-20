# tipos numéricos - parte 1
# print(dir(int))
# print(dir(float))

'''
    função abs:
        ira retorna um valor absoluto
        ex:
            abs(-2)
    função add:
        ira retorna a soma de dois valores
        ex:
            add(2, 3)
'''

a = 3
b = 2.5

print(a + b, a / b, a * b)


print(b.is_integer())

tipos numericos - parte 2

from = a parti de
import = importa

print(1.1 + 2.2)
from decimal import Decimal, getcontext
print(Decimal(1) / Decimal(7))

getcontext().prec = 4  # precisão de numeros apos a virgula
print(Decimal(1) / Decimal(7))

print(Decimal.max(Decimal(1), Decimal(7)))  #retorna o maior valor