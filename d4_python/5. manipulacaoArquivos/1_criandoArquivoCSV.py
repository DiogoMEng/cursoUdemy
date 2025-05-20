'''
Comma Separated Values - CSV

carrega tudo na memória

metodo de extração de elementos de uma tupla
'nome {} idade {}'.format(*('diogo', 19))

outro metodo de extração
valores = ('diogo', 14)
'nome {} idade {}'.format(valores[0], valores[1])
'nome {} idade {}'.format(*valores)  #estração de valores

read() - lê oque esta contigo no arquivo
        e armazena na variavel
formato:
    variavel.read()

splitlines() - divide as linhas

'''

arquivo = open('pessoas.csv')
dados = arquivo.read()
arquivo.close()
for registro in dados.splitlines():
    # print(*registro.split(','))
    print('nome: {}, idade: {}'.format(*registro.split(',')))
