'''
conceitos:
    - pode ser uma substituição de valores dentro da string 
    - %s: substituir elementos do tipo string
    - %d: substituir elementos do tipo inteiro
    - %f: substituir elementos do tipo float 
'''
from string import Template
nome, idade = 'Ana Maria', 30

print('nome: %s idade: %d' % (nome, idade))  # mais antiga
print('nome: {0} idade: {1}'.format(nome, idade))  # python < 3.6
print(f'nome: {nome} idade: {idade}')  # python > 3.6

s = Template('Nome: $nome Idade: $idade')
print(s.substitute(nome=nome, idade=idade))
