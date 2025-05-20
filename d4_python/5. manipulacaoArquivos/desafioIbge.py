'''
request:
    aparti dele pode se abrir uma URL
    permite o envio de solicitações HTTP em python
    permite o uso de apis

urllib:
    serve para trabalhar com URLs 

read():
    lê conteudo do arquivo

decode():
    é para quando você tem uma seqüência de bytes que você 
    sabe que possui uma determinada codificação de caracteres

para aparecer o \n\n\n do print, coloca-se print(r'\n\n\n)
'''
import csv
from urllib import request


def read(url):
    # requisição dentro do bloco with acessando como entrada
    with request.urlopen(url) as entrada:
        print('baixando o CSV...')
        # leitura da entrada - leitura de dados
        dados = entrada.read().decode('latin1')
        print('dowload completo!')
        # leitura de cada uma das linhas e interpretar como uma 
        # linha separada por virgula
        for cidade in csv.reader(dados.splitlines()):
            # imprimir a nona coluna e a quarta
            print(f'{cidade[8]}: {cidade[3]}')


if __name__ == '__main__':
    read(r'http://files.cod3r.com.br/curso-python/desafio-ibge.csv')
