def calc_press_final(preco_bruto, calc_imposto, **params):
    return preco_bruto + preco_bruto * calc_imposto(**params)


def imposto_x(importado):
    return 0.22 if importado else 0.13


def imposto_y(explosivo, fator_mult=1):
    return 0.11 * fator_mult if explosivo else 0


if __name__ == '__main__':
    preco_bruto = 334.38
    preco_final = calc_press_final(preco_bruto, imposto_x, importado=True)
    preco_final = calc_press_final(preco_final, imposto_y,
                                   explosivo=True, fator_mult=1.5)

    print(f'preço final R$ {preco_final}')
