'''
as:
    faz referencia a algo
    ex:
        open('pessoas.csv') as arquivo

        obs: arquivo é referencia de pessoas.csv que foi chamada por open 

whit: 
    recurso alocado dentro do bloco sera fechado
'''

with open('pessoas.csv') as arquivo:
    for registro in arquivo:
        print('nome: {}, idade: {}'.format(*registro.strip().split(',')))

if arquivo.closed:
    print('Arquivo fechado!')
