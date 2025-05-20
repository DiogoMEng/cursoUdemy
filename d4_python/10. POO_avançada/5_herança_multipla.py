class Animal:
    @property
    def capacidades(self):
        return ('dormir', 'comer', 'beber')


class Homem(Animal):
    @property
    def capacidades(self):
        return super().capacidades + ('amar', 'falar', 'estudar')


class Aranha(Animal):
    @property
    def capacidades(self):
        return super().capacidades + ('fazer teia', 'andar pelas paredes')


class SpiderMan(Homem, Aranha):
    @property
    def capacidades(self):
        return super().capacidades + \
            ('super força', 'sentidos aprimorados')


if __name__ == '__main__':

    John = Homem()
    print(f'John: {John.capacidades}')
    viuva_negra = Aranha()
    print(f'Viuva Negra: {viuva_negra.capacidades}')
    peter = SpiderMan()
    print(f'Peter: {peter.capacidades}')
