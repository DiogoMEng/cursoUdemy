from datetime import datetime
from loja import Cliente, Vendedor, Compra


def main():
    cliente = Cliente('Maria Lima', 44)
    vendedor = Vendedor('Pedro Garrido', 36, 1200)
    compra_1 = Compra(cliente, datetime.now(), 512)
    compra_2 = Compra(cliente, datetime(2018, 6, 4), 256)
    cliente.registrar_compra(compra_1)
    cliente.registrar_compra(compra_2)
    print(f'Cliente: {cliente}', '(adulto)' if cliente.is_adulto() else '')
    print(f'Vendedor: {vendedor}')

    valor_total = cliente.total_compra()
    qtd_compra = len(cliente.compras)

    print(f'Total: {valor_total} em {qtd_compra} compras')
    print(f'ultima compra: {cliente.get_data_ultima_compra()}')


if __name__ == '__main__':
    main()
