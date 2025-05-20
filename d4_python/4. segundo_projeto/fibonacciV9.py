# recursividade - função que chama a si mesma
# metodo que chama ele mesmo, tendo a necessidade
# de uma codição de parada, caso contrario pode gerar
# erros no programa
# condição de parada e essencial

# \ - quebra de linha

def fibonacci(quantidade, sequencia=(0, 1)):
    return sequencia if len(sequencia) == quantidade else \
        fibonacci(quantidade, sequencia + (sum(sequencia[-2:]),))


if __name__ == '__main__':
    # lista os 20 primeiros numeros da sequencia
    for fib in fibonacci(20):
        print(fib)
