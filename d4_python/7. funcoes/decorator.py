# criação de objeto, que possui relação com o objeto a ser
# decorado

'''
def soma(a, b):
    #  função interna
    def soma_c(c):
        return a + b + c
    return soma_c


soma_5 = soma(4, 6)
print(soma_5(8))
print(soma(1, 3)(5)) 
'''


def log(function):
    def decorator(*args, **kwargs):
        print(f'inicio da chamada da função: {function.__name__}')
        print(f'args: {args}')
        print(f'kwargs: {kwargs}')
        resultado = function(*args, **kwargs)
        print(f'resultado da chamada: {resultado}')
        return resultado
    return decorator


@log
def soma(x, y):
    return x + y


@log
def sub(x, y):
    return x - y


if __name__ == '__main__':
    print(soma(5, 7))
    print(sub(y=4, x=6))
