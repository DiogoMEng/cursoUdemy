from mysql.connector.errors import ProgrammingError
from p4_funcao_nova_conexao import nova_conexao

with nova_conexao() as conexao:
    try:
        cursor = conexao.cursor()
        cursor.execute('drop table EMAILS')
    except ProgrammingError as e:
        print(f'Erro: {e.msg}')
