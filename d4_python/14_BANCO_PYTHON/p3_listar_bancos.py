from mysql.connector import connect

conexao = connect(
    host='localhost',
    port=3306,
    user='root',
    passwd='180202Dm!028'
)

cursor = conexao.cursor()
cursor.execute('show databases')

for i, database in enumerate(cursor, start=1):
    print(f'Banco de dados {i}: {database[0]}')
