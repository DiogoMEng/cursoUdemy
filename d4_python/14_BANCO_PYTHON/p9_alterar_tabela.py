from mysql.connector.errors import ProgrammingError
from p4_funcao_nova_conexao import nova_conexao

sql = 'alter table CONTATOS add column ID int auto_increment primary key'

with nova_conexao() as conexao:
    try:
        cursor = conexao.cursor()
        cursor.execute(sql)
    except ProgrammingError as e:
        print(f'Error: {e.msg}')
