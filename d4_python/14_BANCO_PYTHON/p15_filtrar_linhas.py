from p4_funcao_nova_conexao import nova_conexao

sql = 'select * from CONTATOS where telefone = "99346-4466"'

with nova_conexao() as conexao:
    cursor = conexao.cursor()
    cursor.execute(sql)

    for x in cursor:
        print(x)
