# or - OU
True or False
# and - E
7 != 3 and 2 > 3

# TABELA VERDADE AND ou &
a = True and False
b = True and True
c = False and False
d = False and True
print(a)
print(b)
print(c)
print(d)

# TABELA OR ou |
e = True or False
f = True or True
g = False or False
h = False or True
print(e)
print(f)
print(g)
print(h)

# TABELA VERDADE XOR ou ^
i = True != False
j = True != True
k = False != False
l = False != True
print(i)
print(j)
print(k)
print(l)

# OPERADOR DE NEGAÇÃO
not 0  # negação
not 1  # verdade

saldo = 1000
salario = 4000
despesas = 3967

# obs: operadores bit a bit tem maior presedencia que os outros aperadores 

saldo_positivo = saldo > 0
despesas_controladas = salario - despesas >= 0.2 * salario

meta = saldo_positivo and despesas_controladas
meta
