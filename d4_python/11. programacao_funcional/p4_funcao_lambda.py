compras = (
    {'quantidade': 2, 'preco': 10},
    {'quantidade': 3, 'preco': 20},
    {'quantidade': 5, 'preco': 40},
)

totais = tuple(
    map(
        lambda compra: compra['quantidade'] * compra['preco'],
        compras
    )
)

print('preços totais:', totais)
print('preço total:', sum(totais))
