try:
    from mysql import connector
except ModuleNotFoundError:
    print('Mysql connector não instalado')
else:
    print('Mysql connerctor instalado e pronto')
