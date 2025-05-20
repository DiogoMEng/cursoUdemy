class Carro:
    def __init__(self, velocidade_maxima):
        self.velocidade_maxima = velocidade_maxima
        self.velocidade_atual = 0

    def acelerar(self, delta=5):
        maxima = self.velocidade_maxima
        nova = self.velocidade_atual + delta
        self.velocidade_atual = nova if nova <= maxima else maxima
        return self.velocidade_atual

    def frear(self, delta=5):
        nova = self.velocidade_atual - delta
        self.velocidade_atual = nova if nova >= 0 else 0
        return self.velocidade_atual


if __name__ == '__main__':
    # 180 velocidade maxima, maximo pra freio 0
    c1 = Carro(180)

    for _ in range(25):
        # acelerar deve retorna a velocidade atual
        # freiar deve retorna a velocidade atual
        print(c1.acelerar(8))
    for _ in range(10):
        # parametro padrão pra delta - 5
        print(c1.frear(delta=20))
