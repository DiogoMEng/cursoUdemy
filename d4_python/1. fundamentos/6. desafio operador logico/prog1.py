trabalho_terca = True
trabalho_quinta = True

'''
confirmando os 2: TV ´50 + sorvete
confirmando 1: TV ´32 + sorvete
nenhum confirmado: ficar em casa
'''

tv_50 = trabalho_terca and trabalho_quinta
sorvete = trabalho_terca or trabalho_quinta
tv_32 = trabalho_terca != trabalho_quinta  # XOR
mais_saudavel = not sorvete

'''
format:
    para cada par de chaves presente no print, sera substituido por uma variavel

    "{}, {} = {}". format(1, False, resultado)

    caso deseje ser mudar a sequencia 
                             0    1       2
    "{2}, {1} = {0}". format(1, False, resultado)

    obs: assim como feita em vetores
'''

print("tv50={} tv32={} sorvete={} saudavel={}".format(
    tv_50, tv_32, sorvete, mais_saudavel))
