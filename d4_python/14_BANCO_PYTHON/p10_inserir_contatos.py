from mysql.connector.errors import ProgrammingError
from p4_funcao_nova_conexao import nova_conexao

sql = 'insert into CONTATOS (NOME, TELEFONE) values ( %s, %s)'
args = ('Diogo', '98087-5873')


with nova_conexao() as conexao:
    try:
        cursor = conexao.cursor()
        cursor.execute(sql, args)
        # obrigatorio o uso para inserção de dados na tabela
        conexao.commit()
    except ProgrammingError as e:
        print(f'Erro: {e.msg}')
    else:
        print('1 registro incluido, ID:', cursor.lastrowid)
