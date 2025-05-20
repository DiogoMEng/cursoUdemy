# obtendo argumento via terminal 
"""
    sys: pega os argumentos que são colocados no terminal
        ex:
            python area_circunferencia_v10.py  12.4
            sendo area_circunferencia_v10.py o primeiro argumento, e 12.4 o
            segundo elemento
        formato: acesso aos argumentos
            print(sys.argv[0]) - primeiro argumento
            print(sys.argv[1]) - segundo argumento

"""

from math import pi
import sys


def circulo(raio):
    return pi * float(raio)**2


if __name__ == '__main__':
    # argv: lista de todos os elementos passados para o script
    raio = sys.argv[1]
    area = circulo(raio)
    print("area da circunferencia: ", area)
