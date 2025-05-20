'''
    f string (f'):
        uma das formas de interpolar
        interpreta algo colocado entre chaves '{}'
        formato:
            print(f'{idade}: {faixaEtaria(idade)}')
'''


def faixaEtaria(idade):
    if 0 < idade < 18:
        return 'menor de idade'
    elif idade in range(18, 64):  # se uma idade esta dentro do range
        return 'adulto'
    elif idade in range(65, 100):
        return 'melhor idade'
    elif idade >= 100:
        return 'centenaria'
    else:
        return 'idade invalida'


if __name__ == '__main__':
    idades = (17, 35, 87, 113, -2)
    for idade in idades:  # trupla()
        print(f'{idade}: {faixaEtaria(idade)}')
