from mysql.connector import connect
from contextlib import contextmanager  # decorator

parametros = dict(
    host='localhost',
    port=3306,
    user='root',
    passwd='180202Dm!028',
    database='agenda'

)


@contextmanager
def nova_conexao():
    # criando a conexão
    conexao = connect(**parametros)
    try:
        yield conexao
    finally:
        if (conexao and conexao.is_connected()):
            print('finally...')
            conexao.close()
