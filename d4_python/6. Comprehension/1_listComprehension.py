'''
intro:
    - criação de lista de forma concisa 
    - cria lista forma mais rapida aparti de uma unica linha 
    formatação:
        [expressão for item in lista]
'''

dobro = [i * 2 for i in range(10)]
print(dobro)

''' versão normal '''
dobro2 = []
for i in range(10):
    dobro2.append(i * 2)

print(dobro2)
