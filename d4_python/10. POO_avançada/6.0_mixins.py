class HtmlToStringMixin:
    def __str__(self):
        # conversões para HTML
        html = super().__str__()\
            .replace('(', '<strong>(')\
            .replace(')', ')</strong>')
        return f'<span>{html}</span>'


class Pessoa:
    def __init__(self, nome):
        self.nome = nome

    def __str__(self):
        return self.nome


class Animal:
    def __init__(self, nome, pet=True):
        self.nome = nome
        self.pet = pet

    def __str__(self):
        return self.nome + '(pet)' if self.pet else ''

# deve ser colocado primeiro oque ira prevalecer na mistura de classes


class PessoaHTML(HtmlToStringMixin, Pessoa):
    pass


class AnimalHTML(HtmlToStringMixin, Animal):
    pass


if __name__ == '__main__':
    p1 = Pessoa('Diogo Dias')
    print(p1)

    p2 = PessoaHTML('Diogo Mello')
    print(p2)

    toto = AnimalHTML('Pretinha')
    print(toto)
