from mysql.connector.errors import ProgrammingError
from p4_funcao_nova_conexao import nova_conexao

sql = 'insert into grupos (descricao) values (%s)'
args = (
    ('Casa', ),
    ('Trabalho', ),
)

with nova_conexao() as conexao:
    try:
        cursor = conexao.cursor()
        cursor.executemany(sql, args)
        conexao.commit()
    except ProgrammingError as e:
        print(f'Error: {e.msg}')
    else:
        # rowcount - qtd de linhas inseridas
        print(f'foram incluidos {cursor.rowcount} registro')
