def get_tipoDia(dia):
    dias = {
        1: 'final de semana',
        2: 'dia de semana',
        3: 'dia de semana',
        4: 'dia de semana',
        5: 'dia de semana',
        6: 'dia de semana',
        7: 'final de semana',
    }
    return dias.get(dia, '**invalido**')


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
        print(f'{dia}: {get_tipoDia(dia)}')
