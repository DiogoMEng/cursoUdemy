# substituindo while por for

# caso coloque _ no lugar do i, significa que é
# uma variavel que não esta sendo usada

def fibonacci(quantidade):
    resultado = [0, 1]
    for i in range(2, quantidade):  # range(inicio até final)
        resultado.append(sum(resultado[-2:]))
    return resultado


if __name__ == '__main__':
    # lista os 20 primeiros numeros da sequencia
    for fib in fibonacci(20):
        print(fib)
