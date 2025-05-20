# adicionando retorno a função 
'''
    def - palavra para definir uma função

    as - modo de colocar apelidos nas funções, facilitando o modo de acesso as mesmas
'''
from math import pi


def circulo(raio):
    return pi * float(raio)**2


if __name__ == '__main__':
    raio = input("informe o raio: ")
    area = circulo(raio)
    print("area da circunferencia: ", area)
