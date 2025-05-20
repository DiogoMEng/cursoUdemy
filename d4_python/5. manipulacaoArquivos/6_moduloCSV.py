import csv
'''
csv.reader:
    leitor de csv
'''
with open('pessoas.csv') as entrada:
    for pessoa in csv.reader(entrada):
        print('nome: {}, idade: {}'.format(*pessoa))
