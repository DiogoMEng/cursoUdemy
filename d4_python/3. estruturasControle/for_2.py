palavra = 'paralelepipedo'
for letra in palavra:
    print(letra, end=',')  # end=: final de cada linha sera a virgula
print('fim')

aprovados = ['Rafaela', 'Pedro', 'Renato', 'Maria']  # lista[]
for nome in aprovados:
    print(nome)

# acessa o nome e o indice associado ao elemento
for posicao, nome in enumerate(aprovados):
    print(f'{posicao + 1})', nome)

diasSemana = ('Domingo', 'Segunda', 'Terça',
              'Quarta', 'Quinta', 'Sexta', 'Sábado')  # trupla()
for dia in diasSemana:
    print(f'hoje é {dia}')

for letra in set('diogo dias'):
    print(letra)

for numero in {1, 2, 3, 4, 5, 6, 7}:  # conjunto{}
    print(numero)
