from p4_funcao_nova_conexao import nova_conexao

sql = 'select TELEFONE, NOME from CONTATOS'

with nova_conexao() as conexao:
    cursor = conexao.cursor()
    cursor.execute(sql)

    for contato in cursor.fetchall():
        print('\t'.join(str(campo) for campo in contato))
