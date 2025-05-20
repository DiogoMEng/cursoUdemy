from p4_funcao_nova_conexao import nova_conexao

with nova_conexao() as conexao:
    if conexao.is_connected():
        print('conectado')

print('desconectado')
