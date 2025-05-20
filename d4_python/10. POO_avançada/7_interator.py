class RGB:
    def __init__(self):
        self.cores = ['red', 'green', 'blue'][::-1]

    def __iter__(self):
        return self
# pega o valor e remove o ultimo
# quando implementa o __next__ significa que passa a ser\
# a ser um interator

# formato padrão do interator
    def __next__(self):
        try:
            return self.cores.pop()
        except IndexError:
            raise StopIteration()


if __name__ == '__main__':
    cores = RGB()
    print(next(cores))
    print(next(cores))
    print(next(cores))

    try:
        print(next(cores))
    except StopIteration():
        print('Acabou!')

    for cor in RGB():
        print(cor)
