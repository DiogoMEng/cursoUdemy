from p4_funcao_nova_conexao import nova_conexao

with nova_conexao() as conexao:
    cursor = conexao.cursor()
    cursor.execute('show tables')

    for i, table in enumerate(cursor, start=1):
        print(f'tabela {i}: {table[0]}')
