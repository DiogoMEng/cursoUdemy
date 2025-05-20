# switch: não natural do python, simulação por meio de função
def get_diaSemana(dia):
    dias = {
        1: 'domingo',
        2: 'segunda',
        3: 'terça',
        4: 'quarta',
        5: 'quinta',
        6: 'sexta',
        7: 'sabado',
    }
    return dias.get(dia, '**invalido**')


if __name__ == '__main__':
    for dia in range(0, 9):
        print(f'{dia}: {get_diaSemana(dia)}')
