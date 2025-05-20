class Data:
    # definindo o construtor
    # so pode haver um construtor
    def __init__(self, dia, mes, ano):
        print('construtor foi chamado')
        # self representa o objeto atual
        self.dia = dia
        self.mes = mes
        self.ano = ano
    # obrigatorio o uso
    # objeto acesso no momento - self

    def __str__(self):
        return f'{self.dia}/{self.mes}/{self.ano}'


d1 = Data(18, 2, 2002)
# d1.dia = 18
# d1.mes = 2
# d1.ano = 2002
print(d1)
