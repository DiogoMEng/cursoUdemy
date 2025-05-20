def getTipoDia(Dia):
    dias = {
        (1, 7): 'fim de semana',
        tuple(range(2, 7)): 'dia de semana',
    }
    # tipo: fim de semana ou dia de semana
    # numeros: tupla
    diaEscolhido = (tipo for numeros, tipo in dias.items() if Dia in numeros)
    return next(diaEscolhido, 'Dias invalido')


if __name__ == '__main__':
    for dia in range(0, 9):
        print(f'{dia}: {getTipoDia(dia)}')
