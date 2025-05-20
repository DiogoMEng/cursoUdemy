# while com break

def fibonacci(quantidade):
    resultado = [0, 1]
    while True:  # while infinito
        resultado.append(sum(resultado[-2:]))
        if len(resultado) == quantidade:
            break
    return resultado


if __name__ == '__main__':
    # lista os 20 primeiros numeros da sequencia
    for fib in fibonacci(20):
        print(fib)
