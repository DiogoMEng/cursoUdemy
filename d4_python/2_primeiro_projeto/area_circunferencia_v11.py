# validando existendia de argumento
"""
    len: calcular o tamanho de uma lista
    {}: apresenta um valor apos o .
"""

from math import pi
import sys


def circulo(raio):
    return pi * float(raio)**2


if __name__ == '__main__':
    if len(sys.argv) < 2:
        print("""\
            É necessario informar o raio do circulo.
            sintaxe: {} <raio>""".format(sys.argv[0]))
    else:
        # argv: lista de todos os elementos passados para o script
        raio = sys.argv[1]
        area = circulo(raio)
        print("area da circunferencia: ", area)
