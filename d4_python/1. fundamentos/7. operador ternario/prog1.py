'''
alguns operadores unarios:
    -    
    +
    not 0 (0 = false)
    not 1 (1 = true)
'''

esta_chuvendo = True
#                                     false       true        expresão
print('Hoje estou com as roupas ' + ('secas. ', 'molhadas. ')[esta_chuvendo])

print('hoje estou com as roupas molhadas ' + ('molhadas. ' if esta_chuvendo else 'secas. '))
