# for i in range(1, 11):
#     if i == 6:
#     print(i)
# else:
#     print('fim!')

# dado de 6 numeros entre 1 e 6
# for range com 1 e 6
# se for impar continue
# se for par e igual ao valor sosteado pela função
# dado imprimir 'ACERTOU' e depois chamar o break
# se não acerta chama o else e imprime 'NAO ACERTOU'
from random import randint


def sorteaDado():
    return randint(1, 6)


if __name__ == '__main__':
    for i in range(1, 7):
        if i % 2 == 1:
            continue

        if sorteaDado() == i:
            print('ACERTOU MIZERAVI', i)
            break
    else:
        print('NAO ACERTOU ANIMAL')
