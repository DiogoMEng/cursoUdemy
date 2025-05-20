'''
tipos de parametros:
    posicional
        func(p1,p2,p4) = func(1, 3, 5)
        segui a mesma ordem passada
    nomeado
        func(p1 = 3, p2 = 1, p3 = 5)

    *args 
        gera uma tupla
    **kwargs
        gera um dicionario

    def tagBloco(texto, classe='success'):
        classe='success' - parametro opcional case 
        não seja colocado outro valor
'''

'''assertion: verifica uma determinada condição, 
se for V passa normalmente e se for F gera um erro'''

# PARAMETROS OPCIONAIS - gerador de HTML v1


def tagBloco(texto, classe='success'):
    return f'<div class="{classe}">{texto}</div>'


if __name__ == '__main__':
    assert tagBloco('Incluido com sucesso!') == \
        '<div class="success">Incluido com sucesso!</div>'
    assert tagBloco('Impossivel excluir!', 'error') == \
        '<div class="error">Impossivel excluir!</div>'
    print(tagBloco('bloco'))
