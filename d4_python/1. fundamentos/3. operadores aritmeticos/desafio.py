salario = 3450.45
despesas = 2456.2

porcente_comprometimento = (despesas * 100)//salario
porcente_sobrando = ((salario - despesas) * 100) // salario

print(porcente_comprometimento, '%', 'de comprometimento')
print(porcente_sobrando, '%')
