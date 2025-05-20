# recursividade - função que chama a si mesma
# metodo que chama ele mesmo, tendo a necessidade
# de uma codição de parada, caso contrario pode gerar
# erros no programa
# condição de parada e essencial

# exemplo recursão

# def imprimir(maximo, atual):
#     if atual >= maximo:  # condição de parada
#         return  # sem devolução de valor
#     print(atual)
#     imprimir(maximo, atual + 1)


# imprimir(10, 1)

# sequencia = (0, 1) - parametro padrão
# fibonacci(quantidade, sequencia + (sum(sequencia[-2:]),)) - sobre carga de operadores

def fibonacci(quantidade, sequencia=(0, 1)):
    if len(sequencia) == quantidade:
        return sequencia
# a virgula serve para representa a tupla na situação abaixo
    return fibonacci(quantidade, sequencia + (sum(sequencia[-2:]),))


if __name__ == '__main__':
    # lista os 20 primeiros numeros da sequencia
    for fib in fibonacci(20):
        print(fib)
