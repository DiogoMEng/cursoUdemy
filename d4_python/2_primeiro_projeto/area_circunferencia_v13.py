# saindo com erro
"""
    exit: quando usado no codigo, faz com que 
        as livras de baixo não sejam executadas 
    sys.exit(nº): se n for 0, significa que terminou de forma sucedida.
                se for qualquer numero diferente de 0, significa que terminou
                com erro
    EPERM: significa que a operação não foi permitida
"""

from math import pi
import sys
# import errno  # numeros de erro


def help():
    print("""\
        É necessario informar o raio do circulo.
        sintaxe: {} <raio>""".format(sys.argv[0]))


def circulo(raio):
    return pi * float(raio)**2


if __name__ == '__main__':
    if len(sys.argv) < 2:
        help()
# sys.exit(errno.EPERM)
    else:
        raio = sys.argv[1]
        area = circulo(raio)
        print("area da circunferencia: ", area)
