class Data:
    # obrigatorio o uso
    # objeto acesso no momento - self
    def to_str(self):
        return f'{self.dia}/{self.mes}/{self.ano}'


d1 = Data()
d1.dia = 18
d1.mes = 2
d1.ano = 2002
print(d1.to_str())

# class Data:
#     # obrigatorio o uso
#     # objeto acesso no momento - self
#     def __str__(self):
#         return f'{self.dia}/{self.mes}/{self.ano}'


# d1 = Data()
# d1.dia = 18
# d1.mes = 2
# d1.ano = 2002
# print(d1)
