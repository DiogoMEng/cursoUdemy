# '''
#     - estruturas chave valor
#     - indexada normalmente de uma string, mas pode ser
#     indexada de um inteiro

#     - formato:
#         variavel = {chave: valor, chave2: valor2}
#         ex:
#             diogo = {'idade': 18, 'curso': 'eng da computação', 'idioma': ['portugues', 'ingles']}

#     - keys: mostra as chaves do dicionario
#     - values: mostra os valores do dicionario
# '''
pessoa = {'nome': 'Diogo', 'idade': 18, 'curso': 'eng da computação', 'idiomas': ['inglês', 'português']}
print(type(pessoa))

print(dir(dict))

print(pessoa)

print(pessoa['nome'])
print(pessoa['idade'])
print(pessoa['idiomas'])
print(pessoa['idiomas'][1])
print(pessoa.keys())
print(pessoa.values())
print(pessoa.items())
print(pessoa.get('idade'))

# parte 2

pessoa = {'nome': 'prof. Alberto', 'idade': 20, 'cursos': ['React', 'python']}

pessoa['idade'] = 44
pessoa['cursos'].append('Angular')  # acrescenta um valor a uma lista
print(pessoa)

pessoa.pop('idade')  # pop: retira o valor de uma lista ou pilha
print(pessoa)

# update: coloca valores de chave e valor
pessoa.update({'idade': 25, 'sexo': 'masculino'})
print(pessoa)

del pessoa['cursos']  # del:pode excluir uma estrutura inteira de valores
print(pessoa)
