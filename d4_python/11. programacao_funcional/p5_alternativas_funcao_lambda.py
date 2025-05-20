compras = (
    {'quantidade': 2, 'preco': 10},
    {'quantidade': 3, 'preco': 20},
    {'quantidade': 5, 'preco': 40},
)


def calc_preco_total(compra):
    return compra['quantidade'] * compra['preco']


# nova forma
totais = tuple(map(calc_preco_total, compras))

print('preços totais:', totais)
print('preço total:', sum(totais))
