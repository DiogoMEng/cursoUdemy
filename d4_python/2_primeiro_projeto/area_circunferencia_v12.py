# melhorando o Help
from math import pi
import sys

# faz uma sequencia de passos, mas não recebe nenhum parametro de entrada
# não retorna nada


def help():
    print("""\
        É necessario informar o raio do circulo.
        sintaxe: {} <raio>""".format(sys.argv[0]))


def circulo(raio):
    return pi * float(raio)**2


if __name__ == '__main__':
    if len(sys.argv) < 2:
        help()
    else:
        # argv: lista de todos os elementos passados para o script
        raio = sys.argv[1]
        area = circulo(raio)
        print("area da circunferencia: ", area)
