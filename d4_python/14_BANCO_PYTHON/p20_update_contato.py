from p4_funcao_nova_conexao import nova_conexao
from mysql.connector.errors import ProgrammingError

sql = 'update contatos set nome = %s where id = %s'
args = ('Claudio Neto', 5)

with nova_conexao() as conexao:
    try:
        cursor = conexao.cursor()
        cursor.execute(sql, args)
        conexao.commit()
    except ProgrammingError as e:
        print(f'Erros: {e.msg}')
    else:
        print(f'{cursor.rowcount} registro(s) deletado(s).')
