# passagem de função como parametro pra outra função
# executando dentro da função a função que foi passada


def executar(funcao):
    if callable(funcao):
        funcao()


def bom_dia():
    print('bom dia')


def boa_tarde():
    print('boa tarde')


if __name__ == '__main__':
    executar(bom_dia)
    executar(boa_tarde)
