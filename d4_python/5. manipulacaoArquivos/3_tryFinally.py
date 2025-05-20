'''
try:
    trecho de codico que pode gerar um problema
finally:
    sempre sera executado, idependente do resultado do try

pass:
    para blocos vazios
'''
'''
- caso ocorra um erro, a função except sera executada
e o codico continua normalmente

tratamento de erro:

try:
    arquivo = open('pessoas.csv')
    for registro in arquivo:
        print('nome: {}, idade: {}'.format(registro.strip().split(',')))
except IndexError:
    pass
finally:
    print('finally')
    arquivo.close()
'''
try:
    arquivo = open('pessoas.csv')
    for registro in arquivo:
        print('nome: {}, idade: {}'.format(*registro.strip().split(',')))
finally:
    print('finally')
    arquivo.close()

if arquivo.close:
    print('Arquivo ja foi fechado!')
