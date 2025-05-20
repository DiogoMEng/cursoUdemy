# sql injection
from p4_funcao_nova_conexao import nova_conexao

# %a% - seleção por letra
sql = 'select * from CONTATOS where NOME like %s'

with nova_conexao() as conexao:
    nome = input('contato a localizar: ')
    args = (f'%{nome}%', )

    cursor = conexao.cursor()
    cursor.execute(sql, args)

    for x in cursor:
        print(x)
