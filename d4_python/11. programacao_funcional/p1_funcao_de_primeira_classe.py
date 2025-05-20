# zip: faz a junção de 2 listas
def dobro(x):
    return x * 2


def quadrado(x):
    return x**2


if __name__ == '__main__':
    # retorna alternadamente o dobro ou quadrado nos numeros de 1 a 10
    funcs = [dobro, quadrado] * 5  # repete a lista 5X

    for func, numeros in zip(funcs, range(1, 11)):
        print(f'O {func.__name__} de {numeros} é {func(numeros)}')
