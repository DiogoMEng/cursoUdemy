# validando argumento numerico 
from math import pi
import sys
import errno  # numeros de erro


def help():
    print("""\
        É necessario informar o raio do circulo.
        sintaxe: {} <raio>""".format(sys.argv[0]))


def circulo(raio):
    return pi * float(raio)**2


if __name__ == '__main__':
    if len(sys.argv) < 2:
        help()
        sys.exit(errno.EPERM)

    if not sys.argv[1].isnumeric():
        help()
        print('o raio deve ser um valor numerico ')
        sys.exit(errno.EINVAL)

    raio = sys.argv[1]
    area = circulo(raio)
    print("area da circunferencia: ", area)
