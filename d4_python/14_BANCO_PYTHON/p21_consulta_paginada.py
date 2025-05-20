from mysql.connector.errors import ProgrammingError
from p4_funcao_nova_conexao import nova_conexao

sql = 'select * from contatos limit 5'
sql_2 = 'select * from contatos limit 5 offset 3'

with nova_conexao() as conexao:
    try:
        cursor = conexao.cursor()
        cursor.execute(sql_2)
        contatos = cursor.fetchall()
    except ProgrammingError as e:
        print(f'Erro: {e.msg}')
    else:
        for contato in contatos:
            print(f'{contato[2]:2d} - {contato[0]:10s} telefone')
