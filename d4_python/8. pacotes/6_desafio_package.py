from app_4.utils.gerador import novo_nome
from app_4.negocio import nome_existe
from app_4.negocio.backend import add_nome


def main():
    while True:
        nome = novo_nome()
        if not nome_existe(nome):
            add_nome(nome)
            break
    print(f'criado novo nome de teste: "{nome}"')


main()
