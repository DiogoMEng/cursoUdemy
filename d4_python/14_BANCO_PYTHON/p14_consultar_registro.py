from p4_funcao_nova_conexao import nova_conexao

sql = 'select TELEFONE, NOME from CONTATOS limit 3 offset 4'

with nova_conexao() as conexao:
    cursor = conexao.cursor()
    cursor.execute(sql)

    # fetchone() - dados pegos sobe demanda
    print(cursor.fetchone())
