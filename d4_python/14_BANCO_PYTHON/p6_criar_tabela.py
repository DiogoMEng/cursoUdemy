from p4_funcao_nova_conexao import nova_conexao
from mysql.connector import ProgrammingError

tabela_contatos = '''
    create table if not exists CONTATOS(
        NOME varchar(50),
        TELEFONE varchar(40)
    )
'''

tabela_email = '''
    create table if not exists EMAILS(
        ID int auto_increment primary key,
        DONO varchar(50)
    )
'''

with nova_conexao() as conexao:
    try:
        cursor = conexao.cursor()
        cursor.execute(tabela_contatos)
        cursor.execute(tabela_email)
    except ProgrammingError as e:
        print(f'ERROR: {e.msg}')
