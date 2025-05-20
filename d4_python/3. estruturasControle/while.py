# while true:
#     print('exemplo de laço infinito')

# aparti de = from
# randint: gera um valor aleatorio entre um numero inicial
# e um numero final

from random import randint

numeroInformado = -1
numeroSecreto = randint(0, 9)

# while: quantidade indeterminada de repetições
while numeroInformado != numeroSecreto:
    numeroInformado = int(input('informe o numero: '))

print('numero secreto {} foi encontrado'.format(numeroSecreto))
