from sqlite3 import connect, ProgrammingError, Row
from sqlite3.dbapi2 import Cursor

tabela_grupo = '''
    create table if not exists grupos (
        id integer primary key autoincrement,
        descricao varchar(30)
    )
'''

tabela_contatos = '''
    create table if not exists contatos (
        id integer primary key autoincrement,
        nome varchar(50),
        tel varchar(40),
        grupo_id integer,
        foreign key (grupo_id) references grupos(id)
    )
'''

insert_grupos = 'insert into grupos (descricao) values (?)'
select_grupos = 'select id, descricao from grupos'
insert_contatos = 'insert into contatos (nome, tel, grupo_id) values (?, ?, ?)'
select = '''
    select grupos.descricao as grupo, contatos.nome as contato from contatos
        inner join grupos on contatos.grupo_id = grupo_id
        order by grupo, contato
'''

try:
    conexao = connect(':memory:')
    conexao.row_factory = Row

    cursor = conexao.cursor()
    cursor.execute(tabela_grupo)
    cursor.execute(tabela_contatos)

    cursor.executemany(insert_grupos, (('casa',), ('trabalho',)))
    cursor.execute(select_grupos)
    grupos = {row['descricao']: row['id'] for row in cursor.fetchall()}
    print(grupos)

    contatos = {
        ('Arthur', '416', grupos['casa']),
        ('Bruna', '256', grupos['casa']),
        ('Raquel', '336', grupos['trabalho']),
        ('Robson', '526', None),
        ('Dulcila', '646', None),
        ('Eduarda', '766', None)
    }
    cursor.executemany(insert_contatos, contatos)

    cursor.execute(select)
    for contato in cursor:
        print(contato['contato'], contato['grupo'])
except ProgrammingError as e:
    print(f'Erro: {e.msg}')
