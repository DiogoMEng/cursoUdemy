# criando função sem retorno
'''
    def - palavra para definir uma função 
'''
from math import pi


def circulo(raio):
    print("raio da circunferencia = ", pi * float(raio)**2)


if __name__ == '__main__':
    raio = input("informe o raio: ")
    circulo(raio)
