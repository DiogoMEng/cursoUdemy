from p4_funcao_nova_conexao import nova_conexao
from mysql.connector import ProgrammingError

tabela_grupo = '''
    create table if not exists GRUPOS (
        id int auto_increment primary key,
        descricao varchar(30)
    )
'''

tabela_contato = '''
    alter table contatos add grupo_id int
'''

tabela_contato_2 = '''
    alter table contatos add foreign key (grupo_id)
        references grupos(id)
'''

with nova_conexao() as conexao:
    try:
        cursor = conexao.cursor()
        cursor.execute(tabela_grupo)
        cursor.execute(tabela_contato)
        cursor.execute(tabela_contato_2)
    except ProgrammingError as e:
        print(f'ERROR: {e.msg}')
