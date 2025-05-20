from p4_funcao_nova_conexao import nova_conexao

# %a% - seleção por letra
sql = 'select * from CONTATOS where NOME like "%a%"'

with nova_conexao() as conexao:
    cursor = conexao.cursor()
    cursor.execute(sql)

    for x in cursor:
        print(x)
