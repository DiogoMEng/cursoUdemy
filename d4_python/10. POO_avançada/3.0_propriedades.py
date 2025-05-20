class Humano:
    especie = 'Homo Sapiens'

    def __init__(self, nome):
        self.nome = nome
        # ideia de atributo privado _atributo
        self._idade = None

    def get_idade(self):
        return self._idade

    def set_idade(self, idade):
        if idade < 0:
            # excessão
            raise ValueError('Idade deve ser um numero positivo')
        self._idade = idade

    def das_cavernas(self):
        self.especie = 'Homo Neanderthaleasis'
        return self

    @staticmethod
    def especies():
        adjetivos = ('Habilis', 'Erectus', 'Neanderthalensis', 'Sapiens')
        return ('Australopiteco',) + tuple(f'Homo {adj}' for adj in adjetivos)

    @classmethod
    def is_evoluido(cls):
        return cls.especie == cls.especies()[-1]


class Neanderthal(Humano):
    especie = Humano.especies()[-2]


class HomoSapiens(Humano):
    especie = Humano.especies()[-1]


if __name__ == '__main__':
    jose = HomoSapiens('José')
    jose.set_idade(40)
    print(f'nome: {jose.nome} idade: {jose.get_idade()}')

    maria = HomoSapiens('Maria')
    maria.set_idade(-1)
    print(f'nome: {maria.nome} idade: {maria.get_idade()}')
