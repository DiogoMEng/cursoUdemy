Maior_de_idade = 18


class Pessoa:
    def __init__(self, nome, idade):
        self.nome = nome
        self.idade = idade

    def __str__(self):
        return self.nome

    def isadult(self):
        return (self.idade or 0) > Maior_de_idade


class Compra:
    def __init__(self, vendedor, data, valor):
        self.vendedor = vendedor
        self.data = data
        self. valor = valor


class Vendedor(Pessoa):
    def __init__(self, nome, idade, salario):
        super().__init__(nome, idade)
        self.salario = salario


class Cliente(Pessoa):
    compra = []

    def __init__(self, nome, idade):
        super().__init__(nome, idade)

    def registrar_compra(compra):
        pass

    def get_data_ultima_compra():
        pass

    def total_compra():
        pass
