from mysql.connector.errors import ProgrammingError
from p4_funcao_nova_conexao import nova_conexao

sql = 'select * from CONTATOS'

with nova_conexao() as conexao:
    try:
        cursor = conexao.cursor()
        cursor.execute(sql)
        # não pode ser usado com tabela de muitos dados
        contatos = cursor.fetchall()
    except ProgrammingError as e:
        print(f'Erro: {e.msg}')
    else:
        for contato in contatos:
            print(f'{contato[2]:2d} - {contato[0]:20s} telefone: {contato[1]}')


sql = 'select * from CONTATOS limit %s offset %s'

with nova_conexao() as conexao:
    try:
        cursor = conexao.cursor()
        cursor.execute(sql, (10, 10))
        # não pode ser usado com tabela de muitos dados
        contatos = cursor.fetchall()
    except ProgrammingError as e:
        print(f'Erro: {e.msg}')
    else:
        for contato in contatos:
            print(f'{contato[2]:2d} - {contato[0]:20s} telefone: {contato[1]}')
