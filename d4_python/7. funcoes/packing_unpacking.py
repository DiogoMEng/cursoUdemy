def soma_n(*numeros):
    soma = 0
    for n in numeros:
        soma += n
    return soma

# packing - valores são passados diretamente em
# forma de empacotamento


# unpacking - valores são passados por truplas, listas ou
# dicionarios
if __name__ == '__main__':
    print(soma_n(1, 2, 3))  # packing
    trupla_nums = (1, 3, 5)
    print(soma_n(*trupla_nums))  # unpacking
    lista_nums = [1, 3, 5]
    print(soma_n(*lista_nums))
