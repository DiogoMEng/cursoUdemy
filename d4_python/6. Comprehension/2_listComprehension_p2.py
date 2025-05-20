'''[expressão for item in lista if condicional]'''
dobrosDosPares = [i * 2 for i in range(10) if i % 2 == 0]
print(dobrosDosPares)


'''versão normal'''
dobroDosPares = []

for i in range(10):
    if i % 2 == 0:
        dobroDosPares.append(i * 2)
print(dobroDosPares)
