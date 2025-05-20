'''
    - não pode ser modificada
    - pode ser criada aparti de parenteses

    - sequencia imutavel

    ex:
        tupla = tuple()
        tupla = ()

    formato:
        tupla = ('um',)

        ° modo errado:
            tupla = ('um')
'''

tupla = tuple()
tupla = ()
print(type(tupla))

tupla = ('um',)

print(tupla[0])

# tupla[0] = 'diogo'

cores = ('vermelho', 'preto', 'azul',)

print(cores)
print(type(cores))

print(cores[:1])

print(cores.index('azul'))
print(cores.count('vermelho'))