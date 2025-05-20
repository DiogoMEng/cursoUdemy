class Humano:
    # metodo de instancia
    especie = 'Homo Sapiens'

    def __init__(self, nome):
        self.nome = nome

    def das_cavernas(self):
        self.especie = 'Homo Neanderthaleasis'
        return self
    # metodo estatico
    # decorator
    # metodo estatico

    @staticmethod
    def especies():
        adjetivos = ('Habilis', 'Erectus', 'Neanderthalensis', 'Sapiens')
        return ('Australopiteco',) + tuple(f'Homo {adj}' for adj in adjetivos)

    # metodo de classe
    # cls: obrigatorio
    # se comporta de forma polimorfica
    @classmethod
    def is_evoluido(cls):
        return cls.especie == cls.especies()[-1]


class Neanderthal(Humano):
    especie = Humano.especies()[-2]


class HomoSapiens(Humano):
    especie = Humano.especies()[-1]


if __name__ == '__main__':
    Jose = HomoSapiens('José')
    Grokn = Neanderthal('Grokn')
    print(f'evolução (aparti da classe): {", ".join(HomoSapiens.especies())}')
    print(f'evolução (aparti da instância): {", ".join(Jose.especies())}')
    print(f'Homo Sapiens evoluido? {HomoSapiens.is_evoluido()}')
    print(f'Neanderthal evoluido? {Neanderthal.is_evoluido()}')
    print(f'Jose evoluido? {Jose.is_evoluido()}')
    print(f'Grokn evoluido? {Grokn.is_evoluido()}')
