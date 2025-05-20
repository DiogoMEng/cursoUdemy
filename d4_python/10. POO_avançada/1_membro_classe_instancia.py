# Membro de classe vs instância

# membro de instância:
# - pra cada nova instância criada os valores pertence a instância

# membro de classe:
# - os valores não estarão mais associados a instância
# - não é necessario uma instância pra acessar o membro
# - metodos de classe pode ser chamada diretamente aparti da classe
# - o valor que esta na classe vale pra todas as instância
class Humano:
    # atributo da classe
    especie = 'Homo Sapiens'

    def __init__(self, nome):
        self.nome = nome

    def das_cavernas(self):
        self.especie = 'Homo Neanderthaleasis'
        return self


if __name__ == '__main__':
    Jose = Humano('José')
    Grokn = Humano('Grokn').das_cavernas()

    print(f'humano.especie: {Humano.especie}')
    print(f'Jose.especie: {Jose.especie}')
    print(f'Grokn.especie: {Grokn.especie}')
