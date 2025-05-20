# desafio sum
# funcção sum - soma
#     formato:
#         sum([1, 2, 3, 4, 5, 6])
#         tendo como resultado 21

def fibonacci(limite):
    resultado = [0, 1]
    while resultado[-1] < limite:
        resultado.append(sum(resultado[-2:]))
    return resultado


if __name__ == '__main__':
    for fib in fibonacci(1000):
        print(fib)
