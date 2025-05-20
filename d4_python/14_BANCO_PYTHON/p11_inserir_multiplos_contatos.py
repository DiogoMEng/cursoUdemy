from mysql.connector.errors import ProgrammingError
from p4_funcao_nova_conexao import nova_conexao

sql = 'insert into CONTATOS (NOME, TELEFONE) values (%s, %s)'
args = (
    ('Tatiana Dias', '99346-4466'),
    ('Joao Lucas', '99988-4455'),
    ('Cristian Mello', '98896-5544'),
    ('Carol Coelho', '99588-4566')
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
