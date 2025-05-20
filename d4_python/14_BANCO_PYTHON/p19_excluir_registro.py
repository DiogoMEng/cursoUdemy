from mysql.connector.errors import ProgrammingError
from p4_funcao_nova_conexao import nova_conexao

sql = 'delete from contatos where nome = %s'
# deixar como uma trupla
args = ('Diogo', )

with nova_conexao() as conexao:
    try:
        cursor = conexao.cursor()
        cursor.execute(sql, args)
        # quando algo for modificado na tabela deve-se usar o commit
        conexao.commit()
    except ProgrammingError as e:
        print(f'Erros: {e.msg}')
    else:
        # rowcount - qtd de linhas afetadas
        print(f'{cursor.rowcount} registro(s) deletado(s). ')
