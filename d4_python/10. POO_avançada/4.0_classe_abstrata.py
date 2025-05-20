# nem todos os metodos podem esta implementadas
# metodo não esta implementado
# quando não se tem um metodo implementado \
#     deve-se ter as implementações sendo resolvidas na subclasse
class Humano:
    especie = 'Homo Sapiens'

    def __init__(self, nome):
        self.nome = nome

        self._idade = None

    @property
    def inteligente(self):
        raise NotImplementedError('Propriedade não implementada')

    @property
    def idade(self):
        return self._idade

    @idade.setter
    def idade(self, idade):
        if idade < 0:

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

    @property  # decorator
    def inteligente(self):  # metodo
        return False


class HomoSapiens(Humano):
    especie = Humano.especies()[-1]

    @property
    def inteligente(self):
        return True


if __name__ == '__main__':
    anonimo = Humano('John Doy')

    try:
        print(anonimo.inteligente)
    except NotImplementedError:
        print('Propriedade Abstrata')

    jose = HomoSapiens('José')
    print('{} da classe {}, inteligente: {}'
          .format(jose.nome, jose.__class__.__name__, jose.inteligente))
    Grokn = Neanderthal('Grokn')
    print('{} da classe {}, inteligente: {}'
          .format(Grokn.nome, Grokn.__class__.__name__, Grokn.inteligente))
