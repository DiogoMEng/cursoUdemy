class Potencia:
    # calcula a potencia especifica
    # metodo de construtor __init__()
    def __init__(self, expoente):
        self.expoente = expoente
    # função executada quando há chamada de objeto

    def __call__(self, base):
        return base ** self.expoente


if __name__ == '__main__':
    quadrado = Potencia(2)
    cubo = Potencia(3)

    if callable(quadrado) and callable(cubo):
        print(f'3^2 => {quadrado(3)}')
        print(f'5^2 => {cubo(5)}')
        print(f'2^4 => {Potencia(4)(2)}')
