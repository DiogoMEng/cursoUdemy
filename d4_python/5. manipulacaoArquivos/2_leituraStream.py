'''
notas:
    mais otimizada
    leitura de arquivo sobre demanda
    não carrega tudo na memória
    strip() - tira o valores colocados dentro do parenteses 

    split - divide o texto 
'''
arquivo = open('pessoas.csv')
for registro in arquivo:
    print('nome: {}, idade: {}'.format(*registro.strip().split(',')))
arquivo.close()
