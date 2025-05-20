from p1_funcao_de_primeira_classe import dobro, quadrado


def processar(titulo, lista, funcao):
    print(f'processar: {titulo}')
    for i in lista:
        print(i, '=>', funcao(i))


if __name__ == '__main__':
    processar('dobro de 1 a 10', range(1, 11), dobro)
    processar('quadrado de 1 a 10', range(1, 11), quadrado)
