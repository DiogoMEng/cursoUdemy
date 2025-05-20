'''
    modo W: modo de escrita white

    file: faz print dentro de um arquivo
'''
with open('pessoas.csv') as arquivo:
    with open('pessoas.txt', 'w') as saida:
        for registro in arquivo:
            pessoa = registro.strip().split(',')
            print('nome: {}, idade: {}'.format(*pessoa), file=saida)

if arquivo.closed:
    print('Arquivo fechado!')

if saida.closed:
    print('Arquivo de saida fechado')
