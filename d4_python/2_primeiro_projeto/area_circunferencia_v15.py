# melhorando mensagem de erro
from math import pi
import sys
import errno  # numeros de erro


class TermCor:
    ERRO = '\033[91m'
    NORMAL = '\033[0m'


def help():
    print('É necessario informar o raio do circulo.')
    print('sintaxe: {} <raio>'.format(sys.argv[0]))


def circulo(raio):
    return pi * float(raio)**2


if __name__ == '__main__':
    if len(sys.argv) < 2:
        help()
        sys.exit(errno.EPERM)

    if not sys.argv[1].isnumeric():
        help()
        print(TermCor.ERRO +
              'o raio deve ser um valor numerico '
              + TermCor.NORMAL)
        sys.exit(errno.EINVAL)

    raio = sys.argv[1]
    area = circulo(raio)
    print("area da circunferencia: ", area)
